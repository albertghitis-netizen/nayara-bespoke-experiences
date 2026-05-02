import { useEffect, useRef } from 'react';

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Gallery organized by hotel and topic, spread evenly with night time images
  const galleryItems = [
    // TENTED CAMP - Rooms & Accommodations
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-hero-desktop-new.mp4', alt: 'Tented Camp Hero', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-tent-35.jpg', alt: 'Nayara Tent', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ig-tented-camp.jpg', alt: 'Tented Camp IG', layout: 'v' },
    
    // TENTED CAMP - Wellness & Experiences
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-wellness-vertical-new.mp4', alt: 'Tented Wellness', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-deck.jpg', alt: 'Yoga Deck', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sound-healing.jpg', alt: 'Sound Healing', layout: 'v' },
    
    // TENTED CAMP - Gastronomy
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-gastronomy-hero.jpg', alt: 'Tented Gastronomy', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/in-the-tub-brice-ferre.jpg', alt: 'In the Tub', layout: 'h' },
    
    // TENTED CAMP - Sustainability & Nature
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-sustainability-vertical.mp4', alt: 'Tented Sustainability', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-sustainability-toucans-v2.jpg', alt: 'Tented Toucans', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-sloth-drinking.jpg', alt: 'Tented Sloth', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-experiences-bridge.jpg', alt: 'Tented Bridge', layout: 'v' },
    
    // TENTED CAMP - Night Time
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-night-frogs-vertical.mp4', alt: 'Tented Night Frogs', layout: 'v' },
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-pool-h-new.mp4', alt: 'Tented Pool', layout: 'h' },
    
    // SPRINGS - Rooms & Accommodations
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-rooms-hero.jpg', alt: 'Springs Rooms', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-view.jpg', alt: 'Springs Villa View', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-entrance.jpg', alt: 'Springs Villa Entrance', layout: 'v' },
    
    // SPRINGS - Wellness & Experiences
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-experience-vertical.mp4', alt: 'Springs Experience', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/termas-pool.jpg', alt: 'Termas Pool', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/termas-cascading-pools.jpg', alt: 'Termas Cascading Pools', layout: 'h' },
    
    // SPRINGS - Sustainability
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-sustainability-hero.jpg', alt: 'Springs Sustainability', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-shower-2.jpg', alt: 'Springs Villa Shower', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-outdoor-shower.jpg', alt: 'Springs Outdoor Shower', layout: 'v' },
    
    // GARDENS - Rooms & Accommodations
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-rooms-hero.jpg', alt: 'Gardens Rooms', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ig-gardens.jpg', alt: 'Gardens IG', layout: 'v' },
    
    // GARDENS - Wellness
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness-garden-path.jpg', alt: 'Wellness Garden', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness-infinity-pool.jpg', alt: 'Wellness Pool', layout: 'v' },
    
    // GARDENS - Experiences
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sound-therapy-vertical.jpg', alt: 'Sound Therapy', layout: 'v' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-vertical-2.jpg', alt: 'Yoga Vertical', layout: 'v' },
    
    // ATACAMA - Rooms & Accommodations
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-accom-horizontal-new.mp4', alt: 'Atacama Accommodations', layout: 'h' },
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-s7-vertical.mp4', alt: 'Atacama Vertical', layout: 'v' },
    
    // ATACAMA - Experiences & Nature
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-rainbow-valley-h.mp4', alt: 'Atacama Rainbow Valley', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset-new.jpg', alt: 'Atacama Sunset', layout: 'h' },
    
    // ATACAMA - Night Time (Stargazing)
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-bynight-telescope.jpg', alt: 'Atacama Night Sky', layout: 'h' },
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/journal-cover-stargazing-atacama.jpg', alt: 'Stargazing Atacama', layout: 'v' },
    
    // BOCAS - Experiences & Nature
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-experiences-hero.jpg', alt: 'Bocas Experiences', layout: 'h' },
    
    // BOCAS - Night Time (Bioluminescence)
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-bynight-bioluminescence.jpg', alt: 'Bocas Bioluminescence', layout: 'h' },
    
    // GENERAL - Mobile & Misc
    { type: 'image', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-mobile-hero.jpg', alt: 'Atacama Mobile Hero', layout: 'h' },
    { type: 'video', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-experiences-horizontal-new.mp4', alt: 'Tented Experiences', layout: 'h' },
  ];

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
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Masonry Gallery - goes straight to grid */}
      <div ref={containerRef} className="px-4 py-12 max-w-7xl mx-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridAutoRows: '250px',
          }}
        >
          {galleryItems.map((item, index) => {
            const isWide = item.layout === 'h';
            const isTall = item.layout === 'v';
            
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-gray-900"
                style={{
                  gridColumn: isWide ? 'span 2' : 'span 1',
                  gridRow: isTall ? 'span 2' : 'span 1',
                }}
              >
                {item.type === 'image' ? (
                  <img
                    data-src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    data-src={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  >
                    <source type="video/mp4" />
                  </video>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
}
