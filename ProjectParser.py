from ProjectsReader import *
from PIL import Image
import os

"""
    This is a script I quickly botched up to add projects quickly.
"""

reader = ProjectsReader("projects.txt")
reader.Parse()
print(reader.projects)


projectHtml = ""

rightImage = """
    
    <div class="leftBrick black">
    <h class="brickTitle">
      %s
    </h>
    <hr class="brickLine" />
    <p class="brickInfo">
      %s
    </p>
  </div>

  <div class="rightBrick" style = "background-color: rgba%s">
    <a href = "%s">
        <img class="brickImage" src="img/project/%s" />
    </a>
  </div>
    
    """

leftImage = """

  <div class="leftBrick" style = "background-color: rgba%s">
    <a href = "%s">
        <img class="brickImage" src="img/project/%s" />
    </a>
  </div>

  <div class="rightBrick black">
    <h class="brickTitle">
      %s
    </h>
    <hr class="brickLine" />
    <p class="brickInfo">
      %s
    </p>
  </div>
"""

# Gradient
im = Image.open("gradient.png")
pix = im.load()

colors = []


gap = 799 / (len(reader.projects) - 1)
increment = 0
for i in range(len(reader.projects)):
    colors.append(pix[increment, 0])
    increment += gap
colors.reverse()

print(colors)


left = True

for index, project in enumerate(reader.projects):
    if left:
        projectHtml += leftImage % (str(colors[index]), project[2], project[1], project[0], project[3])
    else:
        projectHtml += rightImage % (project[0], project[3], str(colors[index]), project[2], project[1])

    left = not left
















# Write it down.

template = """
<!DOCTYPE html>
<html>

<head>
  <title>Diego Contreras | Projects</title>

  <!--Style Sheets-->
  <link rel="stylesheet" type="text/css" href="css/Brick.css">
  <link rel="stylesheet" type="text/css" href="css/Colors.css">
  <link rel="stylesheet" type="text/css" href="css/Image.css">
  <link rel="stylesheet" type="text/css" href="css/Global.css">
  <link rel="stylesheet" type="text/css" href="css/Navigation.css">

  <!--Fonts-->
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
</head>

<body>
  <div id="navigationBar">
    <nav id="navigation">
      <a href = "index.html">Home</a>
      <a href = "Projects.html">Projects</a>
      <a href="https://desperationis.github.io/TOCYEN/index.html">TOCYEN</a>
    </nav>
  </div>

  <div id="projectBackgroundPhoto">
    <div class="darkImageCover">
      Diego Contreras | Projects
    </div>
  </div>


  %s



</body>

</html>

""" % (projectHtml)

output = open("Projects.html", "w+")
for line in template:
    output.write(line)
