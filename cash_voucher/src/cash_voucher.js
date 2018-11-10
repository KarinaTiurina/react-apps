class CashVoucher {
  constructor(props) {
    // items = [{name, count, price}, ...]
    this.items = props.items;
  }

  add(item) {
    this.items.push({ id: this.items[this.items.length - 1].id + 1, ...item })
  }

  delete(name) {
    this.items = this.items.filter(item => item.name !== name);
  }

  countResult() {
    const fullCount = this.items.reduce((prev,next) => prev + next.count, 0);
    const fullPrice = this.items.reduce((prev,next) => prev + next.price, 0);
    return { fullCount, fullPrice };
  }
}

export default CashVoucher;
