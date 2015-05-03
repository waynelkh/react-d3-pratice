var React = require('react');
var d3 = require('d3');

var Bar = require('./Bar.jsx');

var DataSeries = React.createClass({

  getDefaultProps: function() {
    return {
      title: '',
      data: []
    }
  },

  render: function() {

    var yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    var bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={yScale(point)}
            width={xScale.rangeBand()}
            offset={xScale(i)}
            availableHeight={this.props.height}
            color={this.props.color}
            key={i} />
      )
    }.bind(this));

    return (
      <g>{bars}</g>
    );
  }
});

module.exports = DataSeries;