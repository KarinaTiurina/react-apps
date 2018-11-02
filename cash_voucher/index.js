import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CashVoucher from '~/src/cash_voucher';

class App extends Component {
  constructor(props) {
    super(props);

    const items = [
      {
        id: 1,
        name: 'Молоко',
        count: 1,
        price: 2
      },
      {
        id: 2,
        name: 'Хлеб',
        count: 2,
        price: 1.5
      },
      {
        id: 3,
        name: 'Овощи',
        count: 1,
        price: 5
      }
    ];

    this.cashVoucher = new CashVoucher({ items });
    this.cashVoucher.add({name: 'Кефир', count: 2, price: 1.2});
    this.cashVoucher.delete('Молоко');
  }

  render() {
    const { cashVoucher } = this;
    const { fullCount, fullPrice } = cashVoucher.countResult();
    return (
      <div>
        <ol>
          { cashVoucher.items.map((item) => {
            return <li key={item.id}><strong>{item.name}</strong> ({item.count} шт.) - {item.price}$</li>
          })}
        </ol>
        <hr />
        <h3>Итого: {fullCount}шт., {fullPrice}$</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
