import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Main>
        <header>
          <h1>Create a new repository</h1>
          <p>
            A repository contains all project files, including the revision history. Already have a
            project repository elsewhere?
          </p>
        </header>

        <Section>
          <div>
            <div>
              <label>Owner</label>
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
              <label>repository name</label>
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
            <p>
              Great repository names are short and memorable. Need inspiration? How about
              <strong>literate-octo-succotash</strong>?
            </p>

            <div>
              <lable>Description (optional)</lable>
              <input type="text" />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <input type="radio" checked></input>
            <label>Public</label>
            <span>Anyone on the internet can see this repository. You choose who can commit.</span>
          </div>
          <div>
            <input type="radio"></input>
            <label>Add a README file</label>
            <span>You choose who can see and commit to this repository.</span>
          </div>
        </Section>

        <Section>
          <h3>Initialize this repository with:</h3>
          <p>Skip this step if you’re importing an existing repository.</p>

          <div>
            <input type="checkbox"></input>
            <label>Add a README file</label>
            <span>This is where you can write a long description for your project.</span>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Add .gitignore</label>
            <span>Choose which files not to track from a list of templates.</span>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Choose a license</label>
            <span>A license tells others what they can and can't do with your code.</span>
          </div>
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

const Section = styled.section`
  margin-bottom: 20px;
  border: 1px solid silver;
  // border-bottom: 1px solid #eaecef;
  // border-bottom: 1px solid white;
`;
