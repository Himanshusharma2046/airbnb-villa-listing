import Navbar from './components/Navbar';
import ListingHeader from './components/ListingHeader';
import ImageGallery from './components/ImageGallery';
import PropertyDetails from './components/PropertyDetails';
import BookingCard from './components/BookingCard';
import Amenities from './components/Amenities';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ListingHeader />
        <ImageGallery />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <PropertyDetails />
            <hr className="my-8 text-gray-200" />
            <Amenities />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;