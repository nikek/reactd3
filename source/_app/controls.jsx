// CONTROLS

var Controls = React.createClass({
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




