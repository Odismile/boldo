import { SvgIcon } from "@mui/material";
import React from "react";

const ArrowDown = (props) => {
  return (
    <SvgIcon {...props} viewBox='0 0 14 8'>
      <path
        d='M1 1L7 7L13 1'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </SvgIcon>
  );
};

export default ArrowDown;
