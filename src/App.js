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
              <Label marginBottom>
                Owner<Required>*</Required>
              </Label>
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
              <Label marginBottom>
                Repository name<Required>*</Required>
              </Label>
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
            <Svg
              fill="rgb(106, 115, 125)"
              height="32"
              viewBox="0 0 24 24"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
              ></path>
              <path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path>
            </Svg>
            <LabelGroup>
              <Label>Public</Label>
              <Span>
                Anyone on the internet can see this repository. You choose who can commit.
              </Span>
            </LabelGroup>
          </InputWrapper>

          <InputWrapper>
            <InputRadio type="radio" />
            <Svg
              fill="rgb(176, 136, 0)"
              height="32"
              viewBox="0 0 24 24"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-8A2.5 2.5 0 015.5 9H6zm1.5-1.75C7.5 4.58 9.422 2.5 12 2.5c2.578 0 4.5 2.08 4.5 4.75V9h-9V7.25zm-3 4.25a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8z"
              ></path>
            </Svg>
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
          <CreateButton type="button">Create repository</CreateButton>
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
