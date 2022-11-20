import React from 'react';

import TextField from 'features/text-field';
import { TextFieldArray } from 'typings/textfield';

interface TextFieldRenderingPropTypes {
  textFields: TextFieldArray;
}

function TextFieldRendering({ textFields }: TextFieldRenderingPropTypes) {
  const renderedTextFields = () =>
    textFields.map((textFieldProps) => (
      <TextField {...textFieldProps} key={textFieldProps.name} />
    ));

  return <React.Fragment>{renderedTextFields()}</React.Fragment>;
}

export default TextFieldRendering;
