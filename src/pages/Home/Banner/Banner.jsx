// import React from 'react';
import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
// import image5 from '../../../assets/images/banner/5.jpg';
// import image6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">
      {/* 01 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[black] to-[rgba(0, 128, 128, 0.5)] p-8">
          <div className="text-white w-1/2 ">
            <h2 className="text-6xl font-bold font-style: italic">
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae blanditiis in unde dolorem, molestiae alias.
            </p>
            <div className="mt-4 flex">
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle text-red-900 text-2xl mr-8"
          >
            ←
          </a>
          <a href="#slide2" className="btn btn-circle  text-red-900 text-2xl">
            →
          </a>
        </div>
      </div>

      {/* 02 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[black] to-[rgba(0, 128, 128, 0.5)] p-8">
          <div className="text-white w-1/2 ">
            <h2 className="text-6xl font-bold font-style: italic">
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae blanditiis in unde dolorem, molestiae alias.
            </p>
            <div className="mt-4 flex">
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle  text-red-900 text-2xl mr-8"
          >
            ←
          </a>
          <a href="#slide3" className="btn btn-circle  text-red-900 text-2xl">
            →
          </a>
        </div>
      </div>

      {/* 03 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[black] to-[rgba(0, 128, 128, 0.5)] p-8">
          <div className="text-white w-1/2 ">
            <h2 className="text-6xl font-bold font-style: italic">
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae blanditiis in unde dolorem, molestiae alias.
            </p>
            <div className="mt-4 flex">
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle  text-red-900 text-2xl mr-8"
          >
            ←
          </a>
          <a href="#slide4" className="btn btn-circle  text-red-900 text-2xl">
            →
          </a>
        </div>
      </div>

      {/* 04 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[black] to-[rgba(0, 128, 128, 0.5)] p-8">
          <div className="text-white w-1/2 ">
            <h2 className="text-6xl font-bold font-style: italic">
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae blanditiis in unde dolorem, molestiae alias.
            </p>
            <div className="mt-4 flex">
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle  text-red-900 text-2xl mr-8"
          >
            ←
          </a>
          <a href="#slide1" className="btn btn-circle  text-red-900 text-2xl">
            →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
