import React, { useEffect } from "react";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import MyComponent from "./components/MyComponent";
import growthbook from "./config/growthbook.config";
import SampleComponent from "./components/SampleComponent";

function App() {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      {/* <MyComponent /> */}
      <SampleComponent />
    </GrowthBookProvider>
  );
}

export default App;
