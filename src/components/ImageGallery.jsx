import { FiGrid } from 'react-icons/fi';
import villa1 from '../assets/images/villa1.jpg';
import villa2 from '../assets/images/villa2.jpg';
import villa3 from '../assets/images/villa3.jpg';
import villa4 from '../assets/images/villa4.jpg';
import villa5 from '../assets/images/villa5.jpg';

const ImageGallery = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
        <div className="col-span-2 row-span-2 group relative overflow-hidden">
          <img 
            src={villa1} 
            alt="Villa main view" 
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></div>
        </div>
        <div className="col-span-1 group relative overflow-hidden">
          <img 
            src={villa2} 
            alt="Villa view" 
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></div>
        </div>
        <div className="col-span-1 group relative overflow-hidden">
          <img 
            src={villa3} 
            alt="Villa view" 
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></div>
        </div>
        <div className="col-span-1 group relative overflow-hidden">
          <img 
            src={villa4} 
            alt="Villa view" 
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></div>
        </div>
        <div className="col-span-1 group relative overflow-hidden">
          <img 
            src={villa5} 
            alt="Villa view" 
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></div>
        </div>
      </div>
      <button className="absolute right-4 bottom-4 bg-white px-4 py-2 rounded-lg border flex items-center font-medium text-sm hover:shadow-md transition duration-200">
        <FiGrid className="h-4 w-4 mr-2" />
        Show all photos
      </button>
    </div>
  );
};

export default ImageGallery;