import React from 'react'
import ChallengeList from '../components/ChallengeList'
import Explore from '../components/Explore'
import Intro from '../components/Intro'
import Participate from '../components/Participate'
import SubIntro from '../components/SubIntro'
import { PC } from '../data/ParticipateData'

const Homepage = () => {
  return (
    <>
    <Intro />
      <SubIntro />
      <Participate PC={PC} />
      <Explore />
      <ChallengeList />
    </>
  )
}

export default Homepage