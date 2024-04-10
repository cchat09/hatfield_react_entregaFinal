import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../style/style.css';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const HandleSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [matchingProducts, setMatchingProducts] = useState([]);
    const [showSearchExtension, setShowSearchExtension] = useState(false);
    const searchTermWords = searchTerm.toLowerCase().split(" ");

    const fetchProductsFromFirestore = async () => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollection);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    useEffect(() => {
        const handleSearchSubmit = async () => {
            const products = await fetchProductsFromFirestore();
            const searchTermLowercase = searchTerm.toLowerCase();
            const matching = products.filter(product => {
                const { countries, cities } = product;
                const countriesLowercase = countries.map(country => country.toLowerCase());
                const citiesLowercase = cities.map(city => city.toLowerCase());
                return countriesLowercase.includes(searchTermLowercase) || citiesLowercase.includes(searchTermLowercase);
            });
            setMatchingProducts(matching);
            setShowSearchExtension(matching.length === 0);
            console.log("Matching Products: ", matching);
        };

        const searchForm = document.getElementById('search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', handleSearchSubmit);
        }

        return () => {
            if (searchForm) {
                searchForm.removeEventListener('submit', handleSearchSubmit);
            }
        };
    }, [searchTerm]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const searchTermLowercase = searchTerm.toLowerCase().replace(/\s+/g, "_");

        // Search for continent
        const continentNumber = {
            africa: 1,
            americas: 2,
            north_america: 2,
            south_america: 2,
            asia: 3,
            europe: 4,
            oceania: 5
        }[searchTermLowercase];

        if (continentNumber) {
            navigate(`/continent/${continentNumber}`);
            return;
        }

        // Search by type
        const typeMap = {
            culture: 1,
            history: 1,
            "culture_and_history": 1,
            "history_and_culture": 1,
            active: 2,
            adventure: 2,
            romantic: 3,
            honeymoon: 3,
            seasonal: 4,
            beach: 4,
            ski: 4,
            gourmet: 5,
            foodie: 5,
            food: 5
        };
        const typeNumber = typeMap[searchTermLowercase];
        if (typeNumber) {
            navigate(`/type/${typeNumber}`);
            return;
        }

        // Search by city
        // const products = await fetchProductsFromFirestore();
        // const cityMatch = products.find(product => {
        //     const searchTermWords = searchTermLowercase.split(" ");
        //     return product.cities.some(city => {
        //         const cityWords = city.toLowerCase().split(" ");
        //         return searchTermWords.every(word => cityWords.includes(word));
        //     });
        // });

        // if (cityMatch) {
        //     // Check if the matched city contains all the search terms
        //     const containsAllSearchTerms = searchTermWords.every(word =>
        //         cityMatch.cities.some(city => city.toLowerCase().includes(word))
        //     );

        //     if (containsAllSearchTerms) {
        //         // Navigate to city if all search terms are found in the city name
        //         alert(`City match found: ${cityMatch.name}`);
        //         navigate(`/city/${encodeURIComponent(searchTerm)}`);
        //         return;
        //     } else {
        //         // Navigate to country if it's not a city match
        //         alert("No city match found. Redirecting to country.");
        //         navigate(`/country/${encodeURIComponent(searchTerm)}`);
        //         return;
        //     }
        // } else {
        //     // Handle non-city matches
        //     alert("No match found!");
        //     // Optionally navigate to a different page or handle as needed
        //     return;
        // }

        const products = await fetchProductsFromFirestore();
        const cityMatch = products.find(product => {
            const searchTermWords = searchTerm.toLowerCase().split(" ");
            return product.cities.some(city => {
                const cityWords = city.toLowerCase().split(" ");
                // Check if all search terms are included in the city name
                return searchTermWords.every(word => cityWords.includes(word));
            });
        });

        if (cityMatch) {
            navigate(`/city/${encodeURIComponent(searchTerm)}`);
            return;
        }

        // const products = await fetchProductsFromFirestore();
        // const cityMatch = products.find(product => {
        //     const searchTermWords = searchTermLowercase.split(" ");
        //     return product.cities.some(city => {
        //         const cityWords = city.toLowerCase().split(" ");
        //         return searchTermWords.every(word => cityWords.includes(word));
        //     });
        // });

        // if (cityMatch) {
        //     alert(`City match found: ${cityMatch.name}`); // Assuming the city object has a 'name' property
        //     navigate(`/city/${encodeURIComponent(searchTerm)}`);
        //     return;
        // }


        // Search by country
        const countryMatch = products.find(product => {
            const searchTermWords = searchTerm.toLowerCase().split(" ");
            return product.countries.some(country => {
                const countryWords = country.toLowerCase().split(" ");
                // Check if all search terms are included in the city name
                return searchTermWords.every(word => countryWords.includes(word));
            });
        });

        if (countryMatch) {
            navigate(`/country/${encodeURIComponent(searchTerm)}`);
            return;
        }

        // const countryMatch = products.find(product => product.countries.includes(searchTermLowercase));
        // if (countryMatch) {
        //     navigate(`/country/${encodeURIComponent(searchTerm)}`);
        //     return;
        // }

        // If no match found
        alert("No match found!");
    }

    return (
        <div>
            <form id="search-form" onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default HandleSearch;