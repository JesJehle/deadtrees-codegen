// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIconsvgIcon(props: SocialIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#eRv8EeWLIdkIa)"}>
        <path
          d={
            "M24.266 12.277c0-.816-.066-1.636-.207-2.439H12.74v4.621h6.482a5.554 5.554 0 01-2.399 3.647v2.998h3.867c2.271-2.09 3.576-5.177 3.576-8.827z"
          }
          fill={"#4285F4"}
        ></path>

        <path
          d={
            "M12.74 24c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
          }
          fill={"#34A853"}
        ></path>

        <path
          d={
            "M6.003 14.3a7.188 7.188 0 010-4.594V6.615H2.017a12.01 12.01 0 000 10.776l3.986-3.09z"
          }
          fill={"#FBBC04"}
        ></path>

        <path
          d={
            "M12.74 4.75a6.52 6.52 0 014.603 1.799l3.427-3.426A11.533 11.533 0 0012.74 0 11.998 11.998 0 002.017 6.615l3.986 3.09C6.95 6.863 9.609 4.75 12.74 4.75z"
          }
          fill={"#EA4335"}
        ></path>
      </g>

      <defs>
        <clipPath id={"eRv8EeWLIdkIa"}>
          <path
            fill={"#fff"}
            transform={"translate(.5)"}
            d={"M0 0h24v24H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SocialIconsvgIcon;
/* prettier-ignore-end */
