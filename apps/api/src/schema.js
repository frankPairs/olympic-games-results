const schema = `
  type AthleteResult {
    """ Number of gold medals """ 
    gold: Int!
    """ Number of silver medals """
    silver: Int!
    """ Number of bronze medals """
    bronze: Int!
    """ Olympic Game information """
    game: Game!
    """ Athlete information """
    athlete: Athlete!
    """
    Global score is the sum of all the medals applying a specific factor. 
    Factors are different depending on the medal: 
    
    Gold medal: 5 points
    Silver medal: 3 points
    Bronze medal: 3 points
    """
    globalScore: Int!
  }
 
  type GameResult {
    data: [Game]!
    totalCount: Int!
  }
 
  type Game {
    """ Olympic Game unique id """ 
    id: ID!
    """ City where the Olympic Game was celebrated """
    city: String!
    """ Year where the Olympic Game celebrated """
    year: Int!
    """ Results of all the athletes that participated to the Olympics"""
    athleteResults: [AthleteResult]!
  }
  
  type AthletePhoto {
    """ Athlete photo unique id """ 
    id: ID!
    """ Base 64 representation of the photo """ 
    base64: String!
  }
  
  type Athlete {
    """ Athlete unique id """
    id: ID!
    """ Athlete name """
    name: String!
    """ Athlete surname """
    surname: String!
    """ Athlete date of birth """
    dateOfBirth: String!
    """ A long piece of markdown formatted text with the bio of the athlete """
    bio: String!
    """ Athlete height in centimeters """
    height: Float!
    """ Athlete height in kilograms """
    weight: Float!
    """ Athlete photo """
    photo: AthletePhoto!
    """ Athlete results of all the games where they participated """
    results: [AthleteResult]!
  }
  
  type Query {
    getOneAthlete(id: ID!): Athlete!
    getAllGames(limit: Int!, offset: Int!): GameResult!
  }
`

export default schema
