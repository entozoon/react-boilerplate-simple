class Humans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humans: []
    };

    this.createHumans();
  }

  createHumans() {
    this.state.humans.push('Jerry');
    this.state.humans.push('Terry');
    this.state.humans.push('Perry');
  }

  render() {
    const humansHtml = [];
    this.state.humans.map(name => {
      humansHtml.push(<Human name={name} />);
    });

    return (
      <div>
        {humansHtml}
      </div>
    );
  }
}
