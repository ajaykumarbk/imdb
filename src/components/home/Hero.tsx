import React from 'react';
import { PlayCircle, Plus } from 'lucide-react';
import { Movie } from '../../types';
import Button from '../ui/Button';
import Rating from '../ui/Rating';
import Badge from '../ui/Badge';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={movie.backdrop_path} 
          alt={movie.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom z-10 relative">
        <div className="max-w-2xl animate-slide-up">
          <div className="flex space-x-2 mb-4">
            {movie.genres?.slice(0, 3).map(genre => (
              <Badge key={genre.id} variant="primary">
                {genre.name}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <Rating rating={movie.vote_average} size="lg" />
            <span className="text-gray-300 text-sm">
              {movie.vote_count.toLocaleString()} Reviews
            </span>
          </div>
          
          <p className="text-gray-300 mb-8 text-base md:text-lg line-clamp-3 md:line-clamp-4">
            {movie.overview}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<PlayCircle />}
            >
              Watch Trailer
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<Plus />}
            >
              Add to Watchlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;