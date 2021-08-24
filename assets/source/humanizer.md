## Create a sample .NET project

> 1. In Visual Studio Code, select File > Open Folder.
> 2. Create a new folder named DotNetDependencies in the location of your choice, and then click Select Folder.
> 3. Open the integrated terminal from Visual Studio Code by selecting View > Terminal from the main menu.
> 4. In the terminal window, copy and paste the following command.


## Title: Add a NuGet package by using the .NET Core tool.

```C#
class Program{
        static void Main(string[] args){
            Console.WriteLine("Quantities: ");
            // method caling
            HumanizerQuantities();

            // method caling
            Console.WriteLine("\nDate/Time Manipulation");
            HumanizerDates();
        }
        static void HumanizerQuantities(){
            // printing Quantity.
            Console.WriteLine("case".ToQuantity(0));
            Console.WriteLine("case".ToQuantity(1));
            Console.WriteLine("case".ToQuantity(5));
            Console.WriteLine("case".ToQuantity(9));
        }

        static void HumanizerDates(){
            // printing the hours format(in Terms)
            Console.WriteLine(DateTime.UtcNow.AddHours(-24).Humanize());
            Console.WriteLine(DateTime.UtcNow.AddHours(-2).Humanize());

            // printng days format (weekly bases)
            Console.WriteLine(TimeSpan.FromDays(3).Humanize());
            Console.WriteLine(TimeSpan.FromDays(16).Humanize());
            Console.WriteLine(TimeSpan.FromDays(-13).Humanize());
            Console.WriteLine(TimeSpan.FromDays(21).Humanize());
        }
    }

        //output:
            //Quantities: 
            // 0 cases
            // 1 case
            // 5 cases
            // 9 cases

            // Date/Time Manipulation
            // yesterday
            // 2 hours ago
            // 3 days
            // 2 weeks
            // 1 week
            // 3 weeks
```

### Install Package using  
```Shell 
dotnet add package <package-name> --version <version number/range>
```

### Running command
`dotnet run <fileName>`
> by default `<fileName>`: Program.cs


### Here are some examples that can configure for `major`, `minor`, or `patch` version:

#### Accepts any version 6.1 and later.
```XML 
<PackageReference Include="ExamplePackage" Version="6.1" />
```

#### Accepts any 6.x.y version.
```XML
<PackageReference Include="ExamplePackage" Version="6.*" />
<PackageReference Include="ExamplePackage" Version="[6,7)" />
```
#### Accepts any later version, but not including 4.1.3. Could be used to guarantee a dependency with a specific bug fix.
```XML
    <PackageReference Include="ExamplePackage" Version="(4.1.3,)" />
```
#### Accepts any version earlier than 5.x, which might be used to prevent pulling in a later version of a dependency that changed its interface. However, we don't recommend this form because determining the earliest version can be difficult. 
```XML
<PackageReference Include="ExamplePackage" Version="(,5.0)" />
```
#### Accepts any 1.x or 2.x version, but not 0.x or 3.x and later.
```XML
<PackageReference Include="ExamplePackage" Version="[1,3)" />
```
#### Accepts 1.3.2 up to 1.4.x, but not 1.5 and later.
```XML
<PackageReference Include="ExamplePackage" Version="[1.3.2,1.5)" />
```
##### The `dotnet list package --outdated` command lists outdated packages.
###### Output:
| Top-level Package  | Requested  | Resolved | Latest |
| :----------------- |:----------:| :-------:| ------:|
|      Humanizer     |    2.7.*   |   2.7.9  | 2.8.26 |


> `Requested`: The version or version range that you've specified.</br>
> `Resolved`: The actual version that has been downloaded for the project that matches the specified version.</br>
> `Latest`: The latest version available for update from NuGet.</br>