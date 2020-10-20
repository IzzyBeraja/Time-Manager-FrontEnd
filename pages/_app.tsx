import "../styles/global.scss";
import { AppProps } from "next/app";
import React from "react";
import Navbar from "components/Navbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="row tight">
      <div className="col-10 tight">
        <Component {...pageProps} />
      </div>
      <div className="col tight border-left">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
