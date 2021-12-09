import React from "react";
import styles from "./styles/App.module.css";
import { Navbar,Header,Amenities } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <Amenities />
    </div>
  );
}

export default App;
