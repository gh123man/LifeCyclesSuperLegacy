import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class Main extends JPanel implements KeyListener {

	Game game;
	int direct;

	public Main() {
		super();
		addKeyListener(this);
		this.game = new Game(200, 200);
		direct = 0;
	}

	public void play() {
		int count = 0;
		while (true) {
			game.sleep(40);
			count++;
			if (count % 3 == 0) {
				game.life();
			}
			game.play(direct);
			repaint();
		}

	}

	public void paintComponent(Graphics g) {

		for (int i = 0; i < game.getBoard().rows; i++) {
			for (int j = 0; j < game.getBoard().cols; j++) {
				if (game.getBoard().getNode(i, j).getState()) {
					g.setColor(Color.BLACK);
					g.fillRect(i * 6, j * 6, 4, 4);

				} else {
					// g.clearRect(i * 6 , i * 6, getBounds().width,
					// getBounds().height);
					g.setColor(Color.lightGray);
					g.fillRect(i * 6, j * 6, 4, 4);
				}
			}
		}

	}

	public void keyPressed(KeyEvent key) {

		// Move the current point depending on which key was pressed.
		if (key.getKeyCode() == key.VK_LEFT) {
			direct--;
			if (direct < 0) {
				direct = 3;
			}
		}
		if (key.getKeyCode() == key.VK_RIGHT) {
			direct++;
			if (direct > 3) {
				direct = 0;
			}
		}

	}

	/*
	 * The following methods have to be here to comply with the MouseListener
	 * interface, but we don't use them, so their code blocks are empty.
	 */
	public void keyTyped(KeyEvent key) {
	}

	public void keyReleased(KeyEvent key) {
	}

	public static void main(String arg[]) {
		JFrame frame = new JFrame("Use Arrows to Draw, Space to Erase.");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(1000, 800);
		Main panel = new Main();
		
		frame.setContentPane(panel);
		frame.setVisible(true);

		// We *must* do this to see KeyEvents.
		panel.setFocusable(true);

		panel.play();

	}
}


