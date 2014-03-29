#include <string>
#include "Board.h"
#include "life.cpp"

class Engine {

    private:
        
        Board* board; //needs to be board colleciton. 
    
    public:
        Engine();
        ~Engine();
        
        int newBoard(int width, int height);
        
        Board* requestBoard(); //gets a board pointer. should take an ID when multiboard is added. 
    
};
