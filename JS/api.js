const API_KEY = 'live_MrLJKD4J1Xnnt5JJ6w3znPSMMEkTbodvJ2Firdtjr71M0Iijbv0XDa7H4oo9T2MI';
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';

async function fetchBreeds() {
    try {
        const response = await fetch(BREEDS_URL, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const breeds = await response.json();
        console.log('Breeds fetched:', breeds);
        return breeds;
    } catch (error) {
        console.error('Error fetching breeds:', error);
        return [];
    }
}

fetchBreeds().then(breeds => {
    breeds.forEach(breed => {
        console.log(`ID: ${breed.id}, Name: ${breed.name}`);
    });
});