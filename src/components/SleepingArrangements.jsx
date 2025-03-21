import { useState, useRef, useEffect } from 'react';
import { BiBed } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { LuBedSingle } from "react-icons/lu";

const SleepingArrangements = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const bedrooms = [
    { id: 1, name: "Bedroom 1", beds: "1 double bed" },
    { id: 2, name: "Bedroom 2", beds: "1 double bed, 1 single bed" },
    { id: 3, name: "Bedroom 3", beds: "1 double bed" },
    { id: 4, name: "Bedroom 4", beds: "1 double bed" },
    { id: 5, name: "Bedroom 5", beds: "1 double bed" },
    { id: 6, name: "Bedroom 6", beds: "2 double beds, 2 single beds" },
  ];

  // Function to parse bed information and return icon components
  const renderBedIcons = (bedInfo) => {
    const doubleBedMatch = bedInfo.match(/(\d+) double bed/);
    const singleBedMatch = bedInfo.match(/(\d+) single bed/);
    
    const doubleBedCount = doubleBedMatch ? parseInt(doubleBedMatch[1]) : 0;
    const singleBedCount = singleBedMatch ? parseInt(singleBedMatch[1]) : 0;
    
    const icons = [];
    
    // Add double bed icons
    for (let i = 0; i < doubleBedCount; i++) {
      icons.push(<BiBed key={`double-${i}`} className="h-6 w-6 mr-1" />);
    }
    
    // Add single bed icons
    for (let i = 0; i < singleBedCount; i++) {
      icons.push(<LuBedSingle key={`single-${i}`} className="h-5 w-5 mr-1" />);
    }
    
    return (
      <div className="flex flex-wrap mt-2 mb-2">
        {icons}
      </div>
    );
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      // Initial check
      checkScrollButtons();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold mb-4">Where you'll sleep</h3>
      
      <div className="relative">
        {showLeftButton && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bedrooms.map((bedroom) => (
            <div 
              key={bedroom.id} 
              className="flex-none mr-4 border rounded-xl p-6 w-60"
            >
              {renderBedIcons(bedroom.beds)}
              <h4 className="font-medium">{bedroom.name}</h4>
              <p className="text-gray-600 mt-1">{bedroom.beds}</p>
            </div>
          ))}
        </div>
        
        {showRightButton && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SleepingArrangements;