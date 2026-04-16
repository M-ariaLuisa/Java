// src/components/ListaJogadores.jsx
import React from "react";

export default function ListaJogadores({ jogadores }) {
  return (
    <div>
      <h2>Jogadores do Bahia 2026</h2>
      <ul>
        {jogadores.map((jogador, index) => (
          <li key={index}>
            #{jogador.numero} - {jogador.nome} ({jogador.posicao})
          </li>
        ))}
      </ul>
    </div>
  );
}