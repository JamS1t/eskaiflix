import { Client, Databases, ID, Query } from "appwrite";

const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchWord, movieData) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [Query.equal('searchTerm', searchWord.toLowerCase())]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm: searchWord.toLowerCase(),
        count: 1,
        movie_id: movieData.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export const getTrendingMovies = async () => {
  try {
    let filteredTop = {};

    const results = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(30),
      Query.orderDesc("count")
    ]);

    const movies = results.documents;

    movies.forEach(movie => {
      if(!filteredTop[movie.movie_id]){
        filteredTop[movie.movie_id] = movie;
      }
    });

    const sortedMovies = Object.values(filteredTop).sort((a,b) => b.count - a.count);
    const top5 = sortedMovies.slice(0, 5);

    return top5;
  } catch (error) {
    console.error(error);
  }
}