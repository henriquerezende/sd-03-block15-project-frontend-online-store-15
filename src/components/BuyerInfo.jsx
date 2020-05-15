import React, { Component } from 'react';
import brazilStates from '../services/data';

const inputBrazilStates = () => {
  return (
    <div className="form-group">
      <select className="form-control" id="inputBrazilStates" placeholder="Estado">
        {brazilStates.map(({ initials }) => (
          <option key={initials} value={initials}>
            {initials}
          </option>
        ))}
      </select>
    </div>
  );
};

const inputCity = () => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" id="inputCity" placeholder="Cidade" />
    </div>
  );
};

const inputAddressNumber = () => {
  return (
    <div className="form-group">
      <input type="number" className="form-control" id="inputAddressNumber" placeholder="Número" />
    </div>
  );
};

const inputComplement = () => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" id="inputComplement" placeholder="Complemento" />
    </div>
  );
};

const inputAddress = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-address"
        type="text"
        className="form-control"
        id="inputAddress"
        placeholder="Endereço"
      />
    </div>
  );
};

const inputCEP = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-cep"
        type="text"
        className="form-control"
        id="inputCEP"
        placeholder="CEP"
      />
    </div>
  );
};

const inputPhoneNumber = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-phone"
        type="text"
        className="form-control"
        id="inputPhoneNumber"
        placeholder="Telefone"
      />
    </div>
  );
};

const inputEmail = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-email"
        type="email"
        className="form-control"
        id="inputEmail"
        placeholder="Email"
      />
    </div>
  );
};

const inputCPF = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-cpf"
        type="text"
        className="form-control"
        id="inputCPF"
        placeholder="CPF"
      />
    </div>
  );
};

const inputFullName = () => {
  return (
    <div className="form-group">
      <input
        data-testid="checkout-fullname"
        type="text"
        className="form-control"
        id="inputFullName"
        placeholder="Nome Completo"
      />
    </div>
  );
};

export default class BuyerInfo extends Component {
  render() {
    return (
      <form>
        <h4>Informações do Comprador</h4>
        <div className="row">
          {inputFullName()}
          {inputCPF()}
          {inputEmail()}
          {inputPhoneNumber()}
          {inputCEP()}
          {inputAddress()}
          {inputComplement()}
          {inputAddressNumber()}
          {inputCity()}
          {inputBrazilStates()}
        </div>
      </form>
    );
  }
}
