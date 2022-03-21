import React from 'react'

import medalGoldImg from '../../../assets/medal_gold.png'
import medalSilverImg from '../../../assets/medal_silver.png'
import medalBronzeImg from '../../../assets/medal_bronze.png'
import { Wrapper } from './MedalResult.styles'

function getMedalImage (kind) {
  switch (kind) {
    case 'gold':
      return <img src={medalGoldImg} alt="Number of gold medals" />
    case 'silver':
      return <img src={medalSilverImg} alt="Number of silver medals" />
    case 'bronze':
      return <img src={medalBronzeImg} alt="Number of bronze medals" />
    default:
      return null
  }
}

const MedalResult = ({ kind, amount }) => {
  return (
    <Wrapper>
      {getMedalImage(kind)}
      <p>{amount}</p>
    </Wrapper>

  )
}

export { MedalResult }
