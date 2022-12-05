import React from 'react';

import {
  SubmitButtonInnerText,
  SubmitButtonInnerTextArray,
} from 'typings/form';

interface SubmitButtonPropTypes {
  currentStage: number;
  textInnerButton: SubmitButtonInnerTextArray;
  className?: string;
  isLoading: boolean;
  loadingComponent?: JSX.Element;
}

function SubmitButton({
  currentStage,
  textInnerButton,
  className,
  isLoading,
  loadingComponent,
}: SubmitButtonPropTypes) {
  const getTextFromFilter = (data: SubmitButtonInnerText[]) => {
    if (data.length > 0) return data[0].text;
  };

  const textInnerController = (): string => {
    let thisStageText: string | undefined;
    thisStageText = getTextFromFilter(
      textInnerButton.filter((item) => item.stage === currentStage)
    );

    return thisStageText || 'unknown text!';
  };

  return (
    <button
      className={className || ''}
      style={
        isLoading === true
          ? {
              opacity: '.7',
            }
          : {}
      }
      type="submit"
      disabled={isLoading}
    >
      {isLoading
        ? loadingComponent || <span>Loading...</span>
        : textInnerController() || ''}
    </button>
  );
}

export default SubmitButton;
