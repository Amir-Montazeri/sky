import React from 'react';
import { useForm } from 'react-hook-form';

import TextField from 'features/text-field';
import { StageAbleTextField } from 'typings/textfield';

interface ReactHookFormPropTypes {
  textFields: StageAbleTextField[] | Omit<StageAbleTextField, 'stage'>[];
  onsubmit: (t: object) => void;
  children?: React.ReactNode;
}

function ReactHookForm({
  textFields,
  onsubmit,
  children,
}: ReactHookFormPropTypes) {
  const { register, handleSubmit } = useForm();

  const renderedTextField = textFields.map((textField) => (
    <TextField {...textField} register={register} key={textField.name} />
  ));

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {renderedTextField}
      {children}
    </form>
  );
}

export default ReactHookForm;
