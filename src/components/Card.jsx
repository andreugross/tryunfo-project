import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;
    return (
      <div>
        <h2 data-testid="name-card" name="cardName">
          {cardName}
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          name="cardImage"
        />
        <p data-testid="description-card" name="cardDescription">
          {cardDescription}
        </p>
        <h3 data-testid="attr1-card" name="cardAttr1">
          {cardAttr1}
        </h3>
        <h3 data-testid="attr2-card" name="cardAttr2">
          {cardAttr2}
        </h3>
        <h3 data-testid="attr3-card" name="cardAttr3">
          {cardAttr3}
        </h3>
        <p data-testid="rare-card" name="cardRare">
          {cardRare}
        </p>
        <div>
          {cardTrunfo ? (
            <span data-testid="trunfo-card" name="cardTrunfo">
              Super Trunfo
            </span>
          ) : (
            'Não está ativo!'
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
