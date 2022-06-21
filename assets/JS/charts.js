const charts = (labels, data) =>{

    let ctx = document.querySelector(".myChart").getContext('2d');
    if (Chart.getChart("myChart")){
        Chart.getChart("myChart").destroy();
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Température",
                data: data,
                fill: false,
                borderColor: 'red'
            }]
        }
    })
}

export default charts;