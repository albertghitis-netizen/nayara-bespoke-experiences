export default function Gallery() {
  // 50 images using the correct manus-storage URL pattern
  // Format: https://[site-domain]/manus-storage/[filename]
  const siteBase = typeof window !== 'undefined' ? window.location.origin : 'https://nayaraexpt-apu7tbha.manus.space';
  
  const images = [
    { filename: 'bocas-aerial-island_768aa7ca.jpg', layout: 'h' },
    { filename: 'gardens-mobile-hero_0e9258d0.jpg', layout: 'v' },
    { filename: 'atacama-experiences-mobile-hero_01cf35ae.jpg', layout: 'v' },
    { filename: 'springs-villa-1-pg_a69e8888.jpg', layout: 'v' },
    { filename: 'meditate-yoga_6f8b3404.jpg', layout: 'h' },
    { filename: 'springs-3_fc01da99.jpg', layout: 'v' },
    { filename: 'bocas-fb-elephant-house-1_17306d92.jpg', layout: 'h' },
    { filename: 'ig-atacama_545fe613.jpg', layout: 'v' },
    { filename: 'atacama-sustainability-flamingos_b40f4169.jpg', layout: 'h' },
    { filename: '65_60138582.jpg', layout: 'h' },
    { filename: 'tc-accom-horizontal-lastframe_ecf63512.jpg', layout: 'h' },
    { filename: 'springs-villa-view_7e54c290.jpg', layout: 'v' },
    { filename: 'ns-1_583de976.jpg', layout: 'h' },
    { filename: 'Resort-6-LR_4e6cd791.jpg', layout: 'h' },
    { filename: 'atacama-experiences-lagoon_b1954681.jpg', layout: 'h' },
    { filename: 'springs-villa-shower-2_7465f523.jpg', layout: 'v' },
    { filename: 'brand-s2-bocas-h_e675f7a1.jpg', layout: 'h' },
    { filename: 'yoga-vertical-2_ac72e200.jpg', layout: 'v' },
    { filename: 'ig-tented-camp_5a06dc9d.jpg', layout: 'v' },
    { filename: 'sound-healing-web_4f548c79.jpg', layout: 'h' },
    { filename: 'bocas-rooms-hero_7ec54aec.jpg', layout: 'h' },
    { filename: 'tc-mobile-hero_e1eb26b5.jpg', layout: 'v' },
    { filename: 'podcast-cover-suite-success_0f9029de.jpg', layout: 'v' },
    { filename: 'sharalynn-hero_c31a27ea.jpg', layout: 'h' },
    { filename: 'bocas-resort-24_715feef2.jpg', layout: 'h' },
    { filename: 'springs-villa-entrance_5fa19f66.jpg', layout: 'v' },
    { filename: 'springs-rooms-hero_d1f48928.jpg', layout: 'h' },
    { filename: 'atacama-rooms-hero_576386ab.jpg', layout: 'h' },
    { filename: 'ns-pool-brice-ferre_fc0ad6b9.jpg', layout: 'h' },
    { filename: 'ntc-aerial-connecting_73570c95.jpg', layout: 'h' },
    { filename: 'ig-gardens_23d88dd7.jpg', layout: 'v' },
    { filename: 'meditate-yoga-web_d92ef2e8.jpg', layout: 'h' },
    { filename: 'gardens-mobile-hero-v2_7eca380c.jpg', layout: 'v' },
    { filename: 'brand-wellness-mobile-hero_02191874.jpg', layout: 'v' },
    { filename: 'brand-s2-bocas-new_7f1a0110.jpg', layout: 'h' },
    { filename: 'tented-sloth-drinking_57626b44.jpg', layout: 'v' },
    { filename: 'mobile-hero-poster_43c0d679.jpg', layout: 'v' },
    { filename: 'cr-experiences-mobile-hero_602c8d51.jpg', layout: 'v' },
    { filename: 'gardens-s1-toucan_c5e8f219.jpg', layout: 'h' },
    { filename: 'IMG_5354_b9971db8.jpg', layout: 'h' },
    { filename: 'tc-gastronomy-hero_ab44ba74.jpg', layout: 'h' },
    { filename: 'nayara-tent-35_a07c3e50.jpg', layout: 'h' },
    { filename: 'tc-experiences-bridge-v2_b0ceaade.jpg', layout: 'v' },
    { filename: 'atacama-stargazing-new_92e7b1a0.jpg', layout: 'h' },
    { filename: 'gardens-s1-toucan-v2_bf314877.jpg', layout: 'h' },
    { filename: 'ig-bocas_3638dc26.jpg', layout: 'v' },
    { filename: 'atacama-restaurant-interior_dd4056ba.jpg', layout: 'h' },
    { filename: 'brand-gastronomy-mobile-hero_c67d930b.jpg', layout: 'v' },
    { filename: 'springs-wellness-hero_ea0e43b0.jpg', layout: 'h' },
    { filename: 'bocas-bynight-vertical_255db169.jpg', layout: 'v' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="h-96 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-light tracking-wide mb-4">Gallery</h1>
          <p className="text-gray-400 text-lg">Discover the beauty of Nayara Resorts</p>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gridAutoRows: '220px',
          }}
        >
          {images.map((item, index) => {
            const isWide = item.layout === 'h';
            const isTall = item.layout === 'v';
            const imageUrl = `${siteBase}/manus-storage/${item.filename}`;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-gray-900"
                style={{
                  gridColumn: isWide ? 'span 2' : 'span 1',
                  gridRow: isTall ? 'span 2' : 'span 1',
                }}
              >
                <img
                  src={imageUrl}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
