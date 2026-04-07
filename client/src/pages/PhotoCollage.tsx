/**
 * Photo Collage — All textures and gallery images from all properties
 * Numbered labels (1, 2, 3...) in top-left corner for easy reference
 * Left to right, top to bottom
 */

export default function PhotoCollage() {
  // Part 1: Textures (17 images)
  const textures = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_Qufm5j_1_d1a5b588.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_aoEOst_2_4bba0edf.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_HBbAxp_3_e4094f67.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_YgIzdH_4_30a671a8.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_B2adpy_5_5961bcac.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_hbaAE2_6_0192ef02.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_vFoANT_7_6ac4a9ea.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_HkP637_8_2d8bac63.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_L6azsN_9_ee603682.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_OjqiWV_10_5bbe8d4c.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_p9exCP_11_48467d84.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_9miJk4_12_e50df441.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_qya5Xm_13_95d0829b.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_AFtuVX_14_74d8c633.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_FZaphL_15_6a27eea2.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_SHTq43_16_9a1d82b1.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_vKfWcY_17_edac8a6e.png",
  ];

  // Part 2: Gallery images from all properties
  const galleryImages = [
    // Tented Camp
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)NayaraTent3copy_54044994.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/HenrysBar_69b1e477.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/12.Residence_17d767d7.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)Residence3_48e06b8c.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/38.jTentDetailpg_b2b74566.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Grand(1)_0127cf09.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NewAreaBriceFerre(2)_cf5128c9.webp",
  ];

  const allImages = [...textures, ...galleryImages];

  return (
    <div className="w-screen min-h-screen bg-black p-0 m-0">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
        {allImages.map((src, i) => (
          <div key={i} className="relative w-full aspect-square overflow-hidden group">
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            {/* Number label in top-left corner */}
            <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold z-10 group-hover:bg-black/90 transition-all">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
