import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from '../movies/MovieCard';
import TVShowCard from '../tv/TVShowCard';
import { Movie, TVShow } from '../../types';

interface MediaSliderProps {
  title: string;
  type: 'movie' | 'tv';
  items: Movie[] | TVShow[];
  viewAllLink?: string;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ 
  title, 
  type, 
  items, 
  viewAllLink 
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' 
        ? -current.offsetWidth / 2
        : current.offsetWidth / 2;
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-white">{title}</h2>
          
          {viewAllLink && (
            <a 
              href={viewAllLink} 
              className="text-amber-500 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              View All
            </a>
          )}
        </div>
        
        <div className="relative group">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item) => {
              const cardProps = {
                key: item.id,
                className: 'min-w-[200px] md:min-w-[220px] lg:min-w-[240px] snap-start',
              };
              
              return type === 'movie' ? (
                <MovieCard movie={item as Movie} {...cardProps} />
              ) : (
                <TVShowCard show={item as TVShow} {...cardProps} />
              );
            })}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900/80 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900/80 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;