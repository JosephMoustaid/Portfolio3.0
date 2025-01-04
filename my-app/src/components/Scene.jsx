import React from 'react';
import SplineViewer from '@splinetool/react-spline';

export default function Scene() {

  // scene="https://prod.spline.design/nKD5cLeFyiMGEaaa/scene.splinecode"
  // scene="https://prod.spline.design/LvhvJzVdFVNmBCHH/scene.splinecode"
  // scene="https://prod.spline.design/5vNvyJM3UQ27NpYp/scene.splinecode"
  // scene="https://prod.spline.design/7TX9-V0Jh8-ClGHt/scene.splinecode"
  // scene="https://prod.spline.design/3NC1ivvLF9NZeFIT/scene.splinecode" 
  // scene="https://prod.spline.design/7TX9-V0Jh8-ClGHt/scene.splinecode" 
  // scene="https://prod.spline.design/Ys-b1MG3DJDsHUA8/scene.splinecode"
  // scene="https://prod.spline.design/CRsGvJ5ufdPA9gfD/scene.splinecode" 

  return (
    <div
      style={{
        zIndex: '0', 
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100vh', // Full height of the viewport
        width: '100%', // Half of the viewport width
        overflow: 'hidden', // Hide the rest of the element
        transform: 'translateX(0%)', // Push the element to the right
      }}
    >
      <SplineViewer
         scene="https://prod.spline.design/V4mOKeZHPfMb9eo2/scene.splinecode" 
        style={{
          width: '100%', // Double the width to make the content fill the container
          height: '100%',
          zoom: '1.4'
        }}
      />
    </div>
  );
}
