# Console Application using c#

## create a *namespace* ConsoleCsharpApp
> it contain all the application classes.

### Create Class Program.cs
> it contain gerneral code to fetch from other classes

```c#
class Program
    {
        static void Main(string[] args)
        {
            do
            {
                // creating object of classes.
                EnumConcept enumObj = new EnumConcept();
                ReverseStringConcept revString = new ReverseStringConcept();
                ReverseNumberConcept revNumber = new ReverseNumberConcept();
                RandomNumberConcept randNumber = new RandomNumberConcept();
                SecondLargestMarksConcept secondLargest = new SecondLargestMarksConcept();
                CountOccuranceConcept countOccurance = new CountOccuranceConcept();
                SwappNumberConcept swappNum = new SwappNumberConcept();
                SumUserRangeNumberConcept sumNum = new SumUserRangeNumberConcept();
                TimeZoneConcept timeObj = new TimeZoneConcept();

                Console.WriteLine("\n\nEnter Choice From the list Given Below!!");
                // menu list in one string
                string menuList = $@"
SumNatural or 1 - Display first n Natural numbers except user-input and its Sum - dynamicaly

Swapp or 2 - Swap two numbers without using third variable.

CountItem or 3 - Count the number of userInput in list of provided numbers.

RevNumber or 4 - Get the number and print the revers of the number.

RevString or 5 - Get the String and print the revers of the String.

RandomNum or 6 - Generate (min, max) range random numbers.

SecondHighestMarks or 7 - capture the Student marks and print the second highest student marks. Using object-oriented programming.

Enum or 8 - Any Enum with 5 members and if we print all members the output should be 0,5,6,10,11.

TimeZone or 9 - Enter Manual time zone to see the convertion in differnt time zone (Default: currentTime).

";
                Console.Write(menuList);
                bool isValidInput = false;
                while(!isValidInput){
                    try
                    {
                        Console.Write("\nChoice = ");
                        string choice = Console.ReadLine();
                        switch (choice.ToLower())
                        {
                            case "sumnatural":
                            case "1":
                                if(sumNum.SumUserRangeNumberResult()) isValidInput = !isValidInput;
                                break;

                            case "swapp":
                            case "2":
                                if(swappNum.SwappNumberResult()) isValidInput = !isValidInput;
                                break;

                            case "countitem":
                            case "3":
                                if (countOccurance.CountOccuranceResult()) isValidInput = !isValidInput;
                                break;

                            case "revnumber":
                            case "4":
                                if (revNumber.reverseNumberResult()) isValidInput = !isValidInput;
                                break;

                            case "revstring":
                            case "5":
                                if (revString.reverseStringResult()) isValidInput = !isValidInput;
                                break;


                            case "randomnum":
                            case "6":
                                if (randNumber.randomNumberResult()) isValidInput = !isValidInput;
                                break;
                            case "secondhighestmarks":
                            case "7":
                                if (secondLargest.SecondLargestMarksResult()) isValidInput = !isValidInput;
                                break;

                            case "enum":
                            case "8":
                                if (enumObj.EnumConceptFunction()) isValidInput = !isValidInput;
                                break;

                            case "timezone":
                            case "9":
                                if (timeObj.TimeZoneResult()) isValidInput = !isValidInput;
                                break;

                            default: Console.WriteLine("Invalid Choice");
                                continue;
                        }
                    }
                    catch (Exception e) { Console.WriteLine(e.Message); }
                }
                Console.Write("\n Press Enter to End the Application...");

            } while (Console.ReadKey().Key != ConsoleKey.Enter);
        }
    }
```


