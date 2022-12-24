const lista = document.querySelector('.myTable')
let labels = [];
let fecha = [];
let id = [];
fetch("http://54.90.72.87:5000/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            let registros = document.createElement("tr")
            registros.innerHTML = `<td>${element.idsensor}</td> <td>${element.data}</td> <td>${element.fechaActual}</td>`
            labels.push(element.data)
            id.push(element.idsensor)
            fecha.push(element.fechaActual)
            lista.appendChild(registros)
        })
    })
const ctx = document.querySelector('.myChart');
ctx.height = 100;

new Chart(ctx, {
    type: 'line',
    backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ], // Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ], // Color del borde
    data: {
        labels: fecha,
        datasets: [{
            label: 'Medición',
            data: labels,
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    min: 1500,
                    max: 2500
                }
            }]
        }
    }
});

const ctx2 = document.querySelector('.myChart2');

new Chart(ctx2, {
    type: 'polarArea',
    backgroundColor: [
        'rgba(230,181,102,0.2)',
    ], // Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
    ], // Color del borde
    data: {
        labels: fecha,
        datasets: [{
            label: 'Medición',
            data: labels,
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },

});


const configuracion = {
    type: 'polarArea',
    data: data,
    options: {
        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    ticks: {
                        min: 1500,
                        max: 2500
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
        }
    },
};