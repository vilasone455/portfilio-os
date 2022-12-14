import { FC } from "react";

interface Prop {
    isFolder: boolean
    svg: any
    name: string
}

const FolderIcon: FC<Prop> = ({ isFolder, svg, name }) => {
    return (
        <div className="flex flex-col space-y-2">
            <div>
                {isFolder && <svg
  width={48}
  height={48}
  version="1.1"
  viewBox="0 0 33.866 33.866"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient
      id="c"
      x1="-197.1"
      x2="-196.91"
      y1="217.68"
      y2="219.37"
      gradientTransform="matrix(5.2589 -5.2589 5.2589 5.2589 1.0331 -2083.1)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} />
      <stop stopOpacity={0} offset={1} />
    </linearGradient>
  </defs>
  <path
    d="m7.1436 4.4978c-0.79373 0-1.0583 0.53658-1.0583 1.0583h-2.126c-0.40245 0-0.51977 0.14903-0.51977 0.51781v10.879c0 0.57469 0.46485 1.0395 1.0395 1.0395h24.91c0.57381 1e-6 1.0387-0.46574 1.0376-1.0395v-10.879c0-0.38976-0.13476-0.51977-0.51977-0.51977h-14.561c0-0.51977-0.26458-1.0564-1.0583-1.0564z"
    fill="#fff"
    fillOpacity=".976"
    stroke="#000"
    strokeOpacity=".268"
    strokeWidth=".52916"
    style={{ paintOrder: "markers stroke fill" }}
  />
  <path
    d="m7.1436 4.4978c-0.79373 0-1.0583 0.53658-1.0583 1.0583h-2.126c-0.40245 0-0.51977 0.14903-0.51977 0.51781v10.879c0 0.57469 0.46485 1.0395 1.0395 1.0395h24.91c0.57381 1e-6 1.0387-0.46574 1.0376-1.0395v-10.879c0-0.38976-0.13476-0.51977-0.51977-0.51977h-14.561c0-0.51977-0.26458-1.0564-1.0583-1.0564z"
    fill="#fff"
    fillOpacity=".976"
    style={{ paintOrder: "markers stroke fill" }}
  />
  <path
    d="m16.934 8.2019c-0.57654 0-0.76808 0.55851-1.0593 1.0583l-0.58965 1.0583h-13.449c-0.52144 0-0.52144 0.52144-0.52144 0.52144v17.744c0 0.51948 0.52144 0.51948 0.52144 0.51948h30.197c0.51948 0 0.51948-0.51948 0.51948-0.51948v-19.861c0-0.52144-0.51948-0.52144-0.51948-0.52144z"
    fill="#6ba4e7"
    stroke="#003579"
    strokeOpacity=".56078"
    strokeWidth=".52916"
    style={{ paintOrder: "markers stroke fill" }}
  />
  <path
    d="m16.934 8.2019c-0.57654 0-0.76808 0.55851-1.0593 1.0583l-0.58965 1.0583h-13.449c-0.52144 0-0.52144 0.52144-0.52144 0.52144v17.744c0 0.51948 0.52144 0.51948 0.52144 0.51948h30.197c0.51948 0 0.51948-0.51948 0.51948-0.51948v-19.861c0-0.52144-0.51948-0.52144-0.51948-0.52144z"
    fill="#6ba4e7"
    style={{ paintOrder: "markers stroke fill" }}
  />
  <path
    transform="scale(.26458)"
    d="m123.03 86.385-23.613 23.615h21.648c1.9634 0 1.9648-1.9629 1.9648-1.9629v-21.652z"
    fill="url(#c)"
    opacity=".1"
    strokeWidth="3.7796"
    style={{ paintOrder: "stroke markers fill" }}
  />
  <rect
    x="7.6728"
    y="5.5561"
    width="6.3499"
    height="1.0583"
    rx=".52916"
    ry=".53016"
    fillOpacity=".267"
    style={{ paintOrder: "markers stroke fill" }}
  />
  <g transform="matrix(.26458 0 0 .26458 3.2e-7 1.0583)" strokeWidth={0}>
    <path
      d="m45 49v44h38v-29l-15-15h-1zm1 1h21v15h15v27h-36zm22 0.59961 13.4 13.4h-13.4z"
      opacity=".3"
    />
    <path d="m46 50-1.4e-5 42h36l3e-5 -27h-15l-2.2e-5 -15z" opacity=".15" />
  </g>
</svg>
}
                {svg}
            </div>
            <div className="text-gray-200">
                {name}
            </div>

        </div>


    )
}

export default FolderIcon