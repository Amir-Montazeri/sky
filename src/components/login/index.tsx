import React from 'react';

import TextField from 'components/text-field';

function LoginComponent() {
  return (
    <div>
      <TextField
        type="text"
        placeholder="my input placeholder"
        className="textfield-primary-styles"
        spaceB="7px"
      />
      <TextField
        type="text"
        placeholder="my input placeholder"
        className="textfield-primary-styles"
        spaceB="7px"
      />
      <TextField
        type="password"
        placeholder="your password"
        canShow
        showToggleClassName="text-white"
        className="textfield-primary-styles"
      />
    </div>
  );
}

export default LoginComponent;
