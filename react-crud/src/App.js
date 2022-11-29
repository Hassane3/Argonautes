import React from "react";
import "./App.css";
import ArgonautesList from "./components/argonautes-list";
import AddArgonaute from "./components/new-argonaute";

function App() {
  return (
    <div className={"App"}>
      <header>
        <img
          id="logo_WCS"
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
        <h1>Les Argonautes</h1>
      </header>

      {/* Main section */}
      <main>
        {/* New member form */}
        <AddArgonaute />
        {/* Member list */}
        <ArgonautesList />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
