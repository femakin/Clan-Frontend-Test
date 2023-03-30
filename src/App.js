import './App.css';
import { AdsonProvider } from './Components/context/Addons';
import { PersonalInfoProvider } from './Components/context/PersonalInfoContext';
import { SelectPlanProvider } from './Components/context/SelectPlanContext';
import { StepsContextProvider } from './Components/context/StepsContext';
import Home from './Home';

function App() {
  return (
  <div>
   <PersonalInfoProvider>
        <StepsContextProvider>
          <SelectPlanProvider>
            <AdsonProvider>
          <Home />
            </AdsonProvider>
          </SelectPlanProvider>
        </StepsContextProvider>
   </PersonalInfoProvider>
  </div>
  );
}

export default App;
