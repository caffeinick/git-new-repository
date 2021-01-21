import styled from 'styled-components';

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
          <div>
            <div>
              <Label>Owner</Label>
              <div>
                <img
                  alt=""
                  src="https://avatars2.githubusercontent.com/u/60929317?s=40&amp;v=4"
                  width="20"
                  height="20"
                />
                <span>caffenick</span>
              </div>
            </div>
            <div>
              <Label>repository name</Label>
              <div>
                <span>scaling-pancake</span>
                <img
                  alt=""
                  src="https://avatars2.githubusercontent.com/u/60929317?s=40&amp;v=4"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>

          <p>
            {'Great repository names are short and memorable. Need inspiration? How about '}
            <strong>literate-octo-succotash</strong>?
          </p>

          <div>
            <Label>
              Description <Span>(optional)</Span>
            </Label>
            <input type="text" />
          </div>
        </Section>

        <Section>
          <FormSelect>
            <FormInput type="radio" checked></FormInput>
            <Label>Public</Label>
            <Span>Anyone on the internet can see this repository. You choose who can commit.</Span>
          </FormSelect>
          <FormSelect>
            <FormInput type="radio"></FormInput>
            <Label>Add a README file</Label>
            <Span>You choose who can see and commit to this repository.</Span>
          </FormSelect>
        </Section>

        <Section>
          <h4>Initialize this repository with:</h4>
          <p>Skip this step if you’re importing an existing repository.</p>

          <FormSelect>
            <FormInput type="checkbox"></FormInput>
            <Label>Add a README file</Label>
            <Span>This is where you can write a long description for your project.</Span>
          </FormSelect>
          <FormSelect>
            <FormInput type="checkbox"></FormInput>
            <Label>Add .gitignore</Label>
            <Span>Choose which files not to track from a list of templates.</Span>
          </FormSelect>
          <FormSelect>
            <FormInput type="checkbox"></FormInput>
            <Label>Choose a license</Label>
            <Span>A license tells others what they can and can't do with your code.</Span>
          </FormSelect>
        </Section>

        <Section>
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
  max-width: 768px;
`;

const Main = styled.main`
  margin: 40px auto;
  padding: 0 16px;
  // background-color: #eeeeee;
`;

const Header = styled.header`
  h1 {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 400;
  }
  p {
    margin-top: -8px;
    color: #586069;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
  border: 1px solid silver;
  // border-bottom: 1px solid #eaecef;
  // border-bottom: 1px solid white;

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

const Label = styled.label`
  display: block;
  font-weight: 600;
`;

const Span = styled.span`
  color: #586069;
  font-size: 12px;
  font-weight: 400;
`;

const FormSelect = styled.div`
  margin-top: 0px;
  margin-bottom: 16px;
  padding-left: 20px;
`;

const FormInput = styled.input`
  float: left;
  margin: 5px 0 0 -20px;
`;
