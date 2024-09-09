const CTX = document.getElementById('combinedChart').getContext('2d');

new Chart(CTX, {
    type: 'bar',
    data: {
        labels:['January','Febuary','March','April','May','June','July'],
        datasets:[
            {
            type:'line',
            label:'hapatitis',
            borderColor: 'rgb(15,63,50)',
            bacgroundColor: 'rgb(15,63,50)',
            data:[500, 600, 900, 350, 600, 340, 100],
            tension: 0.4,
            pointRadius: 5,
            pointBackground:'rgb(15,63,50, 0.357)',
            yAxisID:'y1',
            fill: false
        },

        {
            type:'bar',
            label:'patients',
            borderColor: 'rgb(213, 96,5)',
            bacgroundColor: 'rgb(213, 95,5, 0.357)',
            data:[500, 600, 900, 350, 600, 340, 100],
            borderWidth: 1,
            yAxisID:'y0',
        
        }
    ]
    },
    options: {
        responsive:true,

        scale:{
           // refers to axis which defines how data are maped onto chat,
           //y and x
           x:{
            stacked: false,

           },
           y:{
            id: 'y0',
            position:'left',
            type: 'linear',
            stacked: true,

           },
           y1:{
            id: 'y1',
            type:'linear',
            position:'right',
            grid:{
                drawOnChartArea: false,
            }
           }
        }
    }
})