#include "Board.h"

using namespace std;

Board::Board(int width, int height):
    width(width), 
    height(height) {

    int** container = new int*[width];
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
