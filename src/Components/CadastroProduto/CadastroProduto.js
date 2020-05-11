import React from "react";
import "./style.css";

export function CadastroProduto(props) {
  return (
    <div className="h-100 d-flex flex-column align-items-center">
      <h1>Novo Produto</h1>
      <div className="d-flex">
        <div className="d-flex flex-column left">
          <label className="text">Nome do produto</label>
          <label className="text">Código de referência</label>
          <label className="text">Tamanho</label>
          <label className="text">Preço</label>
          <label className="text">Tipo de produto</label>
          <label className="text">Unidades</label>
        </div>

        <div className="d-flex flex-column right">
          <ul>
            <input className="mx-3 box" type="text"></input>
            <input className="mx-3 box" type="number"></input>
            <select className="mx-3 box">
              <option selected disabled>Selecione o tamanho</option>
              <option>PP</option>
              <option>P</option>
              <option>M</option>
              <option>G</option>
              <option>GG</option>
            </select>
            <input className="mx-3 box" type="number"></input>
            <input className="mx-3 box" type="text"></input>
            <input className="mx-3 box" type="number"></input>
          </ul>
        </div>
      </div>

      <button className="mbtn btn">Enviar</button>
    </div>
  );
}
