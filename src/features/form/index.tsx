import React, { useState, useEffect } from 'react';

import { ReactHookForm } from 'features';
import MaxStageGuard from './max-stage-guard';
import { FormPropTypes } from 'typings/form';

let test: number | undefined;

function Form({ textFields, maxStage, submitButton, onsubmit }: FormPropTypes) {
  const [currentStage, setCurrentStage] = useState(1),
    [stagedTextFields, setStagedTextFields] = useState(textFields);

  useEffect(() => {
    if (maxStage) {
      const newStagedTextFields = textFields
        .filter((textField) => {
          return textField.stage
            ? currentStage === textField.stage
            : textField.minStage
            ? currentStage >= textField.minStage
            : textField.maxStage
            ? currentStage <= textField.maxStage
            : true;
        })
        .map((textField) => {
          const { stage, minStage, maxStage, ...otherProperties } = textField;

          return otherProperties;
        });

      console.log('newStagedTextFields', newStagedTextFields);

      setStagedTextFields(newStagedTextFields);
    }
  }, [currentStage]);

  const handleSubmit = (data: object) => {
    if (maxStage && currentStage < maxStage)
      setCurrentStage((prevStage) => prevStage + 1);
    console.log(data);
  };

  return (
    <MaxStageGuard textFields={textFields} maxStage={test} test={test}>
      <ReactHookForm textFields={stagedTextFields} onsubmit={handleSubmit}>
        {submitButton}
        <h3>currentStage: {currentStage}</h3>
      </ReactHookForm>
    </MaxStageGuard>
  );
}

export default Form;
