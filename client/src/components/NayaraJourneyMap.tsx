/**
 * NAYARA JOURNEY MAP , v3
 * Accurate continent outlines from Natural Earth 110m data.
 * Scroll-synced with the timeline: each milestone activates a location,
 * flight paths arc between destinations, and the current pin pulses.
 *
 * Desktop widescreen only. Editorial cartography aesthetic.
 * ViewBox: 0 -80 800 760 , covers ~125°W–20°W, 40°N–60°S (extended north for Central America)
 *
 * v3 improvements:
 * - Warmer parchment/sand tones for land
 * - Subtle ocean gradient
 * - More dramatic Easter Island flight arc
 * - Refined pin design with warm gold accents
 * - Better label typography
 * - Subtle topographic texture via noise
 */

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Accurate SVG paths from Natural Earth 110m ─── */

const centralAmericaPath = `M60.0,-19.2 L78.3,-20.6 L77.6,-19.1 L106.5,-10.1 L127.7,-10.1 L127.7,-13.3 L140.9,-13.3 L152.1,-4.9 L156.5,3.2 L160.5,5.5 L166.8,7.8 L171.6,1.8 L177.8,1.7 L183.2,4.7 L194.1,18.6 L197.9,27.4 L212.3,31.2 L208.0,43.3 L206.7,57.1 L211.9,70.8 L221.7,84.4 L229.8,86.4 L232.9,89.6 L255.9,84.0 L260.8,81.0 L264.5,68.0 L289.1,63.9 L290.7,69.1 L284.8,78.2 L286.2,79.5 L283.1,88.7 L278.2,87.0 L275.4,91.5 L259.0,92.0 L259.0,96.3 L255.6,96.3 L263.3,102.7 L263.1,105.3 L253.3,105.3 L249.7,111.4 L249.7,116.8 L237.1,106.2 L230.9,104.3 L216.7,108.4 L184.2,96.9 L175.9,91.3 L163.8,88.5 L148.6,76.0 L146.8,72.3 L149.4,71.5 L150.4,64.8 L144.5,54.6 L126.5,36.5 L119.9,33.4 L119.7,26.9 L111.3,21.4 L109.4,16.2 L105.3,15.6 L97.3,7.9 L90.3,-8.8 L77.9,-13.6 L76.7,-10.5 L78.7,-1.2 L102.0,25.2 L109.3,43.1 L113.0,43.3 L118.8,50.1 L115.4,54.3 L107.1,45.3 L97.7,39.8 L96.8,30.1 L75.8,17.2 L79.5,17.1 L82.6,10.8 L72.2,3.4 L60.0,-19.2 Z M249.7,116.8 L249.7,111.4 L253.3,105.3 L263.1,105.3 L263.3,102.7 L255.6,96.3 L259.0,96.3 L259.0,92.0 L273.2,92.1 L272.5,106.6 L280.2,107.8 L273.1,112.8 L271.6,117.7 L265.9,122.9 L257.3,121.4 L249.7,116.8 Z M273.2,92.1 L278.2,87.0 L281.1,88.0 L279.2,101.8 L274.8,106.6 L272.5,106.6 L273.2,92.1 Z M318.9,113.4 L309.0,116.2 L305.3,114.9 L298.7,122.1 L296.4,120.6 L291.4,122.7 L291.6,126.5 L287.1,128.6 L283.5,125.5 L283.0,121.7 L278.1,122.1 L271.6,117.7 L273.1,112.8 L282.7,106.8 L304.9,105.8 L318.9,113.4 Z M271.6,117.7 L278.1,122.1 L284.0,122.5 L282.6,127.3 L265.9,122.9 L271.6,117.7 Z M315.0,144.0 L313.2,145.6 L299.3,142.9 L284.4,129.1 L291.6,126.5 L291.4,122.7 L296.4,120.6 L298.7,122.1 L305.3,114.9 L309.0,116.2 L318.9,113.4 L313.5,140.7 L315.0,144.0 Z M323.5,154.4 L320.5,155.1 L322.1,159.2 L320.3,164.5 L316.1,162.8 L315.2,158.3 L304.9,150.5 L303.9,154.5 L299.7,151.6 L299.7,145.4 L297.6,144.3 L300.5,141.9 L313.2,145.6 L315.0,144.0 L323.5,154.4 Z M363.0,161.2 L363.9,166.7 L360.0,168.4 L359.0,172.1 L354.8,165.8 L356.7,163.8 L349.6,158.7 L339.9,164.0 L342.8,169.6 L336.1,172.1 L334.8,167.6 L331.3,168.4 L329.7,165.4 L321.4,164.0 L321.1,165.7 L320.5,155.1 L323.5,154.4 L326.0,158.7 L331.9,160.3 L346.1,154.0 L350.3,154.5 L363.0,161.2 Z`;

