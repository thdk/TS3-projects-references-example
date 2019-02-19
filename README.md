# Typescript 3.0+ feature 'Project references'

A small example for 'Project References'. A typescript feature introduced in version 3.0.

The project structure exists of three projects.

 - common
 - project-a
 - project-b

Each having their own tsconfig file.

**project-a** and **project-b** both have a reference in tsconfig to the **common** project.

To build both **project-a** and **project-b** run

`tsc -b project-a project-b`

The lib project will be automatically build as it is listed as a reference.

