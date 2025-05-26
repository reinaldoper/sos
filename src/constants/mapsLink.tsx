interface maps {
  latitude: number,
  longitude: number
}

export const mapsLink = ({ latitude, longitude }: maps) => {
  const maps = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  return maps;

};
