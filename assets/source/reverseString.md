## <b>Title</b>: Write program to given string reverse.

```c#
class Program{
        static void Main(string[] args){
            // Write program to given string reverse .
            Console.WriteLine("Title: Write program to given string reverse");
            try{
                //input
                Console.Write("Enter word: ");
                string word = Console.ReadLine();

                // calling the methods
                string result = reverseString(word, word.Length);
                Console.Write($"Result: {result}");
                
            } catch(Exception e){Console.WriteLine(e.Message);}
        }
    
        private static string reverseString(string input, int size){
            string revString = "";
            while(size-- > 0)
                revString += input[size];
            return revString;
        }
    }
```