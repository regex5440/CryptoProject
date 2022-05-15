import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./header.sass";
import "./module.homepage/module.style/coin_gallery.sass";
import TutorialWindow from "./module.homepage/tutorial_window";
import reportWebVitals from "./reportWebVitals";
import CoinsLive from "./module.homepage/CoinLive";
import Header from "./Header";

function App() {
  const [metadata, setMetadata] = useState(null);
  return (
    <>
      <Header />
      <CoinsLive updateCoinWindow={setMetadata} />
      {metadata !== null && <TutorialWindow data={metadata} />}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
