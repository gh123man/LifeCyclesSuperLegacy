
import java.util.ArrayList;

public class Player {
	private int direct;
	private int x, y, s;
	Node head;
	Node back;
	Board board;
	int length;

	public Player(int d, int x, int y, Board b, int l) {
		this.x = x;
		this.y = y;
		this.direct = d;
		this.board = b;
		this.length = l;
		this.head = board.getNode(x, y);
		this.back = head;
	}

	public void setDirect(int d) {
		this.direct = d;
	}

	public void move() {
		switch (direct) {

		case 0:
			y--;
			break;

		case 1:
			x++;
			break;

		case 2:
			y++;
			break;

		case 3:
			x--;
			break;
		}
		
		Node n = board.getNode(x, y);
		
		if (has(n)) {
			Node a;
			back = n.parent;
			back.next = null;
			
			while(n != null) {
				n.parent = null;
				a = n;
				n = n.next;
				a.next = null;
				
			}
			
			length = size();
			
			
		} else {
			if (n.getState()) {
				length++;
			}
			head.parent = n;
			n.next = head;
			head = n;
			head.setState(true);
			
			
			
			
			if (length <= size()) {
				Node t = back.parent;
				
				back.setState(false);
				back.parent = null;
				back = t;
				back.next = null;
			}
		}
		
		n = head;
		
	}
	
	public int getX() {
		return this.x;
	}
	
	public int getY() {
		return this.y;
	}
	
	public int size() {
		Node a = head;
		int c = 0;
		while(a != null) {
			c++;
			a = a.next;
		}
		return c;
	}
	
	public boolean has(Node n) {
		Node a = head;
		if (a == n) {
			return true;
		}
		while(a != null) {
			if (a == n) {
				return true;
			} else {
				a = a.next;
			}
		}
		return false;
	}
	

}
