import React, { createContext, useState, useEffect } from 'react';
// Create the context
export const GlobalContext = createContext();

// Context provider component
export const GlobalProvider = ({ children }) => {
    let baseUrl = "http://localhost:8000";

    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Fetch genres and movies from the API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const genresResponse = await fetch(baseUrl + "/api/genres"); 
          const genresData = await genresResponse.json();
          
          const moviesResponse = await fetch(baseUrl + "/api/movies");
          const moviesData = await moviesResponse.json();
          setGenres(genresData);
          setMovies(moviesData);
          console.log(moviesData);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
  
    return (
      <GlobalContext.Provider value={{ genres,movies, loading }}>
        {children}
      </GlobalContext.Provider>
    );
  };