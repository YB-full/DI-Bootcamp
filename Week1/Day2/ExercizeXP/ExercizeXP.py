#Exercise 1: Favorite Numbers
my_fav_numbers=set((9,11,55,104)) 
my_fav_numbers.add(2)
my_fav_numbers.add(3)
my_fav_numbers.remove(3)
print(my_fav_numbers)

friend_fav_numbers=set((3.14,-5,666,9))
print(friend_fav_numbers)

our_fav_numbers= my_fav_numbers.union(friend_fav_numbers) 
#our_fav_numbers= my_fav_numbers| friend_fav_numbers #also work 
print(our_fav_numbers)

# Exercise 2: Tuple

my_tuple=(1,5,8,9)

#my_tuple.append(1)
#Attribute error  append doesn't exist for tuples , because it is an immutable
#tuple object has no attribute append.
# Tuples are unchangeable, meaning that we cannot change,
# add or remove items after the tuple has been created. 
# So trying to add items cannot work on my_tuple

# Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana" ) 
basket.remove("Blueberries")   
basket.append("Kiwi")    
basket.insert(0,"Apples")  
print(basket.count("Apples"))
basket.clear()

print(basket)

#Exercise 4: Floats

#A float is a data type used to represent real numbers that have a decimal point like 3.14 . 
#The difference with a int is that int represent whole numbers,precise numbers .
# Floats is used when we need fractional precision.

my_list=list((1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5))
print(my_list)

#Exercise 5: For Loop

result=[]
for i in range(1,21):      
    result.append(i) 
print(result) 

result2=[]
for i in range(1,21):
    if i%2 ==0:
        result2.append(i)
print(result2)        

# Exercise 6: While Loop
user_name=input("Enter your name : ")
while True:
    if len(user_name) < 3 or user_name.isalpha()== False:
        user_name=input("Give the correct name : ")
        
    else:
        print("Thank you") 
        break  

         
# Exercise 7: Favorite Fruits
favorite_fruits=list(input("Enter your favorite fruits (separated by spaces):").split())
any_fruit=input("Enter the name of any fruit : ")
if any_fruit in favorite_fruits :
    print("You chose one of your favorite fruits! Enjoy!") 
else:
    print("You chose a new fruit. I hope you enjoy it!") 

#Exercise 8: Pizza Toppings
prompt= "\nEnter pizza toppings: "
prompt+="\nEnter'quit' while you are finished: "
pizza_toppings=[]
while True:
    topping = input(prompt)
    if topping == 'quit' or topping == " ":
        break
    else: 
        pizza_toppings.append(topping)
        print(f"Adding {topping} to your pizza")

total_cost = 10 + (len(pizza_toppings) * 2.50) 
print(f"All your toppings are :{pizza_toppings}")
print(f"The total cost of your pizza is : {total_cost:.2f}")     
       

#Exercise 9: Cinemax Ticket
prompt = "\nHow old are you?"
prompt += "\nEnter 'quit' when you are finished. "
family_cost=[]
while True:
    age = input(prompt)
    if age == 'quit' or age == " ":
        continue
    if age.isdigit():
        age = int(age)
        if age < 3:
            family_cost.append(0)
        elif age < 13:
            family_cost.append(10)
        else:
            family_cost.append(15)
    else:
        print("Please enter an age :" )        
        
print(f"Total family cost:${sum(family_cost)}")               

#Bonus:
cost=[]
age=int(input("Enter your age if you want to by a movie ticket "))
while True:
    age=int(input("Enter your age if you want to by a movie ticket "))
    if  15 <age < 20:
       cost.append(15)
    else:
        cost.remove(age) #error , because cost list is empty  
    break
print(f"Total family cost:${sum(cost)}")   
    




