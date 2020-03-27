<template>
    <div>
        <GChart class='chart'
            type="LineChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
export default {
    data: () => ({
        chartData: [
            ['Date', 'New Cases'],
            ['2012', 1000],
            ['2013', 1000],
            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
            ['2017', 1030]
        ],
        chartOptions: {
            title: 'Covid-19 Cases in Pakistan',
            vAxis: {title: 'Year'},
            height: "100%",
            width: "100%",
            chartArea: {'width': '75%', 'height': '80%'},
            legend: {position: 'bottom'}
        }
    })
}
</script>

<style scoped lang='scss'>
    .chart {
        height: 500px;
        padding: 1rem 0rem;
    }
    label {
        font-weight: bold; 
        text-align: center;
        display: block;
        
    }
</style>