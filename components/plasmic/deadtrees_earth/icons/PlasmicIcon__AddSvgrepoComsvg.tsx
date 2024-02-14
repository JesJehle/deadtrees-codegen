// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddSvgrepoComsvgIcon(props: AddSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.5 11.25a.75.75 0 000 1.5v-1.5zm5 1.5a.75.75 0 000-1.5v1.5zm0-1.5a.75.75 0 000 1.5v-1.5zm5 1.5a.75.75 0 000-1.5v1.5zM13.25 12a.75.75 0 00-1.5 0h1.5zm-1.5 5a.75.75 0 001.5 0h-1.5zm0-5a.75.75 0 001.5 0h-1.5zm1.5-5a.75.75 0 00-1.5 0h1.5zM7.5 12.75h5v-1.5h-5v1.5zm5 0h5v-1.5h-5v1.5zm0-.75h-.75v5h1.5v-5h-.75zm.75 0V7h-1.5v5h1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddSvgrepoComsvgIcon;
/* prettier-ignore-end */
