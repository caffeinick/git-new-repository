import styled, { css } from 'styled-components';

function App() {
  return (
    <Container>
      <Main>
        <Header>
          <h1>Create a new repository</h1>
          <p>
            A repository contains all project files, including the revision history. Already have a
            project repository elsewhere?
          </p>
        </Header>

        <Section>
          <OwnerRepoBlock>
            <div>
              <Label marginBottom>Owner</Label>
              <InputSelect>
                <img
                  alt=""
                  src="https://avatars2.githubusercontent.com/u/60929317?s=40&amp;v=4"
                  width="20"
                  height="20"
                />
                <span>caffenick</span>
              </InputSelect>
            </div>
            <Divider>/</Divider>
            <div>
              <Label marginBottom>Repository name</Label>
              <InputText type="text" />
            </div>
          </OwnerRepoBlock>

          <p style={{ marginBottom: 15 }}>
            {'Great repository names are short and memorable. Need inspiration? How about '}
            <strong>literate-octo-succotash</strong>?
          </p>

          <div>
            <Label marginBottom>
              Description <Span>(optional)</Span>
            </Label>
            <InputText type="text" fullWidth />
          </div>
        </Section>

        <Section>
          <InputWrapper>
            <InputRadio type="radio" checked />
            <LabelGroup>
              <Label>Public</Label>
              <Span>
                Anyone on the internet can see this repository. You choose who can commit.
              </Span>
            </LabelGroup>
          </InputWrapper>

          <InputWrapper>
            <InputRadio type="radio" />
            <LabelGroup>
              <Label>Private</Label>
              <Span>You choose who can see and commit to this repository.</Span>
            </LabelGroup>
          </InputWrapper>
        </Section>

        <Section>
          <h4>Initialize this repository with:</h4>
          <p>Skip this step if you’re importing an existing repository.</p>

          <InputWrapper>
            <InputCheckbox type="checkbox" />
            <LabelGroup>
              <Label>Add a README file</Label>
              <Span>This is where you can write a long description for your project.</Span>
            </LabelGroup>
          </InputWrapper>

          <InputWrapper>
            <InputCheckbox type="checkbox" />
            <LabelGroup>
              <Label>Add .gitignore</Label>
              <Span>Choose which files not to track from a list of templates.</Span>
            </LabelGroup>
          </InputWrapper>

          <InputWrapper>
            <InputCheckbox type="checkbox" />
            <LabelGroup>
              <Label>Choose a license</Label>
              <Span>A license tells others what they can and can't do with your code.</Span>
            </LabelGroup>
          </InputWrapper>
        </Section>

        <Section noLine>
          <button type="button">Create repository</button>
        </Section>
      </Main>
    </Container>
  );
}

export default App;

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
`;

const OwnerRepoBlock = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 35px;
  margin-bottom: 10px;
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
