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

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleRemoveClick} disabled={this.state.shoppingCart ? false : true}>
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          onClick={this.handleAddClick}
          disabled={this.state.shoppingCart === this.state.availableProducts ? true : false}
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