### create classs *`SumUserRangeNumberConcept.cs`*
```c#
class SumUserRangeNumberConcept
    {
        private int getSize()
        {
            Console.WriteLine("\n\n");
            Console.Write("Enter Size of Expected Value: ");
            return Convert.ToInt32(Console.ReadLine());
        }
        public bool SumUserRangeNumberResult()
        {

            // input for start and end
            Console.Write("Enter starting and Ending Value of Natural no list: ");
            var data = Console.ReadLine().Split(' ');
            var startNum = int.Parse(data[0]);
            var endNum = int.Parse(data[1]);

            int size = getSize();
            Console.Write("Enter Expected Values: ");
            int[] exceptValues = expectedArray(Console.ReadLine().Split(' '), size);
            if (checkDataInput(startNum) && checkDataInput(endNum) && exceptValues[0] != 0)
            {
                // print the nautural num except {user input} - dynamic input
                int dynamicArraySum = printNaturalDynamically(startNum - 1, endNum, exceptValues);
                // sum of nautral number except {user input} - custome input
                int result = printNaturalWithException(dynamicArraySum, exceptValues);
                Console.Write($"{result}");
                return true;
            }
            return false;
        }
        private bool checkDataInput<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;

            return false;
        }
        private int[] expectedArray(string[] array, int size)
        {
            int[] intArray = new int[size];
            for (int i = 0; i < size; i++)
            {
                try
                {
                    intArray[i] = int.Parse(array[i]);
                    if (checkDataInput(int.Parse(array[i]))) return new int[] { 0 };
                }
                catch (Exception e) { Console.WriteLine(e.Message); }
            }
            return intArray;
        }

        private int printNaturalDynamically(int start, int end, int[] exceptValues)
        {
            Console.WriteLine("\nTitle: Display natural numbers except userInput - Dynamically");
            int arraySum = 0;
            while (start++ < end)
            {
                arraySum += start;
                bool isSkipElement = Array.Exists(exceptValues, element => element == start);
                if (isSkipElement) continue;
                Console.Write($" {start} ");
            }
            return arraySum;
        }

        private int printNaturalWithException(int arraysum, int[] exceptValuesSum)
        {
            Console.Write("\n\nTitle: Sum of Natural Numbers except userInput: ");
            return arraysum - exceptValuesSum.Sum();
        }
    }
```

### create class `CountOccuranceConcept`
```c#
class CountOccuranceConcept
    {
        private int getSize()
        {
            //size of list
            Console.WriteLine("\n\n");
            Console.Write("\nEnter Size of List: ");
            return Convert.ToInt32(Console.ReadLine());
        }

        private int[] getListValues()
        {
            int size = getSize();
            // taking list
            Console.Write("Enter the list Values: ");
            int[] listValues = listArray(Console.ReadLine().Split(" "), size);
            return listValues;
        }
        private int getCountOccurance()
        {
            Console.Write("Occuracne Count: ");
            int input = Convert.ToInt32(Console.ReadLine());
            return input;
        }

        public bool CountOccuranceResult()
        {
            //input
            int size = getSize();
            int[] listValues = getListValues();
            int input = getCountOccurance();
            if (checkDataInput(size) && listValues[0] != 0)
            {
                // calling the methods
                int result = inputOccurrence(listValues, size - 1, input);
                Console.Write($"Result: {result}");
                return true;
            }
            return false;
        }

        private bool checkDataInput<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;

            return false;
        }

        private int[] listArray(String[] list, int size)
        {
            int[] intList = new int[size];
            for (int i = 0; i < size; i++)
            {  // updated March 23, 2021
                try
                {
                    intList[i] = int.Parse(list[i]);
                    if (checkDataInput(int.Parse(list[i]))) return new int[] { 0 };
                }
                catch (Exception ex) { Console.WriteLine(ex.Message); }
            }
            return intList;
        }

        private int inputOccurrence(int[] list, int size, int input)
        {
            int countInputOccurrence = 0;
            int index = -1;
            while (index++ < size)
            {
                if (list[index] == input) countInputOccurrence += 1;
            }
            return countInputOccurrence;

            // or can use one line code
            // return list.Count(ele => ele==input);
        }
    }
```

### create class `EnumConcept`
```c#
class EnumConcept
    {
        enum AnimeMovies
        {
            YourName,
            GardenOfWords = 5,
            SpritedAway,
            SilentVoice = 10,
            CastleInTheSky
        };
        public bool EnumConceptFunction()
        {
            Console.WriteLine("\n\n");
            Console.WriteLine("Title: Write any Enum with 5 members and if we print all members the output should be 0,5,6,10,11.");

            // enum call
            foreach (int movie in Enum.GetValues(typeof(AnimeMovies)))
                Console.Write($"{movie}, ");
            return true;
        }
    }
```

