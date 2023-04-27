import React from 'react'
import ReactECharts from 'echarts-for-react';

const LineChart = ({ data }) => {
    const options = {

        xAxis: {
            type: 'category',
            data: data.map((d) => d.Flavanoids),
            name: 'Flavanoids'
        },
        yAxis: {
            type: 'value',
            name: 'Ash'
        },
        series: [
            {
                data: data.map((d) => d.Ash),
                type: 'line',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div>
            <h2>Line Chart</h2>
            <ReactECharts option={options} />
        </div>
    );
}

export default LineChart
