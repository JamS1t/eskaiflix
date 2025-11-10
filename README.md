# eskaiflix  
> A React-based movie web app that fetches real data from TMDB and uses Appwrite for tracking trending movies.

## 🚀 About  
**eskaiflix** is a web application built with **React** to study and practice **API integration** and **modern front-end development**.  
It fetches **real movie data** from [TMDB (The Movie Database)](https://www.themoviedb.org/) API and uses **Appwrite** to manage and analyze user search data. The app is **deployed on [Vercel](https://eskaiflix.vercel.app/)** for fast and reliable hosting.

The app dynamically displays trending movies based on the most searched titles by users. These search logs are securely stored in Appwrite, making the trending section fully data-driven.

This project serves as a sandbox for exploring:  
- React hooks and state management  
- Asynchronous API calls  
- Integration with cloud backend services (Appwrite)  
- Building responsive and data-driven UIs  

## 🧰 Built With  
- [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))  
- [TMDB API](https://developer.themoviedb.org/) for fetching movie data  
- [Appwrite](https://appwrite.io/) for backend and trending movie analytics  
- JavaScript / JSX  
- CSS for styling  
- ESLint for code quality  

## 🔍 Features  
- 🎬 Fetches live movie data from TMDB  
- 📊 Tracks user search activity and generates trending results via Appwrite  
- ⚡ Fast development and build setup using Vite  
- 🔄 Demonstrates API requests and data management in React  
- 📱 Fully responsive layout optimized for all devices  

## 🛠 Installation & Usage  
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/JamS1t/eskaiflix.git
2. **Navigate into the project directory:**  
   ```bash
   cd eskaiflix
3. **Install dependencies:**  
   ```bash
   npm install
4. **Run the development server:**  
   ```bash
   npm run dev
5. **Open your browser:**  
   - Visit http://localhost:5173 (or the port Vite reports).

## ⚙️ Environment Variables
  **To connect to TMDB and Appwrite, create a `.env` file in the root directory and add your credentials:**  
   ```bash
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id

## 🎓 Credits
This project is inspired by and follows a YouTube tutorial:
https://www.youtube.com/watch?v=dCLhUialKPQ
Huge thanks to the creator: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), for providing clear explanations and guidance on React, TMDB integration, and Appwrite usage.

## ✅ Contribution
This is primarily a personal learning project, but feedback and suggestions are always welcome!
If you’d like to contribute:
1. **Fork the repo**  
2. **Create a new branch:**  
   ```bash
   git checkout -b feature/YourFeature
3. **Commit and push your changes**  
4. **Open a Pull Request describing your addition or improvement*  
   ```bash
   npm run dev
5. **Open your browser:**  
   - Visit http://localhost:5173 (or the port Vite reports).

## 📄 License
This project is open source — licensed under the MIT License.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)