### create class `RandomNumberConcept`
```c#
 class RandomNumberConcept
    {
        private int getSize()
        {
            //input
            Console.WriteLine("\n\n");
            Console.Write("How many number You want to generate: ");
            return Convert.ToInt32(Console.ReadLine());
        }

        public bool randomNumberResult()
        {
            int size = getSize();
            // input for start and end
            Console.Write("Enter min and max Value to Generate Random no: ");
            var data = Console.ReadLine().Split(' ');
            var minNum = int.Parse(data[0]);
            var maxNum = int.Parse(data[1]);

            if (checkDataInput(minNum) && checkDataInput(maxNum))
            {
                // calling the methods
                Console.WriteLine($"{size} random integer values:");
                generateRandomNum(size, minNum, maxNum);
                return true;
            }
            return false;
        }
        private bool checkDataInput<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;

            return false;
        }
        private void generateRandomNum(int size, int minLimit, int maxLimit)
        {
            try
            {
                var rand = new Random();
                for (int num = 0; num < size; num++)
                    Console.Write("{0,5:N0}", rand.Next(minLimit, maxLimit));

            }
            catch (Exception e) { Console.WriteLine(e.Message); }
        }
    }
```

### create class `ReverseNumberConcept`

```c#
 class ReverseNumberConcept
    {
        private int getNumber()
        {
            Console.WriteLine("\n\n");
            Console.WriteLine("Title: Write a program to get the number and print the revers of the number\n");
            Console.Write("Enter Number: ");

            return Convert.ToInt32(Console.ReadLine());
        }
        public bool reverseNumberResult()
        {
            // calling the methods
            int number = getNumber();
            if (checkDataInput(number))
            {
                int result = reverseNumber(number);
                Console.Write($"Result: {result}");
                return true;
            }
            return false;
        }

        public bool checkDataInput<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;

            return false;
        }

        private int reverseNumber(int input)
        {
            int revNumber = 0;
            int index = input;
            while (index != 0)
            {
                int removeLastNum = index / 10;
                revNumber = (revNumber - removeLastNum) * 10 + index;
                index = removeLastNum;
            }
            return revNumber;
        }
    }
```

### create class `ReverseString`
```c#
class ReverseStringConcept
    {
        private string getWord()
        {
            //input
            Console.WriteLine("\n\n");
            Console.WriteLine("Title: Write program to given string reverse");
            Console.Write("Enter word: ");
            string word = Console.ReadLine();

            return word;
        }

        public bool reverseStringResult()
        {
            // calling the methods
            string word = getWord();
            string result = reverseString(word, word.Length);
            Console.Write($"Result: {result}");
            return true;
        }

        private string reverseString(string input, int size)
        {
            string revString = "";
            while (size-- > 0)
                revString += input[size];
            return revString;
        }
    }
```

### create class `SecondLargestMarksConcept`

```c#
class SecondLargestMarksConcept
    {
        public int getSize()
        {
            //input
            Console.WriteLine("\n\n");
            Console.Write("\nHow many Student taken the test: ");
            return Convert.ToInt32(Console.ReadLine());
        }

        public bool SecondLargestMarksResult()
        {
            int size = getSize();
            Console.Write("Enter List of Students Marks: ");
            int[] studentMarks = marksArrayList(Console.ReadLine().Split(" "), size);

            // calling the methods
            if (studentMarks[0] != 0)
            {
                int result = secondLargest(studentMarks, size);
                if (result == 0) Console.WriteLine("No Second Largest Element is Present");
                Console.WriteLine($"Result: {result}");
                return true;
            }
            return false;
        }

        private bool checkValidInput<T>(T input)
        {
            if (input.GetType() != typeof(int)) return true;

            return false;
        }

        private int[] marksArrayList(string[] marks, int size)
        {
            int[] marksArray = new int[size];
            for (int i = 0; i < size; i++)
            {
                try
                {
                    marksArray[i] = int.Parse(marks[i]);
                    if (checkValidInput(int.Parse(marks[i]))) return new int[] { 0 };
                }
                catch (Exception e) { Console.WriteLine(e.Message); }
            }
            return marksArray;
        }

        private int secondLargest(int[] marks, int size)
        {
            int first, second;
            int i = -1;
            if (size < 2) return 0;

            first = second = int.MinValue;
            while (i++ < size - 1)
            {
                if (marks[i] > first)
                {
                    second = first;
                    first = marks[i];
                }
                else if (marks[i] > second && marks[i] != first) second = marks[i]; //when first and second have same value or repeated value.
            }
            if (second == int.MinValue) return 0;  // no second largest present
            return second; // second largest present
        }
    }
```

