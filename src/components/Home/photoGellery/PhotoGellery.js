import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Photo from "./Photo";

const images = [
 { name: " Sanmartin",img:"https://i.ibb.co/HDR19jD/saint-martin.jpg"},
 { name: " Bandarbans",img:"https://i.ibb.co/SvnWYnf/bandarbansjpg.jpg"},
 { name: " Kuakata",img:"https://i.ibb.co/V0ycXpZ/kuakata.jpg"},
 { name: " Cox's Bazar",img:"https://i.ibb.co/2hP0bcc/Coxs-bazar.jpg"},
 { name: "Guliakhali",img:"https://i.ibb.co/XszNpS6/Giliakhali.jpg"},
 { name: " Sajek",img:"https://i.ibb.co/V2nVzjn/sajek2.jpg"},

];

const PhotoGellery = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="bg-black text-white w-3/5 mx-auto p-5 rounded m-5 ">
        <h1 className="text-center font-bold text-3xl">Most Popular Places in Bangladesh</h1>
        <p className="text-center mt-3 text-xl">These are the most popular places in Bangladesh</p>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="rounded">
          {images.map((photoGellery, i) => (
            <Photo
            key={i}
            photoGellery={photoGellery}
            ></Photo>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default PhotoGellery;
