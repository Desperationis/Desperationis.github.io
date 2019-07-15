from PIL import Image
import os

read = open("projects.html", "r")
write = open("testProjects.html","w+")

im = Image.open("gradient.png")
pix = im.load()

num = 0

description = input("Description: ")
github_name = input("Github repo name: ")
name = input("name: ")
language = input("Language: ")
image = input("Image in /img: ")

project =  [
                "        <div class = \"brick black\" id = \"RightAboutMe\">\n",
                "            <div class = \"profileInfo vertical-align\">\n" ,
                "                <a href = \"https://github.com/Desperationis/" + github_name + "\" target = \"_blank\"><h3>" + name +"</h3></a>\n" ,
                "                <hr>\n" ,
                "                <p>\n" ,
                "                " + description+"\n" ,
                "                </p>\n",
                "                <ul class = \"programmingLanguages\">\n",
                "                    <li>" + language + "</li>\n",
                "                </ul>\n",
                "            </div>\n",
                "        </div>\n",
                "\n"
            ]
projectPic = [
                "        <div class = \"brick\" id = \"RightAboutMe\" style = \"rgb(0,0,0);\">\n",
                "            <a href = \"https://github.com/Desperationis/" + github_name +"\" target = \"_blank\"><img id = \"fullProjectPhoto\" class = \"rightShadow squarePhoto\" src = \"img/project/" + image +"\"></a>\n",
                "        </div>\n",
]

left = ""
right = ""

right += "        <!--" + name + "-->\n"
for line in project:
    right += line
for line in projectPic:
    right += line
right += "        <!--" + name + "-->\n\n"

left += "        <!--" + name + "-->\n"
for line in projectPic:
    left += line
for line in project:
    left += line
left += "        <!--" + name + "-->\n\n"



for line in read:
    tmp = line.strip("\n")  # Just so I can use tmp to look for my values

    if tmp.find("NUM:") != -1:
        tmp = tmp.strip("<!--NUM: ")
        tmp = tmp.strip("-->")

        num = int(tmp) + 1

        write.write("        <!--NUM: " + str(num) + "-->\n")
    elif tmp.find("_LEFT_") != -1:
        write.write("        <!--_RIGHT_-->\n\n")
        write.write(left)
    elif tmp.find("_RIGHT_") != -1:
        write.write("        <!--_LEFT_-->\n\n")
        write.write(right)

    else:
        write.write(tmp + "\n")


write.close()
read.close()


# colors
read = open("testProjects.html", "r")
write = open("projects.html","w+")


colors = []


gap = 799 / (num - 1)
increment = 0
for i in range(num):
    colors.append(pix[increment, 0])
    increment += gap
colors.reverse()

for line in read:
    tmp = line.strip("\n")  # Just so I can use tmp to look for my values

    if tmp.find("style =") != -1 and tmp.find("RightAboutMe") != -1:
        write.write("        <div class = \"brick\" id = \"RightAboutMe\" style = \"background-color:rgb(" + str(colors[0][0]) + ", " + str(colors[0][1]) + "," + str(colors[0][2]) + ");\">\n")
        colors.pop(0)
    elif tmp.find("style =") != -1:
        write.write("        <div class = \"brick\" style = \"background-color:rgb(" + str(colors[0][0]) + ", " + str(colors[0][1]) + "," + str(colors[0][2]) + ");\">\n")
        colors.pop(0)
    else:
        write.write(tmp + "\n")

write.close()
read.close()

os.remove("testProjects.html")
