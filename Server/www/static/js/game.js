

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

$(function(){
    
    var board = new Board('lifeCycles');
    board.init(100, 60);
    
    board.updateNode(10, 10, '#FF0000');
    
});



/*
$(function(){

    socket.on('gameUpdate', function (data) {
        console.log(data);
        $('#test').append(data);
    });
    

    

});

function sendData() {
    var data = $('#testInpt').val();
    socket.emit('startGame', {test: data});
    
}
*/
          

