import React from "react";
import styles from "./styles/App.module.css";
import { Navbar,Header,Amenities,Awareness,Reviews } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <Amenities />
      <Reviews />
      <Awareness />
    </div>
  );
}

export default App;
