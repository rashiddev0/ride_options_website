import React, { SVGProps } from "react";

const googlePlayStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M.913.8C.522 1.2.295 1.823.295 2.63v28.75c0 .805.227 1.427.618 1.827l.097.088L17.533 17.19v-.38L1.01.706.913.8Z"
    />
    <path
      fill="url(#b)"
      d="m23.035 22.561-5.502-5.37v-.38l5.509-5.371.123.07 6.523 3.619c1.862 1.027 1.862 2.717 0 3.75l-6.523 3.613-.13.07Z"
    />
    <path
      fill="url(#c)"
      d="m23.165 22.491-5.632-5.49L.913 33.205c.619.634 1.627.71 2.774.077L23.165 22.49Z"
    />
    <path
      fill="url(#d)"
      d="M23.165 11.51 3.687.717C2.54.09 1.532.167.913.8L17.533 17l5.632-5.49Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16.066}
        x2={-5.744}
        y1={31.677}
        y2={9.308}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A0FF" />
        <stop offset={0.007} stopColor="#00A1FF" />
        <stop offset={0.26} stopColor="#00BEFF" />
        <stop offset={0.512} stopColor="#00D2FF" />
        <stop offset={0.76} stopColor="#00DFFF" />
        <stop offset={1} stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={32.112}
        x2={-0.15}
        y1={16.999}
        y2={16.999}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE000" />
        <stop offset={0.409} stopColor="#FFBD00" />
        <stop offset={0.775} stopColor="orange" />
        <stop offset={1} stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={20.103}
        x2={-9.474}
        y1={14.015}
        y2={-16.319}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3A44" />
        <stop offset={1} stopColor="#C31162" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-3.27}
        x2={9.937}
        y1={42.771}
        y2={29.225}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32A071" />
        <stop offset={0.069} stopColor="#2DA771" />
        <stop offset={0.476} stopColor="#15CF74" />
        <stop offset={0.801} stopColor="#06E775" />
        <stop offset={1} stopColor="#00F076" />
      </linearGradient>
    </defs>
  </svg>
)
export default googlePlayStore
