import React, { useState, useEffect } from 'react';

import { ReactHookForm } from 'features';
import { FormPropTypes } from 'typings/form';
import SubmitButton from './button';
import { objectPropertyDeleterInArray } from 'methods/object';

function Form({
  textFields,
  maxStage,
  onsubmit,
  generalErrors,
  getCurrentStage,
  textInnerSubmitButton,
  submitButtonClassName,
  isLoading,
  submitLoadingComponent,
}: FormPropTypes) {
  const [currentStage, setCurrentStage] = useState(1),
    [stagedTextFields, setStagedTextFields] = useState<
      FormPropTypes['textFields'] | undefined
    >(undefined),
    [unexpectedError, setUnexpectedError] = useState(false);

  useEffect(() => {
    if (maxStage) {
      getCurrentStage && getCurrentStage(currentStage);
      const newStagedTextFields = textFields.filter((textField) => {
        return textField.stage
          ? currentStage === textField.stage
          : textField.minStage
          ? currentStage >= textField.minStage
          : textField.maxStage
          ? currentStage <= textField.maxStage
          : true;
      });

      setStagedTextFields(
        objectPropertyDeleterInArray(
          ['stage', 'maxStage', 'minStage'],
          newStagedTextFields
        )
      );
    }
  }, [currentStage]);

  const handleSubmit = (data: object) => {
    onsubmit(data).then((res) => {
      if (maxStage && currentStage < maxStage && res === true)
        setCurrentStage((prevStage) => prevStage + 1);
      else if (res === false) setUnexpectedError(true);
    });
  };

  return stagedTextFields ? (
    <ReactHookForm textFields={stagedTextFields} onsubmit={handleSubmit}>
      {!generalErrors && unexpectedError && (
        <p className="text-error">An unexpected error has occurred!</p>
      )}
      {generalErrors?.map((error) => (
        <p className="text-error">{error.message}</p>
      ))}
      <SubmitButton
        currentStage={currentStage}
        textInnerButton={textInnerSubmitButton}
        isLoading={isLoading || false}
        loadingComponent={submitLoadingComponent}
        className={submitButtonClassName}
      />
    </ReactHookForm>
  ) : (
    <div>Loading...</div>
  );
}

export default Form;