const southAmericaPath = `M442.8,217.2 L441.4,218.1 L437.8,211.3 L435.3,213.9 L420.4,213.7 L420.5,218.4 L425.0,219.2 L424.7,222.1 L418.9,222.6 L418.9,228.1 L423.5,235.1 L419.9,259.1 L413.0,258.8 L397.0,266.5 L395.3,276.8 L390.7,278.9 L388.7,283.5 L396.1,294.9 L394.5,298.2 L399.5,298.6 L402.4,302.6 L409.1,302.8 L415.4,298.4 L414.9,309.8 L422.6,309.4 L429.2,321.6 L427.1,335.9 L424.1,339.6 L425.4,342.4 L423.7,345.0 L427.0,351.3 L420.1,363.4 L416.2,365.3 L408.6,361.0 L407.9,357.9 L373.3,337.4 L370.1,331.1 L371.4,328.9 L344.7,281.0 L333.3,273.0 L335.8,269.7 L332.1,262.5 L334.5,257.2 L340.6,252.4 L339.5,260.1 L345.7,260.3 L348.9,264.1 L353.2,261.0 L359.3,249.4 L368.5,246.4 L376.8,238.5 L379.2,233.6 L378.1,227.8 L380.1,227.1 L391.2,236.2 L395.7,244.1 L412.8,243.7 L418.7,247.3 L413.8,254.9 L419.9,259.1 Z M484.5,181.6 L490.7,189.5 L487.9,192.4 L471.7,198.2 L458.5,196.0 L462.0,198.0 L462.7,207.8 L469.6,210.0 L453.0,220.7 L447.0,221.2 L435.7,205.4 L439.6,201.6 L435.6,192.6 L439.3,180.6 L423.7,180.6 L418.3,174.1 L404.1,173.8 L400.4,170.6 L400.5,163.2 L397.8,158.0 L393.9,157.5 L396.9,147.7 L404.0,139.0 L408.9,137.7 L404.2,140.4 L406.6,147.7 L403.2,152.1 L406.1,158.1 L409.4,157.6 L411.1,152.2 L408.4,143.8 L417.9,140.7 L416.8,137.2 L419.5,134.8 L422.2,140.1 L427.6,140.2 L432.8,146.9 L447.8,146.2 L458.0,150.5 L462.3,146.3 L480.9,145.7 L474.4,147.9 L477.0,151.5 L483.1,152.1 L488.9,155.8 L490.1,161.8 L497.1,163.4 L491.0,167.9 L490.4,170.6 L493.0,173.4 L486.4,176.1 L484.5,181.6 Z M545.7,481.8 L543.6,477.5 L547.0,473.9 L542.6,468.8 L518.3,454.2 L513.3,455.0 L532.1,437.3 L543.6,430.1 L543.8,424.1 L540.0,419.7 L536.2,421.1 L538.7,408.2 L530.3,407.7 L527.3,395.6 L511.0,393.6 L511.5,383.3 L509.2,379.1 L511.6,377.6 L510.9,373.2 L514.3,364.0 L512.5,359.3 L508.3,357.2 L508.6,349.8 L494.0,349.5 L491.1,340.7 L493.3,340.6 L491.4,330.8 L482.2,328.6 L470.9,322.1 L462.4,320.8 L454.1,314.1 L454.6,300.4 L444.6,301.7 L432.2,309.9 L414.9,309.8 L415.4,298.4 L409.1,302.8 L402.4,302.6 L399.5,298.6 L394.5,298.2 L396.1,294.9 L388.7,283.5 L390.7,278.9 L395.3,276.8 L397.0,266.5 L413.0,258.8 L419.9,259.1 L423.5,235.1 L418.9,228.1 L418.9,222.6 L424.7,222.1 L425.0,219.2 L420.5,218.4 L420.4,213.7 L435.3,213.9 L437.8,211.3 L441.4,218.1 L447.0,221.2 L453.0,220.7 L469.6,210.0 L462.7,207.8 L462.0,198.0 L458.5,196.0 L471.7,198.2 L487.9,192.4 L490.7,189.5 L489.6,187.4 L495.4,188.8 L494.4,192.1 L498.8,196.8 L495.4,205.8 L497.9,213.2 L502.6,216.7 L506.4,217.1 L515.5,211.9 L525.7,212.9 L525.9,207.7 L549.0,210.6 L558.8,195.3 L561.4,194.9 L567.6,212.3 L571.6,213.5 L571.8,218.8 L566.1,225.0 L568.5,227.3 L581.9,228.4 L582.2,236.0 L588.0,231.1 L610.2,238.4 L614.0,242.8 L612.7,247.0 L621.6,244.7 L636.4,248.7 L647.8,248.4 L668.8,263.1 L681.2,265.6 L683.9,268.0 L687.8,282.1 L684.7,294.6 L657.7,325.3 L653.2,361.7 L649.4,374.7 L641.7,384.6 L640.4,392.4 L634.3,395.7 L632.5,400.2 L612.2,403.1 L589.3,414.7 L582.9,422.2 L583.0,432.0 L579.9,443.3 L545.7,481.8 Z M422.6,309.4 L432.2,309.9 L444.6,301.7 L454.6,300.4 L454.1,314.1 L462.4,320.8 L470.9,322.1 L482.2,328.6 L491.4,330.8 L493.3,340.6 L491.1,340.7 L494.0,349.5 L508.6,349.8 L508.3,357.2 L512.5,359.3 L514.3,364.0 L510.9,373.2 L511.6,377.6 L509.2,379.1 L509.1,376.8 L502.0,372.9 L481.6,375.0 L474.8,394.8 L464.9,392.8 L461.9,398.9 L457.4,393.5 L447.4,391.6 L441.1,398.4 L435.6,399.5 L428.5,380.6 L430.9,373.3 L426.9,370.1 L422.2,359.5 L427.0,351.3 L423.7,345.0 L425.4,342.4 L424.1,339.6 L427.1,335.9 L429.2,321.6 L422.6,309.4 Z M509.1,376.8 L511.5,383.3 L511.0,393.6 L527.3,395.6 L530.3,407.7 L538.7,408.2 L534.9,427.8 L528.0,433.6 L522.0,434.8 L505.8,431.6 L513.3,420.1 L512.2,416.8 L488.8,407.1 L474.8,394.8 L481.6,375.0 L502.0,372.9 L509.1,376.8 Z M513.3,455.0 L518.3,454.2 L542.6,468.8 L547.0,473.9 L543.6,477.5 L545.7,481.8 L542.4,486.6 L533.8,490.8 L524.1,490.1 L511.9,487.1 L507.2,482.9 L513.3,455.0 Z M429.5,624.4 L436.2,633.5 L456.8,640.0 L453.3,643.7 L446.1,644.1 L442.2,641.4 L429.5,641.2 L429.5,624.4 Z M513.3,455.0 L506.7,486.8 L516.4,493.3 L515.3,498.5 L520.1,501.8 L519.7,505.5 L512.4,515.2 L501.1,519.2 L477.4,520.0 L478.9,534.0 L474.3,536.7 L466.5,537.7 L459.2,535.0 L456.2,536.9 L457.3,544.4 L462.5,546.7 L466.6,544.3 L468.9,548.3 L455.8,555.3 L452.8,566.9 L445.6,567.0 L439.7,570.8 L437.5,576.5 L445.0,582.0 L452.3,583.6 L449.6,590.3 L440.6,594.6 L435.7,603.5 L425.6,610.0 L428.1,617.8 L433.1,622.2 L404.5,619.6 L401.3,615.2 L401.4,609.6 L396.4,610.0 L393.7,607.3 L393.0,599.3 L398.9,596.0 L401.3,591.2 L400.4,587.4 L407.2,570.9 L406.4,566.5 L409.7,565.0 L405.4,560.7 L407.9,557.5 L404.5,554.6 L402.7,545.9 L405.7,544.4 L404.5,535.2 L408.3,520.7 L412.8,518.0 L410.5,503.6 L416.3,498.7 L416.1,492.4 L420.4,485.0 L420.5,478.1 L415.0,463.6 L419.7,455.9 L418.9,448.6 L421.7,441.7 L432.0,429.9 L429.8,426.9 L431.1,411.9 L439.4,408.2 L441.1,398.4 L447.4,391.6 L457.4,393.5 L461.9,398.9 L464.9,392.8 L473.6,393.2 L488.8,407.1 L512.2,416.8 L513.3,420.1 L505.8,431.6 L522.0,434.8 L528.0,433.6 L534.9,427.8 L536.2,421.1 L540.0,419.7 L543.8,424.1 L543.6,430.1 L532.1,437.3 L513.3,455.0 Z M429.5,624.4 L429.5,641.2 L442.2,641.4 L433.2,646.8 L411.4,642.6 L394.0,634.3 L383.5,625.9 L410.6,635.2 L417.0,626.6 L424.0,623.5 L429.5,624.4 Z M422.2,359.5 L426.9,370.1 L430.9,373.3 L428.5,380.6 L435.6,399.5 L441.1,398.4 L442.0,400.3 L439.4,408.2 L431.1,411.9 L429.8,426.9 L432.0,429.9 L421.7,441.7 L418.9,448.6 L419.7,455.9 L415.0,463.6 L420.5,478.1 L420.4,485.0 L416.1,492.4 L416.3,498.7 L410.5,503.6 L412.8,518.0 L408.3,520.7 L404.5,535.2 L405.7,544.4 L402.7,545.9 L404.5,554.6 L407.9,557.5 L405.4,560.7 L409.7,565.0 L406.4,566.5 L407.2,570.9 L400.4,587.4 L401.3,591.2 L398.9,596.0 L393.0,599.3 L393.7,607.3 L396.4,610.0 L401.4,609.6 L401.3,615.2 L404.5,619.6 L429.9,621.8 L423.2,621.8 L412.6,626.3 L411.4,633.4 L408.2,633.6 L381.4,621.5 L376.3,594.4 L379.6,587.2 L387.6,581.3 L376.0,579.1 L383.3,572.4 L385.9,559.9 L394.4,562.5 L398.3,546.9 L393.2,544.9 L390.8,554.3 L386.0,553.3 L391.0,528.5 L394.5,523.3 L391.7,507.4 L394.9,507.2 L408.1,471.6 L406.3,460.3 L408.6,454.1 L407.7,444.7 L412.2,435.5 L418.4,388.3 L416.2,365.3 L422.2,359.5 Z M521.6,212.3 L515.5,211.9 L506.4,217.1 L497.9,213.2 L495.4,205.8 L498.8,196.8 L494.4,192.1 L495.4,188.8 L489.6,187.4 L484.5,181.6 L486.4,176.1 L493.0,173.4 L490.4,170.6 L491.0,167.9 L497.1,163.4 L506.8,171.2 L507.0,175.0 L517.0,181.5 L515.8,188.3 L511.1,190.3 L510.1,196.0 L513.5,201.5 L516.0,201.5 L521.6,212.3 Z M537.0,209.2 L525.9,207.7 L525.7,212.9 L521.6,212.3 L516.0,201.5 L513.5,201.5 L510.1,196.0 L511.1,190.3 L515.8,188.3 L517.0,181.5 L541.3,183.2 L537.3,189.7 L540.9,199.3 L537.0,209.2 Z`;

