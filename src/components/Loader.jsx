import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-loader'></span>
      <p className='mt-20 font-bold text-gray-200'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader