// src/components/AdicionarJogador.jsx
import React, { useState } from "react";

export default function AdicionarJogador({ jogadores, setJogadores }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [posicao, setPosicao] = useState("");

  const handleAdicionar = (e) => {
    e.preventDefault();
    if (nome.trim() && numero && posicao.trim()) {
      setJogadores([
        ...jogadores,
        { nome: nome.trim(), numero: parseInt(numero), posicao: posicao.trim() },
      ]);
      setNome("");
      setNumero("");
      setPosicao("");
    }
  };

  return (
    <div>
      <h2>Adicionar Jogador</h2>
      <form onSubmit={handleAdicionar}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Posição"
          value={posicao}
          onChange={(e) => setPosicao(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}