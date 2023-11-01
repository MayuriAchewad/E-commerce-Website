import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";
import { Landing } from "./Components/Routing/Landing";

function App() {
  const store=configStore()
  return (
    <div className="App" style={{padding:15}}>
      <Provider store={store}>
        <Landing/>
      </Provider>
    </div>
  );
}

export default App;
