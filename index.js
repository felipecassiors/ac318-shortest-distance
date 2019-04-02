const csv = require('csvtojson');
const haversine = require('haversine');

csv({delimiter: ";"}).fromFile("./coordenadas.csv").then((input) => {
    var cities = [];
    input.forEach(i => {
        cities.push({
            name: i.Capital,
            latitude: i.Latitude,
            longitude: i.Longitude,
            distances: []
        });
    });

    cities.forEach(cityA => {
        cities.forEach(cityB => {
            cityA.distances.push({
                to: cityB.name,
                distance: haversine(cityA, cityB)
            });
        });
    })
});
