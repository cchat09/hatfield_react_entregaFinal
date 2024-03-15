const products = [];
let id = 1;

function AddPackage(name, countries, cities, price, image, duration, shortDescription, longDescription, continent, types) {

    products.push({ 
        id: id++, 
        name, 
        countries: Array.isArray(countries) ? countries : [countries],
        cities: Array.isArray(cities) ? cities: [cities], 
        price, 
        image,
        duration, 
        shortDescription, 
        longDescription, 
        continent, 
        types: Array.isArray(types) ? types : [types], 
        inventory: 50});
}

AddPackage ("East Asian Marvels", ["Japan", "Korea", "Hong Kong"], ["Tokyo", "Kyoto", "Seoul", "Hong Kong"], 3000, "https://i.insider.com/559c2c45ecad04df54fc8f8c?width=600&format=jpeg&auto=webp", "15 days", "Discover Hong Kong, Seoul, Tokyo, and Kyoto on this epic journey through East Asian metropolises.", "Discover Hong Kong, Seoul, Tokyo, and Kyoto on this epic journey through East Asian metropolises. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Asia", "culture and history", "gourmet");

AddPackage ("Delicious Latin Culture", ["Mexico", "Cuba", "Peru"], ["Mexico City", "Havana", "Lima", "Cuzco"], 2500, "https://www.shutterstock.com/image-photo/havana-cuba-september-14-2016-600nw-1027126117.jpg", "14 days",`The best of culture, beaches, and delicious food: Mexico City, Havana, Lima, Cuzco and Machu Pichu.`, "The best of culture, beaches, and delicious food: Mexico City, Havana, Lima, Cuzco and Machu Pichu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Americas", ["culture and history", "gourmet", "romantic", "seasonal"]);

AddPackage ("Central Europe Splendor", ["Austria", "Czechia", "Hungary"], ["Vienna", "Prague", "Budapest"], 1500, "https://media.nomadicmatt.com/2023/viennathreeday7.jpeg", "8 days","Explore the stunning highlights of Central Europe: Vienna, Prague, and Budapest.", "Explore the stunning highlights of Central Europe: Vienna, Prague, and Budapest. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Europe", ["culture and history", "romantic"]);

AddPackage ("Discover Europe", ["England", "France", "Italy"], ["London", "Paris", "Rome"], 2000, "https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/05/01091340/paris-1110x625-1.png", "10 days","Perfect for first timers, discover the very best of the Old Continent: London, Paris, Rome.", "Perfect for first timers, discover the very best of the Old Continent: London, Paris, Rome. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Europe", ["culture and history", "romantic", "gourmet"]);

AddPackage ("North Africa Adventure", ["Morocco", "Tunisia", "Egypt"], ["Marrakech", "Tunis", "Sousse", "Cairo", "Luxor"], 1800, "https://www.ootlah.com/wp-content/uploads/2020/12/luxor-temple-1.jpg", "12 days","Pyramids, markets, and marvelous beaches await. Explore Marrakech, Tunis, Sousse, Cairo, and Luxor.", "Pyramids, markets, and marvelous beaches await. Explore Marrakech, Tunis, Sousse, Cairo, and Luxor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Africa", ["culture and history", "seasonal", "romantic"]);

AddPackage ("Southwest Odyssey", ["Thailand", "Cambodia", "Vietnam"], ["Bangkok", "Phuket", "Siem Riep", "Koh Rang", "Hanoi"], 2200, "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/angkor-wat-siem-reap-cambodia-artie-photography-artie-ng.jpg", "15 days","Amazing food, relaxation, and temples await in Bangkok, the beaches of Phuket and Koh Rang, Siem Riep (Angkow Wat), and Hanoi", "Amazing food, relaxation, and temples await in Bangkok, the beaches of Phuket and Koh Rang, Siem Riep (Angkow Wat), and Hanoi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Asia", ["culture and history", "seasonal", "gourmet", "romantic"]);

console.log(products);

export default products;