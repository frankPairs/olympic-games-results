import React from 'react'

import { getAthleteFullName } from '../utils'
import { MedalResult } from './MedalResult'
import {
  AthleteBasicInfoSectionWrapper,
  AthleteSectionWrapper,
  AthletePhotoWrapper,
  AthletePersonalInfoWrapper,
  AthletePhotoImage,
  Wrapper,
  BioWrapper,
  InfoWrapper,
  MedalsWrapper,
  InfoText,
  PropText,
  Title
} from './AthleteDetail.styles'

const AthleteDetail = ({ athlete }) => {
  const fullName = getAthleteFullName(athlete)

  return (
    <Wrapper>
      <AthleteBasicInfoSectionWrapper>
        <AthletePhotoWrapper>
          <AthletePhotoImage src={`data:image/png;base64,${athlete.photo.base64}`} alt={fullName} />
        </AthletePhotoWrapper>

        <AthletePersonalInfoWrapper>
          <InfoWrapper>
            <PropText>Full Name</PropText>
            <InfoText>{fullName}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <PropText>Date of birth</PropText>
            <InfoText>{athlete.dateOfBirth}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <PropText>Weight</PropText>
            <InfoText>{athlete.weight} kg</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <PropText>Height</PropText>
            <InfoText>{athlete.height} cm</InfoText>
          </InfoWrapper>
        </AthletePersonalInfoWrapper>
      </AthleteBasicInfoSectionWrapper>

      <AthleteSectionWrapper>
        <Title tag="h3">Athlete Results</Title>

        <ul>
          {athlete.results.map(result => (
            <li key={result.game.id}>
              <Title tag="h4">{result.game.city} - {result.game.year}</Title>

              <MedalsWrapper>
                <MedalResult kind="gold" amount={result.gold} />
                <MedalResult kind="silver" amount={result.silver} />
                <MedalResult kind="bronze" amount={result.bronze} />
              </MedalsWrapper>
            </li>
          ))}
        </ul>
      </AthleteSectionWrapper>

      <AthleteSectionWrapper>
        <Title tag="h3">Athlete Bio</Title>

        <BioWrapper>
          {athlete.bio}
        </BioWrapper>
      </AthleteSectionWrapper>
    </Wrapper>
  )
}

export { AthleteDetail }
