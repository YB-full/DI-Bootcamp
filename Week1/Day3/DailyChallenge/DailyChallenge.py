#Challenge 1: Letter Index Dictionary
my_dictionnary = {}
user_word=input("Enter a word :")
keys=str()
values=[]
for letter in user_word:
    if letter in my_dictionnary:
        my_dictionnary['letter']+=1
    else:
        my_dictionnary['letter']=1
        
        
#Challenge 2: Affordable Items

#case1
#items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
#wallet = "$300"

#case2
#items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
#wallet = "$100"

#case3
items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$1"
#items_purchase.update({"Water": 1, "Bread": 3,"TV" : 1000,"Fertilizer":20})
items_purchase_clean={key: int(value.replace("$","").replace(",","")) for key,value in items_purchase.items()}
wallet_clean = int(wallet.replace("$", ""))

basket=[]
for key ,value in items_purchase_clean.items():
    if wallet_clean >= value:
        basket.append(key)
        wallet_clean -= value
if not basket:
    print("Nothing")        
else:
    print(sorted(basket)) 
     
        
    
       
         
        

        


    
