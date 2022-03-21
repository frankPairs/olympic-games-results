/**
 * Converts an game result db row object into an object
 *
 * @param gameData {{game_id: string, city: string, year: number}}: Raw database object
 * @returns {{city: string, year: number, id: string}}
 */
function gameSerializer (gameData) {
  return {
    id: gameData.game_id,
    city: gameData.city,
    year: gameData.year
  }
}

export { gameSerializer }
