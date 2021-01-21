import { InputWrapper, InputRadio, LabelGroup, Label, Span } from '../atoms';

const Radio = ({ label = '', desc = '', svg: Svg, ...rest }) => {
  return (
    <InputWrapper>
      <InputRadio type="radio" {...rest} />

      {Svg ? <Svg /> : null}

      <LabelGroup>
        <Label>{label}</Label>
        <Span>{desc}</Span>
      </LabelGroup>
    </InputWrapper>
  );
};

export default Radio;
