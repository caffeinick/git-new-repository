import { InputWrapper, InputRadio, LabelGroup, Label, Span } from '../atoms';

const Radio = ({ label = '', desc = '', svg: Svg, onChange, ...rest }) => {
  return (
    <InputWrapper>
      <InputRadio type="radio" onChange={onChange} value={label} {...rest} />

      {Svg ? <Svg /> : null}

      <LabelGroup>
        <Label>{label}</Label>
        <Span>{desc}</Span>
      </LabelGroup>
    </InputWrapper>
  );
};

export default Radio;
