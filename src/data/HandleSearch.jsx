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

        // Search by country
        const products = await fetchProductsFromFirestore();
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

        // Search by city
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

        // If no match found
        Swal.fire({
            title: "No results",
            text: "Careful with spelling - try 'Europe,' 'Kenya,' 'Mexico City,' 'ski,' 'gourmet,' etc.",
            icon: "error"
          });
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