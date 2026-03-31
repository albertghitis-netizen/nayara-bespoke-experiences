/**
 * BOOKING CONFIGURATION — Centralized SynXis booking URLs for all properties
 * Update URLs here to change booking links across the entire site.
 */

export interface PropertyBooking {
  id: string;
  label: string;
  url: string;
  available: boolean;
}

/* ── SynXis Booking URLs ── */
export const BOOKING_URLS: Record<string, string> = {
  /* Costa Rica properties share the same chain/hotel */
  gardens:
    "https://be.synxis.com/?Hotel=10868&Chain=24447&locale=en-US&adult=2&child=0",
  springs:
    "https://be.synxis.com/?Hotel=10868&Chain=24447&locale=en-US&adult=2&child=0",
  "tented-camp":
    "https://be.synxis.com/?Hotel=10868&Chain=24447&locale=en-US&adult=2&child=0",
  "costa-rica":
    "https://be.synxis.com/?chain=24447&hotel=10868&level=hotel&locale=en-US&adult=1&child=0&rooms=1&currency=USD&productcurrency=USD&src=30",
  "alto-atacama":
    "https://be.synxis.com/?&chain=24447&hotel=35177&adult=2&SRC=30",
  hangaroa:
    "https://be.synxis.com/?adult=2&chain=24447&child=0&currency=USD&hotel=35955&level=hotel&locale=en-US&productcurrency=USD&rooms=1",
  "bocas-del-toro":
    "https://be.synxis.com/?adult=2&chain=24447&child=0&currency=USD&hotel=38262&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=30",
};

/* ── Default booking URL (Costa Rica) ── */
export const DEFAULT_BOOKING_URL = BOOKING_URLS["costa-rica"];

/* ── Hotel booking links for Reserve dropdown (used in Home.tsx) ── */
export const hotelBookingLinks: PropertyBooking[] = [
  { id: "gardens", label: "Nayara Gardens", url: BOOKING_URLS.gardens, available: true },
  { id: "springs", label: "Nayara Springs", url: BOOKING_URLS.springs, available: true },
  { id: "tented-camp", label: "Nayara Tented Camp", url: BOOKING_URLS["tented-camp"], available: true },
  { id: "alto-atacama", label: "Nayara Alto Atacama", url: BOOKING_URLS["alto-atacama"], available: true },
  { id: "hangaroa", label: "Nayara Hangaroa", url: BOOKING_URLS.hangaroa, available: true },
  { id: "bocas-del-toro", label: "Nayara Bocas del Toro", url: BOOKING_URLS["bocas-del-toro"], available: true },
];

/**
 * Helper: Build a booking URL with optional check-in/check-out dates
 */
export function buildBookingUrl(
  propertyId: string,
  checkIn?: string,
  checkOut?: string
): string {
  const baseUrl = BOOKING_URLS[propertyId] || DEFAULT_BOOKING_URL;
  const url = new URL(baseUrl);
  if (checkIn) url.searchParams.set("arrive", checkIn);
  if (checkOut) url.searchParams.set("depart", checkOut);
  return url.toString();
}
