

class Board {
    
    private:
        int width;
        int height;
        
        int** container;
        
    public:
        
        Board(int width, int height);
        
        ~Board();
        
        
        int getWidth();
        int getHeight();
        
        int get(int x, int y);
    
};
