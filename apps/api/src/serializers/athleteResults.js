/**
 * Converts an athlete result db row object into an object
 *
 * @param athleteResultsData {{athlete_id: string, game_id: string, gold: number, silver: number, bronze: number}}: Row database object
 * @returns {{gameId: string, gold: number, silver: number, athleteId: string, gameId: string}}
 */
function athleteResultSerializer (athleteResultsData) {
  return {
    gold: athleteResultsData.gold,
    silver: athleteResultsData.silver,
    bronze: athleteResultsData.bronze,
    athleteId: athleteResultsData.athlete_id,
    gameId: athleteResultsData.game_id
  }
}

export { athleteResultSerializer }
