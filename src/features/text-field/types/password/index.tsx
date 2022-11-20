import './index.tailwind.css';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { TextFieldTypePassword } from 'typings/textfield';

function TextFieldTypePassword({
  canShow,
  showToggleClassName,
  register,
  ...props
}: TextFieldTypePassword) {
  const [isShowingPassowrd, setIsShowingPassword] = useState(false);

  const toggleIsShowingPassowrd = () =>
    canShow === true && setIsShowingPassword((prevState) => !prevState);

  const showPasswordTogglerIcons = isShowingPassowrd ? (
    <AiOutlineEye size="20px" className={showToggleClassName} />
  ) : (
    <AiOutlineEyeInvisible size="20px" className={showToggleClassName} />
  );

  const registerProp = register ? register(props.name) : null;

  return (
    <div className="relative">
      <input
        {...props}
        type={!canShow ? 'password' : isShowingPassowrd ? 'text' : 'password'}
        className={`${props.className || ''} ${canShow && ' !pr-[30px]'}`}
        {...registerProp}
      />
      {canShow && (
        <div className="showPasswordToggler" onClick={toggleIsShowingPassowrd}>
          {showPasswordTogglerIcons}
        </div>
      )}
    </div>
  );
}

export default TextFieldTypePassword;
