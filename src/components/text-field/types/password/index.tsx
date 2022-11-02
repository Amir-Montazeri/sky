import './index.tailwind.css';
import React, { useState } from 'react';

import { addLazy } from 'methods';

const AiOutlineEye = React.lazy(() =>
    import('react-icons/ai').then((module) => ({
      default: module.AiOutlineEye,
    }))
  ),
  AiOutlineEyeInvisible = React.lazy(() =>
    import('react-icons/ai').then((module) => ({
      default: module.AiOutlineEyeInvisible,
    }))
  );

function TextFieldTypePassword({
  canShow,
  showToggleClassName,
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

  return (
    <div className="relative">
      <input
        {...props}
        type={!canShow ? 'password' : isShowingPassowrd ? 'text' : 'password'}
      />
      {canShow && (
        <div className="showPasswordToggler" onClick={toggleIsShowingPassowrd}>
          {addLazy(showPasswordTogglerIcons)}
        </div>
      )}
    </div>
  );
}

export default TextFieldTypePassword;
