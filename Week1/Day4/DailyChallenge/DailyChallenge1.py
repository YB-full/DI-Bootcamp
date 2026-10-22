menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

#Print the menu
def show_menu(menu_dict):
    if not menu_dict: 
        print("The menu is empty.")
        
    else:
        print("Current menu :")
        for drink, price in menu_dict.items():
            print(f"{drink} - {price}.2f ₪") 
  

#Add item 
def add_item(menu_dict):
    drink=input("Enter a new name of drink : ")
    price=float(input("Enter a price :"))
    
    if drink in menu_dict:
        print("Item already exists!")
        menu.popitem()
    else:
        menu_dict[drink] =price
        print(f"{drink} added !") 



#Update price
def update_price(menu_dict):
    drink=input("Enter drink name you want to update : ")
    if drink in menu_dict :
        price=float(input("Enter a new price :"))
        menu_dict[drink] =price
        print("Price updated!")
    else:
        print("Item not found.")    



#delete item
def delete_item(menu_dict):
    drink=input("Enter drink name you want to delete : ")
    if drink in menu_dict :
            del menu_dict[drink]
            print("Item deleted.")
    else:
            print("Item not found.")  


#show menu options
def show_options():
    print("What would you like to do ?")
    print("1.Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")

def run_coffee_shop():
    while True:
        show_options()
        user_input=input()
        if user_input == "1":
            show_menu(menu)
        elif user_input == "2":
            add_item(menu)
        elif user_input == "3":
            update_price(menu)
        elif user_input == "4":
            delete_item(menu)
        elif user_input == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.") 


run_coffee_shop()            



  

    