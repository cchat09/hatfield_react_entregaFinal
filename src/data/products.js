const products = [];
let id = 1;

function AddPackage(name, countries, cities, price, image, shortDescription, longDescription, continent, types) {

    products.push({ 
        id: id++, 
        name, 
        countries: Array.isArray(countries) ? countries : [countries],
        cities: Array.isArray(cities) ? cities: [cities], 
        price, 
        image, 
        shortDescription, 
        longDescription, 
        continent, 
        types: Array.isArray(types) ? types : [types], 
        inventory: 50});
}

AddPackage ("East Asian Marvels", ["Japan", "Korea", "Hong Kong"], ["Tokyo", "Kyoto", "Seoul", "Hong Kong"], 3000, "https://i.insider.com/559c2c45ecad04df54fc8f8c?width=600&format=jpeg&auto=webp", "Discover Hong Kong, Seoul, Tokyo, and Kyoto on this epic journey through East Asian metropolises.", "blah blah blah", "Asia", "culture and history", "gourmet");

AddPackage ("Delicious Latin Culture", ["Mexico", "Cuba", "Peru",], ["Mexico City", "Havana", "Lima", "Cuzco"], 2500, "https://www.shutterstock.com/image-photo/havana-cuba-september-14-2016-600nw-1027126117.jpg", `The best of culture, beaches, and delicious food: Mexico City, Havana, Lima, Cuzco and Machu Pichu.`, "blah blah blah", "Americas", ["culture and history", "gourmet"]);

console.log(products);

export default products;