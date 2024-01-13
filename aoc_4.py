input = '''Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'''

splitLines = input.split('\n')
splitInput = []
sum = 1

for line in splitLines:
    tempSplitLines = line.split(':')[1].split('|')
    tempSplitLines[0] = tempSplitLines[0].strip().split(' ')
    tempSplitLines[1] = tempSplitLines[1].strip().split(' ')
    splitInput.append(tempSplitLines)

for input in splitInput:
    for line in input:
        line.sort()

for input in splitInput:
    print(len(input[1]))
    j = 0
    for x in input[0]:
        while(j < len(input[1]) and input[1][j] < x):
            j+=1
        if(x == input[1][j]):
            sum *= 2
if(sum == 1): sum = 0
print(sum)