### Create class `TimeZoneConcept`
```c#
 class TimeZoneConcept
    {
        public bool TimeZoneResult()
        {
            Console.WriteLine("\n\n");
            Console.WriteLine("Want to Enter Time: \n1 or Manual: Manually\n2 or any key. CurrentTime");
            var choice = Console.ReadLine();
            switch (choice.ToLower())
            {
                case "1":
                case "manual":
                    Console.WriteLine("Format: \nYear Month Day Hours Minutes Seconds");
                    Console.WriteLine("Format: \nyyyy mm dd hh mm ss");
                    var time = Console.ReadLine().Split(" ");
                    int[] timeFormat = new int[time.Length];
                    for (int i = 0; i < time.Length; i++)
                    {
                        timeFormat[i] = int.Parse(time[i]);
                        if (checkDataType(timeFormat[i]))
                        {
                            timeZoneConvertTo(timeFormat);
                            return true;
                        }
                    }
                    break;
                default:
                    timeZoneConvertTo(new int[] { });
                    return true;
            }
            return false;
        }
        private static bool checkDataType<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;
            return false;
        }
        private static void timeZoneConvertTo(int[] timeFormat)
        {
            DateTime dateTimeInput;
            if (timeFormat.Length > 1)
            {
                // yyyy-mm-dd
                int year = timeFormat[0]; int month = timeFormat[1]; int day = timeFormat[2];
                // hh-mm-tt
                int hour = timeFormat[3]; int minute = timeFormat[4]; int second = timeFormat[5];
                dateTimeInput = new DateTime(year, month, day, hour, minute, second);
            }
            dateTimeInput = new DateTime();
            try
            {
                foreach (var sysTimeZone in TimeZoneInfo.GetSystemTimeZones())
                {
                    Console.WriteLine("The date and time are {0} UTC of {1}",
                    TimeZoneInfo.ConvertTimeToUtc(dateTimeInput, sysTimeZone), sysTimeZone.Id);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            // or specific approach
            //  catch(TimeZoneNotFoundException){
            //     Console.WriteLine($"'{countryId}' Standard Time zone Does't exit in Registry.");
            // }catch(InvalidTimeZoneException){
            //     Console.WriteLine($"'{countryId}' Standard Time zone Data Corrupted in Registry.");
            // }
        }
    }
```

### Create class `SwappNumberConcept`

```c#
class SwappNumberConcept
    {
        private int getNumber()
        {
            return Convert.ToInt32(Console.ReadLine());
        }
        public bool SwappNumberResult()
        {
            Console.WriteLine("\n\n");
            Console.WriteLine("Program to Swapp Two numbers.");
            Console.Write("Num 1: ");
            int numOne = getNumber();
            Console.Write("Num 2: ");
            int numTwo = getNumber();
            // calling method
            if (checkDataType(numOne) && checkDataType(numTwo))
            {
                swapingOfNumbers(numOne, numTwo);
                return true;
            }
            return false;
        }
        private bool checkDataType<T>(T input)
        {
            if (input.GetType() == typeof(int)) return true;
            return false;
        }

        private void swapingOfNumbers(int numOne, int numTwo)
        {
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