import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { Typography } from '../../../components/feedback'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AthleteSectionWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
`

const AthleteBasicInfoSectionWrapper = styled(AthleteSectionWrapper)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.md};

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

const AthletePhotoWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.md};

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    margin-bottom: ${(props) => props.theme.spacing.md};
    margin-right: 0;
  }
`

const AthletePhotoImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    width: 100%;
    height: auto;
  }
`

const AthletePersonalInfoWrapper = styled.div`
  width: 100%;
  align-self: flex-end;
  
  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    align-self: flex-start;
  }
`

const InfoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`

const BioWrapper = styled(ReactMarkdown)`
  h1 {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.gray4};
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }
  
  h2 {
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.gray4};
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }
  
  h3 {
    font-size: ${(props) => props.theme.fontSize.xs};
    color: ${(props) => props.theme.colors.gray4};
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }
  
  p {
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.gray3};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }
  
  li {
    margin-top: ${(props) => props.theme.spacing.xs};
  }
`

const MedalsWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`

const PropText = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-bottom: ${(props) => props.theme.spacing.xxs};
  color: ${(props) => props.theme.colors.gray4};
`

const InfoText = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.gray3};
`

const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`

export {
  AthleteSectionWrapper,
  AthleteBasicInfoSectionWrapper,
  AthletePersonalInfoWrapper,
  AthletePhotoWrapper,
  AthletePhotoImage,
  Wrapper,
  InfoWrapper,
  BioWrapper,
  MedalsWrapper,
  InfoText,
  PropText,
  Title
}
