import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

const ListingHeader = () => {
  return (
    <div className="pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between mt-2">
      <h1 className="text-2xl font-semibold">Villa La Vida Jalandhar - Luxe FarmStay with Pool</h1>
      
       
        <div className="flex mt-2 sm:mt-0">
          <button className="flex items-center mr-4 hover:underline">
            <FiShare className="h-4 w-4 mr-1" />
            Share
          </button>
          <button className="flex items-center hover:underline">
            <AiOutlineHeart className="h-4 w-4 mr-1" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;