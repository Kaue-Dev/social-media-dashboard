import React from 'react'
import SecondaryText from './SecondaryText'
import PrimaryText from './PrimaryText'

const RetangularCard = ({ iconSrc, likesNumber, negative=false }) => {
  return (
    <div>
      <div>
        <SecondaryText 
          textContent="Likes"
        />
        <img src={iconSrc} alt="SocialMediaIcon" />
      </div>
      <div>
        <PrimaryText 
          textContent={likesNumber}
          fontSize="text-4xl"
        />
        
      </div>
    </div>
  )
}

export default RetangularCard