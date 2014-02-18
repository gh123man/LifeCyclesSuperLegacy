
public class Board {

	int rows, cols;
	Node[][] board;

	public Board(int r, int c) {
		this.rows = r;
		this.cols = c;
		board = new Node[r][c];

		for (int i = 0; i < r; i++) {
			for (int j = 0; j < c; j++) {

				board[i][j] = new Node(i, j, this);

			}
		}

	}

	public Node getNode(int x, int y) {
		return board[x][y];

	}

}