const caribbeanPath = `M325.6,51.5 L338.1,52.1 L348.3,57.4 L355.4,56.6 L369.3,66.4 L376.4,67.9 L375.8,70.0 L387.2,73.4 L381.2,76.1 L360.0,76.6 L365.1,72.4 L357.0,70.0 L352.6,63.5 L326.3,57.5 L329.2,55.6 L321.7,55.2 L312.0,61.1 L305.0,61.2 L314.1,54.5 L325.6,51.5 Z M355.5,89.0 L366.5,87.6 L371.8,91.5 L364.1,92.9 L355.5,89.0 Z M406.0,77.7 L406.1,84.7 L404.2,86.0 L406.0,90.3 L389.2,90.4 L385.1,88.1 L385.8,85.6 L398.5,87.3 L401.3,85.6 L397.8,79.5 L393.0,78.3 L394.7,76.2 L406.0,77.7 Z M408.4,93.7 L404.2,86.0 L407.0,76.4 L419.4,78.2 L420.8,80.9 L425.0,80.7 L424.7,83.0 L431.9,86.0 L429.0,89.1 L419.4,87.4 L415.1,89.3 L413.9,87.4 L408.4,93.7 Z M482.4,145.4 L488.4,144.7 L488.1,150.3 L480.4,150.4 L482.4,145.4 Z`;

