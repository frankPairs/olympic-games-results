/**
 * Converts an athlete db row object into an object
 *
 * @param athleteData {{athlete_id: string, name: string, surname: string, bio: string, date_of_birth: string, weight: number, height: number, photo_id: string}}: Row database object
 * @returns {{dataOfBirth: string, surname: string, name: string, bio: string, weight: number, photoId: string, id: string, height: number}}
 */
function athleteSerializer (athleteData) {
  return {
    id: athleteData.athlete_id,
    name: athleteData.name,
    surname: athleteData.surname,
    bio: athleteData.bio,
    dateOfBirth: athleteData.date_of_birth,
    weight: athleteData.weight,
    height: athleteData.height,
    photoId: athleteData.photo_id
  }
}

export { athleteSerializer }
