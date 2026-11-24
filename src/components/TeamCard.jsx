import React from 'react'
import teamImg from '../assets/team.jpg'

export function TeamCard() {
  return (
    <div className="team-card-frame">
      <div className="team-card-image-wrapper">
        <img
          src={teamImg}
          alt="Côn Đồ Trên Con Đò - Đội ngũ phát triển"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

export default TeamCard

