let socket=io()


$(()=>{

    //  let obj={
    //     animationEnabled: true,
    //     theme: "light2",
    //     title:{
    //         text: "Simple Line Chart"
    //     },
    //     axisY:{
    //         includeZero: false
    //     },
    //     data: [{        
    //         type: "line",       
    //         dataPoints: []
    //     }]
    // }
    

    // var chart = new CanvasJS.Chart("chartContainer", obj);
    // chart.render();


    socket.on('connected',()=>{
        console.log('client connected at '+socket.id)
    })

    let inputNum=$('#inputNum')
    $('#btn').click(()=>{
        // window.obj.data.dataPoints.push({y:inputNum.val()})
    socket.emit('send_val',{key:inputNum.val()})
    // console.log(  obj.data.dataPoints)
    
})
})



    