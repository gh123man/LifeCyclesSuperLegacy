
import java.util.ArrayList;

public class Game {

	ArrayList<Player> players;
	Board board;
	Player player;

	public Game(int x, int y) {
		this.players = new ArrayList<Player>();
		this.board = new Board(x, y);
		this.player = new Player(2, 20, 20, board, 80);
		this.players.add(player);

	}

	public void play(int direct) {
		player.setDirect(direct);
		player.move();
		board.getNode(player.getX(), player.getY()).setState(true);
	}

	public void life() {
		ArrayList<Node> setf = new ArrayList<Node>();
		ArrayList<Node> sett = new ArrayList<Node>();
		for (int q = 0; q < board.rows; q++) {
			for (int p = 0; p < board.cols; p++) {

				Node n = board.getNode(q, p);

				if (!player.has(n)) {

					int count = 0;

					if (n.t() != null && n.t().getState() && !player.has(n.t())) {
						count++;
					}
					if (n.tr() != null && n.tr().getState()
							&& !player.has(n.tr())) {
						count++;
					}
					if (n.r() != null && n.r().getState() && !player.has(n.r())) {
						count++;
					}
					if (n.br() != null && n.br().getState()
							&& !player.has(n.br())) {
						count++;
					}
					if (n.b() != null && n.b().getState() && !player.has(n.b())) {
						count++;
					}
					if (n.bl() != null && n.bl().getState()
							&& !player.has(n.bl())) {
						count++;
					}
					if (n.l() != null && n.l().getState() && !player.has(n.l())) {
						count++;
					}
					if (n.tl() != null && n.tl().getState()
							&& !player.has(n.tl())) {
						count++;
					}

					if (n.getState()) {
						if (count < 2) {
							setf.add(n);

						}

						if (count > 3) {
							setf.add(n);
						}
					} else {
						if (count == 3) {
							sett.add(n);

						}

					}

				}

			}

		}

		for (int i = 0; i < setf.size(); i++) {
			if (!player.has(setf.get(i))) {
				setf.get(i).setState(false);
			}
		}

		for (int i = 0; i < sett.size(); i++) {
			sett.get(i).setState(true);
		}
	}

	public Board getBoard() {
		return board;
	}

	public void sleep(int s) {
		try {
			Thread.sleep(s);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
