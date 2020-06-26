from PythonFileLibrary.Reader import *

"""
    ProjectsReader.py

    Parses a file to search for projects.
"""

class ProjectsReader(Reader):
    def __init__(self, fileName):
        super().__init__(fileName)
        self.projects = []

    def Parse(self):
        # Get information from the file.
        read = False
        for line in self.CleanRead():
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
                    self.projects.append([line.strip('> '), self.GetNextLine().strip(), self.GetNextLine().strip(), ""])
                    read = True
