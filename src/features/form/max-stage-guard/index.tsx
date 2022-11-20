import { FormUniquePropTypes } from 'typings/form';

function MaxStageGuard({
  textFields,
  maxStage,
  children,
  test,
}: FormUniquePropTypes & {
  children: JSX.Element;
  test: number | undefined;
  maxStage: number | undefined;
}) {
  if (maxStage) {
    const stageBiggerThanMax = textFields.some((textField) => {
        return (
          (textField.maxStage ||
            0 ||
            textField.minStage ||
            0 ||
            textField.stage ||
            0) > maxStage
        );
      }),
      someHasNotStage = textFields.some(
        (textField) =>
          textField.maxStage === undefined &&
          textField.minStage === undefined &&
          textField.stage === undefined
      );

    if (stageBiggerThanMax || someHasNotStage)
      throw new Error(
        'check if all your textfields had (stage | (minStage &| maxStage)) property and all are smaller than your maxStage'
      );
  }

  return children;
}

export default MaxStageGuard;
