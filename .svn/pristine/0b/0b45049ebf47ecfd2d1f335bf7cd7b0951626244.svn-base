export function coinChart() {
  return {
    title: {
      text: '当天金币分布占比'
    },
    tooltip: {
      headerFormat: '{series.name}<br>',
      pointFormat: '{point.name} : <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        }
      }
    },
    series: []
  }
}
