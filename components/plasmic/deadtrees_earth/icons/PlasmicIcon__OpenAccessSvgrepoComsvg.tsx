// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenAccessSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenAccessSvgrepoComsvgIcon(
  props: OpenAccessSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 365.827 365.827"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M301.191 153.137H106.562c-5.625 0-5.383-4.72-5.383-4.72v-36.408c0-45.068 36.666-81.734 81.733-81.734 27.995 0 52.731 14.158 67.466 35.68 1.32 1.93 3.934 5.961 8.684 5.961h22c5.75 0 4.356-5.114 3.183-7.599C266.301 26.341 227.628 0 182.913 0 121.151 0 70.904 50.247 70.904 112.009v36.658s.658 4.47-4.592 4.47h-1.679c-4.289 0-7.799 3.51-7.799 7.8v197.09c0 4.29 3.51 7.8 7.799 7.8h236.558c4.29 0 7.8-3.51 7.8-7.8v-18.14c0-4.574-4.267-4.34-4.267-4.34h-33.753c-7.708 0-13.957-6.249-13.957-13.957s6.249-13.957 13.957-13.957h32.597s5.423.192 5.423-4.34v-18.111c0-4.482-4.556-4.34-4.556-4.34h-33.464c-7.708 0-13.957-6.249-13.957-13.957s6.249-13.957 13.957-13.957h33.682s4.338-.114 4.338-4.34v-18.112c0-4.462-3.833-4.34-3.833-4.34h-34.186c-7.708 0-13.957-6.249-13.957-13.957s6.249-13.957 13.957-13.957h33.753s4.267.339 4.267-4.34v-32.946c-.001-4.289-3.511-7.799-7.801-7.799zM202.719 279.27c0 4.925.021 15.365.021 15.365 0 10.95-8.876 19.827-19.826 19.827s-19.826-8.877-19.826-19.827c0 0 .021-10.44.021-15.365 0-10.518-20.204-9.882-20.204-34.758 0-22.097 17.913-40.01 40.01-40.01s40.01 17.913 40.01 40.01c-.002 24.876-20.206 24.24-20.206 34.758z"
        }
      ></path>
    </svg>
  );
}

export default OpenAccessSvgrepoComsvgIcon;
/* prettier-ignore-end */
