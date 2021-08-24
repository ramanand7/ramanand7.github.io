## Title: update the Approach of Time zone Convertion.
```c#
class Program{
    static void Main(string[] args){
        Console.WriteLine("Title: Write a program to convert date time from one Time zone to other time zone.");
        bool isValidInput = false;
        while(!isValidInput){
            try{
                Console.WriteLine("Want to Enter Time: \n1. Manually\n2. CurrentTime");
                var choice = Console.ReadLine(); 
                switch (Convert.ToInt32(choice)){
                    case 1: 
                        Console.WriteLine("Format: \nYear Month Day Hours Minutes Seconds");
                        var time = Console.ReadLine().Split(" ");
                        int[] timeFormat = new int[time.Length];
                        for(int i = 0; i < time.Length; i++){
                            timeFormat[i] = int.Parse(time[i]);
                            if(checkDataType(timeFormat[i])){
                                timeZoneConvertTo(timeFormat); 
                                isValidInput = true; 
                            }
                        } 
                        break;
                    default: timeZoneConvertTo(new int[]{}); 
                                isValidInput = true;
                                break;
                }
            }catch(Exception e){
                Console.WriteLine(e.Message);
            }
        }
    }
    private static bool checkDataType<T>(T input){
        if (input.GetType() == typeof(int)) return true;
        return false;
    }
    private static void timeZoneConvertTo(int[] timeFormat){
        DateTime dateTimeInput;
        if (timeFormat.Length > 1){
            // yyyy-mm-dd
            int year = timeFormat[0]; int month = timeFormat[1]; int day = timeFormat[2];
            // hh-mm-tt
            int hour = timeFormat[3]; int minute = timeFormat[4]; int second = timeFormat[5];
            dateTimeInput = new DateTime(year, month, day,hour, minute, second);
        }
        dateTimeInput = new DateTime();
        try{
            foreach (var sysTimeZone in TimeZoneInfo.GetSystemTimeZones()){
                Console.WriteLine("The date and time are {0} UTC of {1}",
                TimeZoneInfo.ConvertTimeToUtc( dateTimeInput, sysTimeZone), sysTimeZone.Id);
                }
        }catch (Exception e){
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


## <b>Title</b>: Write a program to convert date time from one Time zone to other time zone.


```C#
class Program{
        static void Main(string[] args){
            Console.WriteLine("Title: Write a program to convert date time from one Time zone to other time zone.");

            // input
            Console.Write("Enter Country who's timezone you wanted to converted: ");
            string country = Console.ReadLine();

            // method call
            timeZoneConvertTo(country);
        }

        private static void timeZoneConvertTo(string country){
            DateTime currentTime = DateTime.Now;
            try{
                Console.WriteLine(TimeZoneInfo.ConvertTimeBySystemTimeZoneId(currentTime, TimeZoneInfo.Local.Id, $"{country} Standard Time"));
            }catch(Exception e){ // gerneral approach
                Console.WriteLine(e.Message);
            }
            // or specific approach
            //  catch(TimeZoneNotFoundException){
            //     Console.WriteLine($"'{country}' Standard Time zone Does't exit in Registry.");
            // }catch(InvalidTimeZoneException){
            //     Console.WriteLine($"'{country}' Standard Time zone Data Corrupted in Registry.");
            // }
        }

    }
```

