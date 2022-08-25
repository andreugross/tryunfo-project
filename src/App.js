import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleButtonDisabled());
  };

  handleValidateIsEmpty = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    return cardName.length > 0 && cardDescription.length > 0 && cardAttr1.length > 0
      && cardAttr2.length > 0 && cardAttr3.length > 0
      && cardImage.length > 0;
  };

  handleValidateSum = (cardAttr1, cardAttr2, cardAttr3) => {
    const maxValue = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    return sum <= maxValue;
  };

  handleValidateAllMax = (cardAttr1, cardAttr2, cardAttr3) => {
    const maxNumberAtrr = 90;
    const validateAtrr1LessMax = Number(cardAttr1) <= maxNumberAtrr;
    const validateAtrr2LessMax = Number(cardAttr2) <= maxNumberAtrr;
    const validateAtrr3LessMax = Number(cardAttr3) <= maxNumberAtrr;
    return validateAtrr1LessMax && validateAtrr2LessMax && validateAtrr3LessMax;
  };

  handleValidateAllMin = (cardAttr1, cardAttr2, cardAttr3) => {
    const minNumberAtrr = 0;
    const validateAtrr1LessMin = Number(cardAttr1) >= minNumberAtrr;
    const validateAtrr2LessMin = Number(cardAttr2) >= minNumberAtrr;
    const validateAtrr3LessMin = Number(cardAttr3) >= minNumberAtrr;
    return validateAtrr1LessMin && validateAtrr2LessMin && validateAtrr3LessMin;
  };

  handleButtonDisabled = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const validateIsEmpty = this.handleValidateIsEmpty();
    const validateSum = this.handleValidateSum(cardAttr1, cardAttr2, cardAttr3);
    const validateAllMax = this.handleValidateAllMax(cardAttr1, cardAttr2, cardAttr3);
    const validateAllMin = this.handleValidateAllMin(cardAttr1, cardAttr2, cardAttr3);

    const allValidate = validateIsEmpty && validateSum
    && validateAllMax && validateAllMin;

    this.setState({
      isSaveButtonDisabled: !allValidate,
    });
  };

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
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
