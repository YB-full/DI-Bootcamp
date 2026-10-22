#Challenge1 :Sorting
user_input=input("Enter words :").replace(","," ").strip()
list_words=(user_input.split())
sorted_list= sorted(list_words)
list_coma=",".join(sorted_list)
print(list_coma)

#Challenge 2: Longest Word
def longest_word(sentence):
    words=sentence.split()
    longest_word=""
    for word in words:
        if len(word)>len(longest_word):
            longest_word=word
            
    print(longest_word)    
    return longest_word

longest_word("Margaret's toy is a pretty doll.")
longest_word("A thing of beauty is a joy forever.")
longest_word("Forgetfulness is by all means powerless!")