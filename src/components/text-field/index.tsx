import React from 'react';

import { addLazy } from 'methods';

const TextFieldTypeText = React.lazy(() => import('./types/text'));

function TextField(props: TextFieldTypes) {
  function textFieldTypes() {
    switch (props.type) {
      case 'text':
        return (
          <TextFieldTypeText type="text" placeholder={props.placeholder} />
        );
      case 'number':
        return <input placeholder="test" />;
      default:
        throw new Error('type is undefined!');
    }
  }

  return addLazy(textFieldTypes());
}

export default TextField;
