import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin, Clock } from 'lucide-react';
import { locationService, LocationSuggestion } from '@/services/locationService';

interface LocationAutocompleteProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onLocationSelect?: (location: LocationSuggestion) => void;
  showPopularCities?: boolean;
  className?: string;
}

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({
  placeholder,
  value,
  onChange,
  onLocationSelect,
  showPopularCities = false,
  className = ''
}) => {
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popularCities, setPopularCities] = useState<LocationSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showPopularCities) {
      setPopularCities(locationService.getPopularIndianCities());
    }
  }, [showPopularCities]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue.length >= 3) {
      setIsLoading(true);
      locationService.debouncedSearch(
        newValue,
        (results) => {
          setSuggestions(results);
          setShowSuggestions(true);
          setIsLoading(false);
        },
        300,
        'in' // India country code
      );
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoading(false);
    }
  };

  const handleInputFocus = () => {
    if (value.length >= 3 && suggestions.length > 0) {
      setShowSuggestions(true);
    } else if (showPopularCities && value.length < 3) {
      setSuggestions(popularCities);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion: LocationSuggestion) => {
    onChange(suggestion.display_name);
    setShowSuggestions(false);
    if (onLocationSelect) {
      onLocationSelect(suggestion);
    }
  };

  const formatDisplayName = (displayName: string) => {
    // Shorten long display names for better UI
    const parts = displayName.split(', ');
    if (parts.length > 3) {
      return `${parts[0]}, ${parts[1]}, ${parts[parts.length - 1]}`;
    }
    return displayName;
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className="pl-10"
          autoComplete="off"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      {showSuggestions && (suggestions.length > 0 || popularCities.length > 0) && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
        >
          {value.length < 3 && showPopularCities && popularCities.length > 0 && (
            <>
              <div className="px-3 py-2 text-xs font-medium text-muted-foreground bg-gray-50 border-b">
                Popular Cities
              </div>
              {popularCities.map((city, index) => (
                <div
                  key={`popular-${index}`}
                  className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSuggestionClick(city)}
                >
                  <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{formatDisplayName(city.display_name)}</span>
                </div>
              ))}
            </>
          )}

          {suggestions.length > 0 && (
            <>
              {value.length >= 3 && (
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground bg-gray-50 border-b">
                  Search Results
                </div>
              )}
              {suggestions.map((suggestion, index) => (
                <div
                  key={`suggestion-${index}`}
                  className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {formatDisplayName(suggestion.display_name)}
                    </div>
                    {suggestion.type && (
                      <div className="text-xs text-muted-foreground capitalize">
                        {suggestion.type}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          {value.length >= 3 && suggestions.length === 0 && !isLoading && (
            <div className="px-3 py-4 text-sm text-muted-foreground text-center">
              No locations found. Try a different search term.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
