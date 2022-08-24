import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Forms extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="add-card">
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              ddata-testid="image-input"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="rare">raro</option>
              <option value="very-rare">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              value="trunfo"
              id="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <div>
            <button
              type="submit"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
