import { FC, memo } from "react";
import style from "./StoreCartPlaceholderClosed.module.scss";

const alt = "store closed icon";

const StoreCartPlaceholderClosed: FC = memo(({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="120"
      viewBox="0 0 188 120"
      //
      className={style["store-cart-placeholder-closed"]}
    >
      <g fill="none" fill-rule="evenodd" opacity=".3">
        <path
          fill="#E5E5E5"
          d="M24.48 54.004H11.808c-.96 0-1.824-.745-1.824-1.77V47.86c0-.932.768-1.77 1.824-1.77H24.48c.96 0 1.824.745 1.824 1.77v4.376c0 .93-.864 1.769-1.824 1.769zM34.272 64.153H21.6c-.96 0-1.824-.745-1.824-1.77v-4.376c0-.93.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.376c-.096 1.024-.864 1.769-1.824 1.769zM24.48 74.395H11.808c-.96 0-1.824-.745-1.824-1.77V68.25c0-.932.768-1.77 1.824-1.77H24.48c.96 0 1.824.745 1.824 1.77v4.376c0 1.024-.864 1.769-1.824 1.769zM14.976 84.637H2.304c-.96 0-1.824-.745-1.824-1.77v-4.375c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.745 1.824 1.77v4.376c-.096 1.024-.864 1.769-1.824 1.769zM34.272 84.637H21.6c-.96 0-1.824-.745-1.824-1.77v-4.375c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.745 1.824 1.77v4.376c-.096 1.024-.864 1.769-1.824 1.769zM24.48 94.879H11.808c-.96 0-1.824-.745-1.824-1.77v-4.375c0-.931.768-1.77 1.824-1.77H24.48c.96 0 1.824.746 1.824 1.77v4.376c0 1.024-.864 1.769-1.824 1.769zM34.272 105.121H21.6c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c-.096 1.024-.864 1.77-1.824 1.77zM24.48 12.756H11.808c-.96 0-1.824-.745-1.824-1.769V6.611c0-.931.768-1.77 1.824-1.77H24.48c.96 0 1.824.746 1.824 1.77v4.376c0 1.024-.864 1.77-1.824 1.77zM14.976 22.998H2.304c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c-.096 1.024-.864 1.77-1.824 1.77zM34.272 22.998H21.6c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376C36 22.253 35.232 23 34.272 23zM175.488 12.756h-12.672c-.96 0-1.824-.745-1.824-1.769V6.611c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c0 1.024-.864 1.77-1.824 1.77zM165.984 22.998h-12.672c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c0 1.024-.864 1.77-1.824 1.77zM175.488 33.52h-12.672c-.96 0-1.824-.745-1.824-1.77v-4.376c0-.93.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.375c0 .932-.864 1.77-1.824 1.77zM165.984 43.669h-12.672c-.96 0-1.824-.745-1.824-1.77v-4.376c0-.93.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.375c0 1.025-.864 1.77-1.824 1.77zM175.488 54.19h-12.672c-.96 0-1.824-.745-1.824-1.77v-4.375c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c0 .931-.864 1.769-1.824 1.769zM165.984 64.432h-12.672c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c0 .931-.864 1.77-1.824 1.77zM185.28 64.432h-12.672c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.746 1.824 1.77v4.376c0 .931-.864 1.77-1.824 1.77zM175.488 74.86h-12.672c-.96 0-1.824-.744-1.824-1.769v-4.376c0-.931.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.375c0 .931-.864 1.77-1.824 1.77zM165.984 85.102h-12.672c-.96 0-1.824-.744-1.824-1.769v-4.376c0-.93.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.375c0 .932-.864 1.77-1.824 1.77zM175.488 95.53h-12.672c-.96 0-1.824-.744-1.824-1.768v-4.376c0-.932.768-1.77 1.824-1.77h12.672c.96 0 1.824.745 1.824 1.77v4.376c0 .93-.864 1.769-1.824 1.769zM165.984 105.773h-12.672c-.96 0-1.824-.745-1.824-1.77v-4.375c0-.931.768-1.77 1.824-1.77h12.672c.96 0 1.824.745 1.824 1.77v4.376c0 .93-.864 1.769-1.824 1.769zM24.48 33.24H11.808c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.77 1.824-1.77H24.48c.96 0 1.824.746 1.824 1.77v4.376c0 1.024-.864 1.77-1.824 1.77zM34.272 43.482H21.6c-.96 0-1.824-.745-1.824-1.769v-4.376c0-.931.768-1.769 1.824-1.769h12.672c.96 0 1.824.745 1.824 1.77v4.375c-.096 1.024-.864 1.77-1.824 1.77z"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 17.039L153.408 17.039 153.408 26.443 32.928 26.443z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 17.039L153.408 17.039 153.408 26.443 32.928 26.443z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 25.233L34.176 18.436 151.968 18.436"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 26.443L153.408 26.443 153.408 35.847 32.928 35.847z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 26.443L153.408 26.443 153.408 35.847 32.928 35.847z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 34.637L34.176 27.747 151.968 27.747"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 35.847L153.408 35.847 153.408 45.251 32.928 45.251z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 35.847L153.408 35.847 153.408 45.251 32.928 45.251z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 44.041L34.176 37.151 151.968 37.151"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 45.251L153.408 45.251 153.408 54.656 32.928 54.656z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 45.251L153.408 45.251 153.408 54.656 32.928 54.656z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 53.445L34.176 46.555 151.968 46.555"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 54.562L153.408 54.562 153.408 63.967 32.928 63.967z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 54.562L153.408 54.562 153.408 63.967 32.928 63.967z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 62.849L34.176 55.959 151.968 55.959"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 63.967L153.408 63.967 153.408 73.371 32.928 73.371z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 63.967L153.408 63.967 153.408 73.371 32.928 73.371z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 72.253L34.176 65.363 151.968 65.363"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 73.371L153.408 73.371 153.408 82.775 32.928 82.775z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 73.371L153.408 73.371 153.408 82.775 32.928 82.775z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 81.657L34.176 74.767 151.968 74.767"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 82.775L153.408 82.775 153.408 92.179 32.928 92.179z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 82.775L153.408 82.775 153.408 92.179 32.928 92.179z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 91.062L34.176 84.171 151.968 84.171"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 92.179L153.408 92.179 153.408 101.583 32.928 101.583z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 92.179L153.408 92.179 153.408 101.583 32.928 101.583z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 100.466L34.176 93.575 151.968 93.575"
          transform="translate(0 2.816)"
        />
        <path
          fill="#D1D1CD"
          d="M32.928 101.583L153.408 101.583 153.408 110.987 32.928 110.987z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M32.928 101.583L153.408 101.583 153.408 110.987 32.928 110.987z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M34.176 109.777L34.176 102.98 151.968 102.98"
          transform="translate(0 2.816)"
        />
        <path
          fill="#A3A3A3"
          d="M25.632 12.57L32.928 12.57 32.928 112.756 25.632 112.756z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M25.632 12.57L32.928 12.57 32.928 112.756 25.632 112.756z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M26.592 111.825L26.592 13.501 31.968 13.501"
          transform="translate(0 2.816)"
        />
        <path
          fill="#A3A3A3"
          d="M152.352 12.57L159.648 12.57 159.648 112.756 152.352 112.756z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M152.352 12.57L159.648 12.57 159.648 112.756 152.352 112.756z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M153.312 111.825L153.312 13.501 158.688 13.501"
          transform="translate(0 2.816)"
        />
        <path
          fill="#A3A3A3"
          d="M103.968 115.736H82.176c-1.44 0-2.592-1.118-2.592-2.514v-4.563c0-1.396 1.152-2.514 2.592-2.514h21.792c1.44 0 2.592 1.118 2.592 2.514v4.563c0 1.396-1.152 2.514-2.592 2.514z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M103.968 115.736H82.176c-1.44 0-2.592-1.118-2.592-2.514v-4.563c0-1.396 1.152-2.514 2.592-2.514h21.792c1.44 0 2.592 1.118 2.592 2.514v4.563c0 1.396-1.152 2.514-2.592 2.514z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M82.272 114.805c-.864 0-1.632-.745-1.632-1.583v-4.563c0-.838.768-1.583 1.632-1.583h21.792c.864 0 1.632.745 1.632 1.583"
          transform="translate(0 2.816)"
        />
        <path
          fill="#A3A3A3"
          d="M159.168.372c5.088 0 5.088 3.073 5.088 6.332l-.192 7.914c-.768 1.49-2.304 2.421-4.032 2.421H26.304c-1.728 0-3.264-.931-4.032-2.42l-.192-7.915c0-3.259 0-6.332 5.088-6.332h132z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#565655"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.44"
          d="M159.168.372c5.088 0 5.088 3.073 5.088 6.332l-.192 7.914c-.768 1.49-2.304 2.421-4.032 2.421H26.304c-1.728 0-3.264-.931-4.032-2.42l-.192-7.915c0-3.259 0-6.332 5.088-6.332h132z"
          transform="translate(0 2.816)"
        />
        <path
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".96"
          d="M26.304 14.898c-.768 0-1.44-.373-1.824-.932l-.192-7.355c0-3.631.192-4.097 2.88-4.097h132"
          transform="translate(0 2.816)"
        />
      </g>
      <title>{alt}</title>
    </svg>
  );
});
export default StoreCartPlaceholderClosed;
