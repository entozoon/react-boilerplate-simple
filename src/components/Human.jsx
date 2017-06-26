class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="human">
        {this.state.name}
      </div>
    );
  }
}
