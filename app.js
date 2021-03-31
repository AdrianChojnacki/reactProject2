class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button>-</button>
        <span> 0 </span>
        <button>+</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
