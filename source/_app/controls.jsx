// CONTROLS

var Controls = React.createClass({
  updateYearFilter: function (year, reset) {
    var filter = function (d) {
      return d.submit_date.getFullYear() == year;
    };
    if (reset || !year) {
      filter = function () { return true; };
    }
    this.setState({yearFilter: filter});
  },
  getInitialState: function () {
    return {yearFilter: function () { return true; }};
  },

  componentDidUpdate: function () {
    this.props.updateDataFilter(
      (function (filters) {
        return function (d) {
          return filters.yearFilter(d)
        };
      })(this.state)
    );
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    return !_.isEqual(this.state, nextState);
  },

  render: function(){
    var getYears = function (data) {
      return _.keys(
        _.groupBy(data, function (d) {
          return d.submit_date.getFullYear()
        })
      ).map(Number);
    };

    return (
      <div>
        <ControlRow data={this.props.data}
          getToggleNames={getYears}
          updateDataFilter={this.updateYearFilter} />
      </div>
    );
  }
});




