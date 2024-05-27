const API_KEY = 'live_MrLJKD4J1Xnnt5JJ6w3znPSMMEkTbodvJ2Firdtjr71M0Iijbv0XDa7H4oo9T2MI';

async function fetchImages(breedId) {
    try {
        const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch Images Error:', error);
    }
}
