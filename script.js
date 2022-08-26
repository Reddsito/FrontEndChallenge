async function getDays() {
    const resPost = await fetch('data.json');
    const post = await resPost.json();
    const total = document.querySelector('#totalAmount')
    let initialValue = 0;
    const bg = createBg(post);
    crearChart(post,bg);

    
}
function crearChart(labels,bgColorAndHover) {
    const ctx = document.getElementById('Chart');
      new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                data: labels,
                backgroundColor: bgColorAndHover[0],
                hoverBackgroundColor: bgColorAndHover[1],
                borderWidth: 0,
                borderRadius: 7
            }]
        },
        options: {
            scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    color: "#93867B",
                  }
                },
                y: {
                  grid: {
                    display: false,
                    borderColor: 'transparent'
                  },
                  ticks: {
                    display: false
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  callbacks: {
                      label: function(context) {
                          let label = context.dataset.label || '';
  
                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed.y !== null) {
                              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                          }
                          return label;
                      },
    
                      
                  }
              }
              },
              parsing: {
                xAxisKey: 'day',
                yAxisKey: 'amount'
            },
        }
    });
}

function createBg(post) {

  let backGroundArr = [];
  let backGroundHoverArr = [];
  const today = new Date();
  const dayActual = new Date(today).getDay();

for (let i = 0; i < post.length; i++){
  if(i == dayActual-1) {
    backGroundArr.push('rgb(118, 181, 188)');
    backGroundHoverArr.push('rgb(118, 181, 188, .5)');
  } else {
    backGroundArr.push('rgb(236, 119, 95)');
    backGroundHoverArr.push('rgb(236, 119, 95, .55)');
  }
}
return [backGroundArr,backGroundHoverArr ];
}
getDays();







