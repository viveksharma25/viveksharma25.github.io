const data = {
    labels: [
      'Big Data Development',
      'Machine Learning and Deep Learning',
      'Back-End Development',
      'Front-End Development',
      'Algorithms',
      'System Design',
      'Web Designing',
      'CyberSecurity',
    ],
    datasets: [{
      label: 'Skills',
      data: [75,70,100, 64, 100, 75, 45, 90],
      fill: true,
      backgroundColor: 'rgba(224, 204, 255,0.2)',
      borderColor: 'rgb(255, 204, 255',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};
const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      aspectRatio:2
    },
};
const skillChart = new Chart(
    document.getElementById('skillChart'),
    config
);
