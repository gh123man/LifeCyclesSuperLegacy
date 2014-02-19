
$(function(){

    $('body').append('<div id="test">demoDiv</div>');
    
    socket.on('update', function (data) {
        console.log(data);
        $('#test').append(data);
    });

    socket.emit('test', {test: true});

});


          

