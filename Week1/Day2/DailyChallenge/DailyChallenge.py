#Challenge 1: Multiples of a Number

number = int(input("Enter a number for multiplier : "))
length = int(input("Enter a number for numbers of multiples you want to print:"))
multiples=list()
for elem in range(1,length+1):
    multiples.append(elem * number)
print(multiples) 

#Challenge 2: Remove Consecutive Duplicate Letters

#Works only if don't want any duplicates letters , irelevant here
# user_string= input("Enter a string :  ")
# uniques = set()  # Store the uniques letters
# new_string = []  # To conserve the order
# for lettre in user_string:
#     if lettre not in uniques:
#         new_string.append(lettre)
#         uniques.add(lettre) 

# print("".join(new_string))

user_string=input("Enter a string : ")
new_string=[]
for letter in user_string:
    #if the list is empty or if the letter is the same than the letter we enter just before
    if not new_string or letter!=new_string[-1]:
       new_string.append(letter)
      
print("".join(new_string))