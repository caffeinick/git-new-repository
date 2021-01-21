import { useCallback, useState } from 'react';

import Radio from './components/radio';
import Checkbox from './components/checkbox';
import CreateButton from './components/create-button';

import Public from './svgs/public';
import Private from './svgs/private';

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
} from './atoms';

function App() {
  const [repo, setRepo] = useState('');
  const [desc, setDesc] = useState('');
  const [access, setAccess] = useState('Public');
  const [isReadme, setReadme] = useState(false);
  const [isIgnore, setIgnore] = useState(false);
  const [isLicense, setLicense] = useState(false);

  const handleRepoChange = useCallback((e) => {
    setRepo(e?.target?.value || '');
  }, []);

  const handleDescChange = useCallback((e) => {
    setDesc(e?.target?.value);
  }, []);

  const handleRadioChange = useCallback((e) => {
    setAccess(e?.target?.value || 'Public');
  }, []);

  const handleCheckChange = useCallback((e) => {
    const value = e?.target?.value;
    const checked = e?.target?.checked;

    switch (value) {
      case 'readme':
        setReadme(checked);
        break;
      case 'ignore':
        setIgnore(checked);
        break;
      case 'license':
        setLicense(checked);
        break;
      default:
        break;
    }
  }, []);

  const handleButtonClick = useCallback(() => {
    alert(
      ` Repository name: ${repo}\n Desc: ${desc}\n ${access} access\n README : ${isReadme}\n .gitignore: ${isIgnore}\n license: ${isLicense}`
    );
  }, [repo, desc, access, isIgnore, isLicense, isReadme]);

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
              <InputText type="text" value={repo} onChange={handleRepoChange} />
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
            <InputText type="text" fullWidth value={desc} onChange={handleDescChange} />
          </div>
        </Section>

        <Section>
          <Radio
            label="Public"
            desc="This is where you can write a long description for your project."
            svg={Public}
            checked={access === 'Public'}
            onChange={handleRadioChange}
          />
          <Radio
            label="Private"
            desc="You choose who can see and commit to this repository."
            svg={Private}
            checked={access === 'Private'}
            onChange={handleRadioChange}
          />
        </Section>

        <Section>
          <h4>Initialize this repository with:</h4>
          <p>Skip this step if you’re importing an existing repository.</p>

          <Checkbox
            value={'readme'}
            label="Add a README file"
            desc="This is where you can write a long description for your project."
            onChange={handleCheckChange}
          />
          <Checkbox
            value={'ignore'}
            label="Add .gitignore"
            desc="Choose which files not to track from a list of templates."
            onChange={handleCheckChange}
          />
          <Checkbox
            value={'license'}
            label="Choose a license"
            desc="A license tells others what they can and can't do with your code."
            onChange={handleCheckChange}
          />
        </Section>

        <Section noLine>
          <CreateButton onClick={handleButtonClick}>Create repository</CreateButton>
        </Section>
      </Main>
    </Container>
  );
}

export default App;
