import React from "react";
import styles from "./styles/App.module.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
}

export default App;
