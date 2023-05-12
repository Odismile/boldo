import { SvgIcon } from "@mui/material";
import React from "react";

const Check = (props) => {
  return (
    <SvgIcon {...props} viewBox='0 0 18 13'>
      <path
        d='M17 1L6 12L1 7'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </SvgIcon>
  );
};

export default Check;
