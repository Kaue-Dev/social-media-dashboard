import React from 'react'
import SecondaryText from './SecondaryText'
import PrimaryText from './PrimaryText'

import positiveArrow from "../images/icon-up.svg"
import negativeArrow from "../images/icon-down.svg"

const SquareCard = ({ followersQuantity, socialUsername, todayEarnings, iconSrc, borderColor, negative=false }) => {
  return (
    <div className={`bg-cardDarkBg flex flex-col gap-10 text-center justify-center items-center w-72 h-72 rounded-lg ${borderColor}`}>
      <div className='flex gap-2 justify-center items-center'>
        <img src={iconSrc} alt="SocialMediaIcon" width={24} />
        <SecondaryText textContent={socialUsername} />
      </div>
      <div>
        <PrimaryText 
          textContent={followersQuantity}
          fontSize="text-7xl"
        />
        <p>FOLLOWERS</p>
      </div>
      <div className='flex items-center gap-2 font-bold'>
        <img src={negative ? negativeArrow : positiveArrow} alt="ArrowIcon" width={10} />
        <p className={negative ? `text-red` : `text-lime`}>{`${todayEarnings} Today`}</p>
      </div>
    </div>
  )
}

export default SquareCard