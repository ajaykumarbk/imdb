import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import MediaSlider from './components/home/MediaSlider';
import MovieCard from './components/movies/MovieCard';
import { trendingMovies, trendingTVShows } from './data/mockData';

function App() {
  // Use the first trending movie as the hero
  const featuredMovie = trendingMovies[0];
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero movie={featuredMovie} />
        
        {/* Trending Movies */}
        <MediaSlider 
          title="Trending Movies" 
          type="movie" 
          items={trendingMovies}
          viewAllLink="/movies"
        />
        
        {/* Featured Movie */}
        <section className="py-8">
          <div className="container-custom">
            <h2 className="text-2xl font-medium text-white mb-6">Featured Movie</h2>
            <MovieCard 
              movie={trendingMovies[2]} 
              variant="featured"
              className="w-full"
            />
          </div>
        </section>
        
        {/* Trending TV Shows */}
        <MediaSlider 
          title="Popular TV Shows" 
          type="tv" 
          items={trendingTVShows}
          viewAllLink="/tv"
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;