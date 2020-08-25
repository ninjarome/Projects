import java.io.File; // Import the File class
import java.io.FileNotFoundException; // Import this class to handle errors
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner; // Import the Scanner class to read text files

public class MergeSort {
	static List<Integer> mSort(List<Integer> list){
		List<Integer> sortedList = new ArrayList<Integer>(),
		first = new ArrayList<Integer>(),
		second = new ArrayList<Integer>(),
		sortedFirst = new ArrayList<Integer>(),
		sortedSecond = new ArrayList<Integer>();
		if(list.size() == 2){
			System.out.print("Unsorted inside List = ");
			System.out.println(Arrays.toString(list.toArray()));
			if(list.get(0) > list.get(1)){
				sortedList.add(list.get(1));
				sortedList.add(list.get(0));
				System.out.print("Sorted inside List = ");
				System.out.println(Arrays.toString(sortedList.toArray()));
			}
		}else if (list.size() > 2){
			int half = list.size() / 2;
			for (int i = 0; i < half; i++) 
				first.add(list.get(i));
			for (int i = half; i < list.size(); i++) 
				second.add(list.get(i));
			sortedFirst = mSort(first);
			sortedSecond = mSort(second);
			sortedList = sortedFirst;
			sortedList.addAll(sortedSecond);
		}else{
			sortedList = list;
		}
		return sortedList;
	}
  public static void main(String[] args) {
    try {
    	File myObj = new File("test.txt");
    	Scanner myReader = new Scanner(myObj);
		List<Integer> unsortedList = new ArrayList<Integer>();
		while (myReader.hasNextLine()) {
			unsortedList.add(Integer.parseInt(myReader.nextLine()));
		}
		System.out.print("Unsorted List = ");
		System.out.println(Arrays.toString(unsortedList.toArray()));
		List<Integer> sortedList = mSort(unsortedList);
		System.out.print("Sorted List = ");
		System.out.println(Arrays.toString(sortedList.toArray()));
      	myReader.close();
	}
	catch (FileNotFoundException e) {
    System.out.println("An error occurred.");
    e.printStackTrace();
    }
  }
}