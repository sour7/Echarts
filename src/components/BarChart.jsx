import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({ data }) => {

    // Get unique alcohol values
    const xAxisData = [...new Set(data.map(item => item.Alcohol))];

    // Get minimum magnesium value for each alcohol category
    const yAxisData = xAxisData.map(alcohol => Math.min(...data.filter(item => item.Alcohol === alcohol).map(item => item.Magnesium)));

    const option = {
        xAxis: {
            type: 'category',
            data: xAxisData,
            name: 'Alcohol'
        },
        yAxis: {
            type: 'value',
            name: 'Min Magnesium'
        },
        series: [
            {
                data: yAxisData,
                type: 'bar'
            }
        ]
    };

    return (
        <div style={{overflow:'auto'}}>
            <h2>Bar Graph</h2>
            <ReactECharts echarts={echarts} option={option} />
        </div>
    );
};

export default BarChart;
