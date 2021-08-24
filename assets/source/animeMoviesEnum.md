## *Title*: Write any Enum with 5 members and if we print all members the output should be 0,5,6,10,11.


```c#
class Program{
            enum AnimeMovies{ 
                YourName, 
                GardenOfWords = 5, 
                SpritedAway, 
                SilentVoice = 10, 
                CastleInTheSky 
                };

        static void Main(string[] args){
            Console.WriteLine("Title: Write any Enum with 5 members and if we print all members the output should be 0,5,6,10,11.");

            // enum call
            foreach (int movie in Enum.GetValues(typeof(AnimeMovies)))
                Console.Write($"{movie}, ");
        }
    }
```