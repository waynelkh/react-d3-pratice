var React = require('react');
var Chart = require('./Chart.jsx');
var DataSeries = require('./DataSeries.jsx');

var Main = React.createClass({

    render: function() {
        return (
            <div>
                <Chart width={this.props.width} height={this.props.height}>
                        <DataSeries data={[ 30, 10, 5, 8, 15, 10, 10 ]}
                            width={this.props.width}
                            height={this.props.height}
                            color="purple" />
                </Chart>
            </div>
        );
    }

});

module.exports = Main;