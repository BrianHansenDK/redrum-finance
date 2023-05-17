import React from 'react'
import { FirebaseBundle } from '../../../../../../../../database/Objects'
import './pitch.scss'
import { YOUTUBE } from '../../../../../../../../misc/custom-hooks'

interface IProps {
  en: boolean,
  project: FirebaseBundle
}

const PitchVideo = (props: IProps) => {
  const {en, project} = props;

  // Mark: - PROPERTIES

  // Mark: - FUNCTIONS

  return (
    <div className="pitch-video-section">
      <h2 className="title mb-2 mt-2">
        {project.pitch_video !== '' ? 'Pitch video' : 'Presentation'}
      </h2>
      {project.pitch_video !== '' ? (
        <div className="pitch-video-con">
          <iframe
          className='pitch-video'
          src={YOUTUBE(project.pitch_video)}
          title={project.name!}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen />
        </div>
      ): ( <img src={project.overviewImage} alt={project.intro} /> )}
      <p className='description'>
        {project.description}
      </p>
    </div>
  )
}

export default PitchVideo
