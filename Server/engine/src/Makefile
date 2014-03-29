
CC=g++
CFLAGS=-std=c++0x -Wall -lboost_system -lpthread

all:	clean test

life.o: life.cpp
	$(CC) life.cpp -c
	
Board.o: Board.h Board.cpp
	$(CC) Board.cpp -c

Engine.o: Engine.h Engine.cpp Board.o
	$(CC) Engine.cpp -c
	
test: tests.cpp Engine.o life.o
	$(CC) tests.cpp -o tests Engine.o Board.o
	

	
clean:
	rm -rf tests Board.o Engine.o life.o