/* Individual country paths for highlighting */
const costaRicaPath = `M323.5,154.4 L320.5,155.1 L322.1,159.2 L320.3,164.5 L316.1,162.8 L315.2,158.3 L304.9,150.5 L303.9,154.5 L299.7,151.6 L299.7,145.4 L297.6,144.3 L300.5,141.9 L313.2,145.6 L315.0,144.0 L323.5,154.4 Z`;

const panamaPath = `M363.0,161.2 L363.9,166.7 L360.0,168.4 L359.0,172.1 L354.8,165.8 L356.7,163.8 L349.6,158.7 L339.9,164.0 L342.8,169.6 L336.1,172.1 L334.8,167.6 L331.3,168.4 L329.7,165.4 L321.4,164.0 L321.1,165.7 L320.5,155.1 L323.5,154.4 L326.0,158.7 L331.9,160.3 L346.1,154.0 L350.3,154.5 L363.0,161.2 Z`;

const chilePath = `M429.5,624.4 L429.5,641.2 L442.2,641.4 L433.2,646.8 L411.4,642.6 L394.0,634.3 L383.5,625.9 L410.6,635.2 L417.0,626.6 L424.0,623.5 L429.5,624.4 Z M422.2,359.5 L426.9,370.1 L430.9,373.3 L428.5,380.6 L435.6,399.5 L441.1,398.4 L442.0,400.3 L439.4,408.2 L431.1,411.9 L429.8,426.9 L432.0,429.9 L421.7,441.7 L418.9,448.6 L419.7,455.9 L415.0,463.6 L420.5,478.1 L420.4,485.0 L416.1,492.4 L416.3,498.7 L410.5,503.6 L412.8,518.0 L408.3,520.7 L404.5,535.2 L405.7,544.4 L402.7,545.9 L404.5,554.6 L407.9,557.5 L405.4,560.7 L409.7,565.0 L406.4,566.5 L407.2,570.9 L400.4,587.4 L401.3,591.2 L398.9,596.0 L393.0,599.3 L393.7,607.3 L396.4,610.0 L401.4,609.6 L401.3,615.2 L404.5,619.6 L429.9,621.8 L423.2,621.8 L412.6,626.3 L411.4,633.4 L408.2,633.6 L381.4,621.5 L376.3,594.4 L379.6,587.2 L387.6,581.3 L376.0,579.1 L383.3,572.4 L385.9,559.9 L394.4,562.5 L398.3,546.9 L393.2,544.9 L390.8,554.3 L386.0,553.3 L391.0,528.5 L394.5,523.3 L391.7,507.4 L394.9,507.2 L408.1,471.6 L406.3,460.3 L408.6,454.1 L407.7,444.7 L412.2,435.5 L418.4,388.3 L416.2,365.3 L422.2,359.5 Z`;

