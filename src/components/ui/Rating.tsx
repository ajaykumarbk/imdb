import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  rating: number; // Rating out of 10
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Rating: React.FC<RatingProps> = ({ 
  rating, 
  showText = true, 
  size = 'md',
  className = ''
}) => {
  // Convert rating from 0-10 scale to 0-5 stars
  const starRating = rating / 2;
  
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 >= 0.5;
  
  const starSizes = {
    sm: { star: 12, fontSize: 'text-xs' },
    md: { star: 16, fontSize: 'text-sm' },
    lg: { star: 20, fontSize: 'text-base' },
  };
  
  const { star: starSize, fontSize } = starSizes[size];
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="rating-stars" aria-label={`Rating: ${rating} out of 10`}>
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            // Full star
            return (
              <Star
                key={i}
                size={starSize}
                className="text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            );
          } else if (i === fullStars && hasHalfStar) {
            // Half star
            return (
              <StarHalf
                key={i}
                size={starSize}
                className="text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            );
          } else {
            // Empty star
            return (
              <Star
                key={i}
                size={starSize}
                className="text-gray-400"
                aria-hidden="true"
              />
            );
          }
        })}
      </div>
      {showText && (
        <span className={`ml-2 ${fontSize} text-gray-300`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;