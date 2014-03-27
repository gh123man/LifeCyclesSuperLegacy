#include "Engine.h"

using namespace std;

Engine::Engine() {}

void Engine::write(string cmd) {
    
    if (cmd == "newBoard") {
        
        if (board != NULL) {
            delete board;
        }
        
        board = new Board(4, 4);
        
    }
    
}

Engine::~Engine() {
    delete board;
}

Board* Engine::requestBoard() {
    return board;
}

