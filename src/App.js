//=======================COMPONENT IMPORTS
import TopNavBar from './Components/TopNavBar/C-TopNavBar.js'
import SideNavBar from './Components/SideNavBar/C-SideNavBar.js'
import Character_Sheet from './Components/CharacterSheet/C-CharacterSheet.js';

//=======================STYLING IMPORTS
import { 
  AppWrapper,
  PairWrapper, 
} from "./styles";

//=======================MAIN APP
function App() {
  return (
    <>
      <TopNavBar />
      <PairWrapper>
        <SideNavBar />
        <Character_Sheet />
      </PairWrapper>
    </>
  );
}

export default App;
