import React from 'react'
import Main from './Main'
import BrewhereIntro from './BrewhereIntro'
import FeatureFirst from './FeatureFirst'
import FeatureSecond from './FeatureSecond'
import FeatureThird from './FeatureThird'
import StartButton from './StartButton'

export default function Landing() {
  return (
    <>
      <div className=''>
        <Main />
        <BrewhereIntro />
        <FeatureFirst />
        <FeatureSecond />
        <FeatureThird />
        <StartButton />
      </div>
    </>
  )
}