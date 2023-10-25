import React from 'react'
import SecondaryText from './SecondaryText'
import PrimaryText from './PrimaryText'

import positiveArrow from "../images/icon-up.svg"
import negativeArrow from "../images/icon-down.svg"

const RetangularCard = ({ iconSrc, likesNumber, todayEarnings, negative=false }) => {
  return (
    <div className='bg-cardDarkBg w-72 h-36 rounded-lg flex flex-col gap-10 justify-center items-center'>
      <div className='flex gap-32'>
        <SecondaryText 
          textContent="Likes"
        />
        <img src={iconSrc} alt="SocialMediaIcon" width={24} />
      </div>
      <div className='flex gap-28'>
        <PrimaryText 
          textContent={likesNumber}
          fontSize="text-4xl"
        />
        <div className='flex items-center gap-2 font-bold'>
          <img src={negative ? negativeArrow : positiveArrow} alt="ArrowIcon" width={10} />
          <p className={negative ? `text-red` : `text-lime`}>{todayEarnings}</p>
        </div>     
      </div>
    </div>
  )
}

export default RetangularCard