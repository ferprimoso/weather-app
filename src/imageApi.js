const apiKey = 'QJ-CVCvJxqVi-u3BBwO0HtyQLxRx_RrDhUSS730rvVw';

async function getLocationImage(location) {
  const response = await fetch(
    `https://api.unplash.com/search/photos?query=${location}&client_id=${apiKey}`
  );
  const data = await response;

  console.log(data);
  return data;
}

// eslint-disable-next-line import/prefer-default-export
export { getLocationImage };
