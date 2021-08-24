## updated version of below program.
```c#
class Program{
    static void Main(string[] args){
        bool isValidInput = false;
        while(!isValidInput){
            try{
                // input for start and end
                Console.Write("Enter starting and Ending Value of Natural no list: ");
                var data = Console.ReadLine().Split(' ');
                var startNum = int.Parse(data[0]);
                var endNum = int.Parse(data[1]);

                Console.Write("Enter Size of Expected Value: ");
                int size = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Expected Values: ");
                int[] exceptValues = expectedArray(Console.ReadLine().Split(' '), size);
                if(checkDataInput(startNum) && checkDataInput(endNum) && exceptValues[0] != 0){
                    // print the nautural num except {user input} - dynamic input
                    int dynamicArraySum = printNaturalDynamically(startNum - 1, endNum, exceptValues);
                    // sum of nautral number except {user input} - custome input
                    int result = printNaturalWithException(dynamicArraySum, exceptValues);
                    Console.Write($"{result}");
                    isValidInput = !isValidInput;
                }
            } catch(Exception e) {Console.WriteLine(e.Message);}
        }
    }
    private static bool checkDataInput<T>(T input){
        if(input.GetType() == typeof(int)) return true;

        return false;
    }
    private static int[] expectedArray(string[] array, int size){
        int[] intArray = new int[size]; 
        for(int i = 0; i < size; i++){
            try{
                intArray[i] = int.Parse(array[i]);
                if(checkDataInput(int.Parse(array[i]))) return new int[]{0};
            } catch(Exception e){Console.WriteLine(e.Message);}
        }
        return intArray;
    }

    private static int printNaturalDynamically(int start, int end, int[] exceptValues){
        Console.WriteLine("\nTitle: Display natural numbers except userInput - Dynamically");
        int arraySum = 0;
        while(start++ < end){
            arraySum += start;
            bool isSkipElement = Array.Exists(exceptValues, element => element == start);
            if (isSkipElement) continue;
            Console.Write($" {start} ");
        }
        return arraySum;
    }

    private static int printNaturalWithException(int arraysum, int[] exceptValuesSum){
        Console.Write("\n\nTitle: Sum of Natural Numbers except userInput: ");
        return arraysum - exceptValuesSum.Sum();
    }
}
```

## <b>Title</b>: Display first `n` Natural numbers except `user-input` and its Sum - dynamicaly

```c#
class Program{
        static void Main(string[] args){
            try{
                // input for start and end
                Console.Write("Enter starting and Ending Value of Natural no list: ");
                var data = Console.ReadLine().Split(' ');
                var startNum = int.Parse(data[0]);
                var endNum = int.Parse(data[1]);

                Console.Write("Enter Size of Expected Value: ");
                int size = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Expected Values: ");
                int[] exceptValues = expectedArray(Console.ReadLine().Split(' '), size);

                // print the nautural num except {user input} - dynamic input
                int dynamicArraySum = printNaturalDynamically(startNum - 1, endNum, exceptValues);

                // sum of nautral number except {user input} - custome input
                int result = printNaturalWithException(dynamicArraySum, exceptValues);
                Console.Write($"{result}");

            } catch(Exception e) {Console.WriteLine(e.Message);}
        }

        private static int[] expectedArray(string[] array, int size){
            int[] intArray = new int[size]; 
            for(int i = 0; i < size; i++){
                try{
                    intArray[i] = int.Parse(array[i]);

                } catch(Exception e){Console.WriteLine(e.Message);}
            }
            return intArray;
        }

        private static int printNaturalDynamically(int start, int end, int[] exceptValues){
            Console.WriteLine("\nTitle: Display natural numbers except userInput - Dynamically");
            int arraySum = 0;
            while(start++ < end){
                arraySum += start;
                bool isSkipElement = Array.Exists(exceptValues, element => element == start);
                    if (isSkipElement) continue;
                    Console.Write($" {start} ");
            }
            return arraySum;
        }

        private static int printNaturalWithException(int arraysum, int[] exceptValuesSum){
            Console.Write("\n\nTitle: Sum of Natural Numbers except userInput: ");
            return arraysum - exceptValuesSum.Sum();
        }
    }
```

