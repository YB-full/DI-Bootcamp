MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''   


# Step 1: Convert matrix_string to a 2D list (matrix)
matrix = [list(row) for row in MATRIX_STR.strip().split('\n')]

# Step 2: Iterate through columns
decoded = ""
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        decoded += matrix[row][col]

# Step 3: Filter alpha characters
filtered = ""

for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalpha():
            filtered += char


# Step 4: Replace symbols with spaces
decoded_message = ""
previous_was_alpha = False

for char in decoded:
    if char.isalpha():
        decoded_message += char
        previous_was_alpha = True
    else:
        if previous_was_alpha:
            decoded_message += " "
        previous_was_alpha = False


# Step 5: Print the decoded message
print(decoded_message)
