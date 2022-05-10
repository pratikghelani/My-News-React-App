import React from 'react'
import Loading from './loading_icon.svg'

export default function loading() {
  return (
    <div className="text-center mt-5">
        <img src={Loading} alt="Loading..." />
    </div>
  )
}
