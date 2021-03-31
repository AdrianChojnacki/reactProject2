class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveClick = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddClick = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuyClick = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    const { availableProducts, shoppingCart } = this.state;
    const { handleRemoveClick, handleAddClick, handleBuyClick } = this;

    const amountStyle = shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <React.Fragment>
        <button onClick={handleRemoveClick} disabled={shoppingCart ? false : true}>
          -
        </button>
        <span style={amountStyle}> {shoppingCart} </span>
        <button onClick={handleAddClick} disabled={shoppingCart === availableProducts ? true : false}>
          +
        </button>
        {shoppingCart > 0 && <button onClick={handleBuyClick}>Kup</button>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
