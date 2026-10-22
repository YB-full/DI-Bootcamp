import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

# Test on a small list
#list_of_numbers = [1,2,3,4,5]
#target_number   = 7

def pairs_numbers(target,list_of_numbers):
    total_pairs=set()
    result_pairs=[]
    for a in list_of_numbers:
        b= target-a
        if b in total_pairs:
            result_pairs.append((a,b))
            print(f"{a} and {b} sums to the target_number : {target}")    
        else:
            total_pairs.add(a)    

    return result_pairs
    

pairs_numbers(target_number,list_of_numbers)


