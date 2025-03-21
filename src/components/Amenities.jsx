import { useState, useEffect } from 'react';
import { 
  FaSwimmingPool, FaWifi, FaParking, FaFireExtinguisher, 
  FaBath, FaDog, FaKey, FaUmbrellaBeach, FaSnowboarding, FaHotTub, FaTimes
} from 'react-icons/fa';
import { 
  MdOutlineKitchen, MdOutlineLocalLaundryService, MdOutlineTv, MdOutlineBalcony, 
  MdOutlineSecurity, MdOutlineNature, MdPool, MdOutlineChildCare, MdOutlineFitnessCenter,
  MdOutlineIron, MdOutlineCleaningServices, MdOutlineHeatPump, MdOutlineRouter, MdClose
} from 'react-icons/md';
import { GiBarbecue, GiFireplace, GiHairStrands, GiTowel, GiCookingPot, GiWashingMachine } from 'react-icons/gi';
import { BsAlarm, BsThermometerHigh, BsFillSafeFill } from 'react-icons/bs';
import { TbToolsKitchen2, TbAirConditioning, TbSofa } from 'react-icons/tb';
import { BiSolidFirstAid, BiCoffee, BiWine } from 'react-icons/bi';
import { AiOutlineWifi, AiOutlineCar } from 'react-icons/ai';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { IoGameControllerOutline, IoFastFoodOutline } from 'react-icons/io5';
import { PiFlowerTulipDuotone } from "react-icons/pi";



