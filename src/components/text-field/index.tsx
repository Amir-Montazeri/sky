import { addLazy } from 'methods';
import React from 'react';

const TextFieldTypeText = React.lazy(() => import('./types/text'));

function textFieldTypes<K extends TextFieldTypes>(
  type: K,
  otherProps: TextFieldType<K>
) {
  switch (type) {
    case 'text':
      return <TextFieldTypeText />;
    case 'number':
      return <input placeholder="test" />;
    default:
      throw new Error('type is undefined!');
  }
}

// const textFieldTypes: { [k in 'number' | 'text']: JSX.Element } = {
//   number: <input placeholder="test" />,
// };

interface TextFieldPropTypes<T extends TextFieldTypes> {
  type: T;
}

function TextField({ type, placeholder }: TextFieldPropTypes<'text'>) {
  return addLazy(textFieldTypes('text', {}));
}

export default TextField;
