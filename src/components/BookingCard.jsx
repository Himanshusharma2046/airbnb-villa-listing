import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar } from "react-icons/ai";

const BookingCard = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  
  const guestSelectorRef = useRef(null);
  const baseRatePerAdult = 26000;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestSelectorRef.current && !guestSelectorRef.current.contains(event.target)) {
        setShowGuestSelector(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle guest selector dropdown
  const toggleGuestSelector = (e) => {
    e.stopPropagation();
    setShowGuestSelector(!showGuestSelector);
  };

  // Calculate total price
  const nights = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  const pricePerNight = baseRatePerAdult * adults;
  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return null;
    
    if (nights <= 0) return null;
    const subtotal = pricePerNight * nights;
    const serviceFee = subtotal * 0.14; // 14% service fee
    return { nights, pricePerNight, subtotal, serviceFee, total: subtotal + serviceFee };
  };
  const priceDetails = calculateTotalPrice();
  const totalGuests = adults + children + pets;
  const maxGuests = 16;
  const isMaxGuests = totalGuests >= maxGuests;

  // Guest Counter Component
  const GuestCounter = ({ title, subtitle, value, setValue, min, max }) => {
    const isAtMin = value <= min;
    const isAtMax = (max !== undefined && value >= max) || (title !== "Infants" && isMaxGuests);

    return (
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex items-center">
          <button
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              isAtMin ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => !isAtMin && setValue(value - 1)}
            disabled={isAtMin}
            type="button"
          >
            -
          </button>
          <span className="mx-3 w-5 text-center">{value}</span>
          <button
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              isAtMax ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => !isAtMax && setValue(value + 1)}
            disabled={isAtMax}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="border rounded-xl shadow-lg p-6 relative overflow-visible">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="font-semibold text-xl">₹{pricePerNight.toLocaleString()}</span>
          <span className="text-gray-500"> night</span>
        </div>
      </div>

      <div className="border rounded-lg overflow-visible">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-b">
            <label className="block text-xs font-bold">CHECK-IN</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                if (checkOutDate && date > checkOutDate) {
                  setCheckOutDate(null);
                }
              }}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              placeholderText="Add date"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="p-3 border-b">
            <label className="block text-xs font-bold">CHECKOUT</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              placeholderText="Add date"
              className="w-full outline-none text-sm"
              disabled={!checkInDate}
            />
          </div>
        </div>

        <div className="p-3 relative" ref={guestSelectorRef}>
          <label className="block text-xs font-bold">GUESTS</label>
          <button
            className="w-full text-left text-sm py-1 flex justify-between items-center border p-2 rounded-md"
            onClick={toggleGuestSelector}
            type="button"
          >
            <span>
              {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
              {infants > 0 && `, ${infants} infant${infants !== 1 ? "s" : ""}`}
            </span>
          </button>

          {showGuestSelector && (
            <div className="absolute left-0 w-full bg-white border mt-2 p-4 shadow-lg z-50 rounded-lg">
              <GuestCounter title="Adults" subtitle="Age 13+" value={adults} setValue={setAdults} min={1} />
              <GuestCounter title="Children" subtitle="Ages 2-12" value={children} setValue={setChildren} min={0} />
              <GuestCounter title="Infants" subtitle="Under 2" value={infants} setValue={setInfants} min={0} max={5} />
              <GuestCounter title="Pets" subtitle="Bringing a service animal?" value={pets} setValue={setPets} min={0} />
            </div>
          )}
        </div>
      </div>


      <button
        className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-medium mt-4 hover:bg-[#E31C5F] transition-colors"
        type="button"
        disabled={!checkInDate || !checkOutDate}
      >
        {checkInDate && checkOutDate ? "Reserve" : "Check availability"}
      </button>

      {priceDetails && (
        <div className="mt-4">
          <div className="flex justify-between" >
            <p>{baseRatePerAdult} x {nights} nights </p>
            <p> ₹{priceDetails.subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p> Airbnb Service Fee </p>
            <p>₹{priceDetails.serviceFee.toLocaleString()}</p>
          </div>

          <hr className="my-4 border-gray-300" />
          
          <div className="flex justify-between">
              <p className="font-bold">Total before taxes </p>
              <p> ₹{priceDetails.total.toLocaleString()}</p>
          </div>
          
        </div>
      )}

      
    </div>
  );
};

export default BookingCard;
