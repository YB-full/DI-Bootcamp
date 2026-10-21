#Exercise 1: What Are You Learning?
def display_message():
    return  "I am learning about functions in Python."

print(display_message())

#Exercise 2: What’s Your Favorite Book?
def favorite_book(title):
    print( f"One of my favorite books is {title}")
favorite_book("Alice in Wonderland") 

#Exercise 3: Some Geography
def describe_city(city,country="Unknown"):
    print( f"{city} is in {country}")
describe_city("Reykjavik", "Iceland")
describe_city("Paris")

#Exercise 4: Random
import random
def my_number(number):
    if number<1 or number>100:
        print(f"Your number {number} is not between 1 and 100")
        return

    n=random.randint(1, 100)
    if n==number:
        print(" Success! ")
    else:
        print(f"Fail! Your {number} , Random number: {n}") 

my_number(5)  
my_number(1)  
my_number(101)  

# Exercise 5: Let’s Create Some Personalized Shirts!
def make_shirt(size, text="I Love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")

make_shirt("large")
make_shirt("medium")
make_shirt(size="large", text="Super Daddy ")    
make_shirt(size="small", text="Hello my dear!")

# Exercise 6: Magicians…
magician_names=['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    for n in magician_names[0::]:
        print(n)

# def make_great(magician_names): #just add The Great aafter each name
#     for n in magician_names[0::]:
#         print(f" {n} The Great")

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = f"{magician_names[i]} The Great" 

    
make_great(magician_names)
print(magician_names)
show_magicians(magician_names)

# if we want to show the name of each magician with The Great added without creating a function 
#show_magicians(list(map(lambda i: i + " The Great",magician_names))) 


#Exercise 7: Temperature Advice
from functools import reduce
def get_random_temp():
    return random.randint(-10,40)

def main():
    temp= get_random_temp()  
    print(f"The temperature right now is {temp} degrees Celsius") 
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0<=temp<16:
        print("Quite chilly! Don’t forget your coat.") 
    elif 16<= temp<24:
        print("Nice weather")     
    elif 24<=temp<32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")
main()        
#odify get_random_temp() to return a random floating-point number 
# using random.uniform() for more accurate temperature values.
#temp_float= lambda a, b : random.uniform(a,b)
#print(reduce(get_random_temp,temp_float)) 

#nstead of directly generating a random temperature, ask the user for a month (1-12) 
# and determine the season using if/elif conditions.
#Modify get_random_temp() to return temperatures specific to each season.

        

