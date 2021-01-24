import { ThemeProvider } from "styled-components";
import { GlobalStyle, TagWrapper, Title } from "./styles";
import InstructorTag from "./components/InstructorTag";
import instructors from "./instructors";

const App = () => {
  const theme = {
    mainColor: "white",
    backgroundColor: "#282c34",
    secondaryColor: "rgba(255, 255, 255, 0.3)",
  };

  return (
    <ThemeProvider theme={theme}>
      <Title>When in doubt, ask for help!</Title>
      <TagWrapper>
        <InstructorTag emoji={emoji} name={name} github={github} />
      </TagWrapper>
      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/DarthHamza`)}
      ></div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/Lailz`)}
      >
        <span className="Emoji">🐥</span>
        <span className="Name">Laila</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/thehasanas`)}
      >
        <span className="Emoji">🦍</span>
        <span className="Name">Hasan</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>
    </ThemeProvider>
  );
};

export default App;
