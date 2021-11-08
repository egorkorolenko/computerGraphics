import javax.swing.*;
import java.awt.*;


public class Fractal extends JPanel {
    final int min = 1;

    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setSize(820, 520);
        frame.setTitle("Канторова пыль");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().add(new Fractal());
        frame.setVisible(true);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        draw(100, 30, 500, g);
    }

    public void draw(double x, double y, double size, Graphics g) {
        double s;
        if (size > min) {
            s = size / 3;
            draw(x, y + 20, s, g);
            draw(x + s * 2, y + 20, s, g);
            g.drawLine((int) x, (int) y, (int) (x + size), (int) y);
        }
    }
}
