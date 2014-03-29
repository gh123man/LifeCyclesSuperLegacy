#include "Engine.h"

using namespace std;

Engine::Engine() {}

int Engine::newBoard(int width, int height) {
    
    if (board != NULL) {
        delete board;
    }
    
    board = new Board(width, height);
    return 1; //will be board ID
        
    
}

Engine::~Engine() {
    delete board;
}

Board* Engine::requestBoard() {
    return board;
}


