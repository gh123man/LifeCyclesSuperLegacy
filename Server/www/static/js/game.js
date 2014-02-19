

var Board = function(canvasId) {
    
    var self = this;
    
    this.canvas = $('#' + canvasId);
    
    this.ctx = this.canvas[0].getContext("2d");
    
    this.canvasWidth = this.canvas.width(); 
    this.canvasHeight = this.canvas.height();
    
    this.boardWidth;
    this.boardHeight;
    
    this.blockWidth;
    this.blockHeight;
    
    this.blockPadding = 1; //px
    
    this.baseColor = "#F2F2F2";
    
    this.init = function(width, height) {
    
        self.boardWidth = width;
        self.boardHeight = height;
        
        self.blockWidth = self.canvasWidth / self.boardWidth;
        self.blockHeight = self.canvasHeight / self.boardHeight;
        
        self.clearBoard();
    }
    
    this.updateNode = function(x, y, value) {
        
        xOffset = x * self.blockWidth;
        yOffset = y * self.blockHeight;
        
        self.ctx.fillStyle = value;
        self.ctx.fillRect (xOffset + self.blockPadding,
                           yOffset + self.blockPadding,
                           self.blockWidth - (2 * self.blockPadding),
                           self.blockHeight - (2 * self.blockPadding)
        );
        
    }
    
    this.clearBoard = function() {
        for (var x = 0; x < self.boardWidth; x++) {
            for (var y = 0; y < self.boardHeight; y++) {
                self.updateNode(x, y, self.baseColor);
            }
        }
    }

}

var Game = function(board) {
    
    var self = this;
    this.board = board;
    
    socket.on('initGame', function (data) {
        board.init(data.x, data.y);
    });
    
    socket.on('gameUpdate', function (data) {
    
        for (var i = 0; i < data.length; i++){
            board.updateNode(data[i].x, data[i].y, '#999');
        }
        
    });
    
    this.init = function() {
        socket.emit('ready');
    }
    
}

$(function(){
    
    var board = new Board('lifeCycles');
    var game = new Game(board);
    
    game.init();
    
});




          

