import { FC } from "react";

import { determineVersion } from "@/components/ui/icons/settingsIcons";
import { IconProps } from "@/components/ui/icons/typeIcons";

import s from "../Icons.module.scss";
export const PhoneIcon: FC<IconProps> = ({
  color = "",
  height = "16",
  version = "dark",
  width = "16",
  ...rest
}) => {
  return (
    <svg
      className={`${s.svg} ${rest.className} `}
      height={height}
      viewBox={"0,0,256,256"}
      width={width}
      x={"0px"}
      xmlns={"http://www.w3.org/2000/svg"}
      y={"0px"}
    >
      <g
        fill={color ? color : determineVersion(version)}
        fillRule={"nonzero"}
        fontFamily={"none"}
        fontSize={"none"}
        fontWeight={"none"}
        stroke={"none"}
        strokeDasharray={""}
        strokeDashoffset={"0"}
        strokeLinecap={"butt"}
        strokeLinejoin={"miter"}
        strokeMiterlimit={"10"}
        strokeWidth={"1"}
        textAnchor={"none"}
      >
        <g transform={"scale(5.12,5.12)"}>
          <path
            d={
              "M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM18.00586,12.0332c0.628,0.027 1.20473,0.38083 1.55273,0.92383c0.396,0.618 1.01055,1.57712 1.81055,2.82813c0.73,1.141 0.78091,2.61469 0.12891,3.80469l-1.46484,2.08398c-0.396,0.564 -0.47498,1.28588 -0.20898,1.92188c0.414,0.99 1.21658,2.5115 2.64258,3.9375c1.426,1.426 2.9475,2.22858 3.9375,2.64258c0.636,0.266 1.35788,0.18702 1.92188,-0.20898l2.08398,-1.46484c1.19,-0.652 2.66369,-0.60009 3.80469,0.12891c1.251,0.8 2.21012,1.41455 2.82813,1.81055c0.543,0.348 0.89683,0.92473 0.92383,1.55273c0.154,3.564 -2.60716,5.00781 -3.41016,5.00781c-0.556,0 -7.2403,0.7597 -14.7793,-6.7793c-7.539,-7.539 -6.7793,-14.2233 -6.7793,-14.7793c0,-0.803 1.44381,-3.56416 5.00781,-3.41016z"
            }
          ></path>
        </g>
      </g>
    </svg>
  );
};
