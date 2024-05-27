# Cat and Dog Gallery Application

## Description

This application allows users to browse a gallery of cat and dog images, searchable by breed. It utilizes asynchronous JavaScript, APIs, and modern web development techniques to deliver a responsive and interactive user experience.

## Features

- **Breed Search**: Users can search for cats and dogs by breed.
- **Image Gallery**: Displays images in a responsive grid layout.
- **API Integration**: Leverages The Cat API to fetch breed-specific images.

## Setup

### Prerequisites

- A modern web browser that supports HTML5, CSS3, and JavaScript.
- Internet connection to access external APIs.


## API Key Configuration

The application requires an API key to fetch data from The Cat API.

- **Obtain an API Key**:
  - Visit [The Cat API](https://thecatapi.com) website.
  - Sign up for an account and generate an API key.

- **Configure the API Key**:
  - Open the `js/api.js` file.
  - Replace the `API_KEY` variable's value with your new API key.
    ```javascript
    const API_KEY = 'your_new_api_key_here';
    ```

## Usage

- **Using the Application**:
  - Start the application as described in the "Getting Started" section.
  - Use the search box to enter a breed ID (e.g., `beng` for Bengal cats).
  - Press the "Search" button to display images of the selected breed.


