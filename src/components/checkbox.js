import { InputWrapper, InputCheckbox, LabelGroup, Label, Span } from '../atoms';

const Checkbox = ({ label, desc, ...rest }) => {
  return (
    <InputWrapper>
      <InputCheckbox type="checkbox" {...rest} />
      <LabelGroup>
        <Label>{label}</Label>
        <Span>{desc}</Span>
      </LabelGroup>
    </InputWrapper>
  );
};

export default Checkbox;
