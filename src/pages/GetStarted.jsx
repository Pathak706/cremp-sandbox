import React from "react";
import Grid from "@mui/material/Grid";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CardContainer from "../components/Card";
import GetStartedImage from "../Images/GetStartedImage";
import Button from "@mui/material/Button";
import BackCremp from "../components/BackCremp";
import PageHeading from "../components/PageHeading";
import FullScreenImage from "../components/FullScreenImage";

export default function GetStarted() {
  const cardContent = [
    {
      avatarImg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect width="80" height="80" rx="40" fill="#F4F7FE" />
          <path
            opacity="0.958"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 38.6826C64 38.9975 64 39.3126 64 39.6275C62.3253 43.5767 60.6717 47.5452 59.0394 51.533C58.9559 51.7789 58.8142 51.9836 58.6142 52.1472C52.858 52.2567 47.0942 52.3355 41.3228 52.3834C41.0708 52.9818 40.8189 53.5803 40.5669 54.1787C46.1414 54.2574 51.7163 54.3046 57.2913 54.3204C57.4407 54.3872 57.5825 54.4659 57.7165 54.5566C57.9636 54.9613 58.2471 55.3393 58.5669 55.6905C59.3628 57.3402 59.0636 58.7418 57.6693 59.8952C56.0807 60.7428 54.6791 60.5065 53.4646 59.1865C52.8697 58.323 52.7279 57.3939 53.0394 56.3991C50.2677 56.3361 47.496 56.3361 44.7244 56.3991C45.162 58.1069 44.5951 59.3667 43.0236 60.1787C41.3656 60.697 40.0586 60.2403 39.1024 58.8086C38.7664 58.0161 38.6877 57.1972 38.8661 56.3519C38.2879 56.2461 37.9729 55.8996 37.9213 55.3125C38.2969 54.0881 38.7537 52.8912 39.2913 51.722C39.4 51.509 39.4316 51.2886 39.3858 51.0606C37.489 46.4799 35.5677 41.913 33.622 37.3598C33.4662 38.8546 32.6631 39.7838 31.2126 40.1472C29.8089 40.3352 28.6592 39.8785 27.7638 38.7771C27.7323 40.2574 27.7008 41.7377 27.6693 43.218C27.5832 43.6339 27.4415 44.0276 27.2441 44.3991C28.1022 48.5639 28.9369 52.7371 29.748 56.9188C29.7904 58.9871 28.7825 60.1524 26.7244 60.4149C25.2969 60.3397 24.3205 59.6467 23.7953 58.3361C23.4997 56.9529 23.2163 55.5671 22.9449 54.1787C22.5949 55.5813 22.2799 56.9987 22 58.4306C21.3322 59.8436 20.214 60.4893 18.6457 60.3676C17.0299 60.0111 16.148 59.0033 16 57.344C16.7766 53.2249 17.5955 49.1147 18.4567 45.0133C18.0325 44.4167 17.7648 43.7553 17.6535 43.0291C17.5905 39.1236 17.5905 35.218 17.6535 31.3125C17.9018 30.0282 18.516 28.9572 19.4961 28.0999C17.4541 26.1575 17.0604 23.9213 18.315 21.3913C20.0761 19.0334 22.3281 18.4192 25.0709 19.5488C27.1318 20.8141 27.998 22.6566 27.6693 25.0763C27.429 26.283 26.8305 27.2595 25.874 28.0054C28.1363 30.3625 30.4513 32.7091 32.8189 35.0448C33.5191 35.055 34.2121 35.118 34.8976 35.2338C35.0079 35.3441 35.1181 35.4542 35.2283 35.5645C35.5909 36.4007 35.9532 37.2354 36.315 38.0684C45.2913 38.0999 54.2677 38.1315 63.2441 38.1629C63.5347 38.2804 63.7867 38.4537 64 38.6826ZM22.0472 21.1078C23.8506 20.9758 25.0317 21.7632 25.5906 23.47C25.7504 25.3569 24.9158 26.538 23.0866 27.0133C21.2553 27.0721 20.1371 26.2059 19.7323 24.4149C19.7142 22.7477 20.4859 21.6453 22.0472 21.1078ZM22.3307 29.1393C23.1676 29.1191 23.9235 29.3553 24.5984 29.848C26.916 32.1341 29.1995 34.4491 31.4488 36.7928C31.563 37.8608 31.1063 38.2544 30.0787 37.9739C27.8425 35.7377 25.6063 33.5015 23.3701 31.2653C22.9789 30.959 22.538 30.8645 22.0472 30.9818C21.5173 31.2915 21.344 31.7481 21.5276 32.3519C22.813 33.8265 24.1673 35.2438 25.5906 36.6039C25.6536 38.6511 25.6536 40.6983 25.5906 42.7456C25.404 43.2289 25.2308 43.7171 25.0709 44.2102C25.9177 48.4125 26.7523 52.6172 27.5748 56.8243C27.7636 57.8637 27.3384 58.3204 26.2992 58.1944C26.0453 58.0173 25.872 57.781 25.7795 57.4858C25.0043 53.5779 24.2169 49.6724 23.4173 45.7692C23.3071 45.533 23.1339 45.3598 22.8976 45.2495C21.171 45.1284 20.1159 44.2308 19.7323 42.5566C19.6693 38.9661 19.6693 35.3755 19.7323 31.785C20.0486 30.3506 20.9147 29.4688 22.3307 29.1393ZM37.1654 40.2889C45.244 40.1787 53.3385 40.163 61.4488 40.2417C61.147 40.8637 60.8636 41.4936 60.5984 42.1314C53.0708 42.1945 45.5433 42.1945 38.0157 42.1314C37.7214 41.5132 37.438 40.899 37.1654 40.2889ZM38.8661 44.3519C45.8109 44.2417 52.7716 44.226 59.748 44.3047C59.4829 44.9424 59.1994 45.5724 58.8976 46.1944C52.4725 46.2417 46.0473 46.2574 39.622 46.2417C39.4191 45.5851 39.1672 44.9551 38.8661 44.3519ZM20.252 46.7141C20.6812 46.8624 21.1064 47.0199 21.5276 47.1865C21.6319 47.6613 21.7422 48.1338 21.8583 48.6039C21.2382 51.5937 20.6241 54.5858 20.0157 57.5802C19.7121 58.24 19.224 58.4132 18.5512 58.0999C18.2851 57.8985 18.1591 57.6308 18.1732 57.2968C18.8543 53.7653 19.5473 50.2377 20.252 46.7141ZM40.5669 48.3204C46.3938 48.3046 52.2205 48.3204 58.0472 48.3676C57.8091 48.9544 57.5571 49.537 57.2913 50.1157C51.9688 50.2259 46.6459 50.2416 41.3228 50.1629C41.0574 49.5536 40.8055 48.9394 40.5669 48.3204ZM41.6063 56.3519C42.4755 56.3858 42.8377 56.8268 42.6929 57.6747C42.4171 58.1968 41.9919 58.37 41.4173 58.1944C40.6279 57.4937 40.6909 56.8795 41.6063 56.3519ZM55.7795 56.3519C56.6737 56.4411 57.0044 56.9135 56.7717 57.7692C56.4937 58.2089 56.0999 58.3506 55.5905 58.1944C55.0685 57.9186 54.8953 57.4934 55.0709 56.9188C55.2701 56.6711 55.5064 56.4821 55.7795 56.3519Z"
            fill="#84969F"
          />
        </svg>
      ),
      heading: "I'm a buyer",
      subHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
    },
    {
      avatarImg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect width="80" height="80" rx="40" fill="#F4F7FE" />
          <g opacity="0.974">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.8232 16.0059C33.7433 15.9902 45.6635 16.0059 57.5835 16.0529C57.6305 16.1 57.6776 16.147 57.7246 16.1941C58.6563 19.0519 59.5503 21.9221 60.4067 24.8048C60.33 26.6056 60.2829 28.4093 60.2655 30.2159C59.8584 31.8776 58.8546 33.0069 57.2541 33.6037C57.2071 43.3593 57.1913 53.115 57.2071 62.8707C58.1173 62.8551 59.027 62.8707 59.9361 62.9178C60.154 63.0397 60.2481 63.2279 60.2185 63.4824C60.2322 63.6738 60.1695 63.8307 60.0302 63.9529C46.479 64.0157 32.9277 64.0157 19.3764 63.9529C19.1903 63.7179 19.1432 63.4512 19.2353 63.153C19.2823 63.0432 19.3607 62.9648 19.4705 62.9178C20.3797 62.8707 21.2894 62.8551 22.1996 62.8707C22.2153 53.115 22.1996 43.3593 22.1526 33.6037C20.5521 33.0069 19.5483 31.8776 19.1412 30.2159C19.1238 28.4093 19.0767 26.6056 19 24.8048C19.7876 22.2853 20.5561 19.7601 21.3056 17.2293C21.4154 16.7886 21.5879 16.3808 21.8232 16.0059ZM22.576 17.1352C33.9942 17.1352 45.4125 17.1352 56.8306 17.1352C57.5014 19.5241 58.1916 21.9082 58.901 24.2872C46.1025 24.2872 33.3041 24.2872 20.5057 24.2872C21.2151 21.9082 21.9052 19.5241 22.576 17.1352ZM20.2234 25.4165C22.5133 25.4165 24.8032 25.4165 27.0931 25.4165C27.1088 26.703 27.0931 27.9891 27.0461 29.2748C26.8785 31.3403 25.7649 32.4381 23.7053 32.5686C22.256 32.5467 21.2052 31.888 20.5528 30.5923C20.3823 30.17 20.2882 29.7309 20.2704 29.2748C20.2234 27.9891 20.2077 26.703 20.2234 25.4165ZM28.2224 25.4165C30.5123 25.4165 32.8023 25.4165 35.0921 25.4165C35.1079 26.703 35.0921 27.9891 35.0451 29.2748C34.6532 31.8605 33.1632 32.9114 30.575 32.4274C29.1744 31.8371 28.4058 30.7862 28.2694 29.2748C28.2224 27.9891 28.2067 26.703 28.2224 25.4165ZM36.2214 25.4165C38.5427 25.4165 40.8639 25.4165 43.1853 25.4165C43.201 26.703 43.1853 27.9891 43.1382 29.2748C42.8987 31.318 41.7538 32.4159 39.7033 32.5686C37.6529 32.4159 36.508 31.318 36.2685 29.2748C36.2214 27.9891 36.2057 26.703 36.2214 25.4165ZM44.3145 25.4165C46.6044 25.4165 48.8944 25.4165 51.1843 25.4165C51.2 26.703 51.1843 27.9891 51.1372 29.2748C50.7756 31.6763 49.3796 32.7586 46.9495 32.5215C45.3593 32.0283 44.4967 30.9461 44.3616 29.2748C44.3145 27.9891 44.2988 26.703 44.3145 25.4165ZM52.3135 25.4165C54.6034 25.4165 56.8934 25.4165 59.1833 25.4165C59.199 26.703 59.1833 27.9891 59.1362 29.2748C58.7846 31.6963 57.3887 32.7785 54.9485 32.5215C53.3583 32.0283 52.4957 30.9461 52.3606 29.2748C52.3135 27.9891 52.2978 26.703 52.3135 25.4165ZM27.5637 31.6275C27.6574 31.6194 27.7358 31.6508 27.7989 31.7216C28.9766 33.4014 30.592 34.0758 32.6454 33.7449C33.9261 33.4339 34.9299 32.7281 35.6568 31.6275C37.1745 33.665 39.1507 34.2767 41.5855 33.4626C42.4959 33.0693 43.2174 32.4576 43.7499 31.6275C45.2268 33.6829 47.1717 34.2945 49.5845 33.4626C50.4949 33.0693 51.2165 32.4576 51.7489 31.6275C52.7838 33.1487 54.2267 33.8702 56.0778 33.7919C56.0778 43.4849 56.0778 53.1778 56.0778 62.8707C45.1615 62.8707 34.2452 62.8707 23.3289 62.8707C23.3289 53.1778 23.3289 43.4849 23.3289 33.7919C25.1729 33.8895 26.5845 33.168 27.5637 31.6275Z"
              fill="#84969F"
            />
            <path
              d="M26.2462 39.156C26.2462 44.0495 26.2462 48.943 26.2462 53.8365C28.3793 53.8365 30.5123 53.8365 32.6454 53.8365C32.7186 53.005 32.9539 52.2207 33.3512 51.4839C34.8359 49.1815 36.9533 48.2091 39.7033 48.5666C40.6176 48.5575 41.5272 48.6045 42.4324 48.7077C44.9678 49.4975 46.4107 51.2071 46.7613 53.8365M41.7737 49.837C40.6791 49.7177 39.5813 49.6706 38.48 49.6959C35.9269 49.9275 34.4212 51.3077 33.9629 53.8365M21.8232 16.0059C33.7433 15.9902 45.6634 16.0059 57.5835 16.0529C57.6305 16.1 57.6776 16.147 57.7246 16.1941C58.6563 19.0519 59.5503 21.9221 60.4067 24.8048C60.33 26.6056 60.2829 28.4092 60.2655 30.2159C59.8584 31.8776 58.8546 33.0069 57.2541 33.6037C57.2071 43.3593 57.1913 53.115 57.2071 62.8707C58.1173 62.8551 59.027 62.8707 59.9361 62.9178C60.154 63.0397 60.2481 63.2279 60.2185 63.4824C60.2322 63.6738 60.1695 63.8307 60.0302 63.9529C46.479 64.0157 32.9277 64.0157 19.3764 63.9529C19.1903 63.7179 19.1432 63.4512 19.2353 63.153C19.2823 63.0432 19.3607 62.9648 19.4705 62.9178C20.3797 62.8707 21.2894 62.8551 22.1996 62.8707C22.2153 53.115 22.1996 43.3593 22.1526 33.6037C20.5521 33.0069 19.5483 31.8776 19.1412 30.2159C19.1238 28.4092 19.0767 26.6056 19 24.8048C19.7876 22.2853 20.5561 19.7601 21.3056 17.2293C21.4154 16.7886 21.5879 16.3808 21.8232 16.0059ZM22.576 17.1352C33.9942 17.1352 45.4125 17.1352 56.8306 17.1352C57.5014 19.5241 58.1916 21.9082 58.901 24.2872C46.1025 24.2872 33.3041 24.2872 20.5057 24.2872C21.2151 21.9082 21.9052 19.5241 22.576 17.1352ZM20.2234 25.4165C22.5133 25.4165 24.8032 25.4165 27.0931 25.4165C27.1088 26.703 27.0931 27.9891 27.0461 29.2748C26.8785 31.3403 25.7649 32.4381 23.7053 32.5686C22.256 32.5467 21.2052 31.888 20.5528 30.5923C20.3823 30.17 20.2882 29.7309 20.2704 29.2748C20.2234 27.9891 20.2077 26.703 20.2234 25.4165ZM28.2224 25.4165C30.5123 25.4165 32.8023 25.4165 35.0921 25.4165C35.1079 26.703 35.0921 27.9891 35.0451 29.2748C34.6532 31.8605 33.1632 32.9114 30.575 32.4274C29.1744 31.8371 28.4058 30.7862 28.2694 29.2748C28.2224 27.9891 28.2067 26.703 28.2224 25.4165ZM36.2214 25.4165C38.5427 25.4165 40.8639 25.4165 43.1853 25.4165C43.201 26.703 43.1853 27.9891 43.1382 29.2748C42.8987 31.318 41.7538 32.4159 39.7033 32.5686C37.6529 32.4159 36.508 31.318 36.2685 29.2748C36.2214 27.9891 36.2057 26.703 36.2214 25.4165ZM44.3145 25.4165C46.6044 25.4165 48.8944 25.4165 51.1843 25.4165C51.2 26.703 51.1843 27.9891 51.1372 29.2748C50.7756 31.6763 49.3796 32.7586 46.9495 32.5215C45.3593 32.0283 44.4967 30.9461 44.3616 29.2748C44.3145 27.9891 44.2988 26.703 44.3145 25.4165ZM52.3135 25.4165C54.6034 25.4165 56.8934 25.4165 59.1833 25.4165C59.199 26.703 59.1833 27.9891 59.1362 29.2748C58.7846 31.6963 57.3887 32.7785 54.9485 32.5215C53.3583 32.0283 52.4957 30.9461 52.3606 29.2748C52.3135 27.9891 52.2978 26.703 52.3135 25.4165ZM27.5637 31.6275C27.6574 31.6194 27.7358 31.6508 27.7989 31.7216C28.9766 33.4014 30.592 34.0758 32.6454 33.7449C33.9261 33.4339 34.9299 32.7281 35.6568 31.6275C37.1745 33.665 39.1507 34.2767 41.5855 33.4626C42.4959 33.0693 43.2174 32.4576 43.7499 31.6275C45.2268 33.6829 47.1717 34.2945 49.5845 33.4626C50.4949 33.0693 51.2165 32.4576 51.7489 31.6275C52.7838 33.1487 54.2267 33.8702 56.0778 33.7919C56.0778 43.4849 56.0778 53.1778 56.0778 62.8707C45.1615 62.8707 34.2452 62.8707 23.3289 62.8707C23.3289 53.1778 23.3289 43.4849 23.3289 33.7919C25.1729 33.8895 26.5845 33.168 27.5637 31.6275Z"
              stroke="#84969F"
            />
          </g>
          <path
            opacity="0.933"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4694 20.0524C35.6253 20.0367 43.7812 20.0524 51.937 20.0994C52.1549 20.2214 52.249 20.4096 52.2193 20.6641C52.2331 20.8555 52.1704 21.0124 52.0311 21.1346C51.7488 21.166 51.4665 21.1974 51.1842 21.2287C43.342 21.2915 35.4998 21.2915 27.6576 21.2287C27.2137 21.0924 27.0725 20.7944 27.2342 20.3347C27.3325 20.2525 27.4109 20.1584 27.4694 20.0524Z"
            fill="#84969F"
            stroke="#84969F"
          />
          <path
            opacity="0.984"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3993 38.0267C34.9705 37.9955 44.538 38.0268 54.1016 38.1208C54.1668 38.1702 54.2138 38.2329 54.2428 38.309C54.3208 43.8023 54.3051 49.2918 54.1957 54.7775C54.1463 54.8427 54.0836 54.8897 54.0075 54.9187C44.4363 54.9969 34.8689 54.9812 25.3052 54.8716C25.2401 54.8222 25.193 54.7595 25.164 54.6834C25.1013 49.2253 25.1013 43.7671 25.164 38.309C25.2297 38.1969 25.3081 38.1028 25.3993 38.0267ZM26.2462 39.1559C26.2462 44.0494 26.2462 48.943 26.2462 53.8365C28.3793 53.8365 30.5124 53.8365 32.6455 53.8365C32.7187 53.005 32.9539 52.2207 33.3512 51.4838C34.836 49.1814 36.9533 48.209 39.7034 48.5665C40.6176 48.5574 41.5273 48.6045 42.4325 48.7077C44.9679 49.4974 46.4108 51.2071 46.7614 53.8365C48.8945 53.8365 51.0275 53.8365 53.1606 53.8365C53.1606 48.943 53.1606 44.0494 53.1606 39.1559C44.1892 39.1559 35.2177 39.1559 26.2462 39.1559ZM39.0447 42.1673C38.4682 42.3819 38.0134 42.7583 37.6801 43.2966C37.1274 44.5992 37.4255 45.6501 38.5741 46.4492C40.1358 47.0585 41.2495 46.6036 41.9149 45.0846C42.0854 43.0123 41.1287 42.0398 39.0447 42.1673ZM38.48 49.6958C35.9269 49.9275 34.4212 51.3077 33.9629 53.8365C37.7899 53.8365 41.6169 53.8365 45.4439 53.8365C45.1229 51.6802 43.8995 50.347 41.7737 49.837C40.6792 49.7176 39.5814 49.6706 38.48 49.6958Z"
            fill="#84969F"
            stroke="#84969F"
          />
          <g opacity="0.91">
            <path
              d="M43.1381 43.579C42.4217 41.563 40.9944 40.6846 38.8563 40.944C36.8454 41.6873 35.9828 43.1304 36.2684 45.2729C36.9831 47.3037 38.4104 48.1664 40.5502 47.8608C42.581 47.1461 43.4437 45.7188 43.1381 43.579Z"
              fill="#84969F"
            />
            <path
              d="M39.0445 42.1674C38.468 42.3819 38.0132 42.7584 37.68 43.2967M38.8563 40.944C40.9944 40.6846 42.4217 41.563 43.1381 43.579C43.4437 45.7188 42.581 47.1461 40.5502 47.8608C38.4104 48.1664 36.9831 47.3037 36.2684 45.2729C35.9828 43.1304 36.8454 41.6873 38.8563 40.944Z"
              stroke="#84969F"
            />
          </g>
        </svg>
      ),
      heading: "I'm a seller",
      subHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
    }
  ];

  return (
    <React.Fragment>
      <Grid container className="gs-container" spacing={0}>
        <Grid className="gs-content-center" pl={10} xs={4}>
          <BackCremp />
          <Grid className="gs-content-center">
            <PageHeading
              heading="Get Started"
              subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             "
            />
            <Grid className="gs-cards-container">
              {cardContent.map((item) => {
                return <CardContainer key={item.heading} {...item} />;
              })}
            </Grid>
            {/* <Button className="black camelCase">Continue</Button> */}
            <Grid
              className="justifyCenter"
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Button className="black camelCase">
                Already Have an Account?
              </Button>
              <Button className="black camelCase underLine">Log In</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <FullScreenImage source={GetStartedImage} alt="Get Started" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}