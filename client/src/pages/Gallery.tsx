import { galleryItems } from "@/data/gallery";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Pure Mason Grid - starts immediately at top */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4 md:p-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity duration-300"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
