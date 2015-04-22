// TOGGLE

var Toggle = React.createClass({
  getInitialState: function () {
    return {value: false};
  },
  handleClick: function (event) {
   var newState = !this.state.value;
   this.setState({value: newState});
   this.props.onClick(this.props.name, newState);
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({value: newProps.value});
  },
  render: function () {
    var className = "btn btn-default";
    if (this.state.value) {
      className += " btn-primary";
    }
    return (
      <button className={className} onClick={this.handleClick}>{this.props.label}</button>
    );
  }
});