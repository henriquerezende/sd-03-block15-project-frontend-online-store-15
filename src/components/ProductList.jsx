import React, { Component } from 'react';
import Product from './Product';

export class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;

    if (products.results) {
      if (products.results.length === 0) return <p>Nenhum Produto foi encontrado</p>;
      return (
        <div className="row row-cols-1 row-cols-md-2">
          {products.results.map((product) => (
            <Product product={product} key={product.id} addToCart={addToCart} />
          ))}
        </div>
      );
    }
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default ProductList;
