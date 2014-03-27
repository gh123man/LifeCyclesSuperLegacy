#include <string>
#include "Board.h"

class Engine {

    private:
        
        Board* board; //needs to be board colleciton. 
    
    public:
        Engine();
        ~Engine();
        
        void write(std::string cmd); //write with no recieve. 
        
        Board* requestBoard(); //gets a board pointer. should take an ID when multiboard is added. 
    
};
