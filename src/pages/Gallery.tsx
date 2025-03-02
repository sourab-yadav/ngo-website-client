import React from "react";

const galleryImages = [
  { id: 1, src: "/gallery/1.jpg", title: "Image Title 1" },
  { id: 2, src: "/gallery/2.jpg", title: "Image Title 2" },
  { id: 3, src: "/gallery/3.jpg", title: "Image Title 3" },
  { id: 4, src: "/gallery/4.jpg", title: "Image Title 4" },
  { id: 5, src: "/gallery/5.jpg", title: "Image Title 5" },
  { id: 6, src: "/gallery/6.jpg", title: "Image Title 6" },
  { id: 7, src: "/gallery/7.jpg", title: "Image Title 7" },
  { id: 8, src: "/gallery/8.jpg", title: "Image Title 8" },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-30 bg-gray-100" id="gallerysection">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold ml-[47%] mb-6 border-b-4 border-red-500 inline-block">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative group">
              <span className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded opacity-80">
                {image.title}
              </span>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
