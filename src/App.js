import {
  Container,
  Main,
  Header,
  Section,
  OwnerRepoBlock,
  Required,
  Label,
  Span,
  InputSelect,
  InputText,
  Divider,
  CreateButton,
} from './atoms';

import Radio from './components/radio';
import Checkbox from './components/checkbox';

import Public from './svgs/public';
import Private from './svgs/private';

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
          <Radio
            label="Public"
            desc="This is where you can write a long description for your project."
            svg={Public}
          />
          <Radio
            label="Private"
            desc="You choose who can see and commit to this repository."
            svg={Private}
          />
        </Section>

        <Section>
          <h4>Initialize this repository with:</h4>
          <p>Skip this step if you’re importing an existing repository.</p>

          <Checkbox
            label="Add a README file"
            desc="This is where you can write a long description for your project."
          />
          <Checkbox
            label="Add .gitignore"
            desc="Choose which files not to track from a list of templates."
          />
          <Checkbox
            label="Choose a license"
            desc="A license tells others what they can and can't do with your code."
          />
        </Section>

        <Section noLine>
          <CreateButton type="button">Create repository</CreateButton>
        </Section>
      </Main>
    </Container>
  );
}

export default App;
