// AXIS

var Axis = React.createClass({
  componentWillMount: function() {
    this.yScale = d3.scale.linear();
    this.axis = d3.svg.axis()
                  .scale(this.yScale)
                  .orient('left')
                  .tickFormat(function(d) {
                    return '$'+this.yScale.tickFormat()(d)
                  }.bind(this));

    this.update_d3(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    this.update_d3(newProps);
  },

  getX: function(d) { return d.x; },  // x position of bin
  getXPlusWidth: function(d) { return d.x+d.dx; }, // x position plus width of bin
  update_d3: function(props) {
    var bins = props.data;
    var lastTickValue = this.getXPlusWidth(bins[bins.length-1]);

    this.yScale
        .domain([0, d3.max(bins.map(this.getXPlusWidth))])
        .range([0, props.height-props.topMargin-props.bottomMargin]);

    this.axis
        .ticks(bins.length)
        .tickValues(bins.map(this.getX).concat(lastTickValue));
  },

  componentDidUpdate: function () { this.renderAxis(); },
  componentDidMount: function () { this.renderAxis(); },
  renderAxis: function () {
      var node = this.getDOMNode();
      d3.select(node).call(this.axis);
  },

  render: function() {
    var translate = 'translate(' + (this.props.axisMargin-3) + ', 0)';
    return (
      <g className="axis" transform={translate}>
      </g>
    );
  }
});