import java.util.ArrayList;
import java.util.Scanner;

public class StudentGradeTracker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> studentNames = new ArrayList<>();
        ArrayList<Double> studentMarks = new ArrayList<>();

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();
        sc.nextLine(); // Consume newline

        // Input student details
        for (int i = 0; i < n; i++) {
            System.out.println("\nStudent " + (i + 1));

            System.out.print("Enter Name: ");
            String name = sc.nextLine();

            System.out.print("Enter Marks: ");
            double marks = sc.nextDouble();
            sc.nextLine();

            studentNames.add(name);
            studentMarks.add(marks);
        }

        // Calculate average, highest, and lowest
        double total = 0;
        double highest = studentMarks.get(0);
        double lowest = studentMarks.get(0);

        for (double marks : studentMarks) {
            total += marks;

            if (marks > highest) {
                highest = marks;
            }

            if (marks < lowest) {
                lowest = marks;
            }
        }

        double average = total / n;

        // Display Report
        System.out.println("\n========== STUDENT GRADE REPORT ==========");

        System.out.printf("%-20s %-10s\n", "Student Name", "Marks");
        System.out.println("------------------------------------------");

        for (int i = 0; i < n; i++) {
            System.out.printf("%-20s %-10.2f\n", studentNames.get(i), studentMarks.get(i));
        }

        System.out.println("------------------------------------------");
        System.out.printf("Average Marks : %.2f\n", average);
        System.out.printf("Highest Marks : %.2f\n", highest);
        System.out.printf("Lowest Marks  : %.2f\n", lowest);

        sc.close();
    }
}