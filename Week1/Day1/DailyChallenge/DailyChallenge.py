from random import random, shuffle


user_string =input("Enter a string (must be exactly 10 characters long) :")
user_string = user_string.strip()
if len(user_string) <10:
    print("String not long enough.")
elif len(user_string) >10:
    print("String too long.")
else:
    print("Perfect string")  
    print(f"first letter: {user_string[0] }, last letter: {user_string[9]}")
    for i in range(10):
        print(user_string[: i+1])

     
