import React, { useState, useEffect } from 'react';
import { Car, MapPin, CheckCircle, Clock } from 'lucide-react';

interface TaxiAnimationProps {
  isSubmitting: boolean;
  isSuccess: boolean;
  onAnimationComplete?: () => void;
}

const TaxiAnimation: React.FC<TaxiAnimationProps> = ({ 
  isSubmitting, 
  isSuccess, 
  onAnimationComplete 
}) => {
  const [animationStage, setAnimationStage] = useState<'idle' | 'moving' | 'success'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isSubmitting && animationStage === 'idle') {
      setAnimationStage('moving');
      setProgress(0);

      // Animate progress from 0 to 100 over 1.5 seconds (faster)
      const duration = 1500;
      const interval = 30;
      const increment = (interval / duration) * 100;

      const progressTimer = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + increment;
          if (newProgress >= 100) {
            clearInterval(progressTimer);
            // Don't auto-transition to arrived - wait for success
            return 100;
          }
          return newProgress;
        });
      }, interval);

      return () => clearInterval(progressTimer);
    }
  }, [isSubmitting, animationStage]);

  useEffect(() => {
    if (isSuccess && (animationStage === 'moving' || progress >= 100)) {
      setAnimationStage('success');
      setProgress(100);
      setTimeout(() => {
        onAnimationComplete?.();
      }, 2000);
    }
  }, [isSuccess, animationStage, progress, onAnimationComplete]);

  useEffect(() => {
    if (!isSubmitting && !isSuccess) {
      setAnimationStage('idle');
      setProgress(0);
    }
  }, [isSubmitting, isSuccess]);

  if (animationStage === 'idle') {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
        {/* Animation Container */}
        <div className="relative h-32 mb-6 overflow-hidden">
          {/* Road */}
          <div className="absolute bottom-8 left-0 right-0 h-2 bg-gray-300 rounded">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 rounded">
              {/* Road markings */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-60 transform -translate-y-1/2">
                <div className="flex justify-between h-full">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-full bg-white rounded-full opacity-80" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Start Point */}
          <div className="absolute bottom-12 left-4">
            <MapPin className="w-6 h-6 text-primary animate-pulse" />
            <div className="text-xs text-gray-600 mt-1 whitespace-nowrap">Pickup</div>
          </div>

          {/* End Point */}
          <div className="absolute bottom-12 right-4">
            {animationStage === 'success' ? (
              <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
            ) : (
              <MapPin className="w-6 h-6 text-secondary" />
            )}
            <div className="text-xs text-gray-600 mt-1 whitespace-nowrap">
              {animationStage === 'success' ? 'Booked!' : 'Destination'}
            </div>
          </div>

          {/* Taxi */}
          <div 
            className="absolute bottom-6 transition-all duration-100 ease-linear"
            style={{ 
              left: `${Math.min(progress * 0.8 + 8, 85)}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className={`transform transition-transform duration-300 ${
              animationStage === 'moving' ? 'animate-bounce' : ''
            } ${
              animationStage === 'success' ? 'scale-110' : ''
            }`}>
              <Car className={`w-8 h-8 transition-colors duration-300 ${
                animationStage === 'success' ? 'text-green-500' : 'text-primary'
              }`} />
            </div>
            
            {/* Taxi exhaust animation */}
            {animationStage === 'moving' && (
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-60"
                    style={{
                      left: `-${i * 4 + 4}px`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '0.8s'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Progress indicator */}
          {animationStage === 'moving' && (
            <div className="absolute bottom-2 left-4 right-4">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Status Text */}
        <div className="space-y-2">
          {animationStage === 'moving' && (
            <>
              <div className="flex items-center justify-center space-x-2">
                <Car className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Submitting Your Request</h3>
              </div>
              <p className="text-gray-600">
                Processing your booking details...
              </p>
              <div className="text-sm text-primary font-medium">
                {Math.round(progress)}% Complete
              </div>
            </>
          )}

          {animationStage === 'success' && (
            <>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                <h3 className="text-xl font-bold text-green-600">Booking Successful!</h3>
              </div>
              <p className="text-gray-600">
                Your request has been submitted successfully.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <p className="text-sm text-green-700">
                  <strong>What's Next?</strong><br />
                  Our team will contact you within 15 minutes to confirm your booking details.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiAnimation;
