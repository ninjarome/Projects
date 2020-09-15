import java.io.File; // Import the File class
import java.io.FileNotFoundException; // Import this class to handle errors
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner; // Import the Scanner class to read text files

public class MergeSort {
	static List<Integer> mSort(List<Integer> list){
		List<Integer> first = new ArrayList<Integer>(),
		second = new ArrayList<Integer>();
		int half = list.size() / 2;

		for (int i = 0; i < half; i++) 
			first.add(list.get(i));
		for (int i = half; i < list.size(); i++)
			second.add(list.get(i));
			if (list.size() > 1){
				mSort(first);
				mSort(second);

				int i, j, count;
				i = j = count = 0;
				
				while(i < first.size() && j < second.size()){
					if(first.get(i) < second.get(j)){
						list.set(count, first.get(i));
						i++;
					}else{
						list.set(count, second.get(j));
						j++;
					}
					count++;
				}
				while(i < first.size()){
					list.set(count, first.get(i));
					i++;
					count++;
				}
				while(j < second.size()){
					list.set(count, second.get(j));
					j++;
					count++;
				}
			}
		return list;
	}
  public static void main(String[] args) {
	Scanner input= new Scanner(System.in);
	System.out.print("Enter a file name: ");
    try {
    	File myObj = new File(input.nextLine());
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
		  input.close();
	}
	catch (FileNotFoundException e) {
    System.out.println("An error occurred.");
    e.printStackTrace();
    }
  }
}