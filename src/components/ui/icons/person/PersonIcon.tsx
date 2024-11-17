import { FC } from "react";

import { determineVersion } from "@/components/ui/icons/settingsIcons";
import { IconProps } from "@/components/ui/icons/typeIcons";

import s from "../Icons.module.scss";

export const PersonIcon: FC<IconProps> = ({
  color = "",
  version = "dark",
  ...rest
}) => {
  return (
    <svg
      {...rest}
      className={`${s.svg} ${rest.className} `}
      fill={"none"}
      height={"24"}
      viewBox={"0 0 24 24"}
      width={"24"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path
        d={
          "M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
        }
        fill={color ? color : determineVersion(version)}
      />
      <path
        d={
          "M18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18Z"
        }
        fill={color ? color : determineVersion(version)}
      />
    </svg>
  );
};
