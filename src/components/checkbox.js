import { InputWrapper, InputCheckbox, LabelGroup, Label, Span } from '../atoms';

const Checkbox = ({ label, desc, onChange, ...rest }) => {
  return (
    <InputWrapper>
      <InputCheckbox type="checkbox" onChange={onChange} {...rest} />

      <LabelGroup>
        <Label>{label}</Label>
        <Span>{desc}</Span>
      </LabelGroup>
    </InputWrapper>
  );
};

export default Checkbox;