/* ─── Location data ─── */
interface MapLocation {
  id: string;
  label: string;
  subLabel: string;
  x: number;
  y: number;
  milestoneIndices: number[];
  labelSide: "right" | "left" | "below";
  countryPath?: string;
  image: string;
  tagline: string;
  cardOffset?: { dx: number; dy: number };
}

const locations: MapLocation[] = [
  {
    id: "costa-rica",
    label: "Arenal Volcano National Park, Costa Rica",
    subLabel: "",
    x: 307,
    y: 147,
    milestoneIndices: [0, 1, 2],
    labelSide: "right",
    countryPath: costaRicaPath,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
    tagline: "Private Rainforest Villas",
    cardOffset: { dx: 25, dy: -55 },
  },
  {
    id: "atacama",
    label: "Atacama Desert, Chile",
    subLabel: "",
    x: 433,
    y: 404,
    milestoneIndices: [3],
    labelSide: "right",
    image: "/manus-storage/alto-atacama-resort_38eead8b.jpeg",
    tagline: "Desert Lodge Villas",
    cardOffset: { dx: 25, dy: -55 },
  },
  {
    id: "easter-island",
    label: "Easter Island, Chile",
    subLabel: "",
    x: 120,
    y: 431,
    milestoneIndices: [4],
    labelSide: "right",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-hangaroa_a0a3fad0.jpg",
    tagline: "Oceanfront Villas on Rapa Nui",
    cardOffset: { dx: 25, dy: -55 },
  },
  {
    id: "bocas",
    label: "Bocas del Toro, Panama",
    subLabel: "",
    x: 326,
    y: 156,
    milestoneIndices: [5],
    labelSide: "right",
    countryPath: panamaPath,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-bocas_6adf9525.jpg",
    tagline: "Overwater Villas",
    cardOffset: { dx: 25, dy: -55 },
  },
];

const flightPathOrder = ["costa-rica", "atacama", "easter-island", "bocas"];

/* ─── Helpers ─── */
function getLocationById(id: string) {
  return locations.find((l) => l.id === id);
}

function generateCurvedPath(from: MapLocation, to: MapLocation): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Easter Island RETURN path (Easter Island → Bocas): arc sweeps right/east
  if (from.id === "easter-island" && to.id === "bocas") {
    const cx = (from.x + to.x) / 2 + dist * 0.15;
    const cy = (from.y + to.y) / 2 + dist * 0.1;
    return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
  }

  // Easter Island OUTBOUND path (Atacama → Easter Island): dramatic sweep into Pacific
  if (to.id === "easter-island") {
    const cx = Math.min(from.x, to.x) - dist * 0.35;
    const cy = (from.y + to.y) / 2 - dist * 0.1;
    return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
  }

  // Normal curved path
  const curveFactor = 0.3;
  const cx = (from.x + to.x) / 2 - dy * curveFactor;
  const cy = (from.y + to.y) / 2 + dx * 0.08;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

const EASE = [0.25, 0.8, 0.25, 1] as [number, number, number, number];
const EASE_CSS = "cubic-bezier(0.25, 0.8, 0.25, 1)";

/* ─── Vivid Editorial Cartography Palette ─── */
const OCEAN_LIGHT = "#2a7ab5";   // Atlantic blue
const OCEAN_DEEP = "#1a5a8a";    // Deep Pacific
const LAND_FILL = "#5a8a3a";     // Amazon jungle green
const LAND_STROKE = "#3a6020";
const HIGHLIGHT_FILL = "#e8a030"; // Active country warm gold
const PIN_GOLD = "#f0c040";
const PIN_ACTIVE = "#ff8c00";
const LABEL_BG = "rgba(255,255,255,0.92)";
const TEXT_DARK = "#1a1a1a";
const TEXT_MUTED = "#4a4a4a";
const FLIGHT_COLOR = "#f0c040";
const GRID_COLOR = "#ffffff";
const ACCENT_GOLD = "#f0c040";

