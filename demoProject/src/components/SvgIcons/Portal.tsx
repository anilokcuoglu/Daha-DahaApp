import * as React from 'react';
import Svg, {G, Rect, Path, Mask, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgPortal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 73 77"
    {...props}>
    <G filter="url(#PORTAL_svg__a)">
      <Rect width={69} height={69} x={2} y={2} fill="#fff" rx={24} />
    </G>
    <Path
      stroke="#F1DE02"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M60.066 6a21.762 21.762 0 0 1 4.455 3.692 22.236 22.236 0 0 1 3.273 4.63l.237.454c1.94 3.796 2.97 7.966 2.97 16.856v9.971l-.006 1.044c-.082 8.52-1.19 12.493-3.2 16.266-1.74 3.262-4.154 5.94-7.166 7.957"
    />
    <Path
      stroke="#009639"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M67 12.918a21.748 21.748 0 0 0-3.68-4.456 22.165 22.165 0 0 0-4.615-3.273l-.452-.237c-3.784-1.939-7.94-2.969-16.8-2.969h-9.94l-1.04.005c-8.491.082-12.451 1.19-16.212 3.2-3.251 1.74-5.92 4.154-7.93 7.166"
    />
    <Path
      stroke="#F40000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.48 9.663a22.166 22.166 0 0 0-3.274 4.615l-.237.452C3.029 18.514 2 22.67 2 31.53v9.94l.005 1.04c.082 8.492 1.19 12.452 3.2 16.212 1.74 3.251 4.554 5.921 7.566 7.93"
    />
    <Path
      stroke="#FF8300"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.993 64.504a22.161 22.161 0 0 0 4.615 3.274l.453.237c3.783 1.938 7.94 2.968 16.8 2.968H41.8l1.04-.005c8.492-.082 12.452-1.19 16.212-3.2.58-.31 1.14-.641 1.681-.993 2.5-1.625 4.398-3.697 6.05-6.173"
    />
    <Path
      stroke="#FFCF08"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M67.794 58.939c-1.738 3.251-4.153 5.92-7.165 7.93"
    />
    <Mask
      id="PORTAL_svg__b"
      width={15}
      height={16}
      x={29}
      y={40}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M29.009 40.99h14.799v14.799h-14.8v-14.8Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#PORTAL_svg__b)">
      <Path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334Zm0 2.79c-4.165 0-7.4-3.044-7.4-7.124V40.99h14.8v7.674c0 4.08-3.235 7.125-7.4 7.125Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="PORTAL_svg__c"
      width={15}
      height={15}
      x={29}
      y={17}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M29.008 17.1h14.8v14.672h-14.8V17.1Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#PORTAL_svg__c)">
      <Path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334Zm0-2.79c4.165 0 7.4 3.044 7.4 7.124v7.548h-14.8v-7.548c0-4.08 3.235-7.124 7.4-7.124Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="PORTAL_svg__d"
      width={15}
      height={16}
      x={17}
      y={28}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M17 28.981h14.8v14.8H17v-14.8Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#PORTAL_svg__d)">
      <Path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M19.79 36.38c0 2.728 1.777 4.61 4.335 4.61h4.884v-9.218h-4.884c-2.558 0-4.334 1.881-4.334 4.609Zm-2.79 0c0-4.164 3.044-7.399 7.125-7.399h7.674v14.8h-7.674c-4.08 0-7.125-3.235-7.125-7.4Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="PORTAL_svg__e"
      width={15}
      height={16}
      x={41}
      y={28}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M41.017 28.981h14.8v14.8h-14.8v-14.8Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#PORTAL_svg__e)">
      <Path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.335-1.882 4.335-4.61Zm2.79 0c0 4.166-3.044 7.4-7.125 7.4h-7.674V28.981h7.674c4.08 0 7.125 3.235 7.125 7.4Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#F1DE02"
      fillRule="evenodd"
      d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.334-1.882 4.334-4.61Z"
      clipRule="evenodd"
    />
    <Path
      fill="#009639"
      fillRule="evenodd"
      d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF8300"
      fillRule="evenodd"
      d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F40000"
      fillRule="evenodd"
      d="M19.79 36.381c0 2.727 1.777 4.609 4.335 4.609h4.883v-9.218h-4.883c-2.558 0-4.334 1.881-4.334 4.609Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
);
export default SvgPortal;
