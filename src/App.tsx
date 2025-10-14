import React from "react";
import Router from "./routes/Router";

function App({ basename }: { basename: string }) {
  return <Router basename={basename} />;
}

export default App;
