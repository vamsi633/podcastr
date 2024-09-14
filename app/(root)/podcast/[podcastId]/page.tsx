import React from 'react'

const PodcstDetails = ({params}:{params:{podcastId:string}}) => {
  return (
    <div>
      <p className='text-white-1'>PodcastDetails for {params.podcastId}</p>
    </div>
  )
}

export default PodcstDetails
