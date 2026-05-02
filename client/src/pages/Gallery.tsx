import { useState, useEffect, useRef } from 'react';
import { springsGallery, atacamaGallery, bocasGallery, hangaroaGallery, gardensGallery, tentedCampGallery } from '@/data/gallery';
import type { GalleryItem } from '@/data/gallery';

const PROPERTIES = [
  { id: 'all', label: 'All Properties', color: 'bg-stone-200' },
  { id: 'springs', label: 'Nayara Springs', color: 'bg-emerald-100' },
  { id: 'atacama', label: 'Alto Atacama', color: 'bg-amber-100' },
  { id: 'bocas', label: 'Bocas del Toro', color: 'bg-blue-100' },
  { id: 'hangaroa', label: 'Hangaroa', color: 'bg-purple-100' },
  { id: 'gardens', label: 'Nayara Gardens', color: 'bg-green-100' },
  { id: 'tented', label: 'Tented Camp', color: 'bg-orange-100' },
];

export default function Gallery() {
  const [selectedProperty, setSelectedProperty] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine all gallery items with property tags
  const allItems: (GalleryItem & { property: string })[] = [
    ...springsGallery.map(item => ({ ...item, property: 'springs' })),
    ...atacamaGallery.map(item => ({ ...item, property: 'atacama' })),
    ...bocasGallery.map(item => ({ ...item, property: 'bocas' })),
    ...hangaroaGallery.map(item => ({ ...item, property: 'hangaroa' })),
    ...gardensGallery.map(item => ({ ...item, property: 'gardens' })),
    ...tentedCampGallery.map(item => ({ ...item, property: 'tented' })),
  ];

  // Filter items based on selected property
  const filteredItems = selectedProperty === 'all' 
    ? allItems 
    : allItems.filter(item => item.property === selectedProperty);

  // Map orientation to grid sizing
  const getGridSpan = (item: GalleryItem & { property: string }) => {
    if (item.orientation === 'landscape') return 'col-span-2 row-span-1';
    if (item.orientation === 'portrait') return 'col-span-1 row-span-2';
    return 'col-span-1 row-span-1'; // square
  };

  useEffect(() => {
    // Lazy load images and videos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLImageElement | HTMLVideoElement;
          if (element.dataset.src) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = element.dataset.src;
            } else if (element.tagName === 'VIDEO') {
              const source = element.querySelector('source');
              if (source) {
                source.src = element.dataset.src;
                (element as HTMLVideoElement).load();
              }
            }
          }
          observer.unobserve(element);
        }
      });
    });

    if (containerRef.current) {
      containerRef.current.querySelectorAll('img, video').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Nayara Gallery
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl">
            Explore the beauty and luxury across all six Nayara properties
          </p>
        </div>
      </div>

      {/* Property Filter Tabs */}
      <div className="bg-stone-50 sticky top-0 z-40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {PROPERTIES.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setSelectedProperty(prop.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedProperty === prop.id
                    ? 'bg-stone-900 text-white shadow-lg'
                    : 'bg-stone-200 text-stone-900 hover:bg-stone-300'
                }`}
              >
                {prop.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-stone-600 mt-4">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      {/* Mason Grid Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div
          ref={containerRef}
          className="grid gap-4 auto-rows-[250px]"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={`${item.property}-${item.id}-${index}`}
              className={`relative overflow-hidden rounded-lg group cursor-pointer bg-stone-200 ${getGridSpan(item)}`}
            >
              {item.type === 'image' ? (
                <img
                  data-src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <video
                  data-src={item.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  loop
                  playsInline
                  autoPlay
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source type="video/mp4" />
                </video>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Property tag */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1 rounded-full">
                  {PROPERTIES.find(p => p.id === item.property)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-600 text-lg">No items found for this property</p>
          </div>
        )}
      </div>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
}
