import React from 'react'
import Main from './Main'
import BrewhereIntro from './BrewhereIntro'
import FeatureFirst from './FeatureFirst'
import FeatureSecond from './FeatureSecond'

export default function Landing() {
  return (
    <>
      <div className=''>
        <Main />
        <BrewhereIntro />
        <FeatureFirst />
        <FeatureSecond />
      </div>
    </>
  )
}