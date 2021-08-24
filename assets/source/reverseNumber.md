## updated veriosn of below program

```c#
class Program{
        static void Main(string[] args){
            // Write a program to get the number and print the revers of the number .
            Console.WriteLine("Title: Write a program to get the number and print the revers of the number");
            bool isValidInput = false;
            while(!isValidInput){
                try{
                    //input
                    Console.Write("Enter Number: ");
                    int number = Convert.ToInt32(Console.ReadLine());
                    if (checkDataInput(number)){
                        // calling the methods
                        int result = reverseNumber(number);
                        Console.Write($"Result: {result}");
                        isValidInput = !isValidInput;
                    }

                } catch (Exception e) {Console.WriteLine(e.Message);}
            }
        }

        private static bool checkDataInput<T>(T input){
            if(input.GetType() == typeof(int)) return true;

            return false;
        }
        private static int reverseNumber(int input){
            int revNumber = 0;
            int index = input;
            while(index != 0){
                int removeLastNum = index/10;
                revNumber = (revNumber - removeLastNum) * 10 + index;
                index = removeLastNum;
            }
            return revNumber;
        }
    }
```

## <b>Title</b>: Write a program to get the number and print the revers of the number.


```c#
class Program{
        static void Main(string[] args){
            // Write a program to get the number and print the revers of the number .
            Console.WriteLine("Title: Write a program to get the number and print the revers of the number");
            try{
                //input
                Console.Write("Enter Number: ");
                int number = Convert.ToInt32(Console.ReadLine());

                // calling the methods
                int result = reverseNumber(number);
                Console.Write($"Result: {result}");

            } catch (Exception e) {Console.WriteLine(e.Message);}
        }
    
        private static int reverseNumber(int input){
            int revNumber = 0;
            int index = input;
            while(index != 0){
                int removeLastNum = index/10;
                revNumber = (revNumber - removeLastNum) * 10 + index;
                index = removeLastNum;
            }
            return revNumber;
        }
    }
```