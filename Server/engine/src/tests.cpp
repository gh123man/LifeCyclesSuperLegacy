
#include "rapidjson/document.h"
#include "rapidjson/prettywriter.h"
#include "rapidjson/filestream.h"
#include <string>
#include <iostream>

#include "Engine.h"

using namespace rapidjson;

int main(int, char*[]) {
    const char json[] = " { \"hello\" : \"world\", \"t\" : true , \"f\" : false, \"n\": null, \"i\":123, \"pi\": 3.1416, \"a\":[1, 2, 3, 4] } ";
	printf("Original JSON:\n %s\n", json);

	Document document;	// Default template parameter uses UTF8 and MemoryPoolAllocator.
    char buffer[sizeof(json)];
	memcpy(buffer, json, sizeof(json));
	
	if (document.ParseInsitu<0>(buffer).HasParseError())
		return 1;

	printf("\nParsing to document succeeded.\n");
	
	
	
	Engine* eng = new Engine();
	eng->newBoard(5, 4);
	Board* board = eng->requestBoard();
	
	
	
}


void printBoard(Board* board) {
    for (int y = 0; y < board->getHeight(); y++) {
	    for (int x = 0; x < board->getWidth(); x++) {
	        std::cout << board->get(x, y);
	    }
	    std::cout << std::endl;
	}
}
