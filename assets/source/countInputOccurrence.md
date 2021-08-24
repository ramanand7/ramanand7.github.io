## updated version of below program

```c#
class Program{
        static void Main(string[] args){
            bool isValidInput = false;
            // Write a program to count the number of <userinput> in list of provided numbers.
            Console.WriteLine("Title: Write a program to count the number of <userinput> in list of provided numbers.");
            while(!isValidInput){
                try{
                    //size of list
                    Console.Write("\nEnter Size of List: ");
                    int size = Convert.ToInt32(Console.ReadLine());

                    // taking list
                    Console.Write("Enter the list Values: ");
                    int[] listValues = listArray(Console.ReadLine().Split(" "), size);

                    //input
                    Console.Write("Occuracne Count: ");
                    int input = Convert.ToInt32(Console.ReadLine());
                    if(checkDataInput(size) && listValues[0] !=0){
                        // calling the methods
                        int result = inputOccurrence(listValues, size-1, input);
                        Console.Write($"Result: {result}");
                        isValidInput = !isValidInput;
                    }
                }catch (Exception e) {Console.WriteLine(e.Message);}
            }
        }

        private static bool checkDataInput<T>(T input){
            if(input.GetType() == typeof(int)) return true;

            return false;
        }
    
        private static int[] listArray(String[] list, int size){
            int[] intList = new int[size];
            for(int i = 0; i < size; i++) {  // updated March 23, 2021
                try{ 
                    intList[i] = int.Parse(list[i]); 
                    if(checkDataInput(int.Parse(list[i]))) return new int[]{0};
                } 
                catch(Exception ex){ Console.WriteLine(ex.Message); }
            }
            return intList;
        }

        private static int inputOccurrence(int[] list, int size, int input){
            int countInputOccurrence = 0;
            int index = -1;
            while(index++ < size){
                if(list[index] == input) countInputOccurrence += 1;
            } 
            return countInputOccurrence;

            // or can use one line code
            // return list.Count(ele => ele==input);
        }
    }
```
## *Title*: Write a program to count the number of userInput in list of provided numbers.

```C#
class Program{
        static void Main(string[] args){
            // Write a program to count the number of 5’s in list of provided numbers.
            Console.WriteLine("Title: Write a program to count the number of 5’s in list of provided numbers.");

            //size of list
            Console.Write("Enter Size of List: ");
            int size = Convert.ToInt32(Console.ReadLine());

            // taking list
            Console.Write("Enter the list Values: ");
            int[] listValues = listArray(Console.ReadLine().Split(" "), size);

            //input
            Console.Write("Occuracne Count: ");
            int input = Convert.ToInt32(Console.ReadLine());

            // calling the methods
            int result = inputOccurrence(listValues, size-1, input);
            Console.Write($"Result: {result}");
        }
    
        private static int[] listArray(String[] list, int size){
            int[] intList = new int[size];
            for(int i = 0; i < size; i++) {  // updated March 23, 2021
                try{ intList[i] = int.Parse(list[i]); } 
                catch(Exception ex){ Console.WriteLine(ex.Message); }
            }
            return intList;
        }

        private static int inputOccurrence(int[] list, int size, int input){
            int countInputOccurrence = 0;
            int index = -1;
            while(index++ < size){
                if(list[index] == input) countInputOccurrence += 1;
            } 
            return countInputOccurrence;

            // or can use one line code
            // return list.Count(ele => ele==input);
        }
    }
```