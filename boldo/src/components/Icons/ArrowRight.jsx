import { SvgIcon } from "@mui/material";
import React from "react";

const ArrowRight = (props) => {
  return (
    <SvgIcon {...props} viewBox='0 0 24 26'>
      <path
        d='M5 14H19'
        stroke='#0A2640'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 7L19 14L12 21'
        stroke='#0A2640'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </SvgIcon>
  );
};

export default ArrowRight;
