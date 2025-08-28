// Location service using Nominatim (OpenStreetMap) API - Free and open source
const NOMINATIM_API_URL = 'https://nominatim.openstreetmap.org';

interface LocationSuggestion {
  display_name: string;
  lat: string;
  lon: string;
  place_id: string;
  type: string;
  importance: number;
}

interface LocationSearchResult {
  suggestions: LocationSuggestion[];
}

class LocationService {
  private cache = new Map<string, LocationSuggestion[]>();
  private debounceTimers = new Map<string, NodeJS.Timeout>();

  async searchLocations(query: string, countryCode: string = 'in'): Promise<LocationSuggestion[]> {
    // Return empty array for very short queries
    if (query.length < 3) {
      return [];
    }

    // Check cache first
    const cacheKey = `${query.toLowerCase()}_${countryCode}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      // Build search URL with parameters for better Indian location results
      const params = new URLSearchParams({
        q: query,
        format: 'json',
        addressdetails: '1',
        limit: '10',
        countrycodes: countryCode,
        'accept-language': 'en',
      });

      const response = await fetch(`${NOMINATIM_API_URL}/search?${params}`, {
        headers: {
          'User-Agent': 'Lankadhish-Cab-Service/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(`Location API error: ${response.status}`);
      }

      const data: LocationSuggestion[] = await response.json();
      
      // Filter and sort results for better relevance
      const filteredResults = data
        .filter(location => {
          // Prioritize cities, towns, villages, and specific addresses
          const relevantTypes = ['city', 'town', 'village', 'hamlet', 'suburb', 'neighbourhood', 'house'];
          return location.display_name && (
            relevantTypes.some(type => location.type === type) ||
            location.importance > 0.3
          );
        })
        .sort((a, b) => {
          // Sort by importance (higher is better)
          return parseFloat(b.importance.toString()) - parseFloat(a.importance.toString());
        })
        .slice(0, 8); // Limit to 8 results

      // Cache the results
      this.cache.set(cacheKey, filteredResults);
      
      // Clear cache after 5 minutes to keep it fresh
      setTimeout(() => {
        this.cache.delete(cacheKey);
      }, 5 * 60 * 1000);

      return filteredResults;
    } catch (error) {
      console.error('Location search error:', error);
      return [];
    }
  }

  // Debounced search for better performance
  async debouncedSearch(
    query: string, 
    callback: (results: LocationSuggestion[]) => void,
    delay: number = 300,
    countryCode: string = 'in'
  ): Promise<void> {
    const key = `${query}_${countryCode}`;
    
    // Clear existing timer
    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key)!);
    }

    // Set new timer
    const timer = setTimeout(async () => {
      const results = await this.searchLocations(query, countryCode);
      callback(results);
      this.debounceTimers.delete(key);
    }, delay);

    this.debounceTimers.set(key, timer);
  }

  // Get popular Indian cities for quick selection
  getPopularIndianCities(): LocationSuggestion[] {
    return [
      {
        display_name: 'Mumbai, Maharashtra, India',
        lat: '19.0760',
        lon: '72.8777',
        place_id: 'mumbai',
        type: 'city',
        importance: 1.0
      },
      {
        display_name: 'Delhi, India',
        lat: '28.7041',
        lon: '77.1025',
        place_id: 'delhi',
        type: 'city',
        importance: 1.0
      },
      {
        display_name: 'Bangalore, Karnataka, India',
        lat: '12.9716',
        lon: '77.5946',
        place_id: 'bangalore',
        type: 'city',
        importance: 1.0
      },
      {
        display_name: 'Ahmedabad, Gujarat, India',
        lat: '23.0225',
        lon: '72.5714',
        place_id: 'ahmedabad',
        type: 'city',
        importance: 1.0
      },
      {
        display_name: 'Surat, Gujarat, India',
        lat: '21.1702',
        lon: '72.8311',
        place_id: 'surat',
        type: 'city',
        importance: 0.9
      },
      {
        display_name: 'Vadodara, Gujarat, India',
        lat: '22.3072',
        lon: '73.1812',
        place_id: 'vadodara',
        type: 'city',
        importance: 0.9
      },
      {
        display_name: 'Pune, Maharashtra, India',
        lat: '18.5204',
        lon: '73.8567',
        place_id: 'pune',
        type: 'city',
        importance: 0.9
      },
      {
        display_name: 'Goa, India',
        lat: '15.2993',
        lon: '74.1240',
        place_id: 'goa',
        type: 'state',
        importance: 0.9
      }
    ];
  }

  // Get Gujarat cities for local travel
  getGujaratCities(): LocationSuggestion[] {
    return [
      {
        display_name: 'Ahmedabad, Gujarat, India',
        lat: '23.0225',
        lon: '72.5714',
        place_id: 'ahmedabad',
        type: 'city',
        importance: 1.0
      },
      {
        display_name: 'Surat, Gujarat, India',
        lat: '21.1702',
        lon: '72.8311',
        place_id: 'surat',
        type: 'city',
        importance: 0.9
      },
      {
        display_name: 'Vadodara, Gujarat, India',
        lat: '22.3072',
        lon: '73.1812',
        place_id: 'vadodara',
        type: 'city',
        importance: 0.9
      },
      {
        display_name: 'Rajkot, Gujarat, India',
        lat: '22.3039',
        lon: '70.8022',
        place_id: 'rajkot',
        type: 'city',
        importance: 0.8
      },
      {
        display_name: 'Gandhinagar, Gujarat, India',
        lat: '23.2156',
        lon: '72.6369',
        place_id: 'gandhinagar',
        type: 'city',
        importance: 0.8
      },
      {
        display_name: 'Bhavnagar, Gujarat, India',
        lat: '21.7645',
        lon: '72.1519',
        place_id: 'bhavnagar',
        type: 'city',
        importance: 0.7
      }
    ];
  }
}

export const locationService = new LocationService();
export type { LocationSuggestion };
