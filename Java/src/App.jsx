import React, { useState } from "react";
import ListaJogadores from "./components/ListaJogadores";
import AdicionarJogador from "./components/AdicionarJogador";
import { jogadoresBahia2026 } from "./data/jogadoresBahia2026";
import "./App.css";

function App() {
  const [jogadores, setJogadores] = useState(jogadoresBahia2026);

  return (
    <div className="app-container">
      {/* Banner do Bahia */}
      <div className="banner">
        <h1>Esporte Clube Bahia - 2026 ⚽</h1>
      </div>

      <div className="content">
        <div className="form-container">
          <AdicionarJogador jogadores={jogadores} setJogadores={setJogadores} />
        </div>

        <div className="lista-container">
          <ListaJogadores jogadores={jogadores} />
        </div>
      </div>
    </div>
  );
}

export default App;