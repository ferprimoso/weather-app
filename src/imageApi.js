const apiKey = 'QJ-CVCvJxqVi-u3BBwO0HtyQLxRx_RrDhUSS730rvVw';

async function getLocationImage(location) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${location}&orientation=landscape&client_id=${apiKey}`
  );
  const data = await response.json();
  const img = await data.results[0].urls.regular;

  return img;
}

// eslint-disable-next-line import/prefer-default-export
export { getLocationImage };
