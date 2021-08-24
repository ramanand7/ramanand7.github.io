## updated version of below program
> Write a program to capture the Student marks and print the second highest student marks. Using object-oriented programming.

```c#
class Program{
    static void Main(string[] args){
        Console.WriteLine("Title: Write a program to capture the Student marks and print the second highest student marks. Using object-oriented programming");
        bool isValidInput = false;
        while(!isValidInput){
            try{
                //input
                Console.Write("\nHow many Student taken the test: ");
                int size = Convert.ToInt32(Console.ReadLine());

                // input for marks
                Console.Write("Enter List of Students Marks: ");
                int[] studentMarks = marksArrayList(Console.ReadLine().Split(" "), size);
                
                // calling the methods
                if(studentMarks[0] != 0){
                    int result = secondLargest(studentMarks, size);
                    if(result == 0) Console.WriteLine("No Second Largest Element is Present");
                    Console.WriteLine($"Result: {result}");
                    isValidInput = true;
                }

            } catch(Exception e){Console.WriteLine(e.Message);}
        }

    }
    private static bool checkValidInput<T>(T input){
        if(input.GetType() != typeof(int)) return true;
        
        return false;
    }

    private static int[] marksArrayList(string[] marks, int size){
        int[] marksArray = new int[size];
            for(int i=0; i < size; i++){
                try{
                    marksArray[i] = int.Parse(marks[i]);
                    if(checkValidInput(int.Parse(marks[i]))) return new int[]{0};
                } catch(Exception e){Console.WriteLine(e.Message);}
            }
        return marksArray;
    }

    private static int secondLargest(int[] marks, int size){
        int first, second;
        int i = -1;
        if(size < 2) return 0;

        first = second = int.MinValue;
        while(i++ < size-1){
            if(marks[i] > first){
                second = first;
                first = marks[i];
            }
            else if(marks[i] > second && marks[i] != first) second = marks[i]; //when first and second have same value or repeated value.
        }
        if(second == int.MinValue) return 0;  // no second largest present
        return second; // second largest present
    }
}
```


## Title: Write a program to capture the Student marks and print the second highest student marks. Using object-oriented programming.


```c#
class Program{
    static void Main(string[] args){
        // Write a program to capture the Student marks and print the second highest student marks. Using object-oriented programming.
        Console.WriteLine("Title: Write a program to capture the Student marks and print the second highest student marks. Using object-oriented programming");
        try{
            //input
            Console.Write("How many Student taken the test: ");
            int size = Convert.ToInt32(Console.ReadLine());

            // input for marks
            Console.Write("Enter List of Students Marks: ");
            int[] studentMarks = marksArrayList(Console.ReadLine().Split(" "), size);
            
            // calling the methods
            int result = secondLargest(studentMarks, size);
            if(result == 0) Console.WriteLine("No Second Largest Element is Present");
            Console.WriteLine($"Result: {result}");

        } catch(Exception e){Console.WriteLine(e.Message);}

    }

    private static int[] marksArrayList(string[] marks, int size){
        int[] marksArray = new int[size];
        for(int i=0; i< size; i++){
            try{
                marksArray[i] = int.Parse(marks[i]);
            } catch(Exception e){Console.WriteLine(e.Message);}
        }
        return marksArray;
    }

    private static int secondLargest(int[] marks, int size){
        int first, second;
        int i = -1;
        if(size < 2) return 0;

        first = second = int.MinValue;
        while(i++ < size-1){
            if(marks[i] > first){
                second = first;
                first = marks[i];
            }
            else if(marks[i] > second && marks[i] != first) second = marks[i]; //when first and second have same value or repeated value.
        }
        if(second == int.MinValue) return 0;  // no second largest present
        return second; // second largest present
    }
}
```