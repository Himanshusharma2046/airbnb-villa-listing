import { FaUserCircle,FaTrophy, FaStar, FaChild } from 'react-icons/fa';
import SleepingArrangements from './SleepingArrangements';
import { GiOakLeaf } from "react-icons/gi";
import msingh from '../assets/images/msingh.jpg';
// import { GrUserManager } from "react-icons/gr";

import { MdOutlineFamilyRestroom } from "react-icons/md";





const PropertyDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-semibold">Entire villa in Jalandhar, India</h2>
                    <p className="text-gray-600 mt-1">16+ guests · 6 bedrooms · 10 beds · 8 bathrooms</p>
                </div>
              
            </div>

            <div className="mt-1 border border-gray-200 rounded-xl p-1">
                <div className=" mt-1 mb-1 flex justify-between items-center ">
                    <div className='ml-2'>
                        <div className="flex justify-between items-center ">
                            <GiOakLeaf className="h-6 w-6 text-yellow-800" />
                            <div className="flex flex-col justify-center">
                                <span className="block font-semibold text-gray-700 ">Guest</span>
                                <span className="block font-semibold text-gray-700">favourite</span>
                            </div>
                            <GiOakLeaf className="h-6 w-6 text-yellow-800 transform rotate-90 " />
                        </div>
                    </div>


                    <div className=' mt-3 mb-1 flex flex-col justify-center'>
                        <p className=" text-gray-700 font-semibold">One of the most loved homes on </p>
                        <p className=" text-gray-700 font-semibold">Airbnb, according to guests</p>

                    </div>

                    <div className='mr-2'>
                        <div className="mt-3 flex ">
                            <div className="text-center">
                                <div className="font-semibold text-lg text-gray-700">5.0</div>
                                <div className="flex mt-1">
                                    <FaStar className="h-3 w-3  text-gray-700" />
                                    <FaStar className="h-3 w-3  text-gray-700" />
                                    <FaStar className="h-3 w-3  text-gray-700" />
                                    <FaStar className="h-3 w-3  text-gray-700" />
                                    <FaStar className="h-3 w-3  text-gray-700" />
                                </div>
                            </div>

                            <div className="mx-4 h-12 w-px bg-gray-200"></div>

                            <div className="text-center">
                                <div className="font-semibold text-lg text-gray-700">29</div>
                                <div className="text-sm text-gray-700 ">Reviews</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




            <div className="mt-6 flex items-center pb-6 border-b border-gray-200">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                {/* <GrUserManager/> */}
                    <img
                        src={msingh}
                        alt="Host"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            return <FaUserCircle className="h-full w-full text-gray-500" />;
                        }}
                    />
                </div>
                <div>
                    <h3 className="font-medium">Hosted by Mandeep Singh</h3>
                    <p className="text-gray-600">Superhost · 2 years hosting</p>
                </div>
            </div>

            <div className="mt-6 space-y-6">
                <div className="flex items-start">
                    <div className="mt-1 mr-4">
                        <FaTrophy  className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Top 1% of homes</h3>
                        <p className="text-gray-600">This home is one of the highest ranked based on ratings, reviews and reliability.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="mt-1 mr-4">
                        <MdOutlineFamilyRestroom  className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Perfect ratings from families</h3>
                        <p className="text-gray-600">100% of families who stayed here in the past year rated it 5 stars overall.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="mt-1 mr-4">
                        <FaChild className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Fun and games for kids</h3>
                        <p className="text-gray-600">The playroom, playground and books help keep kids entertained.</p>
                    </div>
                </div>
            </div>
            <hr className="my-8 border-gray-300" />

            <div className="mt-8">
                <p className="text-gray-800 leading-relaxed">
                    La vida - The life.
                    <br /><br />
                    This 3 Acre, 10,000 sq ft modern Farmhouse is inspired from the Mega Mansions of Marbella, Spain.
                    Overlooking a beautiful orchard, enjoy the magnificent pool, warm yourselves in the fire pit next to it while relishing a delicious barbecue meal, you will be spoilt for choice
                </p>
                <button className="mt-4 font-semibold underline text-gray-700">Show more..</button>
            </div>

            <hr className="my-10 border-gray-300" />

            <SleepingArrangements />
        </div>
    );
};

export default PropertyDetails;