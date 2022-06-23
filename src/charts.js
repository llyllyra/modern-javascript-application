const charts = (labels, data) => {
  let ctx = document.querySelector(".myChart").getContext("2d");
  const chart = Chart.getChart("myChart");

  if (chart) {
    chart.destroy();
  }

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Température",
          data: data,
          fill: false,
          borderColor: "red",
        },
      ],
    },
  });
};

export default charts;
