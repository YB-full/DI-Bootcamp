
#Step1 : Representing the Game Board
game_board= [["" for col in range(3) ] for row in range(3)]


#Step 2: Displaying the Game Board
def display_board(game_board):
    print("\n    TIC TAC TOE")
    border = "+" + "-----+" * 3
    print(border)

    for row in game_board:
        print("|", end="")
        for cell in row:
            print(f"  {cell:^2} |", end="")
        print()
        print(border)

    
        


#Step 3:Getting Player Input
def player_input(player):
    while True:
        print(f"\n Player {player}'s turn")
        try:
            row = int(input("Enter a row (1, 2 or 3 ) : "))-1 
            col = int(input("Enter a column(1, 2 or 3) : "))-1

            #Check if the value is out of range
            if row < 0 or row > 2 or col < 0 or col > 2:
                print("Enter a valid number")
                continue

          

            return row, col 
        
        except ValueError:
            print("Enter a valid number.")

          

#Step 4: Checking for a Winner
def check_win(board, player):
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    # Check diagonals
    if all(board[i][i] == player for i in range(3)):
        return True

    if all(board[i][2 - i] == player for i in range(3)):
        return True

    return False
    



# Step 5: Checking for a Tie 
def check_tie(board,player):
    if check_win(board,player) == False:   
        for row in board:
            for cell in row:
                if cell == '':
                    return False
         
    return True        
            

# Step 6: The Main Game Loop   
def play():
    print("Welcome To TIC TAC TOE !")
    player = "X"
    while True :
         
        display_board(game_board)
        row, col = player_input(player)
        
    
        if game_board[row][col] != '':
                print("The cell is not empty ! Try another cell")
                continue
            
        game_board[row][col] = player
            

        #check for a winner    
        if check_win(game_board,player)==True :
            display_board(game_board)
            print(f"The player {player}  wins !")
            return
        #check for a tie        
        if check_tie(game_board,player) ==True: 
            display_board(game_board)
            print(f"No moves left. It's a tie ")
            return

        # Switch player
        if player == "X":
                player = "O"
        else:
                player = "X"            
                

            
play()
   
    
