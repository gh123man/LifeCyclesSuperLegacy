var app = require('http').createServer(handler),
    formidable = require('formidable'),
    io = require('socket.io').listen(app, { log: false }),
    net = require('net');

//more init
var util = require("util"),
    http = require('http'), 
     url = require('url'),
      qs = require('querystring');

//we listen on port 8000      
app.listen(8000);

function handler ( req, res ) {
};

// handle socket io request and build routing table
io.sockets.on( 'connection', function ( socket ) {
    
    console.log('connected');
    
    var game = new Game(socket);
    
    socket.on('ready', function () {
        socket.emit('initGame', {x: game.width, y: game.height});
        
        setTimeout(function(){
            game.start();
        },2000);
        
        
    });
    
    
    //disconnect event
    socket.on('disconnect', function () { //on disconnect remove user data form the routing table.
        console.log('DISCONNECTED');
        
        
    });

});



var Game = function (socket) {
    
    this.socket = socket;
    
    this.tickRate = 50; //miliseconds
    this.ticks = 0;
    
    var self = this;
    
    this.width = 80;
    this.height = 50;
    
    this.start = function() {

        self.interval = setInterval(function(){ self.gameTick() }, self.tickRate);
        
    }
    
    this.gameTick = function() {
    
        self.ticks++;
        
        if (self.ticks < 20) {
            
            var packet = [];
            packet.push({x: self.ticks, y: self.ticks});
        
            io.sockets.socket(self.socket.id).volatile.emit('gameUpdate', packet);
        
        } else {
            self.stopGame();
        }
        
    }

    this.stopGame = function() {
        clearInterval(self.interval);
    }
    
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}



