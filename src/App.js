import React from "react";
import "./styles.css";

import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Hello from React Helmet2</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <div className="App">
        <h1>React Helmet Basic Example</h1>
      </div>
    </div>
  );
}
