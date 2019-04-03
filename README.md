# ac318-shortest-distance
### Calculates the shortest distance between cities using the Floyd Marshall algorithm

Developed with [JetBrains WebStorm](https://www.jetbrains.com/webstorm/). Using it is optional, but will produce better-printed results on the console. 

## Requisites
- [Node.js](https://nodejs.org/en/download/)

## Building
- Clone the repository
- Open a command prompt/terminal in the cloned project folder
- Run this command to install the project dependencies
  ``` cmd
    $ npm install
  ```
- Run this command to build and run the project
  ``` cmd
    $ node index.js
  ```

## Usage
You just have to build and run, the project will look for a file ```coordenadas.csv``` in the same folder for importing the coordinates. Then it will calculate the matrix of distances using the haversine formula, and lastly, it will determine the shortest distances between all cities. It will print on the console all the three steps results.