import { handleResolverError } from '../utils/errors.js'
import {
  athleteResultSerializer,
  athleteSerializer,
  athletePhotoSerializer
} from '../serializers/index.js'

const athleteQueries = {
  async getOneAthlete (_, { id }, { app }) {
    try {
      const { repos } = app
      const athleteData = await repos.athletes.findOneById(id)

      return athleteSerializer(athleteData)
    } catch (err) {
      handleResolverError(err)
    }
  }
}

const athleteType = {
  async results ({ id }, _, { app }) {
    try {
      const { repos } = app
      const athleteResultsData = await repos.athleteResults.findAllByAthlete(id)

      return athleteResultsData.map(athleteResultSerializer)
    } catch (err) {
      handleResolverError(err)
    }
  },
  async photo ({ id }, _, { app }) {
    try {
      const { repos } = app
      const photoData = await repos.athletePhotos.findOneByAthlete(id)

      return athletePhotoSerializer(photoData)
    } catch (err) {
      handleResolverError(err)
    }
  }
}

export { athleteQueries, athleteType }
