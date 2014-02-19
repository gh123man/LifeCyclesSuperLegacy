
$(function(){

    $('body').append('<div id="test"></div>');
    $('body').append('<input type="text" id="testInpt" value=""></input>');
    $('body').append('<input onclick="sendData()" type="button" id="sub" value="submit"></input>');
    
    
    socket.on('update', function (data) {
        console.log(data);
        $('#test').append(data);
    });
    

    

});

function sendData() {
    var data = $('#testInpt').val();
    socket.emit('test', {test: data});
    
}

          

