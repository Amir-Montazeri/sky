import React from 'react';

import { TextFieldTypeText } from 'typings/textfield';

function TextFieldTypeText({ register, ...props }: TextFieldTypeText) {
  return register ? (
    <input {...props} {...register(props.name)} />
  ) : (
    <input {...props} />
  );
}

export default TextFieldTypeText;
