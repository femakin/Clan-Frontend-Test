import './App.css';
import { PersonalInfoProvider } from './Components/context/PersonalInfoContext';
import { StepsContextProvider } from './Components/context/StepsContext';
import Home from './Home';

function App() {
  return (
  <div>
   <PersonalInfoProvider>
        <StepsContextProvider>
          <Home />
        </StepsContextProvider>

   </PersonalInfoProvider>
  </div>
  );
}

export default App;
