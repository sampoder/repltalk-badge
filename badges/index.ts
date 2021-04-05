export const LIGHT = `
  <svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css">
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/ibm_plex_sans.woff2');
      }
    </style>
  </defs>
    <g fill="none" fill-rule="evenodd">
      <rect stroke="#FF6600" stroke-width="2" fill="#FFFFFF" x="1" y="1" width="{SHORT_WIDTH}" height="65" rx="8"/>
      <rect fill="#FF6600" x="14" y="14" width="40" height="40" rx="3"/>
      <path d="M32.684 37.277L26 24h3.055l3.932 8.402c.06.15.13.305.211.465.081.16.152.326.212.497.04.065.07.123.09.177.021.053.041.101.061.144.101.214.192.422.273.625.08.204.15.39.211.562.162-.364.338-.754.53-1.17.191-.418.388-.85.59-1.3L39.156 24H42l-6.745 13.437V46h-2.57v-8.723z" fill="#FFFFFF" fill-rule="nonzero"/>
      <text font-family="{FONT}" font-size="25" font-weight="bold" fill="#FF6600">
        <tspan x="66" y="51">{REPL_TALK}</tspan>
      </text>
      <text font-family="{FONT}" font-size="18" font-weight="bold" fill="#FF6600">
        <tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan>
      </text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#FF6600">
        <tspan x="{TRIANGLE_POS}" y="30">▲</tspan>
      </text>
      <text font-family="{FONT}" font-size="12" font-weight="bold" fill="#FF6600">
        <tspan x="66" y="26">{FEATURED_ON}</tspan>
      </text>
    </g>
  </svg>
`;

export const DARK = `<svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#331400" width="{WIDTH}" height="67" rx="8"/><rect fill="#FF6600" x="14" y="14" width="40" height="40" rx="3"/><path d="M32.684 37.277L26 24h3.055l3.932 8.402c.06.15.13.305.211.465.081.16.152.326.212.497.04.065.07.123.09.177.021.053.041.101.061.144.101.214.192.422.273.625.08.204.15.39.211.562.162-.364.338-.754.53-1.17.191-.418.388-.85.59-1.3L39.156 24H42l-6.745 13.437V46h-2.57v-8.723z" fill="#FFFFFF" fill-rule="nonzero"/><text font-family="{FONT}" font-size="25" font-weight="bold" fill="#FFFFFF"><tspan x="66" y="51">{REPL_TALK}</tspan></text><text font-family="{FONT}" font-size="18" font-weight="bold" fill="#FFFFFF"><tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan></text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#FFFFFF"><tspan x="{TRIANGLE_POS}" y="30">▲</tspan></text><text font-family="{FONT}" font-size="12" font-weight="bold" fill="#FFFFFF"><tspan x="66" y="26">{FEATURED_ON}</tspan></text></g></svg>`;
