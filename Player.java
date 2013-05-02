
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
		
		//hokay soo. this is the complicated part. 
		
		
		Node n = board.getNode(x, y); //lets get the node we just moved too. (head is one behind)
		n.setOwner(this);
		
		
		
		if (has(n)) { //if n is part of our tail, cut it.
			Node a; //create a temp node.
			back = n.parent; //set our tail end to the parent block of n.
			back.next = null; // whatever was after our back is set to null. 
			
			
			while(n != null) { //clears the remaining block chain.
				n.parent = null;
				n.setOwner(null);
				a = n;
				n = n.next;
				a.next = null;
				
			}
			
			length = size(); //set the len var to the new block chain size
			
			
		} else { //if we dont run over ourself. 
			if (n.getState()) { //if its an active node (add player check next)
				length++; //extend our tail
			}
			
			head.parent = n; //set the heads parent to n
			n.next = head; //n child is set to the current head
			head = n; //reset head to n.
			head.setState(true); //activate the blocks state. 
			
		}
		
		if (length <= size()) { //this is used in the inital set up. allows snake to grow as it moves from start point. also, deturmines the end of the snake. 
			Node t = back.parent;
			back.setState(false);
			back.setOwner(null);
			back.parent = null;
			back = t;
			back.next = null;
		}
		
		
		
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