const Amenities = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Top amenities to show initially (8 allowed, 2 not allowed)
  const topAllowedAmenities = [
    { icon: <PiFlowerTulipDuotone />, name: "Park view" },
    { icon: <PiFlowerTulipDuotone />, name: "Garden view" },
    { icon: <MdOutlineKitchen />, name: "Kitchen" },
    { icon: <FaWifi />, name: "Fast wifi – 115 Mbps" },
    { icon: <AiOutlineCar />, name: "Free driveway parking on premises – 20 spaces" },
    { icon: <MdPool />, name: "Pool view" },
    { icon: <FaDog />, name: "Pets allowed" },
    { icon: <MdOutlineTv />, name: "65-inch HDTV with Amazon Prime Video" },
  ];
  
  const topNotAllowedAmenities = [
    { icon: <BsAlarm />, name: "Smoke alarm", notAllowed: true },
    { icon: <BsAlarm />, name: "Carbon monoxide alarm", notAllowed: true },
  ];
  
  const allAmenities = {
    "Scenic views": [
      { icon: <PiFlowerTulipDuotone />, name: "Park view" },
      { icon: <MdPool />, name: "Pool view" },
      { icon: <PiFlowerTulipDuotone />, name: "Garden view" },
    ],
    "Bathroom": [
      { icon: <FaBath />, name: "Bath" },
      { icon: <GiHairStrands />, name: "Hair dryer" },
      { icon: <MdOutlineCleaningServices />, name: "Cleaning products" },
      { icon: <GiTowel />, name: "Shampoo" },
      { icon: <GiTowel />, name: "Body soap" },
      { icon: <FaBath />, name: "Bidet" },
      { icon: <FaUmbrellaBeach />, name: "Outdoor shower" },
      { icon: <BsThermometerHigh />, name: "Hot water" },
      { icon: <GiTowel />, name: "Shower gel" },
    ],
    "Bedroom and laundry": [
      { icon: <GiWashingMachine />, name: "Free washer – In building" },
      { icon: <MdOutlineLocalLaundryService />, name: "Free dryer – In building" },
      { icon: <GiTowel />, name: "Essentials" },
      { icon: <GiTowel />, name: "Towels, bed sheets, soap and toilet paper" },
      { icon: <MdOutlineIron />, name: "Hangers" },
      { icon: <GiTowel />, name: "Bed linen" },
      { icon: <TbSofa />, name: "Extra pillows and blankets" },
      { icon: <FaKey />, name: "Room-darkening blinds" },
      { icon: <MdOutlineIron />, name: "Iron" },
      { icon: <MdOutlineLocalLaundryService />, name: "Clothes drying rack" },
      { icon: <BsFillSafeFill />, name: "Safe" },
      { icon: <FaKey />, name: "Clothes storage: wardrobe and chest of drawers" },
    ],
    "Entertainment": [
      { icon: <AiOutlineWifi />, name: "Ethernet connection" },
      { icon: <MdOutlineTv />, name: "65-inch HDTV with Amazon Prime Video" },
      { icon: <MdOutlineFitnessCenter />, name: "Exercise equipment" },
      { icon: <IoGameControllerOutline />, name: "Arcade games" },
    ],
    "Family": [
      { icon: <MdOutlineChildCare />, name: "Children's books and toys" },
      { icon: <IoFastFoodOutline />, name: "Children's tableware" },
      { icon: <MdOutlineChildCare />, name: "Children's playroom" },
      { icon: <MdOutlineChildCare />, name: "An indoor room with toys, books and games for children" },
      { icon: <MdOutlineChildCare />, name: "Outdoor playground" },
      { icon: <MdOutlineChildCare />, name: "An outdoor area equipped with play structures for children" },
    ],
    "Heating and cooling": [
      { icon: <TbAirConditioning />, name: "AC – split-type ductless system" },
      { icon: <FaSnowboarding />, name: "Ceiling fan" },
      { icon: <MdOutlineHeatPump />, name: "Portable heater" },
    ],
    "Home safety": [
      { icon: <FaFireExtinguisher />, name: "Fire extinguisher" },
      { icon: <BiSolidFirstAid />, name: "First aid kit" },
    ],
    "Internet and office": [
      { icon: <MdOutlineRouter />, name: "Fast wifi – 115 Mbps" },
      { icon: <AiOutlineWifi />, name: "Verified by speed test. Stream 4K videos and join video calls on multiple devices." },
    ],
    "Kitchen and dining": [
      { icon: <MdOutlineKitchen />, name: "Kitchen" },
      { icon: <MdOutlineKitchen />, name: "Space where guests can cook their own meals" },
      { icon: <CgSmartHomeRefrigerator />, name: "Fridge" },
      { icon: <MdOutlineKitchen />, name: "Microwave" },
      { icon: <GiCookingPot />, name: "Cooking basics" },
      { icon: <GiCookingPot />, name: "Pots and pans, oil, salt and pepper" },
      { icon: <IoFastFoodOutline />, name: "Dishes and cutlery" },
      { icon: <IoFastFoodOutline />, name: "Bowls, chopsticks, plates, cups, etc." },
      { icon: <CgSmartHomeRefrigerator />, name: "Mini fridge" },
      { icon: <CgSmartHomeRefrigerator />, name: "Freezer" },
      { icon: <TbToolsKitchen2 />, name: "Dishwasher" },
      { icon: <MdOutlineKitchen />, name: "Cooker" },
      { icon: <MdOutlineKitchen />, name: "Oven" },
      { icon: <BiCoffee />, name: "Kettle" },
      { icon: <BiCoffee />, name: "Coffee maker" },
      { icon: <BiWine />, name: "Wine glasses" },
      { icon: <MdOutlineKitchen />, name: "Rice cooker" },
      { icon: <GiBarbecue />, name: "Barbecue utensils" },
      { icon: <GiBarbecue />, name: "Grill, charcoal, bamboo skewers/iron skewers, etc." },
    ],
    "Location features": [
      { icon: <FaKey />, name: "Private entrance" },
      { icon: <FaKey />, name: "Separate street or building entrance" },
    ],
    "Outdoor": [
      { icon: <MdOutlineBalcony />, name: "Private patio or balcony" },
      { icon: <MdOutlineNature />, name: "Private back garden – Fully fenced" },
      { icon: <MdOutlineNature />, name: "An open space on the property usually covered in grass" },
      { icon: <GiFireplace />, name: "Firepit" },
      { icon: <MdOutlineBalcony />, name: "Outdoor furniture" },
      { icon: <MdOutlineBalcony />, name: "Outdoor dining area" },
      { icon: <MdOutlineKitchen />, name: "Outdoor kitchen" },
      { icon: <GiBarbecue />, name: "BBQ grill" },
      { icon: <FaUmbrellaBeach />, name: "Sun loungers" },
    ],
    "Parking and facilities": [
      { icon: <AiOutlineCar />, name: "Free driveway parking on premises – 20 spaces" },
      { icon: <FaSwimmingPool />, name: "Private outdoor pool – available all year, open specific hours" },
      { icon: <FaSwimmingPool />, name: "open from 6:00 am to 9:00 pm" },
      { icon: <MdOutlineFitnessCenter />, name: "Gym" },
    ],
    "Services": [
      { icon: <FaDog />, name: "Pets allowed" },
      { icon: <FaDog />, name: "Assistance animals are always allowed" },
      { icon: <FaKey />, name: "Luggage drop-off allowed" },
      { icon: <FaKey />, name: "For guests' convenience when they are arriving early or departing late" },
      { icon: <FaKey />, name: "Long-term stays allowed" },
      { icon: <FaKey />, name: "Allow stays of 28 days or more" },
      { icon: <MdOutlineCleaningServices />, name: "Cleaning available during stay" },
    ],
    "Not included": [
      { icon: <MdOutlineSecurity />, name: "Exterior security cameras on property", notAllowed: true },
      { icon: <BsAlarm />, name: "Smoke alarm", notAllowed: true },
      { icon: <BsAlarm />, name: "Carbon monoxide alarm", notAllowed: true },
    ],
  };


  // Modal component for showing all amenities
  const AmenitiesModal = () => {
    if (!showModal) return null;
    
    return (
      <div 
        className="fixed inset-0  bg-black bg-opacity-50 z-60 flex justify-center items-start overflow-y-auto pt-10 pb-10"
        onClick={() => setShowModal(false)}
      >
        <div 
          className="bg-white rounded-xl max-w-3xl w-full max-h-full overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex items-center">
            <button 
              onClick={() => setShowModal(false)}
              className="p-2 rounded-full hover:bg-gray-100 mr-4"
            >
              <MdClose className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold flex-grow text-center pr-12">What this place offers</h3>
          </div>
          
          <div className="p-6 space-y-8">
            {Object.entries(allAmenities).map(([category, amenities]) => (
              <div key={category} className="pb-6 border-b border-gray-100 last:border-b-0">
                <h4 className="text-lg font-semibold mb-4">{category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center py-2">
                      <div className="mr-4 text-xl">
                        {amenity.icon}
                      </div>
                      <span className={amenity.notAllowed ? "line-through" : ""}>
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="py-8 border-t border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">What this place offers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First 8 allowed amenities */}
        {topAllowedAmenities.map((amenity, index) => (
          <div key={`allowed-${index}`} className="flex items-center py-2">
            <div className="mr-4 text-xl">
              {amenity.icon}
            </div>
            <span>{amenity.name}</span>
          </div>
        ))}
        
        {/* 2 not allowed amenities */}
        {topNotAllowedAmenities.map((amenity, index) => (
          <div key={`not-allowed-${index}`} className="flex items-center py-2">
            <div className="mr-4 text-xl line-through">
              {amenity.icon}
              </div>
            <span className="line-through">{amenity.name}</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setShowModal(true)}
        className="mt-8 border border-gray-900 rounded-lg px-6 py-3 font-medium hover:bg-gray-50 transition-colors"
      >
        Show all 68 amenities
      </button>
      
      {/* Modal for showing all amenities */}
      <AmenitiesModal />
    </div>
  );
};

export default Amenities;