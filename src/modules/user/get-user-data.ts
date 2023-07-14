export async function getUserData(): Promise<UserEntity | null> {
  const response = await fetch(
    'https://api.github.com/users/felipeolliveira',
    {
      method: 'GET',
      next: {
        revalidate: (60 * 60 * 24 * 365) / 2, // 1/2 year
      },
    }
  );

  if(!response.ok) {
    return null
  }

  return response.json()
}