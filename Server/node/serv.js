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
        
        game.hostQuit();
    });

});



var Game = function (socket) {
    
    this.socket = socket;
    
    this.tickRate = 50; //miliseconds
    this.ticks = 0;
    
    var self = this;
    
    this.width = 80;
    this.height = 50;
    
    this.direciton = 0;
    this.lastx = 10;
    this.lasty = 10;
    
    this.hostQuit = function() {
        console.log('host QUit');
    }
    
    this.start = function() {

        self.interval = setInterval(function(){ self.gameTick() }, self.tickRate);
        
    }
    
    socket.on('updateInput', function (direction) {
        if (direction < 0) {
            self.direction = 3
        } else if (direction > 3) {
            self.direction = 0
        } else {
            self.direction = direction;
        }
        
    });
    
    this.gameTick = function() {
    
        self.ticks++;
        
        if (self.ticks < 1000) {
            
            console.log(self.ticks);
            var packet = [];
            
            if (self.direction == 0) {
                self.lasty++;
            } else  if (self.direction == 1) {
                self.lastx++;
            } else  if (self.direction == 2) {
                self.lasty--;
            } else  if (self.direction == 3) {
                self.lastx--;
            }
            
            
            packet.push({x: self.lastx, y: self.lasty});
        
            socket.volatile.emit('gameUpdate', packet);
        
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



