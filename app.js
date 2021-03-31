class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
    isMinusDisabled: true,
    isPlusDisabled: false,
  };

  handleMinusClick = () => {
    if (this.state.isPlusDisabled) {
      this.setState({
        isPlusDisabled: false,
      });
    }

    if (this.state.shoppingCart <= 1) {
      this.setState({
        isMinusDisabled: true,
      });
    }

    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handlePlusClick = () => {
    if (this.state.isMinusDisabled) {
      this.setState({
        isMinusDisabled: false,
      });
    }

    if (this.state.shoppingCart >= this.state.availableProducts - 1) {
      this.setState({
        isPlusDisabled: true,
      });
    }

    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleMinusClick} disabled={this.state.isMinusDisabled}>
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button onClick={this.handlePlusClick} disabled={this.state.isPlusDisabled}>
          +
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
