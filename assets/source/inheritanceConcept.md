## Inheritance Concept
> The following are some key points about inheritance:
> 1. C# does not support multiple inheritances of classes, the same thing can be done using interfaces.
> 2. Private members are not accessed in a derived class when one class is derived from another.
> 3. keyword ` : ` is used to inherit the class.
```C#
// General example
public class Base{
    ....
}
public class Derived : Base{
    ....
}
```

### Single Inheritance
```C#
class Program{
            // Single inheritance
            public class AccountCreditInfo{ // base class
                public string Credit(){
                    return "balance is credit";;
                }
            }
            public class DebitInfo : AccountCreditInfo{ // derived class
                public string Debit(){
                    Credit();
                    Console.Write($"Calling {Credit()} than ");
                    return "balance is debited";
                }
            }
        static void Main(string[] args){
            DebitInfo myDebit = new DebitInfo();
            Console.WriteLine("DebitInfo Class Object Calling...");
            Console.WriteLine($"{myDebit.Debit()}");
        }
    }
```


### Multilevel Inheritance
```c#
class Program{
            // Multilevel inheritance
            public class BaseClass{
                public String Hello(){
                    return "Parent's Hello Method";
                }
            }
            public class ChildClass : BaseClass{
                public string World(){
                    Console.WriteLine($"Calling {Hello()} than ");
                    return "Child's World Method";
                }
            }
            public class SecondChildClass : ChildClass{
                public string Hi(){
                    Console.WriteLine($"Calling {Hello()} and \n{World()} than ");
                    return "SecondChild's Hi Method";
                }
            }
        static void Main(string[] args){
            SecondChildClass myObj = new SecondChildClass();
            Console.WriteLine($"{myObj.Hi()}");
        }
    }
```

### Hierarchical Inheritance
```c#
class Program{
            // Hierarchical inheritance
            class BaseClass {  
                public string Msg() {  
                    return "This is BaseCass msg Method";  
                }  
            }  
            class DerivedClassOne : BaseClass {  
                public string Info() {  
                    Console.WriteLine($"Calling {Msg()} than");  
                    return "This is DerivedClassOne info Method";  
                }
            }  
            class DerivedClassTwo : BaseClass {  
                public string GetInfo()  {  
                    Console.WriteLine($"Calling {Msg()} than");  
                    return "this is DerivedClassTwo getinfo Method";  
                }  
            }  
        static void Main(string[] args){
            DerivedClassOne classOneObj = new DerivedClassOne();
            Console.WriteLine($"{classOneObj.Info()}");

            DerivedClassTwo classTwoObj = new DerivedClassTwo();
            Console.WriteLine($"{classTwoObj.GetInfo()}");
        }
    }
```

### Multiple Inheritance
```c#
class Program{
        // Multiple inheritance
        public interface StringInput{
            string SetString(string str);
        }
        public interface AmountInput{
            int GetAmount(int amount);
        }
        public class UserInput : StringInput, AmountInput{ // implementation
            public string SetString(string str){
                return str;
            }
            public int GetAmount(int amount){
                return amount;
            }
        }
        static void Main(string[] args){
            UserInput userObj = new UserInput();
            Console.WriteLine(
                "{0} and we have $ {1}.", 
                userObj.SetString("This is the SetString Method"),
                userObj.GetAmount(100)
            );
        }
    }
```