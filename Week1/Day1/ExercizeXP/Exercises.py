#Exercise 1: Hello World
print("Hello World!\n" * 4)

#Exercise 2: Some Math
print((99**3)*8)

# #Exercise 3: What is the output?
# 5 < 3 #False OK
# 3 == 3 #True OK
# 3 == "3"#False OK
# "3" > 3 # False not OK,TypeError
# "Hello" == "hello"#False OK

# Exercise 4: Your computer brand
computer_brand="DELL"
print(f"I have a {computer_brand} computer.")

# Exercise 5: Your information
name="Yehoudit"
age="24"
shoe_size="37"
info=f"My name is {name}, I am {age} and if you want some unusual information about me I wear size {shoe_size} shoes."
print(info)

#Exercise 6: A & B
#a<b so won't print anything
a=5
b=9
if a > b:
    print("Hello World")

#a>b so will print Hello World
a=17
b=8
if a > b:
    print("Hello World")



#Exercise 7: Odd or Even
number=int(input("Enter a number:"))
if number%2==0:
    print(f"{number} is a even number.")
else:
    print(f"{number} is a odd number.")    

#Exercise 8: What’s your name?
my_name ="Yehoudit"
name=input("What is your name? ")
if name.lower() == my_name.lower():
    print("Hey, do you also get the feeling our parents used the exact same baby name dictionary? ")
else:
    print("Too bad,I think I have a unique name. I can' find a match for it")    

#Exercise 9: Tall enough to ride a roller coaster
height = int(input("What's your height in centimeters?"))
if height>=145 :
    print ("You are tall enough to ride.")
else:
    print("You need to grow some more to ride")     