export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  return data.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  return data.places;
}
