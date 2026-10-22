import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

hidden_word=[i if i==" " else "*"  for i in word]


def update_hidden_word(word,hidden_word,letter):

    for i in range(len(word)):
        if letter == word[i]:
            hidden_word[i]=letter
    print(hidden_word) 

def get_user_input(guessed_letters):
    
    while True:
        letter = input("Enter a letter: ").lower()
        if letter in guessed_letters:
            print(f"You already look for this letter: {letter}")
            continue
        else:    
            guessed_letters.add(letter)
            return letter

def play():
    guessed_letters=set()
    body_part=["head","body", "left arm", "right arm", "left leg", "right leg"]
    print(hidden_word)
    while "*" in hidden_word and body_part :
        letter=get_user_input(guessed_letters)
        if letter in word:
            update_hidden_word(word,hidden_word,letter)
            
        else:
            body_part.pop(0)
            print(hidden_word)
            print("Wrong letter !")
            print (f"Remainding body parts : {body_part}")

    if "*" not in hidden_word :
        print("Congratulations! You won !")
    else:
        print(f"Game over! The word was : {word}")    
    


play()