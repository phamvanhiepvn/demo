// @ts-nocheck
import React from 'react'
import { ClipLoader } from 'react-spinners';

const Spinner = (props) => (
  <div className='sweet-loading'>
    <ClipLoader
      className="clip-loader"
      sizeUnit={"px"}
      size={props.size || 60}
      color={'#FF586B'}
      loading
    />
  </div>
)
export default Spinner;
