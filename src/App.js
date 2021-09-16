import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    background-color : #B4E5FF;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileList />
    </>
  );
}

export default App;