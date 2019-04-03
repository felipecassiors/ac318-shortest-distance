const csv = require('csvtojson');
const haversine = require('haversine');
const FloydWarshall = require('floyd-warshall');
require('console.table');

csv({delimiter: ";"}).fromFile("./coordenadas.csv").then((input) => {
    let cities = [];
    let names = [];
    for (let i of input) {
        cities.push({
            name: i.Capital,
            latitude: i.Latitude,
            longitude: i.Longitude,
        });
        names.push(i.Capital);
    }

    let distances = [];
    for (let i = 0; i < cities.length; i++) {
        distances[i] = [];
        for (let j = 0; j < cities.length; j++) {
            distances[i][j] = haversine(cities[i], cities[j]);
        }
    }

    console.log("Matrix of the distances:")
    console.table(names, distances);

    const floydWarshall = new FloydWarshall(distances);
    let shortestDistances = floydWarshall.shortestPaths;

    console.log("Matrix of the shortest distances:")
    console.table(names, shortestDistances);
});
