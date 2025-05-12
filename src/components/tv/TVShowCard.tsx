import React from 'react';
import { Calendar, Tv } from 'lucide-react';
import { TVShow } from '../../types';
import Rating from '../ui/Rating';
import Badge from '../ui/Badge';

interface TVShowCardProps {
  show: TVShow;
  variant?: 'default' | 'featured';
  className?: string;
}

const TVShowCard: React.FC<TVShowCardProps> = ({ 
  show, 
  variant = 'default',
  className = '' 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  const formatRuntime = (minutes?: number[]) => {
    if (!minutes || minutes.length === 0) return 'N/A';
    const avgRuntime = Math.floor(minutes.reduce((acc, val) => acc + val, 0) / minutes.length);
    return `${avgRuntime} min`;
  };

  if (variant === 'featured') {
    return (
      <div className={`card relative group h-[500px] ${className}`}>
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img 
            src={show.backdrop_path} 
            alt={show.name} 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="space-y-3">
            <div className="flex space-x-2">
              {show.genres?.slice(0, 2).map(genre => (
                <Badge key={genre.id} variant="primary" size="sm">
                  {genre.name}
                </Badge>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold text-white line-clamp-2">
              {show.name}
            </h2>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <Rating rating={show.vote_average} size="md" />
              
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{formatDate(show.first_air_date)}</span>
              </div>
              
              {show.number_of_seasons && (
                <div className="flex items-center">
                  <Tv size={14} className="mr-1" />
                  <span>{show.number_of_seasons} {show.number_of_seasons === 1 ? 'Season' : 'Seasons'}</span>
                </div>
              )}
            </div>
            
            <p className="text-gray-300 text-sm line-clamp-3">{show.overview}</p>
            
            <button className="btn btn-primary mt-2">View Details</button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`card group ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={show.poster_path} 
          alt={show.name} 
          className="movie-poster transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="btn btn-primary scale-90 group-hover:scale-100 transition-transform">View Details</button>
        </div>
        <div className="absolute top-2 right-2">
          <Rating rating={show.vote_average} size="sm" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white line-clamp-1 group-hover:text-amber-500 transition-colors">
          {show.name}
        </h3>
        <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
          <span className="flex items-center">
            <Calendar size={12} className="mr-1" />
            {show.first_air_date.split('-')[0]}
          </span>
          {show.number_of_seasons && (
            <span className="flex items-center">
              <Tv size={12} className="mr-1" />
              {show.number_of_seasons} {show.number_of_seasons === 1 ? 'Season' : 'Seasons'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;