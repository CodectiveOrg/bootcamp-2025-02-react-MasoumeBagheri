// import { SVGProps } from "react";

// export function TwemojiFrowningFaceWithOpenMouth(
//   props: SVGProps<SVGSVGElement>
// ) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 36 36"
//       {...props}
//     >
//       <path
//         // fill="#FFCC4D"
//         fill="none"
//         d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
//       ></path>
//       <ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
//       <ellipse cx="24.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
//       <path
//         // fill="#664500"
//         fill="currentColor"
//         d="M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379a.5.5 0 0 0 .232.544a.51.51 0 0 0 .596-.06c.009-.008 1.013-.863 4.657-.863c3.59 0 4.617.83 4.656.863a.5.5 0 0 0 .829-.484"
//       ></path>
//     </svg>
//   );
// }
// export default TwemojiFrowningFaceWithOpenMouth;

import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240 240-107.452 240-240S388.548 16 256 16Zm147.078 387.078a207.253 207.253 0 1 1 44.589-66.125 207.332 207.332 0 0 1-44.589 66.125Z"
    />
    <path
      fill="currentColor"
      d="M168 320h176v32H168zM210.63 228.042l-24.042-21.371 21.37-24.041-23.916-21.26-21.371 24.042-24.041-21.37-21.26 23.916 24.042 21.371-21.37 24.041 23.916 21.26 21.371-24.042 24.041 21.37 21.26-23.916zM383.958 182.63l-23.916-21.26-21.371 24.042-24.041-21.37-21.26 23.916 24.042 21.371-21.37 24.041 23.916 21.26 21.371-24.042 24.041 21.37 21.26-23.916-24.042-21.371 21.37-24.041z"
    />
  </svg>
);
export default SvgComponent;
