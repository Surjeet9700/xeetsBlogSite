
import React from 'react';
import { RotatingLines } from 'react-loader-spinner'


function Loader({ visible }) {
  return (
    <div >
    <RotatingLines
      visible={visible}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </div>
  );
}

export default Loader;