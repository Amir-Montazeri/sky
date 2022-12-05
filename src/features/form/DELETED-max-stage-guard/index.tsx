// import { FormUniquePropTypes } from 'typings/form';

// function MaxStageGuard({
//   textFields,
//   maxStage,
//   children,
// }: FormUniquePropTypes & {
//   children: JSX.Element;
// }) {
//   if (maxStage) {
//     const stageBiggerThanMax = textFields.some((textField) => {
//         return (
//           (textField.maxStage ||
//             0 ||
//             textField.minStage ||
//             0 ||
//             textField.stage ||
//             0) > maxStage
//         );
//       }),
//       someHasNotStage = textFields.some(
//         (textField) =>
//           textField.maxStage === undefined &&
//           textField.minStage === undefined &&
//           textField.stage === undefined
//       );

//     if (stageBiggerThanMax || someHasNotStage)
//       throw new Error(
//         'check if all your textfields had (stage | (minStage &| maxStage)) property and all are smaller than your maxStage'
//       );
//   }

//   if (!maxStage) {
//     textFields[0].stage;
//   }

//   return children;
// }

// export default MaxStageGuard;
