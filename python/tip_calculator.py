print("Welcome to the tip calculator!")
total=input("What was the total bill? $")
tip1=(float(total)/100)*30
tip2=(float(total)/100)*20
tip3=(float(total)/100)*15
tip4=(float(total)/100)*10
flag=0
while(flag==0):
    tip=input(f"How much tip would you like to give? ${int(tip1)}, ${int(tip2)}, ${int(tip3)} or ${int(tip4)}? ")
    if(int(tip)!=int(tip1) and int(tip)!=int(tip2) and int(tip)!=int(tip3) and int(tip)!=int(tip4)):
        print("Select from given options")
        flag=0
    else:
        flag=1

num=input("How many people are splitting bill?")
final=(int(total)+int(tip))/int(num)
print(f"Each person should pay: ${int(final)}")