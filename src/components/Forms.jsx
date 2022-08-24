import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    return (
      <div className="add-card">
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" data-testid="name-input" name="nome" id="name" />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              name="nome"
              id="description"
            />
          </label>

          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              name="attr01"
              id="attr01"
            />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              name="attr02"
              id="attr02"
            />
          </label>

          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              name="attr03"
              id="attr03"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              ddata-testid="image-input"
              name="image"
              id="image"
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select name="rare" id="rare" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="rare">raro</option>
              <option value="very-rare">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input type="checkbox" value="trunfo" name="trunfo" id="trunfo" />
          </label>

          <div>
            <button type="submit" data-testid="save-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
