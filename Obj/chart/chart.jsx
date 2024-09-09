new Chart(document.querySelector('#line_chart').getContext('2d'),{
    type: 'line' ,

    data: {
        labels : ['jan', 'feb', 'march', 'apr'],
        datasets: [
            {
                label: 'Bitcion',
                data:[12000, 2000, 7000, 9000],
                backgroundColor: 'gold',
                borderWidth: 1,
                borerColor: 'darkgold',
                pointRadius: 18,
                tension: 0.8,
                pointBackgroundColor: 'gold'
            },

            {
                label: 'Litcion',
                data:[11000, 4000, 9000, 6000],
                backgroundColor: 'darkblue',
                borderWidth: 1,
                borerColor: 'darkblue',
                pointRadius: 18,
                tension: 0.4,
                pointBackgroundColor: 'darkblue'
            },
        ],
    } ,

    options: {
        responsive: true,
    } ,
})




new Chart(document.querySelector('#bar_chart').getContext('2d'),{
    type: 'bar',

    data: {
        labels : ['jan', 'feb', 'march', 'apr'],
        datasets:[
            {
                label: 'Oyster seafood',
                backgroundColor: 'darkgreen',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },

            {
                label: 'Burger',
                backgroundColor: 'darkred',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },
        ],
        options:{
            responsive: true,
        },       
    }
})



new Chart(document.querySelector('#radar_chart').getContext('2d'),{
    type: 'radar',

    data: {
        labels : ['jan', 'feb', 'march', 'apr'],
        datasets:[
            {
                label: 'Oyster seafood',
                backgroundColor: 'darkgreen',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },

            {
                label: 'Burger',
                backgroundColor: 'darkred',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },
        ],
        options:{
            responsive: true,
        },       
    }
})

new Chart(document.querySelector('#doughnut_chart').getContext('2d'),{
    type: 'doughnut',

    data: {
        labels : ['jan', 'feb', 'march', 'apr'],
        datasets:[
            {
                label: 'Oyster seafood',
                backgroundColor: 'darkgreen',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },

            {
                label: 'Burger',
                backgroundColor: 'darkred',
                data: [2000,1000, 800, 5000],
                borderRadius: 10,
            },
        ],
        options:{
            responsive: true,
        },       
    }
})