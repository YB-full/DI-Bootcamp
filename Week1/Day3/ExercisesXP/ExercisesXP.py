#Exercise 1: Converting Lists into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
my_dictionnary= {i:j for i in keys for j in values }
print(my_dictionnary)

#Exercise 2: Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
ticket_pricing={}
for key ,value in family.items() :
    if value <3 :
        ticket_pricing[key]=0
        zip(family.keys(),ticket_pricing)
        
    elif value >12 :
        ticket_pricing[key]=15
        zip(family.keys(),ticket_pricing)
        
    else:
        ticket_pricing[key]=10 
        zip(family.keys(),ticket_pricing)
print(ticket_pricing)  
print(f"Total cost : ${sum(ticket_pricing.values()):.2f}")       

#Bonus
# name=input("Enter your name ")
# age=input("Enter your age ")
# family={}
# for key,value in family:
#     dict[key]=value


#Exercise 3: Zara
brand= {
    'name': 'Zara' ,
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men, women, children, home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color':{
      'France': 'blue', 
      'Spain': 'red', 
      'US': ['pink', 'green']
    } 
    
}  
brand['number_stores']=2 
print(f"Zara sold clothes for everyone: {brand['type_of_clothes']} .") 
brand["country_creation"]="Spain"   


if 'international_competitors' in brand :
    brand['international_competitors'].append("Desigual") 


del brand['creation_date']

print(brand['international_competitors'].pop())
print(brand['major_color']['US'])
print(len(brand.keys()))
print(brand.keys())

#Bonus 
# works without the del statement of deletinf creation_date
# keys_to_copy=['creation_date','number_stores']
# more_on_zara={key: brand[key] for key in keys_to_copy}
# print(more_on_zara.items())


#Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# for item in users.items():
#     (my_key,my_value)=item
# print(users) 


users_dictionnary1={key: value for ( value,key) in  enumerate(users)}
users_dictionnary2={key: value for (key,value) in  enumerate(users) }
users_dictionnary3={key: value for ( value,key) in  enumerate(sorted(users))}
print(users_dictionnary1)
print(users_dictionnary2)
print(users_dictionnary3)