import React from 'react'

const FacebookSvg = React.forwardRef((props, ref: React.LegacyRef<SVGSVGElement>) =>(
  <svg {...props} ref={ref}
  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#fefefe">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058">
      </path>
    </g>
  </svg>
))

export default FacebookSvg
