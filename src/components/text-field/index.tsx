import React from 'react';

import { addLazy } from 'methods';

const TextFieldTypeText = React.lazy(() => import('./types/text'));

function TextField({ type, ...otherprops }: TextFieldTypes) {
  function textFieldTypes(type: TextFieldAvailableTypes) {
    switch (type) {
      case 'text':
        return (
          <TextFieldTypeText type="text" placeholder={otherprops.placeholder} />
        );
      case 'number':
        return <input placeholder="test" />;
      default:
        throw new Error('type is undefined!');
    }
  }

  return addLazy(textFieldTypes('text'));
}

export default TextField;
