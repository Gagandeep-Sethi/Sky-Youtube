# YouTube Clone

# Description
This project is a clone of YouTube, featuring several key functionalities inspired by the original platform.

# Features

# Search Bar

- Utilizes YouTube's live API for real-time search results.
- Implements debouncing with a 200ms delay between keystrokes to minimize unnecessary API calls.
- Includes search cche to avoid redundant API calls for previously searched queries.

#Live Chat

- Enables live chat functionality with API polling every 1.5 seconds (adjustable).
- Supports message deletion when the chat reaches a specified length (currently set to 200 messages).

# N-Level Comment Section

- Implements a comment section with support for nested comments of any level.

# Video Playback

- Displays videos on the home screen sourced from YouTube's live API, featuring the top 50 popular videos in India.

# Installation

- Clone the repository:git clone https://github.com/Gagandeep-Sethi/Sky-Youtube

- Install dependencies:

  cd your-repository
  npm install

- Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables:
makefile

REACT_APP_Google_ApiKey=your-youtube-api-key

- Start the development server:

npm start

# Usage

- Access the application in your web browser at http://localhost:3000.

# Contributing

- Contributions are welcome! Fork the repository and submit a pull request.

# License

- This project is licensed under the MIT License.