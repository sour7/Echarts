import React from 'react'
import ReactECharts from 'echarts-for-react';
const BarChart = ({ data }) => {
    const options = {
       
        xAxis: {
            type: 'category',
            data: data.map((d) => d.Alcohol),
            name: 'Alcohol'
        },
        yAxis: {
            type: 'value',
            name: 'Magnesium'
        },
        series: [
            {
                data: data.map((d) => d.Magnesium),
                type: 'bar',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div>
            <h2>Bar Chart</h2>
            <ReactECharts option={options} />
        </div>
    );
}

export default BarChart
