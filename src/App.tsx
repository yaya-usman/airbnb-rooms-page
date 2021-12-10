import React from "react";
import styles from "./styles/App.module.css";
import { Navbar,Header,Amenities,Awareness } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <Amenities />
      <Awareness />
    </div>
  );
}

export default App;
