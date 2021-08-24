## Title: Swap two numbers without using third variable.

```c#
class Program{
        static void Main(string[] args){
            // Swap two numbers without using third variable
            Console.WriteLine("Title: Swap two numbers without using third variable");
            bool inValidInput = false;
            while(!inValidInput){
                try{
                        Console.Write("Num 1: ");
                        int numOne = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Num 2: ");
                        int numTwo = Convert.ToInt32(Console.ReadLine());
                        // calling method
                        if (checkDataType(numOne) && checkDataType(numTwo)){
                            swapingOfNumbers(numOne, numTwo);
                            inValidInput = true;
                        }

                }catch(Exception e){
                    Console.WriteLine($"Error Msg: {e.Message}");
                }
            }
        }

        private static bool checkDataType<T>(T input){
            if (input.GetType() == typeof(int)) return true;
            return false;
        }

        private static void swapingOfNumbers(int numOne, int numTwo){
            Console.WriteLine("\nBefore SWaping");
            Console.WriteLine($"Num 1: {numOne}\nNum 2: {numTwo}");

            //swapping
            numOne = numOne ^ numTwo;
            numTwo = numOne ^ numTwo;
            numOne = numOne ^ numTwo;

            //printing
            Console.WriteLine("\nAfter SWaping");
            Console.WriteLine($"Num 1: {numOne}\nNum 2: {numTwo}");
        }
    }
```