/* ─── Component ─── */
interface NayaraJourneyMapProps {
  activeMilestoneIndex: number;
}

export default function NayaraJourneyMap({ activeMilestoneIndex }: NayaraJourneyMapProps) {
  const activeLocationIds = useMemo(() => {
    const ids = new Set<string>();
    locations.forEach((loc) => {
      if (loc.milestoneIndices.some((mi) => mi <= activeMilestoneIndex)) {
        ids.add(loc.id);
      }
    });
    return ids;
  }, [activeMilestoneIndex]);

  const activeFlightPaths = useMemo(() => {
    // Journey only begins once Springs (milestone 1) is reached
    if (activeMilestoneIndex < 1) return [];
    // Each flight path maps to a specific milestone trigger:
    // Path 0: costa-rica → atacama (triggers at milestone 3)
    // Path 1: atacama → easter-island (triggers at milestone 4)
    // Path 2: easter-island → bocas (triggers at milestone 5)
    const pathTriggers = [3, 4, 5];
    const paths: { from: string; to: string; path: string; isNew: boolean }[] = [];
    for (let i = 1; i < flightPathOrder.length; i++) {
      const fromLoc = getLocationById(flightPathOrder[i - 1]);
      const toLoc = getLocationById(flightPathOrder[i]);
      if (!fromLoc || !toLoc) continue;
      const triggerMilestone = pathTriggers[i - 1];
      if (activeMilestoneIndex >= triggerMilestone) {
        paths.push({
          from: fromLoc.id,
          to: toLoc.id,
          path: generateCurvedPath(fromLoc, toLoc),
          isNew: activeMilestoneIndex === triggerMilestone,
        });
      }
    }
    return paths;
  }, [activeMilestoneIndex]);

  const currentLocationId = useMemo(() => {
    for (const loc of locations) {
      if (loc.milestoneIndices.includes(activeMilestoneIndex)) {
        return loc.id;
      }
    }
    return null;
  }, [activeMilestoneIndex]);

  return (
    <div className="relative w-full h-full">
      <style>{`
        @keyframes travelDot {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
      `}</style>
      <svg
        viewBox="0 -80 800 760"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Ocean gradient , deep blue Atlantic/Pacific */}
          <radialGradient id="oceanGrad" cx="40%" cy="45%" r="65%">
            <stop offset="0%" stopColor={OCEAN_LIGHT} />
            <stop offset="100%" stopColor={OCEAN_DEEP} />
          </radialGradient>

          {/* Subtle noise texture for the ocean */}
          <filter id="oceanNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="42" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="greyNoise" />
            <feBlend in="SourceGraphic" in2="greyNoise" mode="multiply" />
          </filter>

          {/* Glow filter for active pins */}
          <filter id="pinGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Warm glow for country highlights */}
          <filter id="countryGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Label shadow */}
          <filter id="labelShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#3a2a1a" floodOpacity="0.1" />
          </filter>

          {/* Flight path gradient */}
          <linearGradient id="flightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ACCENT_GOLD} stopOpacity="0.05" />
            <stop offset="50%" stopColor={ACCENT_GOLD} stopOpacity="0.25" />
            <stop offset="100%" stopColor={ACCENT_GOLD} stopOpacity="0.05" />
          </linearGradient>

          {/* Gold gradient for active pins */}
          <radialGradient id="pinGoldGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#D4A840" />
            <stop offset="100%" stopColor={PIN_GOLD} />
          </radialGradient>
        </defs>

        {/* ─── Ocean background ─── extended higher to cover all Central America */}
        <rect x="0" y="-80" width="800" height="760" fill="url(#oceanGrad)" />

        {/* ─── Subtle latitude/longitude grid ─── */}
        <g opacity="0.04">
          {[-50, 50, 150, 250, 350, 450, 550, 650].map((y) => (
            <line key={`lat-${y}`} x1="0" y1={y} x2="800" y2={y}
              stroke={GRID_COLOR} strokeWidth="0.5" strokeDasharray="2 8" />
          ))}
          {[100, 200, 300, 400, 500, 600, 700].map((x) => (
            <line key={`lng-${x}`} x1={x} y1="-80" x2={x} y2="680"
              stroke={GRID_COLOR} strokeWidth="0.5" strokeDasharray="2 8" />
          ))}
        </g>

        {/* ─── Continent fills , warm sand tones ─── */}
        <g>
          <path d={centralAmericaPath} fill={LAND_FILL} fillOpacity="0.9"
            stroke={LAND_STROKE} strokeWidth="1.2" strokeOpacity="0.8" strokeLinejoin="round" />
          <path d={southAmericaPath} fill={LAND_FILL} fillOpacity="0.9"
            stroke={LAND_STROKE} strokeWidth="1.2" strokeOpacity="0.8" strokeLinejoin="round" />
          <path d={caribbeanPath} fill={LAND_FILL} fillOpacity="0.7"
            stroke={LAND_STROKE} strokeWidth="0.8" strokeOpacity="0.5" strokeLinejoin="round" />
        </g>

        {/* ─── Country highlights for active locations ─── */}
        {locations.map((loc) => {
          if (!loc.countryPath) return null;
          const isActive = activeLocationIds.has(loc.id);
          const isCurrent = currentLocationId === loc.id;
          return (
            <motion.path
              key={`highlight-${loc.id}`}
              d={loc.countryPath}
              fill={HIGHLIGHT_FILL}
              stroke={ACCENT_GOLD}
              strokeWidth="1"
              strokeLinejoin="round"
              filter={isCurrent ? "url(#countryGlow)" : undefined}
              initial={{ fillOpacity: 0, strokeOpacity: 0 }}
              animate={{
                fillOpacity: isCurrent ? 0.4 : isActive ? 0.2 : 0,
                strokeOpacity: isCurrent ? 0.6 : isActive ? 0.3 : 0,
              }}
              transition={{ duration: 1.2, ease: EASE }}
            />
          );
        })}

        {/* ─── Ocean labels , very subtle ─── */}
        <text x="50" y="320" fill={GRID_COLOR} fillOpacity="0.06" fontSize="16"
          fontFamily="var(--font-display)" fontWeight="300" letterSpacing="0.7em"
          transform="rotate(-18, 50, 320)">
          PACIFIC
        </text>

        <text x="580" y="120" fill={GRID_COLOR} fillOpacity="0.05" fontSize="9"
          fontFamily="var(--font-display)" fontWeight="300" letterSpacing="0.4em">
          CARIBBEAN SEA
        </text>

        <text x="660" y="400" fill={GRID_COLOR} fillOpacity="0.04" fontSize="12"
          fontFamily="var(--font-display)" fontWeight="300" letterSpacing="0.5em"
          transform="rotate(-80, 660, 400)">
          ATLANTIC
        </text>

        {/* ─── Rapa Nui whisper before Easter Island activates ─── */}
        {!activeLocationIds.has("easter-island") && (
          <text x="70" y="455" fill={GRID_COLOR} fillOpacity="0.05" fontSize="7"
            fontFamily="var(--font-body)" fontWeight="400" letterSpacing="0.25em">
            RAPA NUI
          </text>
        )}

        {/* ─── Flight paths , gold arcs , staggered ─── */}
        {activeFlightPaths.map((fp, i) => {
          const isEasterIslandPath = fp.from === "atacama" && fp.to === "easter-island";
          const isReturnPath = fp.from === "easter-island" && fp.to === "bocas";
          /* New paths animate in; previously drawn paths appear instantly */
          const staggerDelay = fp.isNew ? 0.3 : 0;
          const pathDuration = fp.isNew ? (isEasterIslandPath ? 3.5 : 2.5) : 0.01;
          return (
            <g key={`${fp.from}-${fp.to}`}>
              {/* Wide glow underlay */}
              <motion.path
                d={fp.path}
                fill="none"
                stroke="url(#flightGlow)"
                strokeWidth={isEasterIslandPath ? 10 : 7}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: pathDuration, ease: EASE, delay: staggerDelay },
                  opacity: { duration: 0.8, delay: staggerDelay - 0.1 },
                }}
              />
              {/* Main dashed path */}
              <motion.path
                d={fp.path}
                fill="none"
                stroke={FLIGHT_COLOR}
                strokeWidth={isEasterIslandPath ? 1.5 : 1}
                strokeDasharray={isEasterIslandPath ? "8 5" : "5 4"}
                strokeOpacity="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: pathDuration, ease: EASE, delay: staggerDelay },
                  opacity: { duration: 0.8, delay: staggerDelay - 0.1 },
                }}
              />
              {/* Animated traveling dot , uses CSS offset-path animation */}
              <motion.circle
                r={isEasterIslandPath ? 3.5 : 2.5}
                fill={ACCENT_GOLD}
                fillOpacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: staggerDelay - 0.1 }}
                style={{
                  offsetPath: `path('${fp.path}')`,
                  offsetDistance: "100%",
                  animation: `travelDot ${pathDuration}s ${EASE_CSS} ${staggerDelay}s forwards`,
                }}
              />
              {/* Airplane icon traveling along the path */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5, delay: staggerDelay }}
                style={{
                  offsetPath: `path('${fp.path}')`,
                  offsetDistance: "100%",
                  offsetRotate: "auto",
                  animation: `travelDot ${pathDuration}s ${EASE_CSS} ${staggerDelay}s forwards`,
                }}
              >
                {/* Airplane SVG icon */}
                <path
                  d="M-6,0 L-2,-1.5 L0,-6 L1,0 L6,-1 L1,1.5 L1.5,5 L0,3 L-1.5,5 L-1,1.5 L-6,1 Z"
                  fill={ACCENT_GOLD}
                  stroke="#fff"
                  strokeWidth="0.3"
                  transform="scale(1.4)"
                />
              </motion.g>
            </g>
          );
        })}

        {/* ─── Location pins , refined gold design ─── */}
        {locations.map((loc) => {
          const isActive = activeLocationIds.has(loc.id);
          const isCurrent = currentLocationId === loc.id;

          /* Label positioning */
          const labelWidth = 160;
          const labelX = loc.labelSide === "left" ? loc.x - labelWidth - 20 : loc.x + 20;
          const labelY = loc.id === "easter-island" ? loc.y - 30 : loc.y - 22;

          return (
            <g key={loc.id}>
              {/* Outer pulse rings for current location */}
              {isCurrent && (
                <>
                  <motion.circle
                    cx={loc.x} cy={loc.y} r="20"
                    fill="none" stroke={ACCENT_GOLD} strokeWidth="0.8"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: [0, 0.4, 0], scale: [0.4, 1.8, 2.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                    style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                  />
                  <motion.circle
                    cx={loc.x} cy={loc.y} r="14"
                    fill="none" stroke={ACCENT_GOLD} strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: [0, 0.25, 0], scale: [0.6, 1.5, 2.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                    style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                  />
                </>
              )}

              {/* Pin outer ring , gold */}
              <motion.circle
                cx={loc.x} cy={loc.y}
                r={isCurrent ? 9 : 6.5}
                fill="none"
                stroke={isCurrent ? ACCENT_GOLD : PIN_ACTIVE}
                strokeWidth={isCurrent ? 1.5 : 0.8}
                initial={{ opacity: 0, scale: 0 }}
                animate={isActive ? { opacity: isCurrent ? 0.7 : 0.35, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
              />

              {/* Pin dot , gold gradient */}
              <motion.circle
                cx={loc.x} cy={loc.y}
                r={isCurrent ? 5 : 3.5}
                initial={{ opacity: 0, scale: 0 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.08, scale: 0.3 }}
                transition={{ duration: 0.8, ease: EASE }}
                fill={isCurrent ? "url(#pinGoldGrad)" : PIN_ACTIVE}
                filter={isCurrent ? "url(#pinGlow)" : undefined}
                style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
              />

              {/* Inner highlight dot */}
              {isActive && (
                <motion.circle
                  cx={loc.x} cy={loc.y} r="1.5"
                  fill="#fff"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                />
              )}

              {/* Location label — only shows for current milestone, always gold, disappears after */}
              <AnimatePresence>
                {isCurrent && (
                  <motion.g
                    initial={{ opacity: 0, x: loc.labelSide === "left" ? 8 : -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <text
                      x={labelX}
                      y={labelY}
                      fill={ACCENT_GOLD}
                      fontSize="15"
                      fontFamily="var(--font-display)"
                      fontWeight="400"
                      letterSpacing="0.04em"
                      filter="url(#labelShadow)"
                    >
                      {loc.label}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>

            </g>
          );
        })}

        {/* ─── Compass rose , refined ─── */}
        <g transform="translate(745, 55)" opacity="0.1">
          <circle cx="0" cy="0" r="22" fill="none" stroke={GRID_COLOR} strokeWidth="0.3" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke={GRID_COLOR} strokeWidth="0.5" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke={GRID_COLOR} strokeWidth="0.5" />
          <polygon points="0,-22 -3,-16 3,-16" fill={GRID_COLOR} />
          <text x="0" y="-28" textAnchor="middle" fill={GRID_COLOR}
            fontSize="7" fontFamily="var(--font-display)" fontWeight="400" letterSpacing="0.2em">
            N
          </text>
          <text x="0" y="34" textAnchor="middle" fill={GRID_COLOR}
            fontSize="5" fontFamily="var(--font-display)" fontWeight="300" letterSpacing="0.15em">
            S
          </text>
        </g>

        {/* ─── Scale bar ─── */}
        <g transform="translate(640, 645)" opacity="0.08">
          <line x1="0" y1="0" x2="80" y2="0" stroke={GRID_COLOR} strokeWidth="0.6" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke={GRID_COLOR} strokeWidth="0.6" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke={GRID_COLOR} strokeWidth="0.6" />
          <text x="40" y="12" textAnchor="middle" fill={GRID_COLOR}
            fontSize="6" fontFamily="var(--font-body)" letterSpacing="0.1em">
            1000 km
          </text>
        </g>
      </svg>


    </div>
  );
}
