//
// Concatenates all /src files into /build.app.js as compiles to vanilla Javascript (es2015)
//

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Humans />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
