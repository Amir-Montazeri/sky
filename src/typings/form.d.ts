import { StageAbleTextField } from './textfield';

type FormPropTypes = FormGeneralPropTypes &
  FormUniquePropTypes<StageAbleTextField>;

interface FormGeneralPropTypes {
  getCurrentStage?: (stage: number) => void;
  generalErrors?: Errors;
  submitButtonClassName?: string;
  textInnerSubmitButton: SubmitButtonInnerTextArray;
  onsubmit: (k: object) => Promise<boolean>;
  isLoading?: boolean;
  submitLoadingComponent?: JSX.Element;
}

type FormUniquePropTypes<S extends StageAbleTextField> =
  | {
      maxStage: number;
      textFields: S[];
      // onsubmit: (k: { [k in S['name']]: unknown }) => void;
    }
  | {
      maxStage?: undefined;
      textFields: Omit<S, 'stage' & 'maxStage' & 'minStage'>[];
      // onsubmit: (k: { [k in S['name']]: unknown }) => void;
    };

interface SubmitButtonInnerText {
  stage: number;
  text: string;
}

type SubmitButtonInnerTextArray = ArrayOneOrMore<SubmitButtonInnerText>;
