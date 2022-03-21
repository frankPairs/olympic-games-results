/**
 * Converts an athlete photo db row object into an object
 *
 * @param photoData {{ photo_id: string, photo: Buffer, mime_type: string }}: Row database object
 * @returns {{id: string, base64: string}}
 */
function athletePhotoSerializer (photoData) {
  return {
    id: photoData.photo_id,
    base64: photoData.photo.toString('base64')
  }
}

export { athletePhotoSerializer }
