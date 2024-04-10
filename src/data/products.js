//OLD INTERNAL DATA ARRAY, KEEPING FOR REFERENCE

// const products = [];
// let id = 1;

// function AddPackage(name, countries, cities, price, image, imageAlt, duration, shortDescription, longDescription, continent, types) {

//     products.push({ 
//         id: id++, 
//         name, 
//         countries: Array.isArray(countries) ? countries : [countries],
//         cities: Array.isArray(cities) ? cities: [cities], 
//         price, 
//         image,
//         imageAlt,
//         duration, 
//         shortDescription,
//         longDescription, 
//         continent, 
//         types: Array.isArray(types) ? types : [types], 
//         inventory: 20});
// }

// AddPackage ("East Asian Marvels", ["Japan", "Korea", "Hong Kong"], ["Tokyo", "Kyoto", "Seoul", "Hong Kong"], 3000, "https://i.insider.com/559c2c45ecad04df54fc8f8c?width=600&format=jpeg&auto=webp", "Byōdō-in temple in Kyoto, Japan", "15 days", "Discover Hong Kong, Seoul, Tokyo, and Kyoto on this epic journey through East Asian metropolises.", "In Hong Kong, marvel at iconic landmarks like Victoria Peak and enjoy bustling street markets. Seoul offers historic palaces, vibrant street food, and trendy neighborhoods. Tokyo dazzles with its futuristic cityscape and serene oases like Meiji Shrine. Kyoto immerses you in traditional Japanese culture with iconic temples and tranquil gardens.", "Asia", ["culture and history", "gourmet"]);

// AddPackage ("Delicious Latin Culture", ["Mexico", "Cuba", "Peru"], ["Mexico City", "Havana", "Lima", "Cuzco"], 2500, "https://www.shutterstock.com/image-photo/havana-cuba-september-14-2016-600nw-1027126117.jpg", "Colorful houses and a classic car in Old Town, Havana, Cuba", "14 days",`The best of culture, beaches, and delicious food: Mexico City, Havana, Lima, Cuzco and Machu Pichu.`, "Embark on a 14-day journey through the heart of Latin America, exploring the vibrant cultures of Mexico City, Havana, Lima, and Cuzco. Experience bustling markets, stunning architecture, and mouthwatering street food. From salsa rhythms to ceviche delights, immerse yourself in the rich tapestry of Latin American life. Conclude your adventure at the majestic Machu Picchu, surrounded by breathtaking landscapes. This is the trip of a lifetime.", "Americas", ["culture and history", "gourmet", "romantic", "seasonal", "active"]);

// AddPackage ("Central Europe Splendor", ["Austria", "Czechia", "Hungary"], ["Vienna", "Prague", "Budapest"], 1500, "https://media.nomadicmatt.com/2023/viennathreeday7.jpeg", "Statue of a man on a horse in Vienna, Austria","8 days","Explore the stunning highlights of Central Europe: Vienna, Prague, and Budapest.", "Embark on an 8-day journey through Central Europe's cultural treasures: Vienna, Prague, and Budapest. Begin in Vienna, where opulent palaces and historic streets await. Dive into Prague's fairy-tale charm with its medieval castles and bustling squares. Finally, experience Budapest's vibrant energy, from its thermal baths to stunning architecture. This whirlwind adventure promises unforgettable moments in three iconic cities.", "Europe", ["culture and history", "romantic"]);

// AddPackage ("Discover Europe", ["England", "France", "Italy"], ["London", "Paris", "Rome"], 2000, "https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/05/01091340/paris-1110x625-1.png", "Woman viewing the Eiffel Tower in Paris, France", "10 days","Perfect for first timers; discover the very best of the Old Continent: London, Paris, Rome.", "Enjoy 10 days touring Europe's most iconic capitals: London, Paris, and Rome. Begin your adventure in London, where centuries of history blend with modern charm. Explore landmarks like the Tower of London and stroll along the Thames. Next, immerse yourself in the romantic streets of Paris, home to the Eiffel Tower and Louvre Museum. Indulge in French cuisine and soak in the city's enchanting ambiance. Finally, discover Rome's ancient ruins, including the Colosseum and Trevi Fountain. Experience the best of the Old Continent on this unforgettable adventure.", "Europe", ["culture and history", "romantic", "gourmet"]);

// AddPackage ("North Africa Adventure", ["Morocco", "Tunisia", "Egypt"], ["Marrakech", "Tunis", "Sousse", "Cairo", "Luxor"], 1800, "https://www.ootlah.com/wp-content/uploads/2020/12/luxor-temple-1.jpg", "Statues at the Luxor Temple, Luxor, Egypt", "12 days", "Pyramids, markets, and marvelous beaches await. Explore Marrakech, Tunis, Sousse, Cairo, and Luxor.", "Explore the vibrant tapestry of North Africa: Marrakech, Tunis, Sousse, Cairo, and Luxor. Begin amidst Marrakech's bustling markets and vibrant alleys, immersing yourself in Moroccan culture. Traverse to Tunis, steeped in history, where ancient ruins and lively souks await exploration. Relax on the sun-kissed beaches of Sousse before delving into Cairo's bustling streets, home to iconic pyramids and ancient wonders. Conclude your adventure in Luxor, where majestic temples and tombs whisper tales of ancient civilizations. This expedition promises a kaleidoscope of experiences across North Africa's enchanting landscapes.", "Africa", ["culture and history", "seasonal", "romantic"]);

