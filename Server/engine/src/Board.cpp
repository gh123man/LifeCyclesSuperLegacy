#include "Board.h"
using namespace std;

Board::Board(int width, int height):
    width(width), 
    height(height) {

    container = new int*[width];
    for(int i = 0; i < width; ++i) {
        container[i] = new int[height];
    }
    
}

Board::~Board() {

    for(int i = 0; i < width; ++i) {
        delete [] container[i];
    }
    delete container;
}


int Board::getWidth() {
    return width;
}

int Board::getHeight() {
    return height;
}

int Board::get(int x, int y) {
    return container[x][y];
}
