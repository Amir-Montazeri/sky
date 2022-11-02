import './index.tailwind.css';
import React from 'react';

import { addLazy } from 'methods';

const TextFieldTypeText = React.lazy(() => import('./types/text'));
const TextFieldTypePassword = React.lazy(() => import('./types/password'));

function TextField({
  spaceX,
  spaceY,
  spaceT,
  spaceR,
  spaceB,
  spaceL,
  ...props
}: TextFieldTypes) {
  const handledSpaceX = spaceX
      ? { marginRight: spaceX, marginLeft: spaceX }
      : { marginRight: spaceR || '0', marginLeft: spaceL || '0' },
    handledSpaceY = spaceY
      ? { marginTop: spaceY, marginBottom: spaceY }
      : { marginTop: spaceT || '0', marginBottom: spaceB || '0' };

  function textFieldTypes() {
    switch (props.type) {
      case 'text':
        return <TextFieldTypeText {...props} />;
      case 'password':
        return <TextFieldTypePassword {...props} />;
      default:
        throw new Error('type is undefined!');
    }
  }

  return (
    <div style={{ ...handledSpaceX, ...handledSpaceY }}>
      {addLazy(textFieldTypes())}
    </div>
  );
}

export default TextField;
