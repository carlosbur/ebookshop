export const GOOGLE_API_KEY = `AIzaSyCuBvtO9aBZgp86kfOCBmU2b0PR1Phe89c`
export const URL_MAPS = ({lat, lng, zoom}) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%Clabel:A%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
export const URL_BASE_GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/';