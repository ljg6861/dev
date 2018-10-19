#Possible chat bot?
#6/15/2018


def decipher(string):
    string = string.strip()
    string = list(string)
    for word in string:
        number = assign_number(word)
        

def assign_number(word):
    word = word.split()
    total = 0
    for i in word:
        number = ord(word)
        total = total + number
    return total