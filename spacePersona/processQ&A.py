import testDistribution;

f = open("q&A.txt", "r")

output = open("q&AhtmlFormat","w")

section = 0;

qNumber = 0;
aNumber = 0;

for line in f.readlines():

    if section%5 == 0:
        output.write("<section v-if=\"qShowIndex === "+ str(qNumber) + "\">\n");
        qNumber = qNumber +1;
        output.write("\t<h1>");
        output.write(line.strip().replace("-","")+"</h1>");
        output.write("\n");
        output.write("\t<div class=\"Options\">\n")
    else:
        onclickAction = "qShowIndex+=1;";

        for i in range(0,8):
            if testDistribution.questions[qNumber-1][aNumber][i] > 0:
                onclickAction = onclickAction + " properties["+str(i)+"]+=" + str(testDistribution.questions[qNumber-1][aNumber][i]) + ";";

        output.write("\t\t<button v-on:click=\""+onclickAction+"\">");
        output.write(line.strip().replace("-",""));
        output.write("</button>")
        output.write("\n");
        aNumber = aNumber +1;

    if section%5 == 4:
        output.write("\t</div>\n")
        output.write("</section>\n");
        aNumber = 0;

    section = section +1;
