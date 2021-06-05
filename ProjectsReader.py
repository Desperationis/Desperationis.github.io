from PythonFileLibrary.FileReader import *

"""
    ProjectsReader.py

    Parses a file to search for projects.
"""

class ProjectsReader(FileReader):
    def __init__(self, fileName):
        super().__init__(fileName)
        self.projects = []

    def Parse(self):
        # Get information from the file.
        read = False
        for line in self.Read():
            line = line.strip()

            if line != "":
                # End description read.
                if '*end' in line:
                    read = False

                # If we can read, add description to array
                elif read:
                    space = ""
                    if ' ' != line[-1]:
                        space = " "

                    self.projects[-1][-1] += line + space

                # See if the start of a new project is here.
                elif '>' in line: 
                    projectName = line.strip('> ')
                    self.MoveCursorDown()
                    image = self.GetCurrentLine().strip()
                    self.MoveCursorDown()
                    website = self.GetCurrentLine().strip()
                    self.projects.append([projectName, image, website, ""])
                    read = True
                    self.MoveCursorDown() # Read next line after this one next loop
