interface FavoriteIconProps {
    active?: boolean;
    className?: string;
  }
  
  export default function FavoriteIcon({ active = false, className = '' }: FavoriteIconProps) {
    return (
      <div className={`text-xl ${className}`}>
        {active ? '❤️' : '🤍'}
      </div>
    );
  }
  