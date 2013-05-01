

public class Node {
	
	private int x, y;
	private Player owner;
	private boolean state;
	private Board b;
	Node next;
	Node parent;
	int gen;
	
	public Node(int x, int y, Board b) {
		this.x = x;
		this.y = y;
		this.b = b;
		owner = null;
		state = false;
		next = null;
		parent = null;
		
	}
	
	public void setState(boolean b) {
		this.state = b;
	}
	
	public boolean getState() {
		return this.state;
	}
	
	public int getx() {
		return this.x;
	}
	public int gety() {
		return this.y;
	}
	
	public void setOwner(Player p) {
		this.owner = p;
	}
	
	public Player getOwner() {
		return this.owner;
	}
	
	public Node r() {
		try {
			return b.getNode(x + 1, y);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node br() {
		try {
			return b.getNode(x + 1, y + 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node b() {
		try {
			return b.getNode(x, y + 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node bl() {
		try {
			return b.getNode(x - 1, y + 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node l() {
		try {
			return b.getNode(x - 1, y);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node tl() {
		try {
			return b.getNode(x - 1, y - 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node t() {
		try {
			return b.getNode(x, y - 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	public Node tr() {
		try {
			return b.getNode(x + 1, y - 1);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		}
	}
	
	
	
	

}