// AddPackage ("Southwest Odyssey", ["Thailand", "Cambodia", "Vietnam"], ["Bangkok", "Phuket", "Siem Reap", "Koh Rang", "Hanoi"], 2200, "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/angkor-wat-siem-reap-cambodia-artie-photography-artie-ng.jpg", "Sunset at Angkor Wat, Siem Reap, Cambodia", "15 days", "Amazing food, relaxation, and temples await in Bangkok, the beaches of Phuket and Koh Rang, Siem Reap (Angkow Wat), and Hanoi.", "Embark on a 15-day Southeast Asian adventure across Thailand, Cambodia, and Vietnam. Begin amidst Bangkok's bustling streets, where street food and majestic temples abound. Relax on Phuket and Koh Rang's pristine beaches before exploring Siem Reap's ancient wonders at Angkor Wat. Conclude in Hanoi, where bustling markets and rich traditions await. This journey promises an unforgettable blend of culture, relaxation, and exploration.", "Asia", ["culture and history", "seasonal", "gourmet", "romantic"]);

// AddPackage ("South American Cities", ["Brazil", "Argentina", "Chile"], ["Rio de Janeiro", "Buenos Aires", "Mendoza", "Santiago", "Valparaiso"], 2000, "https://www.gla.ac.uk/media/Media_976421_smxx.jpg", "Plaza del Congreso in Buenos Aires, Argentina", "10 days", "Beaches in Rio, Tango in Buenos Aires, wine in Mendoza, and stunning views in Valparaiso and Santiago.", "Journey through Brazil, Argentina, and Chile. Start on Rio's iconic beaches, then embrace the passion of Buenos Aires' tango. Explore Mendoza's renowned vineyards before soaking in Valparaiso's colorful charm. Conclude your adventure in Santiago, nestled amidst the majestic Andes. This unforgettable journey promises diverse experiences across vibrant South American landscapes.", "Americas", ["culture and history", "gourmet", "seasonal", "romantic"]);

// AddPackage ("African Safari", ["Kenya", "Tanzania", "South Africa"], ["Nairobi", "Maasai Mara", "Zanzibar", "Kilimanjaro", "Cape Town"], 3500, "https://static1.squarespace.com/static/508870e0e4b046999d1b5540/5092f369e4b00927707a1f84/56d3498362cd9444cfcecc5a/1456700611734/?format=1500w", "A giraffe in the savannah of Kenya", "18 days", "Explore Nairobi, safari in Maasai Mara, and enjoy Zanzibar, Mt. Kilimanjaro, and Cape Town.", "Embark on an extraordinary 18-day journey through Kenya, Tanzania, and South Africa. Begin in Nairobi before venturing into the Maasai Mara for a thrilling safari. Relax on the idyllic beaches of Zanzibar before marveling at the majestic beauty of Mount Kilimanjaro. Conclude your adventure in Cape Town, where you'll be captivated by the city's dynamic energy and stunning natural landscapes. This expedition promises an unforgettable exploration of East and Southern Africa's diverse wonders.", "Africa", ["culture and history", "seasonal", "active", "romantic"]);

// AddPackage ("Explore Oceania", ["Australia", "New Zealand", "Fiji"], ["Sydney", "Cairns", "Melbourne", "Queenstown", "Nadi", "Mamanuca Islands"], 4000, "https://samseesworld.com/wp-content/uploads/2023/03/Kangaroo-Island.jpg", "Kangeroo on an Australian beach", "15 days", "Explore the cities, beaches, and wildlife of Austrailia, New Zealand, and Fiji.", "Enjoy a 15-day odyssey through the breathtaking landscapes of Australia, New Zealand, and Fiji. Begin your adventure exploring the vibrant cities, pristine beaches, and unique wildlife of Australia, immersing yourself in its diverse culture and natural wonders. Next, venture to the stunning shores and majestic mountains of New Zealand, where you can experience thrilling outdoor adventures and soak in the serene beauty of its landscapes. Finally, relax in the tropical paradise of Fiji, where crystal-clear waters, lush rainforests, and warm hospitality await. From bustling cities to tranquil beaches and exotic wildlife, this expedition promises an unforgettable exploration of the South Pacific's most captivating destinations.", "Oceania", ["culture and history", "seasonal", "active", "romantic"]);

// console.log(products);

// export default products;