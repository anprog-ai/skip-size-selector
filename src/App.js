import "./App.css";

import SkipSizeSelector from "./components/SkipSizeSelector";
import Stepper from "./components/Stepper";

function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="lg:w-1/4">
        <Stepper />
      </div>
      <div className="lg:w-3/4">
        <SkipSizeSelector />
      </div>
    </div>
  );
}

export default App;
