import React from 'react';
import banner from '../../assets/banner.webp';

const Banner = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl">
            {/* Background Image */}
            <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={banner}
                alt="Banner"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
                        Welcome
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto animate-fade-in-delay">
                        Discover amazing experiences that await you
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-lg"></div>
        </div>
    );
};

export default Banner;