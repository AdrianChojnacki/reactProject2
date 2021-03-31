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
    const amountStyle = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <React.Fragment>
        <button onClick={this.handleRemoveClick} disabled={this.state.shoppingCart ? false : true}>
          -
        </button>
        <span style={amountStyle}> {this.state.shoppingCart} </span>
        <button
          onClick={this.handleAddClick}
          disabled={this.state.shoppingCart === this.state.availableProducts ? true : false}
        >
          +
        </button>
        {this.state.shoppingCart > 0 && <button onClick={this.handleBuyClick}>Kup</button>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
