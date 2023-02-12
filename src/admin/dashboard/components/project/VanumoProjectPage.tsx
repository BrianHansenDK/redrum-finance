import React from 'react'
import { useParams } from 'react-router-dom'

const VanumoProjectPage = () => {
  const {projectId} = useParams()
  return (
    <div>
      {projectId}
    </div>
  )
}

export default VanumoProjectPage
