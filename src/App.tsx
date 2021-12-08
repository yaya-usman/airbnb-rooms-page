import React from "react";
import styles from "./styles/App.module.css";
import { Navbar,Header } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
