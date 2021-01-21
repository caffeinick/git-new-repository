import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Main = styled.main`
  max-width: 768px;
  margin: 40px auto;
  padding: 0 16px;
`;

const Header = styled.header`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eaecef;

  h1 {
    font-size: 24px;
    font-weight: 400;
  }
  p {
    color: #586069;
  }
`;

const Section = styled.section`
  ${({ noLine }) =>
    !noLine &&
    css`
      border-bottom: 1px solid #eaecef;
    `}

  margin-top: 15px;
  margin-bottom: 15px;

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
  strong {
    color: #22863a;
    font-weight: 600;
  }
`;

const OwnerRepoBlock = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const Required = styled.span`
  color: rgb(203, 36, 49);
  padding-left: 5px;
`;

const Divider = styled.div`
  font-size: 22px;
  margin: 24px 8px 2px 8px;
`;

const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 6px;
    `}

  display: block;
  font-weight: 600;
`;

const Span = styled.span`
  color: #586069;
  font-size: 12px;
  font-weight: 400;
`;

const Svg = styled.svg`
  margin-top: 4px;
  margin-right: 8px;
`;

const InputBase = css`
  border: 1px solid #e1e4e8;
  background-color: #fafbfc;
  border-radius: 6px;
  outline: none;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
`;

const InputSelect = styled.div`
  ${InputBase}
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 4px;
  }
`;

const InputText = styled.input`
  ${InputBase}
  width: 250px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      margin-bottom: 16px;
    `}
`;

const InputRadio = styled.input`
  margin-right: 6px;
  margin-top: 8px;
`;

const InputCheckbox = styled.input`
  margin-right: 6px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 16px;
`;

const CreateButton = styled.button`
  padding: 5px 16px;
  font-weight: 600;
  color: white;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  line-height: 20px;
`;

export {
  Container,
  Main,
  Header,
  Section,
  OwnerRepoBlock,
  Required,
  Divider,
  LabelGroup,
  Label,
  Span,
  Svg,
  InputBase,
  InputSelect,
  InputText,
  InputRadio,
  InputCheckbox,
  InputWrapper,
  CreateButton,
};
