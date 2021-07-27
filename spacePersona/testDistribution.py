# This script stores the property information of each answer of the questions

from random import randrange;
# Order:
# 0 Academic
# 1 Resource
# 2 Engineering
# 3 Saving
# 4 Romantic
# 5 Vision
# 6 Practical
# 7 Careful

properties = [0,0,0,0,0,0,0]

 #    0,1,2,3,4,5,6,7
q1 =[[1,0,0,0,0,0,0,0],
     [0,1,0,0,0,1,0,0],
     [0,0,0,2,0,2,0,1],
     [0,0,0,0,1,0,0,0]];

q2 =[[0,1,0,0,0,0,1,0],
     [0,0,2,0,0,0,0,0],
     [0,0,0,1,0,0,0,0],
     [1,0,0,0,0,0,0,0]];

q3 =[[0,0,1,0,0,1,0,0],
     [0,0,0,0,0,0,0,2],
     [0,1,0,0,0,0,0,0],
     [0,0,0,0,1,0,0,0]];

q4 =[[1,0,0,0,0,0,0,0],
     [0,0,1,0,0,0,0,0],
     [0,0,0,1,1,0,0,0],
     [0,1,0,0,0,0,0,0]];

q5 =[[0,0,0,0,0,0,2,0],
     [0,0,0,0,0,0,1,0],
     [0,0,0,0,0,2,0,0],
     [0,0,1,0,0,0,0,0]];

q6 =[[0,0,0,0,0,0,1,1],
     [0,0,0,0,1,0,0,0],
     [0,0,0,0,0,0,0,1],
     [0,0,0,1,0,0,0,1]];

q7 =[[0,1,0,0,0,0,0,0],
     [1,0,0,0,0,0,0,0],
     [0,0,1,0,0,0,0,1],
     [0,0,0,0,0,0,1,0]];

q8 =[[1,0,0,0,0,0,0,0],
     [0,1,0,0,0,1,0,0],
     [0,0,0,0,1,0,0,0],
     [0,0,0,1,1,0,0,0]];


questions = [q1,q2,q3,q4,q5,q6,q7,q8];



def testTotalValue():
    totalProperty = [0,0,0,0,0,0,0,0];

    for i in range(0,8):
        for j in range(0,4):
            totalProperty = map(sum, zip(questions[i][j],totalProperty));

    print("The total available for each property is:"+str(totalProperty)+"\n");

def generateTestValue():
    testValue = [0]*8;
    for i in range(0,8):
        randValue = randrange(0,4);
        testValue[i] = randValue;

    return testValue;

def testDistrubution():

    distribution = [0]*8;

    for i in range(0,10000):

        # Initialize values
        result =[0]*8;
        testValue = generateTestValue();

        for q in range(0,8):
            result = map(sum, zip(result,questions[q][testValue[q]]));
        
    
        distribution[result.index(max(result))] += 1;
    
    print("The result distribution:"+str(distribution));



testTotalValue();
testDistrubution();






     
     

     