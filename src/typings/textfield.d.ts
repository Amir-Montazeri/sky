type TextFieldTypes = TextFieldTypeText | TextFieldTypeNumber;

interface TextFieldTypeText {
  type: 'text';
  placeholder?: string;
}

interface TextFieldTypeNumber {
  type: 'number';
  min?: number;
}
