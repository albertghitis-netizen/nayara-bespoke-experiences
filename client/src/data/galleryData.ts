export interface GalleryItem {
  src: string;
  w: number;
  h: number;
  type: "image" | "video";
}

/**
 * CURATED GALLERY , 67 items
 * Rules applied:
 * - No two videos in a row or stacked in same column
 * - No two animals in a row
 * - Night/dark images spread out
 * - Squares spread evenly
 * - Colors varied for visual diversity
 * - Mix of horizontal, vertical, square throughout
 */
export const galleryImages: GalleryItem[] = [
  // 1. Sunset wide (HORIZ, golden) [swapped from G63]
  { src: "/manus-storage/newgal-049-IMG_6906_d3bd3949.JPG", w: 1920, h: 1080, type: "image" },
  // 2. VIDEO , Nayara reel (VERT, 3.7s) [swapped from G21]
  { src: "/manus-storage/gal-vid-16-reel_66fc2aff.mp4", w: 1080, h: 1920, type: "video" },
  // 3. Couple at volcano (SQUARE, blue/green) , first square
  { src: "/manus-storage/gal-new-couple-volcano_2392d516.jpeg", w: 1920, h: 1920, type: "image" },
  // 4. Tent pool deck with woman (HORIZ, green/blue sky)
  { src: "/manus-storage/gal-new-tent-pool-deck_ef81eaea.PNG", w: 1600, h: 900, type: "image" },
  // 5. Orchid/flower close-up (VERT, pink/green)
  { src: "/manus-storage/newgal-002-Untitleddesign-3_2c6fa4b0.JPG", w: 1440, h: 1920, type: "image" },
  // 6. Bocas del Toro wide (HORIZ, turquoise/blue)
  { src: "/manus-storage/newgal-034-NayaraResorts_BocasdelToro_25_064a3ff0.jpg", w: 4814, h: 2708, type: "image" },
  // 7. Canopy bed (VERT, warm wood tones)
  { src: "/manus-storage/newgal-004-768AAA0F-6B6D-4B8C-A768-DBA73F5E73AF_1__da70cdbd.jpeg", w: 1441, h: 1920, type: "image" },
  // 8. VIDEO , Tented camps (HORIZ, 2.9s)
  { src: "/manus-storage/gal-vid-19-tented_7a379d40.mp4", w: 1920, h: 1080, type: "video" },
  // 9. Gourmet sushi plate (VERT, colorful food)
  { src: "/manus-storage/newgal-005-DBBC01CA-795B-472C-8172-EE2AD876687E_1__5b089e23.jpeg", w: 1538, h: 1920, type: "image" },
  // 10. Infinity pool sunset (SQUARE, pink/blue sky) , second square
  { src: "/manus-storage/gal-new-infinity-pool_fc7be1aa.jpeg", w: 1920, h: 1920, type: "image" },
  // 11. Food/drink (VERT, warm) [swapped from G50]
  { src: "/manus-storage/newgal-033-Untitleddesign-18_af394d5d.JPG", w: 1440, h: 1920, type: "image" },
  // 12. VIDEO , Atacama square (SQUARE, 8.2s) [new]
  { src: "/manus-storage/gal-vid-atacama-square_2914758a.mp4", w: 1080, h: 1080, type: "video" },
  // 13. Spices close-up (VERT, warm reds/oranges)
  { src: "/manus-storage/newgal-008-A50DCA72-3FCB-46E5-A703-DFFB62080A51_ba9d9d7f.jpeg", w: 1536, h: 1920, type: "image" },
  // 14. VIDEO , Luxury reel (VERT, 3.5s)
  { src: "/manus-storage/gal-vid-13-luxury_6e693596.mov", w: 1080, h: 1440, type: "video" },
  // 15. Dessert plate (VERT, warm tones)
  { src: "/manus-storage/newgal-009-Untitleddesign-15_4f84f70d.JPG", w: 1440, h: 1920, type: "image" },
  // 16. Alto Atacama desert (HORIZ, sandy/brown)
  { src: "/manus-storage/newgal-026-NayaraAltoAtacama_1_1__12e2db7f.jpg", w: 3648, h: 2432, type: "image" },
  // 17. Monkeys (VERT, green) , ANIMAL
  { src: "/manus-storage/newgal-012-B6C8D7E0-4D78-44B6-A7B0-7113142D72CA_0bb8babf.jpeg", w: 1538, h: 1920, type: "image" },
  // 18. Bioluminescent beach (VERT, dark blue glow) , NIGHT
  { src: "/manus-storage/newgal-013-63520A8E-2C84-47FB-A500-06E2D42DE6C8_229b06d4.jpeg", w: 1536, h: 1920, type: "image" },
  // 19. Treehouse walkway (VERT, warm wood/green)
  { src: "/manus-storage/gal-new-treehouse-walkway_6d7687be.jpeg", w: 1442, h: 1920, type: "image" },
  // 20. Landscape with green hills (HORIZ, bright green)
  { src: "/manus-storage/newgal-011-3ebfa54d-69b4-4274-bc93-fc60642536c9_1__067f8b01.JPG", w: 1280, h: 853, type: "image" },
  // 21. Woman in white dress by pool (VERT, blue/green) [swapped from G2]
  { src: "/manus-storage/newgal-001-90BD7E91-B497-4CF2-B9B4-4F7929DFB687_1__747bee1e.jpeg", w: 1536, h: 1920, type: "image" },
  // 22. Couple by pool (VERT, blue water)
  { src: "/manus-storage/newgal-014-4O1A4907-byBriceFerreStudiocopy_6a4a23c7.jpeg", w: 1281, h: 1921, type: "image" },
  // 23. Spa hut in jungle (HORIZ, deep green) [moved from G12]
  { src: "/manus-storage/gal-new-spa-hut_d08bc77f.jpg", w: 3087, h: 2315, type: "image" },
  // 24. Wide resort aerial (HORIZ, green canopy)
  { src: "/manus-storage/newgal-015-5F6D022D-5F89-45EF-93CF-878F0A7BCDEF_05973859.JPG", w: 4320, h: 2880, type: "image" },
  // 25. Cocktail/bar scene (VERT, warm amber)
  { src: "/manus-storage/newgal-016-5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_1__36567fca.jpeg", w: 1440, h: 1920, type: "image" },
  // 26. VIDEO , Bocas drone aerial (SQUARE, 5.5s)
  { src: "/manus-storage/gal-bocas-drone-square_5a29cc19.mp4", w: 1080, h: 1080, type: "video" },
  // 27. Tented camp interior (VERT, warm wood)
  { src: "/manus-storage/newgal-017-3df15446-15eb-4056-8ddb-437113d81e19_1__c8d836fc.JPG", w: 853, h: 1280, type: "image" },
  // 28. VIDEO , Sloths (HORIZ, 2.9s) , ANIMAL
  { src: "/manus-storage/gal-vid-11-sloths_2b7857d0.mov", w: 1256, h: 706, type: "video" },
  // 29. Tented camp exterior (VERT, green/tent)
  { src: "/manus-storage/newgal-018-Ayla_NayaraTentedCamp_11_8d494b88.jpeg", w: 1280, h: 1920, type: "image" },
  // 30. Mi Cafecito (HORIZ, warm coffee tones)
  { src: "/manus-storage/newgal-028-MiCafecito_9fe2ebc5.jpeg", w: 1920, h: 1281, type: "image" },
  // 31. Dolphins (VERT, blue ocean) , ANIMAL
  { src: "/manus-storage/newgal-019-8D29BA20-8D77-4C52-BD1C-876AB1E6CAC1_d6969400.jpeg", w: 1536, h: 1920, type: "image" },
  // 32. Pizza oven fire (HORIZ, warm orange) , moved down
  { src: "/manus-storage/newgal-006-PizzaovenNS-MisAmoresfireLR_1__ee95369f.JPG", w: 3200, h: 2133, type: "image" },
  // 33. VIDEO , Atacama square (SQUARE, 2.6s) , moved to middle, fourth square
  { src: "/manus-storage/gal-vid-10-atacama_e5c902dc.mov", w: 1440, h: 1440, type: "video" },
  // 34. Volcano green crater (VERT, vivid green)
  { src: "/manus-storage/newgal-021-Untitleddesign-10_0c8ee777.JPG", w: 1440, h: 1920, type: "image" },
  // 35. VIDEO , vid-07 (HORIZ, 2.6s)
  { src: "/manus-storage/gal-vid-07_e5f7383a.mov", w: 1440, h: 810, type: "video" },
  // 36. Woodpecker (SQUARE, green/red) , ANIMAL, fifth square
  { src: "/manus-storage/gal-new-woodpecker_b77158ab.jpeg", w: 1915, h: 1920, type: "image" },
  // 37. Wide landscape (HORIZ, green/brown)
  { src: "/manus-storage/newgal-027-B8309DA4-5C35-42C4-B56F-B3B37583818C_6b48f038.jpg", w: 3240, h: 2430, type: "image" },
  // 38. VIDEO , vid-08 (HORIZ, 3.5s)
  { src: "/manus-storage/gal-vid-08_1a39cf78.mov", w: 1440, h: 810, type: "video" },
  // 39. Flamingos (VERT, pink/blue) , ANIMAL
  { src: "/manus-storage/newgal-022-6F47449D-76D3-464F-9095-1480197434EC_2e1247b6.jpeg", w: 1538, h: 1920, type: "image" },
  // 40. Resort room detail (VERT, warm)
  { src: "/manus-storage/newgal-023-3a94f88f-2a69-457a-bc18-fae9946d8f0c_2__8fc1c10d.jpg", w: 602, h: 802, type: "image" },
  // 41. Springs pool (VERT, green/blue)
  { src: "/manus-storage/newgal-029-NayaraSprings-R5_20225-byBriceFerreStudio_1__bba9bdfb.jpeg", w: 1281, h: 1920, type: "image" },
  // 42. VIDEO , Bocas reel (VERT, 4.2s)
  { src: "/manus-storage/gal-vid-17-bocas_1de92c9d.mp4", w: 540, h: 960, type: "video" },
  // 43. Green leaf macro (VERT, bright green)
  { src: "/manus-storage/newgal-024-A3C99A96-DAEE-40BB-B7C8-57DD88EAB5CB_1169b869.jpeg", w: 1520, h: 1920, type: "image" },
  // 44. Moai statues at night (HORIZ, dark) , NIGHT
  { src: "/manus-storage/newgal-042-9412A109-CE32-4E36-8A0A-0CE9534A5B53_7e4142e6.jpeg", w: 1920, h: 1280, type: "image" },
  // 45. Untitled design (VERT, green/nature)
  { src: "/manus-storage/newgal-003-Untitled_3000x4000px__5853461e.PNG", w: 3000, h: 4000, type: "image" },
  // 46. Kids in raincoats (VERT, colorful)
  { src: "/manus-storage/newgal-031-E843C4FE-60C4-49F4-A244-3E0CCAFE7ED5_a31b588c.JPG", w: 2544, h: 3354, type: "image" },
  // 47. Landscape horiz (HORIZ, green)
  { src: "/manus-storage/newgal-038-ae06ce17-ec89-4b23-8be6-1e5251ac850c_1__c4e16c66.JPG", w: 1280, h: 853, type: "image" },
  // 48. Romantic dinner (VERT, warm amber/night) , NIGHT
  { src: "/manus-storage/newgal-032-02472240-7796-42F8-B9F3-B955D66EAD89_062baa07.jpeg", w: 1538, h: 1920, type: "image" },
  // 49. VIDEO , vid-02 (HORIZ, 1.6s)
  { src: "/manus-storage/gal-vid-02_ec251b26.mov", w: 1096, h: 616, type: "video" },
  // 50. Milky way stargazing (VERT, dark blue/purple) , NIGHT [swapped from G11]
  { src: "/manus-storage/newgal-007-D7AC6CFD-2329-4619-B8C9-447268366C3F_a35005f7.jpeg", w: 1440, h: 1920, type: "image" },
  // 51. Toucan (VERT, green/colorful) , ANIMAL
  { src: "/manus-storage/newgal-036-517C4F4F-0F4F-4AE7-8108-EBC846F90CA8_5aa503f5.jpeg", w: 1536, h: 1920, type: "image" },
  // 52. Landscape sunset (HORIZ, warm)
  { src: "/manus-storage/newgal-039-feb91b2b-2699-4cd2-84ad-f80e0237ac2b_1__90861ad7.JPG", w: 1280, h: 853, type: "image" },
  // 53. VIDEO , vid-09 (HORIZ, 2.3s)
  { src: "/manus-storage/gal-vid-09_4ad799b3.MOV", w: 1440, h: 810, type: "video" },
  // 54. Garden/nature (VERT, green)
  { src: "/manus-storage/newgal-037-Untitleddesign-8_250a752b.JPG", w: 1440, h: 1920, type: "image" },
  // 55. Detail/texture (VERT, warm) , ENLARGED
  { src: "/manus-storage/newgal-041-ca3fcfa9-c401-4764-8caf-aa1b556a1eec_2__4ad3bcd5.jpg", w: 1706, h: 2274, type: "image" },
  // 56. Large plant/garden (VERT, green)
  { src: "/manus-storage/newgal-035-92934979-B150-4446-9B80-E9AE3A8DBCAE_f8076e49.JPG", w: 3240, h: 4047, type: "image" },
  // 57. Night scene/bar (VERT, dark amber) , NIGHT
  { src: "/manus-storage/newgal-040-3E487026-8F2B-41DB-A34D-0A5F0265A62D_1__db48f8d9.jpeg", w: 1538, h: 1920, type: "image" },
  // 58. VIDEO , vid-03 (VERT, 2.5s)
  { src: "/manus-storage/gal-vid-03_2cfe9be8.mov", w: 720, h: 960, type: "video" },
  // 59. Layla's gardens (VERT, green/bright)
  { src: "/manus-storage/newgal-044-Layla_s_NayaraGardens_1_1__f7b01cbf.jpg", w: 3406, h: 4541, type: "image" },
  // 60. Pool/resort scene (SQUARE, blue/green) , sixth square
  { src: "/manus-storage/newgal-046-4DC1F65C-1FF5-4B24-8A46-0CEDDFB666F3_4ecd2ef9.jpeg", w: 1920, h: 1906, type: "image" },
  // 61. Amor Loco restaurant (VERT, warm/romantic)
  { src: "/manus-storage/newgal-047-AmorLocoNayaraSprings-R5_26625-byBriceFerreStudio_2__d519bb58.jpeg", w: 1441, h: 1920, type: "image" },
  // 62. VIDEO , vid-04 (VERT, 2.5s) , separated from vid-03
  { src: "/manus-storage/gal-vid-04_72b2e1e7.MOV", w: 720, h: 1280, type: "video" },
  // 63. Aerial tents in green forest (HORIZ, green, bright) [swapped from G1]
  { src: "/manus-storage/gal-new-aerial-tents_308da834.PNG", w: 1600, h: 900, type: "image" },
  // 64. Butterfly/nature (VERT, green)
  { src: "/manus-storage/newgal-045-6559EF6E-115C-4594-89D1-09E7D0A35B05_ece22549.jpeg", w: 1457, h: 1920, type: "image" },
  // 65. Lobby/lounge (VERT, warm)
  { src: "/manus-storage/newgal-043-AA6682ED-A08D-4F1E-A869-56222938841C_1__dbd941eb.jpeg", w: 1440, h: 1920, type: "image" },
  // 66. Night bar/ambiance (VERT, dark warm) , NIGHT
  { src: "/manus-storage/newgal-048-B7851236-FB3F-443A-87A9-838AAE264A94_6cb94e38.jpeg", w: 1538, h: 1920, type: "image" },
  // 67. VIDEO , vid-05 AI generated (VERT, 6s) , closer
  { src: "/manus-storage/gal-vid-05_7e0f1a1e.MP4", w: 848, h: 1072, type: "video" },
];
