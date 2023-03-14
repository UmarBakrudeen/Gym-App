import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import { Program } from "./components/Program/Program";
import Reason from "./components/Reason/Reason";
import Testominal from "./components/Testominal/Testominal";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testominal />
      <Join />
    </div>
  );
}

export default App;
