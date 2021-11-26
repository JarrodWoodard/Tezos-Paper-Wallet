// Copyright 2021 Mitchell Riedstra
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.
window.onload = function() {
	MakeWallet();
}

function GenKeys() {
	var mnemonic = cryptoUtils.utils.generateMnemonic(15);
	var seed = cryptoUtils.utils.mnemonicToSeed(mnemonic);
	var keyPair = cryptoUtils.utils.seedToKeyPair(seed);
	console.log(keyPair);

	return {
		pkh: keyPair.pkh,
		mnemonic: mnemonic,
	};
}

function MakeWallet() {
	MakeWalletForSelector("#wallet-container")
	MakeWalletForSelector("#wallet-container2")
	MakeWalletForSelector("#wallet-container3")
}

function MakeWalletForSelector(sel) {
	var keys = GenKeys();

	var tezosAddress = keys.pkh;

	var seedPhrase = keys.mnemonic.split(" ");

	var pubkeyQR = new QRious({
		value: tezosAddress,
		size: 150,
	}).toDataURL()

	seedPhraseQR = new QRious({
		value: keys.mnemonic,
		size: 150,
	}).toDataURL()

	el = document.querySelector(sel)

	el.innerHTML = renderWallet(tezosAddress, seedPhrase, pubkeyQR);
}

function renderWallet(tezosAddress, seedPhrase, pubkeyQR) {
	var websiteQR = new QRious({
		value: "https://cryptowallet.so",
		size: 150,
	}).toDataURL();
	return `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 840 198"
   fill="none"
   version="1.1"
   id="svg3288"
   sodipodi:docname="betaxtzwallettemplatev2.svg"
   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
  <metadata
     id="metadata4263">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     id="namedview3290"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     inkscape:snap-bbox="true"
     inkscape:bbox-paths="true"
     inkscape:snap-bbox-edge-midpoints="true"
     inkscape:snap-bbox-midpoints="false"
     inkscape:bbox-nodes="false"
     inkscape:object-paths="true"
     inkscape:snap-intersection-paths="true"
     inkscape:snap-midpoints="true"
     inkscape:snap-smooth-nodes="true"
     inkscape:snap-object-midpoints="true"
     inkscape:snap-center="true"
     inkscape:snap-text-baseline="true"
     inkscape:zoom="2"
     inkscape:cx="412.25"
     inkscape:cy="99"
     inkscape:window-width="2560"
     inkscape:window-height="1375"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg3288"
     inkscape:snap-others="false"
     inkscape:snap-nodes="false"
     inkscape:snap-global="true" />
  <rect
     x="0.5"
     y="0.5"
     width="839"
     height="197"
     fill="#ffffff"
     stroke="#000000"
     id="rect3197"
     sodipodi:insensitive="true" />
  <rect
     x="6.5"
     y="8.5"
     width="822.99969"
     height="181"
     fill="#ffffff"
     stroke="#000000"
     id="rect3199"
     sodipodi:insensitive="true" />
  <image
     x="29"
     y="45"
     width="74"
     height="75"
     xlink:href="${pubkeyQR}"
     id="rect3235" />
  <image
     x="198"
     y="146"
     width="20"
     height="20"
     xlink:href="${websiteQR}"
     id="rect3237"
     style="fill:url(#pattern224769)" />
  <image
     x="470.73935"
     y="63.5"
     width="74"
     height="75"
     xlink:href="${seedPhraseQR}"
     id="rect3241" />
  <path
     d="M197.975 119.89C196.829 99.5051 171.334 90.2393 168.894 89.2876C168.795 89.2375 168.795 89.1374 168.845 89.0372L195.136 62.4918V59.637C195.136 59.1862 194.738 58.7855 194.29 58.7855H145.839V42.8082V38L127.963 41.7564V44.461H128.959C128.959 44.461 133.341 44.461 133.341 48.8686V58.7354H119.498C119.249 58.7354 119 58.9859 119 59.2363V65.497H133.391C133.391 65.497 133.391 72.1584 133.391 79.9216V99.5051C133.391 110.173 140.213 117.586 152.163 116.584C154.703 116.384 157.043 115.382 159.035 114.08C159.931 113.479 160.479 112.527 160.479 111.425V108.07C156.595 110.674 153.309 110.524 153.309 110.524C145.74 110.524 145.889 100.857 145.889 100.857V65.497H180.746L155.649 90.9405C155.599 94.2962 155.549 96.9006 155.549 96.9507C155.549 97.0509 155.599 97.101 155.699 97.101C178.704 101.008 184.928 115.983 184.928 120.341C184.928 120.341 187.418 141.527 166.355 142.979C166.355 142.979 152.562 143.58 150.122 138.021C150.022 137.821 150.122 137.62 150.321 137.52C152.612 136.468 154.155 134.415 154.155 131.66C154.155 127.553 151.665 124.197 146.437 124.197C142.204 124.197 138.719 127.553 138.719 131.66C138.719 131.66 136.727 149.491 166.305 148.99C200.066 148.389 197.975 119.89 197.975 119.89Z"
     fill="#0D61FF"
     id="path3243" />
  <path
     d="M268.995 26.0172C268.793 22.5279 264.274 20.9419 263.842 20.779C263.824 20.7704 263.824 20.7532 263.833 20.7361L268.493 16.1923V15.7036C268.493 15.6265 268.422 15.5579 268.342 15.5579H259.756V12.823V12L256.588 12.643V13.1059H256.765C256.765 13.1059 257.541 13.1059 257.541 13.8604V15.5493H255.088C255.044 15.5493 255 15.5922 255 15.635V16.7067H257.55C257.55 16.7067 257.55 17.8469 257.55 19.1758V22.5279C257.55 24.354 258.759 25.6228 260.877 25.4514C261.327 25.4171 261.742 25.2456 262.095 25.0227C262.254 24.9198 262.351 24.7569 262.351 24.5683V23.9939C261.662 24.4397 261.08 24.414 261.08 24.414C259.739 24.414 259.765 22.7594 259.765 22.7594V16.7067H265.942L261.495 21.0619C261.486 21.6363 261.477 22.0821 261.477 22.0907C261.477 22.1078 261.486 22.1164 261.504 22.1164C265.58 22.7851 266.684 25.3485 266.684 26.0944C266.684 26.0944 267.125 29.7208 263.392 29.9694C263.392 29.9694 260.948 30.0723 260.515 29.1207C260.498 29.0864 260.515 29.0521 260.551 29.035C260.956 28.8549 261.23 28.5034 261.23 28.0319C261.23 27.3289 260.789 26.7545 259.862 26.7545C259.112 26.7545 258.494 27.3289 258.494 28.0319C258.494 28.0319 258.141 31.084 263.383 30.9982C269.366 30.8953 268.995 26.0172 268.995 26.0172Z"
     fill="#0D61FF"
     id="path3245" />
  <path
     d="M268.995 180.017C268.793 176.528 264.274 174.942 263.842 174.779C263.824 174.77 263.824 174.753 263.833 174.736L268.493 170.192V169.704C268.493 169.626 268.422 169.558 268.342 169.558H259.756V166.823V166L256.588 166.643V167.106H256.765C256.765 167.106 257.541 167.106 257.541 167.86V169.549H255.088C255.044 169.549 255 169.592 255 169.635V170.707H257.55C257.55 170.707 257.55 171.847 257.55 173.176V176.528C257.55 178.354 258.759 179.623 260.877 179.451C261.327 179.417 261.742 179.246 262.095 179.023C262.254 178.92 262.351 178.757 262.351 178.568V177.994C261.662 178.44 261.08 178.414 261.08 178.414C259.739 178.414 259.765 176.759 259.765 176.759V170.707H265.942L261.495 175.062C261.486 175.636 261.477 176.082 261.477 176.091C261.477 176.108 261.486 176.116 261.504 176.116C265.58 176.785 266.684 179.348 266.684 180.094C266.684 180.094 267.125 183.721 263.392 183.969C263.392 183.969 260.948 184.072 260.515 183.121C260.498 183.086 260.515 183.052 260.551 183.035C260.956 182.855 261.23 182.503 261.23 182.032C261.23 181.329 260.789 180.754 259.862 180.754C259.112 180.754 258.494 181.329 258.494 182.032C258.494 182.032 258.141 185.084 263.383 184.998C269.366 184.895 268.995 180.017 268.995 180.017Z"
     fill="#0D61FF"
     id="path3247" />
  <path
     d="M25.9955 180.017C25.7925 176.528 21.2744 174.942 20.842 174.779C20.8244 174.77 20.8244 174.753 20.8332 174.736L25.4925 170.192V169.704C25.4925 169.626 25.4219 169.558 25.3425 169.558H16.7564V166.823V166L13.5884 166.643V167.106H13.7649C13.7649 167.106 14.5414 167.106 14.5414 167.86V169.549H12.0882C12.0441 169.549 12 169.592 12 169.635V170.707H14.5503C14.5503 170.707 14.5503 171.847 14.5503 173.176V176.528C14.5503 178.354 15.7592 179.623 17.877 179.451C18.3271 179.417 18.7418 179.246 19.0948 179.023C19.2537 178.92 19.3507 178.757 19.3507 178.568V177.994C18.6624 178.44 18.08 178.414 18.08 178.414C16.7387 178.414 16.7652 176.759 16.7652 176.759V170.707H22.9423L18.4948 175.062C18.4859 175.636 18.4771 176.082 18.4771 176.091C18.4771 176.108 18.4859 176.116 18.5036 176.116C22.5805 176.785 23.6835 179.348 23.6835 180.094C23.6835 180.094 24.1247 183.721 20.392 183.969C20.392 183.969 17.9476 184.072 17.5152 183.121C17.4976 183.086 17.5152 183.052 17.5505 183.035C17.9565 182.855 18.23 182.503 18.23 182.032C18.23 181.329 17.7888 180.754 16.8622 180.754C16.1122 180.754 15.4945 181.329 15.4945 182.032C15.4945 182.032 15.1415 185.084 20.3832 184.998C26.3661 184.895 25.9955 180.017 25.9955 180.017Z"
     fill="#0D61FF"
     id="path3249" />
  <path
     d="M25.9955 26.0172C25.7925 22.5279 21.2744 20.9419 20.842 20.779C20.8244 20.7704 20.8244 20.7532 20.8332 20.7361L25.4925 16.1923V15.7036C25.4925 15.6265 25.4219 15.5579 25.3425 15.5579H16.7564V12.823V12L13.5884 12.643V13.1059H13.7649C13.7649 13.1059 14.5414 13.1059 14.5414 13.8604V15.5493H12.0882C12.0441 15.5493 12 15.5922 12 15.635V16.7067H14.5503C14.5503 16.7067 14.5503 17.8469 14.5503 19.1758V22.5279C14.5503 24.354 15.7592 25.6228 17.877 25.4514C18.3271 25.4171 18.7418 25.2456 19.0948 25.0227C19.2537 24.9198 19.3507 24.7569 19.3507 24.5683V23.9939C18.6624 24.4397 18.08 24.414 18.08 24.414C16.7387 24.414 16.7652 22.7594 16.7652 22.7594V16.7067H22.9423L18.4948 21.0619C18.4859 21.6363 18.4771 22.0821 18.4771 22.0907C18.4771 22.1078 18.4859 22.1164 18.5036 22.1164C22.5805 22.7851 23.6835 25.3485 23.6835 26.0944C23.6835 26.0944 24.1247 29.7208 20.392 29.9694C20.392 29.9694 17.9476 30.0723 17.5152 29.1207C17.4976 29.0864 17.5152 29.0521 17.5505 29.035C17.9565 28.8549 18.23 28.5034 18.23 28.0319C18.23 27.3289 17.7888 26.7545 16.8622 26.7545C16.1122 26.7545 15.4945 27.3289 15.4945 28.0319C15.4945 28.0319 15.1415 31.084 20.3832 30.9982C26.3661 30.8953 25.9955 26.0172 25.9955 26.0172Z"
     fill="#0D61FF"
     id="path3251" />
  <path
     d="M556 16.5V8"
     stroke="black"
     id="path3253" />
  <path
     d="M556 189.5V181"
     stroke="black"
     id="path3255" />
  <path
     d="M273 16.5V8"
     stroke="black"
     id="path3257" />
  <path
     d="M273 189.5V181"
     stroke="black"
     id="path3259" />
  <defs
     id="defs3286">
    <rect
       x="476.5"
       y="253"
       width="139.5"
       height="52.5"
       id="rect56909" />
    <pattern
       inkscape:collect="always"
       xlink:href="#pattern1"
       id="pattern224769"
       patternTransform="translate(4,-4)" />
    <pattern
       id="pattern0"
       patternContentUnits="objectBoundingBox"
       width="1"
       height="1">
      <use
         xlink:href="#image0_32:77"
         transform="scale(0.00671201)"
         id="use3273" />
    </pattern>
    <pattern
       id="pattern1"
       patternContentUnits="objectBoundingBox"
       width="1"
       height="1">
      <use
         xlink:href="#image0_32:77"
         transform="translate(0 -0.00671141) scale(0.00671141)"
         id="use3276" />
    </pattern>
    <pattern
       id="pattern2"
       patternContentUnits="objectBoundingBox"
       width="1"
       height="1">
      <use
         xlink:href="#image0_32:77"
         transform="scale(0.00671201)"
         id="use3279" />
    </pattern>
    <pattern
       id="pattern3"
       patternContentUnits="objectBoundingBox"
       width="1"
       height="1">
      <use
         xlink:href="#image0_32:77"
         transform="scale(0.00671201)"
         id="use3282" />
    </pattern>
    <image
       id="image0_32:77"
       width="149"
       height="151"
       xlink:href="data:image/png;base64,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" />
  </defs>
  <text
     xml:space="preserve"
     style="font-size:16px;line-height:1.25;font-family:sans-serif"
     x="57.560242"
     y="-39.8494"
     id="text5881"><tspan
       sodipodi:role="line"
       id="tspan5879"
       x="57.560242"
       y="-39.8494">Fo</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:16px;line-height:1.25;font-family:sans-serif"
     x="72.108437"
     y="-44.277107"
     id="text10772"><tspan
       sodipodi:role="line"
       id="tspan10770"
       x="72.108437"
       y="-44.277107">For</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:5.33333px;line-height:1.25;font-family:sans-serif;fill:#0d61ff;fill-opacity:1"
     x="46.054214"
     y="20.873491"
     id="text24185"><tspan
       sodipodi:role="line"
       id="tspan24183"
       x="46.054214"
       y="20.873491"
       style="font-size:5.33333px">For promotion / onboarding only - move funds - do not reuse wallet </tspan></text>
  <text
     xml:space="preserve"
     style="font-size:10.6667px;line-height:1.25;font-family:sans-serif;fill:#0d61ff;fill-opacity:1"
     x="52.717834"
     y="181.05902"
     id="text24185-3"><tspan
       sodipodi:role="line"
       id="tspan24183-4"
       x="52"
       y="181.05902"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Roboto, monospace, monospace;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal"><tspan
         id="tspan240861"
         style="font-size:9.33333px">${tezosAddress}</tspan></tspan></text>
  <text
     xml:space="preserve"
     style="font-weight:bold;font-size:9.33333px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:'Roboto, Bold';stroke:#000000;stroke-opacity:1"
     x="26.605495"
     y="38.508465"
     id="text25212"><tspan
       sodipodi:role="line"
       id="tspan25210"
       x="26.605495"
       y="38.508465"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:9.33333px;font-family:Roboto;-inkscape-font-specification:Roboto;fill:#000000;fill-opacity:1;stroke:none">Public Key QR code:</tspan></text>
  <text
     xml:space="preserve"
     style="font-weight:bold;font-size:9.33333015px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:'Roboto, Bold';text-align:center;text-anchor:middle;stroke:#000000;stroke-opacity:1"
     x="507.72568"
     y="44.212242"
     id="text25212-1"><tspan
       sodipodi:role="line"
       id="tspan25210-8"
       x="507.72568"
       y="44.212242"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:9.33333015px;font-family:Roboto;-inkscape-font-specification:Roboto;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none">Seed phrase</tspan><tspan
       sodipodi:role="line"
       x="507.72568"
       y="55.878906"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:9.33333015px;font-family:Roboto;-inkscape-font-specification:Roboto;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
       id="tspan5287"> QR code:</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:Roboto;fill:#000000;fill-opacity:1"
     x="577.02686"
     y="26.109406"
     id="text42880"><tspan
       sodipodi:role="line"
       id="tspan42878"
       x="577.02686"
       y="26.109406"><tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan80844">Private Key</tspan> in the form of a 15 word seed phrase</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:10.66670036px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:'Roboto Medium';text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1"
     x="693.25708"
     y="167.56245"
     id="text46272"><tspan
       sodipodi:role="line"
       id="tspan46270"
       x="693.25708"
       y="167.56245"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto">For security only get your wallet links from <tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:'Roboto Bold';fill:#0d61ff;fill-opacity:1"
   id="tspan166228">Tezos.com</tspan></tspan><tspan
       sodipodi:role="line"
       x="694.64374"
       y="180.89583"
       id="tspan64706"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:Roboto">we recommend the Kukai wallet </tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="63.310547"
     y="134"
     id="text88302"><tspan
       sodipodi:role="line"
       id="tspan88300"
       x="63.310547"
       y="134"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto">Balance:</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="99.165039"
     y="-811.91766"
     id="text138422"
     transform="rotate(90)"><tspan
       sodipodi:role="line"
       id="tspan138420"
       x="99.165039"
       y="-811.91766">How to plus info about </tspan><tspan
       sodipodi:role="line"
       x="99.165039"
       y="-801.91766"
       id="tspan17081">privacy and security at:</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="140.41129"
     y="165.35196"
     id="text141228"><tspan
       sodipodi:role="line"
       id="tspan141226"
       x="140.41129"
       y="165.35196">Directions at:<tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan142886"> volxtz.com</tspan></tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="99.001953"
     y="-788.21063"
     id="text141228-4"
     transform="rotate(90)"><tspan
       sodipodi:role="line"
       id="tspan141226-0"
       x="99.001953"
       y="-788.21063"
       style="-inkscape-font-specification:'Roboto Bold';font-family:Roboto;font-weight:bold;font-style:normal;font-stretch:normal;font-variant:normal">volxtz.com</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.33333015px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east_asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="503.74716"
     y="152.55469"
     id="text155330"><tspan
       sodipodi:role="line"
       id="tspan155328"
       x="504.44049"
       y="152.55469"
       style="font-size:5.33333015px">Think of private keys and seed </tspan><tspan
       sodipodi:role="line"
       x="503.74716"
       y="159.22134"
       id="tspan156806"
       style="font-size:5.33333015px">phrases as being the keys to a safe</tspan><tspan
       sodipodi:role="line"
       x="503.74716"
       y="165.88802"
       id="tspan156808"
       style="font-size:5.33333015px" /><tspan
       sodipodi:role="line"
       x="503.74716"
       y="172.55467"
       id="tspan156810"
       style="font-size:5.33333015px">Whoever has either can take what is</tspan><tspan
       sodipodi:role="line"
       x="503.74716"
       y="179.22134"
       id="tspan156814"
       style="font-size:5.33333015px">in that safe, from anywhere in the world</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="-96.246063"
     y="220.91862"
     id="text185760"
     transform="rotate(-90)"><tspan
       sodipodi:role="line"
       id="tspan185758"
       x="-96.246063"
       y="220.91862"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'">Attention:</tspan><tspan
       sodipodi:role="line"
       x="-96.246063"
       y="229.25197"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:Roboto"
       id="tspan191080">Anyone with the <tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan203188">private</tspan> <tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan204864">key</tspan></tspan><tspan
       sodipodi:role="line"
       x="-96.246063"
       y="237.5853"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:Roboto"
       id="tspan191962">can <tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan200450">take</tspan> the funds in this <tspan
   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold'"
   id="tspan210560">wallet</tspan></tspan><tspan
       sodipodi:role="line"
       x="-96.246063"
       y="245.91864"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.66667px;font-family:Roboto;-inkscape-font-specification:Roboto"
       id="tspan191964">unfolding the paper will expose the private key</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:5.33333px;font-family:Roboto;-inkscape-font-specification:'Roboto Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
     x="33.279087"
     y="174.78032"
     id="text246775"><tspan
       sodipodi:role="line"
       id="tspan246773"
       x="39.279087"
       y="174.78032"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.33333px;font-family:Roboto;-inkscape-font-specification:Roboto;fill:#0d61ff;fill-opacity:1">Tezos</tspan><tspan
       sodipodi:role="line"
       x="39.279087"
       y="181.44698"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.33333px;font-family:Roboto;-inkscape-font-specification:Roboto;fill:#0d61ff;fill-opacity:1"
       id="tspan266567">Address:</tspan></text>
  <g
     id="g1355"
     transform="translate(24)">
    <rect
       x="575.43719"
       y="37.976612"
       width="176.54677"
       height="114.54678"
       stroke="#000000"
       id="rect3271"
       style="stroke-width:0.95323" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.33333px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="582.73773"
       y="56.38855"
       id="text274589"><tspan
         sodipodi:role="line"
         id="tspan274587"
         x="582.73773"
         y="56.38855">1</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="63.055214"
         id="tspan280013" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="69.721878"
         id="tspan280015">2</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="76.388535"
         id="tspan280017" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="83.055199"
         id="tspan280019">3</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="89.721863"
         id="tspan280021" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="96.388527"
         id="tspan280023">4</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="103.05519"
         id="tspan280025" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="109.72185"
         id="tspan280027">5</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="116.38851"
         id="tspan280029" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="123.05518"
         id="tspan280031">6</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="129.72183"
         id="tspan280033" /><tspan
         sodipodi:role="line"
         x="582.73773"
         y="136.3885"
         id="tspan280035">7</tspan><tspan
         sodipodi:role="line"
         x="582.73773"
         y="143.05516"
         id="tspan280039" /></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.33333px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="669.96063"
       y="50.75"
       id="text284189"><tspan
         sodipodi:role="line"
         id="tspan284187"
         x="669.96063"
         y="50.75">8</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="57.416664"
         id="tspan285999" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="64.083328"
         id="tspan286001">9</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="70.749985"
         id="tspan284191" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="77.416649"
         id="tspan284193">10</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="84.083313"
         id="tspan284195" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="90.749977"
         id="tspan284197">11</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="97.416641"
         id="tspan284199" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="104.0833"
         id="tspan284201">12</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="110.74996"
         id="tspan284203" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="117.41663"
         id="tspan284205">13</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="124.08329"
         id="tspan284207" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="130.74995"
         id="tspan284209">14</tspan><tspan
         sodipodi:role="line"
         x="669.96063"
         y="137.41661"
         id="tspan284211" /><tspan
         sodipodi:role="line"
         x="669.96063"
         y="144.08328"
         id="tspan284213">15</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="56.883347"
       id="text288009"><tspan
         sodipodi:role="line"
         id="tspan288007"
         x="618.15045"
         y="56.883347"
         style="font-size:8px">${seedPhrase[0]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="70.363281"
       id="text288009-8"><tspan
         sodipodi:role="line"
         id="tspan288007-6"
         x="618.15045"
         y="70.363281"
         style="font-size:8px">${seedPhrase[1]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="83.363281"
       id="text288009-8-4"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0"
         x="618.15045"
         y="83.363281"
         style="font-size:8px">${seedPhrase[2]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.78198"
       y="96.596863"
       id="text288009-8-4-7"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8"
         x="618.78198"
         y="96.596863"
         style="font-size:8px">${seedPhrase[3]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="110.11328"
       id="text288009-8-4-7-1"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1"
         x="618.15045"
         y="110.11328"
         style="font-size:8px">${seedPhrase[4]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="122.86328"
       id="text288009-8-4-7-1-2"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0"
         x="618.15045"
         y="122.86328"
         style="font-size:8px">${seedPhrase[5]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="618.15045"
       y="136.31038"
       id="text288009-8-4-7-1-2-7"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8"
         x="618.15045"
         y="136.31038"
         style="font-size:8px">${seedPhrase[6]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="51.210938"
       id="text288009-8-4-7-1-2-7-3"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9"
         x="706.87079"
         y="51.210938"
         style="font-size:8px">${seedPhrase[7]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="64.113281"
       id="text288009-8-4-7-1-2-7-3-1"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6"
         x="706.87079"
         y="64.113281"
         style="font-size:8px">${seedPhrase[8]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="77.613281"
       id="text288009-8-4-7-1-2-7-3-1-3"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9"
         x="706.87079"
         y="77.613281"
         style="font-size:8px">${seedPhrase[9]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="90.863281"
       id="text288009-8-4-7-1-2-7-3-1-3-1"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9-6"
         x="706.87079"
         y="90.863281"
         style="font-size:8px">${seedPhrase[10]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="104.86328"
       id="text288009-8-4-7-1-2-7-3-1-3-1-0"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9-6-6"
         x="706.87079"
         y="104.86328"
         style="font-size:8px">${seedPhrase[11]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="118.11328"
       id="text288009-8-4-7-1-2-7-3-1-3-1-0-3"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9-6-6-9"
         x="706.87079"
         y="118.11328"
         style="font-size:8px">${seedPhrase[12]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="130.92189"
       id="text288009-8-4-7-1-2-7-3-1-3-1-0-3-4"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9-6-6-9-5"
         x="706.87079"
         y="130.92189"
         style="font-size:8px">${seedPhrase[13]}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8px;font-family:Roboto;-inkscape-font-specification:Roboto;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-opacity:1"
       x="706.87079"
       y="144.05724"
       id="text288009-8-4-7-1-2-7-3-1-3-1-0-3-4-9"><tspan
         sodipodi:role="line"
         id="tspan288007-6-0-8-1-0-8-9-6-9-6-6-9-5-9"
         x="706.87079"
         y="144.05724"
         style="font-size:8px">${seedPhrase[14]}</tspan></text>
  </g>
  <g
     transform="matrix(0.04657048,0,0,-0.04657048,330.29007,185.21842)"
     fill="#000000"
     stroke="none"
     id="g307425"
     style="fill:#000000;fill-opacity:0.564706">
    <path
       d="m 1657,3511 c 23,-4 48,-13 56,-19 12,-10 16,-10 20,2 4,11 1,13 -10,9 -10,-4 -14,-2 -10,4 4,6 -13,10 -46,10 l -52,1 z"
       id="path307225"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1575,3500 c -11,-4 -30,-10 -42,-15 -13,-4 -23,-14 -23,-23 0,-13 2,-13 18,0 45,37 114,43 138,10 12,-16 27,-3 16,14 -9,14 -81,23 -107,14 z"
       id="path307227"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1770,3481 c 0,-11 4,-21 9,-21 18,0 21,18 6,30 -13,10 -15,9 -15,-9 z"
       id="path307229"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1423,3483 c -21,-8 -14,-21 10,-19 13,0 24,7 24,14 0,12 -12,14 -34,5 z"
       id="path307231"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1877,3460 c 3,-11 0,-20 -6,-20 -6,0 -11,-8 -11,-18 0,-10 -5,-23 -11,-29 -6,-6 -9,-19 -6,-29 4,-16 5,-15 6,4 0,12 7,25 15,28 8,3 18,19 21,35 4,16 12,29 18,29 7,0 6,4 -3,10 -23,15 -29,12 -23,-10 z"
       id="path307233"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1950,3472 c 0,-4 10,-13 21,-21 19,-11 21,-11 15,4 -3,9 -6,19 -6,21 0,2 -7,4 -15,4 -8,0 -15,-3 -15,-8 z"
       id="path307235"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1812,3454 c -7,-8 -12,-20 -10,-26 2,-6 12,1 21,16 19,28 11,35 -11,10 z"
       id="path307237"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1303,3435 c 0,-8 4,-12 9,-9 4,3 8,0 8,-6 0,-15 -22,-22 -81,-23 -37,-2 -54,-6 -56,-17 -3,-9 -1,-11 4,-5 11,14 77,19 68,5 -8,-13 8,-13 21,-1 5,6 41,11 79,12 78,3 105,7 105,19 0,13 -40,24 -87,25 -23,0 -45,4 -49,8 -12,11 -21,8 -21,-8 z m 87,-14 c 0,-9 -24,-21 -41,-21 -16,0 -10,18 9,23 28,8 32,7 32,-2 z"
       id="path307239"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1498,3433 c -16,-4 -36,-78 -24,-90 3,-4 6,3 6,15 0,11 5,24 12,28 8,5 9,2 5,-9 -3,-10 -2,-17 3,-17 9,0 26,68 19,74 -2,1 -12,1 -21,-1 z"
       id="path307241"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2033,3400 v -39 l 27,19 c 36,26 46,26 20,0 -11,-11 -20,-25 -20,-32 0,-6 6,-3 14,8 13,16 18,17 36,6 24,-15 42,-8 34,13 -6,14 -85,65 -102,65 -5,0 -9,-18 -9,-40 z"
       id="path307243"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1952,3410 c 0,-14 2,-19 5,-12 2,6 2,18 0,25 -3,6 -5,1 -5,-13 z"
       id="path307245"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2151,3397 c 2,-1 13,-9 24,-17 19,-14 19,-14 6,3 -7,9 -18,17 -24,17 -6,0 -8,-1 -6,-3 z"
       id="path307247"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1940,3356 c 0,-14 10,-35 23,-48 12,-13 19,-19 15,-14 -5,6 -8,20 -8,33 0,13 -5,23 -11,23 -6,0 -9,7 -5,15 3,8 1,15 -4,15 -6,0 -10,-11 -10,-24 z"
       id="path307249"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1215,3360 c -3,-6 1,-7 9,-4 18,7 21,14 7,14 -6,0 -13,-4 -16,-10 z"
       id="path307251"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1295,3360 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307253"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1360,3344 c 0,-26 1,-26 25,-10 14,9 25,12 25,6 0,-5 7,-10 15,-10 22,0 18,18 -6,31 -17,9 -23,8 -30,-2 -6,-10 -9,-11 -9,-1 0,6 -4,12 -10,12 -5,0 -10,-12 -10,-26 z"
       id="path307255"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2210,3362 c 0,-5 6,-16 13,-25 11,-16 12,-15 12,8 0,14 -6,25 -12,25 -7,0 -13,-4 -13,-8 z"
       id="path307257"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1157,3318 c -17,-32 -17,-32 -12,-5 7,34 -2,35 -15,2 -6,-15 -17,-25 -29,-25 -23,0 -36,-16 -21,-25 6,-4 19,0 28,8 20,17 53,19 65,3 6,-7 7,-5 4,5 -3,9 -1,22 4,30 7,11 9,9 9,-8 0,-12 7,-28 15,-35 43,-39 43,-39 50,-8 4,16 3,35 -1,41 -4,8 -3,9 4,5 14,-8 15,3 3,23 -6,9 -21,12 -44,9 -20,-2 -33,0 -31,4 3,4 1,8 -4,8 -4,0 -16,-15 -25,-32 z"
       id="path307259"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1636,3335 c -3,-8 -1,-15 4,-15 6,0 10,7 10,15 0,8 -2,15 -4,15 -2,0 -6,-7 -10,-15 z"
       id="path307261"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1548,3310 c -14,-17 -22,-32 -17,-36 14,-8 29,5 29,26 0,10 6,20 13,23 6,2 10,7 6,10 -3,4 -17,-7 -31,-23 z"
       id="path307263"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1003,3298 c -17,-19 -33,-49 -37,-70 -4,-21 -12,-40 -18,-44 -8,-5 -9,-2 -5,9 3,10 2,17 -3,17 -6,0 -10,-4 -10,-10 0,-5 0,-13 0,-17 0,-5 9,-9 20,-9 62,-4 162,-51 167,-79 1,-5 6,-21 12,-35 9,-24 10,-23 10,10 1,20 -6,45 -14,56 -8,12 -11,25 -7,29 4,3 3,6 -3,4 -9,-2 -33,3 -88,18 -9,2 -15,9 -11,14 3,6 -3,13 -14,16 -23,6 -23,19 -1,51 11,15 22,20 35,16 14,-4 15,-3 6,4 -11,7 -8,14 14,31 l 27,21 h -25 c -14,0 -37,-13 -55,-32 z"
       id="path307265"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2324,3324 c -14,-6 -1,-81 21,-123 18,-35 21,-65 4,-41 -8,12 -9,10 -4,-7 4,-14 2,-23 -5,-23 -18,0 14,-28 36,-32 15,-2 18,2 16,22 -2,14 -8,29 -13,35 -16,16 -11,65 7,65 11,0 14,6 9,23 -5,16 -4,19 4,12 6,-6 12,-25 14,-43 2,-18 7,-35 10,-39 4,-3 4,-17 1,-29 -4,-14 -2,-24 5,-24 15,0 41,-42 47,-76 l 5,-29 -23,32 c -18,23 -28,29 -39,22 -10,-6 -10,-9 -1,-9 6,0 12,-4 12,-10 0,-17 -16,-11 -44,15 -31,29 -34,19 -5,-21 17,-23 15,-22 -12,5 l -32,35 8,-30 c 14,-53 14,-118 0,-148 -8,-15 -17,-44 -21,-63 -6,-30 -9,-33 -20,-21 -12,12 -12,21 0,62 13,43 13,46 -1,34 -14,-12 -15,-11 -5,9 7,12 17,25 22,28 13,8 13,42 1,49 -5,4 -17,-18 -27,-46 -22,-68 -25,-73 -35,-57 -5,8 -9,9 -9,3 0,-6 -9,-21 -20,-34 -24,-27 -29,-100 -6,-81 20,16 39,-11 34,-49 -3,-23 3,-37 26,-62 21,-23 34,-51 43,-92 7,-33 11,-62 9,-64 -3,-2 -15,3 -28,11 -42,27 -130,40 -224,33 -49,-4 -104,-8 -123,-9 -24,-2 -37,-9 -44,-24 -8,-18 -43,-35 -80,-37 -22,-2 -29,-76 -7,-76 7,0 17,-60 36,-204 5,-39 3,-48 -8,-44 -16,6 -41,-39 -27,-48 5,-3 9,-13 9,-24 0,-10 7,-21 15,-24 25,-9 47,-71 35,-101 -5,-14 -16,-25 -24,-25 -8,0 -16,-4 -18,-10 -5,-15 -73,-18 -98,-5 -26,14 -50,10 -98,-17 -41,-23 -68,-23 -76,-1 -14,35 60,101 93,83 13,-6 22,4 45,51 16,33 26,62 23,66 -15,14 -37,-10 -43,-46 -7,-43 -32,-63 -48,-38 -9,13 -13,13 -33,0 -27,-18 -31,-4 -9,36 14,24 11,51 -4,51 -4,0 -15,-20 -24,-45 -17,-43 -24,-166 -11,-204 7,-23 47,-41 89,-41 41,0 77,-34 56,-53 -10,-9 -11,-9 -6,1 10,18 -8,15 -49,-8 -43,-24 -65,-26 -65,-5 0,13 -4,12 -21,-4 -12,-11 -27,-17 -35,-14 -8,3 -14,-1 -14,-7 0,-9 -7,-7 -20,5 -18,16 -20,16 -20,2 0,-19 -15,-23 -25,-7 -12,19 -40,10 -52,-16 -11,-23 -10,-24 4,-12 14,11 16,11 11,-3 -4,-9 -1,-22 5,-28 8,-8 8,-11 -2,-11 -7,0 -11,-8 -9,-17 1,-10 -1,-24 -5,-30 -5,-7 -4,-13 2,-13 5,0 12,4 15,9 3,5 27,12 53,16 25,4 56,13 68,21 37,24 121,35 173,22 26,-6 72,-10 102,-9 43,2 71,-5 120,-27 122,-54 148,-50 165,28 6,29 5,33 -6,23 -20,-20 -31,-15 -24,10 3,12 3,18 -2,12 -4,-5 -17,-10 -29,-11 -16,0 -20,4 -16,18 3,12 -1,18 -11,18 -9,0 -18,-8 -20,-17 -3,-10 -4,7 -1,37 3,49 3,52 -6,22 -11,-34 -30,-35 -30,-1 0,17 -3,18 -22,8 -13,-7 -26,-17 -30,-23 -5,-8 -8,-7 -8,2 0,12 31,44 40,40 3,-1 15,4 27,10 18,10 21,18 16,47 -5,29 -2,35 12,35 9,0 19,-9 22,-20 3,-11 12,-20 20,-20 8,0 29,-11 47,-25 18,-14 38,-25 44,-25 6,0 12,-6 15,-12 2,-7 4,2 4,20 0,23 -4,31 -14,28 -7,-3 -28,8 -47,24 -18,17 -39,30 -45,30 -7,0 -9,5 -6,10 9,14 -4,52 -16,45 -5,-4 -13,5 -19,20 -5,14 -17,28 -25,31 -8,4 -15,12 -15,19 0,7 -7,15 -14,18 -20,8 -42,90 -27,95 8,3 9,8 2,16 -12,14 -17,87 -8,103 4,6 0,16 -8,23 -8,7 -12,17 -8,23 4,6 11,3 20,-8 10,-15 13,-16 13,-3 0,24 37,51 70,51 24,0 30,5 32,25 6,49 90,72 127,35 17,-17 5,-32 -44,-57 l -30,-16 h 53 c 29,0 62,5 74,11 34,18 32,1 -3,-20 -25,-15 -52,-21 -99,-22 -54,-1 -60,-2 -35,-10 16,-4 45,-6 65,-4 92,13 108,13 103,-4 -3,-9 -16,-25 -27,-36 -22,-21 -27,-38 -13,-51 4,-4 7,-1 7,8 0,8 8,22 19,32 10,9 26,36 36,59 16,39 19,42 56,41 21,0 41,-3 44,-6 9,-9 25,-120 25,-177 0,-49 2,-53 14,-36 7,10 11,27 8,37 -4,16 8,53 25,77 6,9 32,-34 33,-53 0,-12 5,-16 15,-12 11,4 19,-3 26,-21 14,-37 4,-54 -12,-18 -12,28 -13,29 -17,7 -2,-12 -7,-20 -12,-17 -4,3 -2,-17 5,-44 10,-40 10,-49 0,-45 -9,4 -15,-14 -20,-65 -4,-39 -11,-73 -15,-76 -4,-2 -6,17 -3,43 l 4,47 -20,-23 c -22,-25 -26,-22 -36,31 -4,20 -12,40 -17,43 -10,6 -7,-13 10,-86 5,-23 4,-24 -11,-8 -10,9 -17,21 -16,25 1,4 1,24 0,43 -1,31 -3,33 -15,18 -7,-10 -18,-18 -23,-18 -16,0 -30,-22 -37,-60 -5,-24 -4,-30 2,-21 6,8 17,11 26,8 9,-4 16,-1 16,6 0,8 3,8 9,-2 5,-8 14,-10 21,-6 9,6 12,1 8,-16 -3,-20 0,-24 19,-24 13,0 23,6 23,13 0,6 4,12 10,12 6,0 6,-9 -1,-26 -11,-32 -5,-42 16,-24 13,10 15,9 15,-9 0,-12 4,-20 8,-17 4,2 7,-8 6,-22 0,-15 -5,-27 -10,-27 -5,0 -15,-4 -23,-9 -9,-6 -17,-3 -24,10 -10,17 -12,16 -23,-11 l -13,-30 -2,35 c -1,19 -1,38 -1,41 1,4 -14,2 -33,-4 -34,-10 -48,-27 -22,-27 8,0 9,-2 1,-8 -6,-4 -15,-23 -18,-42 -5,-23 -4,-30 2,-21 7,9 12,10 16,2 4,-6 12,-9 17,-6 5,4 9,-4 9,-17 0,-13 -4,-18 -8,-13 -4,6 -15,11 -24,11 -14,1 -18,-6 -18,-38 0,-22 6,-46 14,-54 16,-15 27,-18 25,-6 -4,22 3,30 21,25 11,-3 20,-1 20,5 0,6 8,9 18,8 14,-3 17,-12 15,-52 -1,-27 -6,-50 -12,-52 -6,-2 -11,-12 -11,-21 0,-10 -11,-24 -25,-31 -13,-7 -22,-17 -19,-22 3,-5 2,-8 -3,-7 -23,4 -35,-2 -29,-16 3,-8 0,-15 -7,-15 -9,0 -12,-11 -9,-36 5,-43 -19,-69 -29,-31 -4,16 -9,7 -19,-38 -8,-33 -14,-64 -15,-70 0,-5 -9,-13 -20,-16 -11,-3 -19,-12 -19,-21 1,-10 -6,-13 -22,-10 -20,3 -27,-2 -38,-29 -8,-19 -12,-37 -10,-41 3,-4 -2,-5 -10,-2 -8,3 -17,13 -20,22 -4,13 -5,12 -4,-3 1,-50 -1,-55 -24,-46 -12,4 -24,14 -27,22 -3,12 -1,12 15,-1 13,-9 15,-10 7,-1 -7,8 -9,27 -6,45 l 6,31 -31,-34 c -19,-21 -42,-35 -59,-36 -16,-2 -35,-5 -43,-7 -8,-3 -12,-3 -7,-1 4,3 7,11 7,18 0,7 4,15 9,17 5,2 12,19 16,38 6,33 6,34 -9,14 -8,-11 -31,-33 -52,-49 l -36,-28 7,34 c 4,19 9,45 12,58 4,16 2,22 -6,17 -6,-4 -11,-17 -11,-29 -1,-26 -18,-51 -42,-60 -15,-5 -17,-1 -14,25 2,16 0,42 -4,57 l -7,26 -7,-32 c -9,-38 -37,-44 -68,-16 -17,15 -18,15 -18,-4 0,-11 -9,-28 -20,-38 -17,-15 -20,-16 -15,-3 4,9 2,19 -4,23 -6,3 -11,17 -11,31 0,17 -6,24 -19,24 -11,0 -27,3 -36,7 -16,6 -16,5 0,-20 l 17,-26 -34,10 c -18,6 -44,13 -58,16 l -25,5 25,-21 c 14,-11 28,-21 33,-21 4,0 7,-4 7,-9 0,-12 -49,-20 -56,-9 -3,4 -9,6 -14,3 -4,-3 -13,2 -20,10 -7,8 -18,15 -24,15 -6,0 -20,14 -29,30 -10,17 -15,30 -10,30 11,-1 49,-30 38,-30 -10,0 27,-29 38,-30 17,0 5,38 -14,43 -13,4 -18,10 -13,18 4,8 3,10 -4,5 -16,-9 -61,22 -84,59 l -20,30 5,-28 c 4,-26 3,-26 -13,-12 -30,27 -33,16 -6,-19 14,-19 26,-41 26,-48 -1,-8 -6,-6 -15,6 -8,10 -19,15 -26,10 -7,-4 -10,-3 -5,4 4,7 -5,9 -29,5 -27,-4 -35,-2 -35,10 0,8 -7,17 -15,21 -8,3 -15,10 -15,16 0,6 5,8 10,5 6,-3 10,-2 10,4 0,11 -19,24 -40,28 -8,1 -16,7 -18,12 -5,16 -22,13 -22,-4 0,-21 -18,-19 -32,5 -7,11 -18,20 -25,20 -12,0 -11,16 3,86 3,19 -1,21 -33,20 -34,-1 -39,2 -48,31 -6,18 -15,36 -19,40 -5,4 -6,2 -2,-5 4,-7 3,-19 -3,-26 -9,-10 -8,-15 5,-20 9,-4 14,-12 10,-22 -3,-8 -2,-12 4,-9 6,3 10,2 10,-4 0,-5 8,-12 18,-15 9,-3 0,-4 -20,-1 -22,2 -39,-1 -42,-8 -3,-7 -4,-3 -1,9 7,29 -4,54 -21,47 -16,-6 -20,22 -4,32 6,4 8,14 6,23 -3,10 -1,24 4,32 6,10 10,11 10,3 0,-10 6,-10 25,-1 14,6 25,15 25,20 0,23 29,3 45,-32 10,-22 24,-45 31,-51 8,-6 11,-16 8,-21 -4,-6 3,-5 15,1 16,9 27,8 49,-3 15,-8 39,-12 54,-9 16,3 36,-1 50,-11 26,-18 154,-23 143,-6 -4,6 -28,10 -53,9 -26,-1 -58,4 -72,12 -14,7 -43,12 -66,11 -43,-3 -62,9 -69,47 -2,11 -8,29 -14,38 -8,15 -11,11 -12,-22 -1,-40 -1,-40 -9,-9 -14,59 -20,70 -30,54 -8,-13 -10,-12 -10,2 0,26 -17,31 -44,13 -16,-11 -33,-14 -47,-10 -16,5 -19,4 -14,-5 5,-8 3,-11 -6,-8 -8,3 -14,11 -14,19 -1,8 -6,13 -13,11 -9,-1 -10,6 -6,23 8,31 -9,33 -25,3 l -11,-23 6,22 c 3,13 2,28 -3,35 -5,8 -10,-13 -14,-52 -4,-53 -1,-77 19,-130 13,-36 29,-72 37,-80 7,-8 24,-37 38,-65 14,-27 37,-65 51,-84 14,-19 29,-51 32,-70 3,-20 13,-47 21,-60 8,-13 10,-20 4,-17 -7,5 -11,-6 -11,-33 0,-30 -3,-39 -14,-35 -8,3 -14,21 -14,46 -1,22 -3,43 -6,46 -3,3 -6,-6 -6,-21 0,-21 -5,-26 -28,-29 -25,-3 -27,-7 -32,-55 -3,-28 -8,-54 -10,-56 -3,-2 -30,-13 -60,-25 -30,-13 -43,-20 -29,-17 29,5 54,-15 54,-44 0,-9 10,-17 23,-19 12,-2 22,-9 22,-15 0,-15 36,-48 44,-40 8,8 37,-17 31,-27 -8,-13 32,-19 46,-6 9,8 10,8 6,0 -4,-7 0,-17 8,-24 18,-15 20,-47 3,-53 -16,-5 20,-46 68,-79 19,-13 39,-37 44,-54 16,-48 70,-105 104,-108 20,-2 38,-15 57,-40 27,-37 79,-86 90,-86 4,0 33,-25 65,-56 59,-57 106,-84 144,-84 11,0 47,11 79,25 32,13 96,31 142,39 109,19 140,26 164,35 70,28 96,43 111,66 9,14 25,25 35,25 11,0 31,17 47,39 15,22 37,42 49,45 52,14 123,106 123,159 0,24 76,101 86,86 11,-19 33,-123 34,-161 0,-35 13,-58 23,-41 3,5 0,35 -5,68 -5,33 -12,87 -17,120 -8,70 -48,141 -88,156 -14,5 -51,28 -83,50 -70,49 -72,76 -7,105 34,16 43,26 54,62 11,39 10,42 -8,42 -24,0 -24,1 10,63 16,28 32,65 36,81 3,17 20,47 37,69 32,40 55,104 68,192 4,28 13,74 19,104 6,29 9,57 6,61 -3,5 0,40 6,79 8,50 9,74 1,83 -8,10 -5,28 8,68 11,30 22,76 26,102 3,26 14,55 24,66 23,24 70,123 70,146 0,10 16,50 36,91 31,63 36,83 35,141 0,80 -17,197 -39,274 -9,30 -17,64 -18,75 -6,56 -67,170 -85,160 -4,-3 -5,4 -2,15 6,24 -31,70 -56,70 -8,0 -28,12 -44,28 l -30,27 18,-28 c 14,-21 15,-31 7,-39 -9,-9 -15,-7 -26,7 -13,18 -14,18 -20,-3 -10,-31 -20,-28 -42,13 -10,19 -21,35 -24,35 -3,0 -6,9 -6,19 0,11 4,17 8,15 4,-3 8,-11 8,-17 0,-7 11,-25 25,-41 29,-34 33,-26 6,12 -37,54 -71,131 -60,138 7,4 3,11 -9,18 -11,6 -29,17 -41,24 -18,11 -21,10 -21,-6 0,-10 5,-23 12,-30 6,-6 9,-15 5,-18 -8,-8 -37,58 -31,68 6,9 5,9 -12,2 z m 36,-106 c 0,-18 -2,-20 -9,-8 -6,8 -7,18 -5,22 9,14 14,9 14,-14 z m 226,-175 c -11,-11 -19,6 -11,24 8,17 8,17 12,0 3,-10 2,-21 -1,-24 z m -46,13 c 0,-2 -7,-6 -15,-10 -8,-3 -15,-1 -15,4 0,6 7,10 15,10 8,0 15,-2 15,-4 z m 25,-34 c -3,-3 -11,0 -18,7 -9,10 -8,11 6,5 10,-3 15,-9 12,-12 z m 55,8 c 0,-5 -5,-10 -11,-10 -5,0 -7,5 -4,10 3,6 8,10 11,10 2,0 4,-4 4,-10 z m 30,-121 c 0,-5 -7,-12 -15,-15 -12,-5 -13,-10 -4,-20 9,-11 8,-14 -1,-14 -8,0 -11,-11 -8,-30 3,-17 1,-33 -4,-36 -5,-3 -5,-10 -2,-16 4,-6 2,-8 -4,-4 -6,3 -15,-2 -21,-11 -6,-10 -11,-13 -11,-8 0,6 -5,3 -11,-5 -7,-11 -8,-2 -3,30 4,25 7,58 6,74 -1,28 20,61 32,49 3,-4 6,-1 6,7 0,10 3,10 15,0 19,-16 20,-2 1,19 -8,9 -17,30 -21,46 -6,27 -4,25 19,-14 14,-23 26,-47 26,-52 z m -133,29 c -3,-8 -6,-5 -6,6 -1,11 2,17 5,13 3,-3 4,-12 1,-19 z m 172,-23 c 0,-5 -4,-3 -9,5 -5,8 -9,22 -9,30 0,16 17,-16 18,-35 z m -172,-17 c -3,-8 -6,-5 -6,6 -1,11 2,17 5,13 3,-3 4,-12 1,-19 z m -89,-20 c -3,-18 -9,-42 -13,-52 -6,-14 -5,-17 3,-12 6,4 16,21 21,39 8,29 9,30 10,7 1,-30 -59,-135 -74,-129 -21,8 4,128 33,162 21,24 25,22 20,-15 z m 77,-45 c -11,-52 -12,-55 -13,-75 -1,-10 -6,-18 -12,-18 -17,0 -11,89 8,115 22,30 26,25 17,-22 z m 239,-102 c 3,-5 -1,-14 -9,-21 -13,-10 -15,-9 -15,9 0,21 14,28 24,12 z m -44,-68 c 0,-5 -5,-15 -10,-23 -8,-12 -10,-11 -10,8 0,12 5,22 10,22 6,0 10,-3 10,-7 z m -15,-68 c 0,-10 -6,-20 -12,-22 -8,-3 -13,5 -13,22 0,17 5,25 13,23 6,-3 12,-13 12,-23 z m -259,-43 c -20,-20 -22,-1 -4,31 11,20 12,21 16,3 2,-10 -3,-26 -12,-34 z m 64,-45 c 0,-6 -11,-33 -25,-59 -26,-49 -32,-73 -15,-63 15,9 12,-11 -4,-24 -21,-18 -29,2 -21,52 12,75 25,107 46,107 10,0 19,-6 19,-13 z m -301,-38 c 43,-26 35,-33 -20,-19 -23,6 -62,12 -86,12 -40,0 -43,1 -26,14 27,20 93,17 132,-7 z m 327,-464 c -3,-8 2,-18 10,-23 9,-5 12,-15 8,-25 -9,-24 -21,-21 -28,6 -9,34 -7,57 5,57 6,0 9,-7 5,-15 z m -31,-15 c -3,-5 -1,-11 5,-15 6,-4 7,-11 4,-17 -4,-6 -10,-5 -15,3 -12,19 -11,52 1,44 6,-4 8,-10 5,-15 z m -531,-34 c 8,-12 7,-19 -4,-26 -11,-7 -18,-3 -27,13 -7,12 -12,25 -13,29 0,13 34,1 44,-16 z m 622,-25 c -3,-4 -1,-24 4,-44 4,-21 4,-35 -1,-31 -5,3 -9,1 -9,-4 0,-17 -26,-20 -27,-3 -1,9 -3,21 -4,26 -1,6 1,27 5,48 7,30 11,35 22,26 8,-6 12,-14 10,-18 z m -81,-1 c -3,-5 -11,-10 -16,-10 -6,0 -7,5 -4,10 3,6 11,10 16,10 6,0 7,-4 4,-10 z m -15,-67 c 0,-28 -3,-34 -10,-23 -13,20 -13,60 0,60 6,0 10,-17 10,-37 z m 85,-73 c 3,-5 1,-10 -6,-10 -8,0 -8,-4 1,-15 7,-8 10,-15 7,-15 -3,0 -12,-2 -20,-5 -10,-5 -13,1 -9,25 4,30 16,39 27,20 z m -615,-20 c 0,-5 -4,-10 -10,-10 -5,0 -10,5 -10,10 0,6 5,10 10,10 6,0 10,-4 10,-10 z m 484,-64 c 6,-24 -10,-56 -28,-56 -10,0 -14,13 -13,49 2,42 4,47 19,38 9,-6 19,-20 22,-31 z m -61,-27 c -6,-6 -7,3 -4,23 4,28 6,29 9,9 2,-13 0,-27 -5,-32 z m 173,12 c -4,-5 -13,-8 -22,-4 -11,4 -12,8 -3,20 14,16 36,2 25,-16 z m -48,-142 c -19,-12 -23,9 -7,39 l 14,26 3,-29 c 2,-16 -2,-31 -10,-36 z m -76,-121 c -9,-9 -12,-7 -12,12 0,19 3,21 12,12 9,-9 9,-15 0,-24 z M 1153,1298 c 5,-16 3,-18 -6,-9 -7,7 -12,17 -12,24 -1,7 -7,11 -14,9 -7,-1 -10,2 -6,8 9,15 31,-4 38,-32 z m 46,-2 c 1,-5 -7,-1 -18,10 -12,13 -15,21 -7,26 10,7 24,-13 25,-36 z m 1158,-28 c -3,-8 -6,-5 -6,6 -1,11 2,17 5,13 3,-3 4,-12 1,-19 z m -1257,-38 c 0,-5 -7,-7 -15,-4 -8,4 -15,8 -15,10 0,2 7,4 15,4 8,0 15,-4 15,-10 z m 166,-25 29,-15 h -31 c -21,0 -31,5 -31,15 0,18 -2,18 33,0 z m 444,-35 c 0,-5 -5,-10 -11,-10 -5,0 -7,5 -4,10 3,6 8,10 11,10 2,0 4,-4 4,-10 z m 445,-10 c 3,-5 -1,-10 -10,-10 -9,0 -13,5 -10,10 3,6 8,10 10,10 2,0 7,-4 10,-10 z m -569,-55 c 34,-52 -7,-74 -51,-28 -30,33 -31,40 -7,46 34,9 42,7 58,-18 z m -553,-10 c 2,-14 2,-23 -1,-20 -3,3 -12,-5 -20,-17 -10,-18 -12,-19 -6,-3 3,11 9,30 11,43 7,28 10,28 16,-3 z m 807,-18 c 0,-12 -49,-47 -65,-47 -3,0 -5,10 -3,22 2,16 12,25 33,29 17,4 31,7 33,8 1,0 2,-5 2,-12 z m 134,-1 c -10,-8 -21,-12 -24,-10 -5,6 21,24 34,24 6,0 1,-6 -10,-14 z m 71,-4 c -3,-3 -11,0 -18,7 -9,10 -8,11 6,5 10,-3 15,-9 12,-12 z m -155,-1 c 0,-12 -28,-22 -34,-12 -3,5 -3,11 1,15 9,9 33,7 33,-3 z m -147,-21 c -3,-10 -11,-25 -19,-31 -16,-13 -19,-33 -4,-24 6,3 10,1 10,-4 0,-6 -7,-11 -16,-11 -13,0 -15,7 -11,30 l 6,29 -20,-20 c -11,-11 -17,-25 -13,-31 4,-7 3,-8 -4,-4 -24,15 -13,52 21,69 44,21 56,21 50,-3 z m -706,-22 c -3,-8 -6,-5 -6,6 -1,11 2,17 5,13 3,-3 4,-12 1,-19 z"
       id="path307267"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1470,3300 c 0,-6 7,-13 15,-17 24,-9 27,1 5,15 -13,8 -20,8 -20,2 z"
       id="path307269"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1322,3255 c -18,-25 -32,-56 -32,-68 1,-19 3,-18 15,8 8,17 24,45 35,64 31,50 18,47 -18,-4 z"
       id="path307271"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2096,3245 c 4,-8 8,-15 10,-15 2,0 4,7 4,15 0,8 -4,15 -10,15 -5,0 -7,-7 -4,-15 z"
       id="path307273"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2460,3239 c 7,-11 14,-19 16,-16 7,7 -7,37 -17,37 -6,0 -5,-9 1,-21 z"
       id="path307275"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1819,3227 c 26,-28 31,-32 31,-19 0,4 -13,16 -28,26 l -27,19 z"
       id="path307277"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 945,3230 c -3,-5 -1,-10 4,-10 6,0 11,5 11,10 0,6 -2,10 -4,10 -3,0 -8,-4 -11,-10 z"
       id="path307279"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1025,3230 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307281"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1450,3198 c 0,-14 21,-45 55,-81 30,-32 55,-62 55,-68 0,-6 4,-8 9,-5 9,6 -12,34 -71,99 -16,17 -28,38 -28,48 0,10 -4,21 -10,24 -6,3 -10,-4 -10,-17 z"
       id="path307283"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1727,3209 c 15,-29 64,-82 70,-76 3,3 -14,25 -37,49 -23,24 -38,36 -33,27 z"
       id="path307285"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2099,3207 c 14,-18 51,-42 51,-33 0,3 -15,15 -32,27 -24,17 -29,18 -19,6 z"
       id="path307287"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1580,3194 c 0,-5 24,-35 54,-66 52,-57 96,-76 96,-43 0,8 0,18 1,22 0,4 -5,9 -13,11 -9,2 -8,0 2,-7 13,-10 13,-11 0,-12 -33,-3 -47,5 -92,53 -27,28 -48,46 -48,42 z"
       id="path307289"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1856,3177 c 3,-10 9,-15 12,-12 3,3 0,11 -7,18 -10,9 -11,8 -5,-6 z"
       id="path307291"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2490,3181 c 0,-5 7,-15 17,-22 15,-13 15,-12 4,9 -12,23 -21,28 -21,13 z"
       id="path307293"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1190,3146 c 0,-2 7,-7 16,-10 8,-3 12,-2 9,4 -6,10 -25,14 -25,6 z"
       id="path307295"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 980,3120 c 0,-5 12,-13 27,-16 15,-4 34,-14 42,-21 7,-8 16,-11 20,-8 9,9 -29,35 -51,35 -10,0 -18,5 -18,10 0,6 -4,10 -10,10 -5,0 -10,-4 -10,-10 z"
       id="path307297"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1929,3129 c -8,-44 -13,-57 -30,-75 -15,-16 -17,-24 -9,-29 7,-4 16,-1 21,6 13,21 31,90 25,97 -3,3 -6,3 -7,1 z"
       id="path307299"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 848,3113 c -20,-5 -73,-103 -61,-112 4,-3 10,-19 12,-36 4,-36 20,-70 21,-43 0,9 3,18 8,21 4,2 1,2 -5,1 -7,-2 -13,1 -13,7 0,11 60,3 71,-10 3,-3 14,-28 23,-54 12,-31 27,-52 42,-59 13,-6 24,-17 24,-25 0,-8 12,-26 26,-41 37,-39 51,-70 59,-129 7,-56 -7,-75 -20,-26 -3,14 -13,36 -22,47 l -15,21 5,-22 c 3,-13 1,-23 -4,-23 -5,0 -9,6 -9,13 0,7 -25,36 -55,65 -30,29 -55,60 -55,68 0,8 -4,13 -9,10 -12,-8 -22,19 -16,42 3,9 -1,4 -9,-13 -9,-20 -11,-32 -4,-36 6,-4 8,-12 4,-18 -14,-21 14,-84 57,-130 60,-64 73,-89 51,-98 -11,-4 -20,-1 -22,7 -3,7 -20,29 -38,47 -19,19 -34,37 -34,42 0,5 -7,14 -16,22 -13,10 -17,10 -25,-2 -8,-11 -10,-8 -8,11 2,44 -1,74 -7,67 -6,-6 -9,-22 -13,-77 l -2,-25 -10,24 c -5,13 -8,38 -6,57 3,18 0,35 -6,37 -6,2 -12,31 -15,65 -2,34 -8,64 -12,67 -4,2 -5,-8 -3,-23 3,-23 2,-24 -6,-7 -5,11 -12,28 -15,38 -3,9 -12,17 -20,17 -13,0 -13,-3 0,-27 7,-16 14,-38 14,-51 0,-13 5,-32 10,-42 6,-12 7,-21 1,-25 -6,-3 -13,11 -16,32 -11,64 -15,71 -27,49 -8,-15 -12,-16 -20,-5 -6,9 -7,-12 -4,-61 5,-54 2,-90 -9,-125 -23,-76 -30,-223 -15,-297 12,-57 64,-189 90,-228 18,-27 28,-54 38,-113 6,-32 21,-72 34,-90 12,-17 39,-65 60,-107 34,-70 37,-73 46,-50 l 9,25 8,-24 c 5,-16 10,-20 15,-11 9,15 50,-4 50,-24 0,-8 6,-19 14,-25 11,-9 18,-8 30,4 14,15 16,15 16,1 0,-9 4,-16 9,-16 5,0 7,8 4,19 -7,27 10,33 43,16 37,-19 44,-10 15,18 -13,12 -21,16 -17,10 4,-7 5,-13 1,-13 -3,0 -10,10 -15,23 -7,17 -9,18 -9,5 -2,-36 -20,-16 -36,37 -12,42 -20,55 -35,55 -27,0 -41,28 -44,88 -2,43 -16,21 -16,-26 0,-53 12,-72 46,-72 22,0 34,-17 34,-48 0,-10 -3,-13 -8,-6 -9,14 -92,46 -92,36 0,-4 5,-13 12,-20 9,-9 8,-12 -6,-12 -15,0 -17,6 -11,38 5,33 4,38 -14,38 -12,0 -21,-4 -21,-8 0,-4 -7,-8 -15,-8 -20,0 -55,58 -55,91 0,15 -7,32 -15,39 -18,15 -16,51 2,57 11,4 29,-34 24,-52 -1,-5 6,-2 16,8 14,14 15,19 5,26 -7,4 -10,15 -6,25 7,17 24,17 68,0 9,-3 16,-1 16,5 0,15 38,14 43,-1 2,-7 3,-3 1,8 -4,23 18,49 30,36 8,-7 -3,87 -12,102 -2,4 -9,2 -14,-5 -7,-11 -8,-9 -4,4 3,10 6,25 6,33 0,9 4,13 9,10 5,-4 24,25 42,63 26,55 36,68 46,59 10,-8 13,-6 13,11 0,11 5,21 10,21 6,0 10,12 10,28 0,15 4,33 9,41 16,25 27,3 29,-55 0,-31 5,-61 11,-67 6,-6 31,-10 55,-9 25,1 63,-5 85,-14 21,-8 54,-14 73,-12 33,3 33,4 -16,18 -27,9 -51,20 -53,27 -3,8 8,7 34,-3 42,-14 124,-17 163,-4 21,7 19,8 -17,9 -61,1 -118,30 -110,55 5,14 81,36 108,30 36,-7 60,-35 54,-63 -3,-19 -1,-22 15,-18 11,3 35,1 54,-3 24,-5 43,-3 62,6 33,17 34,17 34,-1 0,-8 5,-15 10,-15 6,0 10,22 10,49 0,42 4,52 27,69 l 27,20 -45,22 c -24,13 -46,26 -49,30 -3,4 -14,9 -25,13 -11,3 -38,12 -61,21 -43,16 -141,20 -209,10 -22,-4 -61,-22 -88,-40 -28,-19 -55,-31 -65,-28 -14,5 -15,4 -2,-4 12,-9 11,-14 -10,-31 -14,-11 -30,-25 -37,-31 -7,-5 -14,-10 -15,-10 -6,0 1,141 8,183 4,25 3,37 -5,37 -6,0 -11,7 -11,16 0,12 -3,14 -13,6 -7,-6 -12,-24 -11,-39 1,-15 3,-34 3,-41 1,-8 6,-10 14,-6 9,5 9,4 0,-6 -19,-20 -24,-9 -34,77 -13,100 -29,138 -65,147 -46,12 -86,46 -81,68 3,11 -3,44 -14,75 -10,31 -19,74 -19,95 0,22 -4,37 -9,33 -6,-3 -15,4 -21,15 -11,20 -19,22 -52,13 z m 32,-55 c 0,-6 -6,-5 -15,2 -8,7 -15,14 -15,16 0,2 7,1 15,-2 8,-4 15,-11 15,-16 z m 55,-99 c 7,-19 16,-43 21,-54 7,-18 6,-18 -8,-7 -9,7 -20,28 -23,45 -4,18 -15,41 -24,51 -15,18 -15,19 3,9 10,-6 24,-26 31,-44 z m 35,-330 c 0,-12 -39,17 -67,50 -11,13 -13,13 -13,0 -1,-16 -39,50 -40,68 0,6 27,-15 60,-47 33,-32 60,-64 60,-71 z m -240,97 c 0,-2 -7,-7 -16,-10 -8,-3 -12,-2 -9,4 6,10 25,14 25,6 z m -73,-118 c -3,-8 -6,-5 -6,6 -1,11 2,17 5,13 3,-3 4,-12 1,-19 z m 24,-35 c -12,-20 -14,-14 -5,12 4,9 9,14 11,11 3,-2 0,-13 -6,-23 z m -21,-3 c 0,-11 -2,-20 -4,-20 -2,0 -6,9 -9,20 -3,11 -1,20 4,20 5,0 9,-9 9,-20 z m 160,8 c 0,-6 7,-19 15,-27 8,-9 17,-36 21,-59 6,-38 5,-42 -14,-42 -24,0 -41,38 -22,50 10,6 9,13 -4,31 -18,26 -21,59 -6,59 6,0 10,-5 10,-12 z m 683,-97 c 10,-10 3,-11 -33,-6 -34,5 -61,1 -102,-13 -63,-22 -72,-7 -15,22 37,19 130,17 150,-3 z M 735,2182 c -8,-8 -25,10 -25,26 0,13 2,13 14,-4 8,-10 13,-21 11,-22 z m 75,-34 -1,-33 -14,25 c -18,32 -18,40 0,40 10,0 15,-10 15,-32 z m 165,-348 c 3,-5 1,-10 -4,-10 -6,0 -11,5 -11,10 0,6 2,10 4,10 3,0 8,-4 11,-10 z"
       id="path307301"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1400,3090 c 11,-16 26,-33 32,-36 7,-4 -1,9 -16,29 -34,44 -46,50 -16,7 z"
       id="path307303"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 980,3085 c 0,-8 -5,-15 -12,-15 -6,0 -3,-7 8,-15 11,-8 14,-15 7,-15 -18,0 -16,-25 2,-44 19,-19 46,-10 38,12 -4,15 -3,15 6,2 6,-8 10,-45 10,-82 -1,-63 1,-70 32,-103 19,-20 33,-42 31,-48 -2,-7 0,-9 4,-5 4,4 12,0 19,-9 11,-14 12,-14 18,1 4,10 3,15 -3,11 -6,-3 -13,2 -17,12 -4,10 -15,26 -24,36 -17,19 -20,76 -5,110 5,10 4,17 -3,17 -6,0 -11,-6 -11,-14 0,-7 -7,-20 -17,-27 -15,-13 -16,-10 -11,35 7,58 -6,103 -39,134 -28,26 -33,27 -33,7 z"
       id="path307305"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1221,3069 c -1,-28 6,-42 34,-69 23,-22 35,-29 35,-19 0,9 -11,26 -25,39 -14,13 -29,38 -34,54 l -9,31 z"
       id="path307307"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2310,3035 c -8,-9 -8,-15 -2,-15 12,0 26,19 19,26 -2,2 -10,-2 -17,-11 z"
       id="path307309"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1822,3028 c -7,-7 -12,-17 -12,-24 0,-6 -7,-17 -16,-24 -8,-8 -20,-22 -25,-32 -9,-17 -8,-18 11,-6 12,7 31,30 42,51 20,40 20,55 0,35 z"
       id="path307311"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1072,3000 c 0,-19 2,-27 5,-17 2,9 2,25 0,35 -3,9 -5,1 -5,-18 z"
       id="path307313"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1870,3008 c 0,-6 -15,-25 -34,-42 -32,-30 -49,-40 -111,-66 -40,-17 -17,-24 33,-11 59,16 167,131 122,131 -5,0 -10,-5 -10,-12 z"
       id="path307315"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1591,2979 c -17,-14 -21,-23 -13,-31 14,-14 29,-3 34,27 3,14 5,25 4,25 0,-1 -12,-10 -25,-21 z"
       id="path307317"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1683,2951 c -7,-11 -33,-32 -58,-46 -25,-15 -45,-29 -45,-31 0,-2 14,-3 31,-2 36,3 89,49 89,78 0,25 -2,25 -17,1 z"
       id="path307319"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1112,2910 c 0,-19 2,-27 5,-17 2,9 2,25 0,35 -3,9 -5,1 -5,-18 z"
       id="path307321"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 730,2906 c 0,-9 5,-16 10,-16 6,0 10,4 10,9 0,6 -4,13 -10,16 -5,3 -10,-1 -10,-9 z"
       id="path307323"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1142,2810 c 0,-14 2,-19 5,-12 2,6 2,18 0,25 -3,6 -5,1 -5,-13 z"
       id="path307325"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2017,2773 c -15,-14 -6,-23 22,-23 37,0 62,10 55,21 -6,10 -67,12 -77,2 z"
       id="path307327"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1137,2244 c -3,-6 -2,-26 3,-44 11,-37 5,-54 -16,-46 -8,3 -17,-1 -21,-10 -3,-9 -13,-14 -24,-11 -22,6 -26,-11 -4,-19 8,-3 17,-15 21,-26 5,-17 8,-18 16,-7 7,10 7,8 3,-8 -5,-18 -2,-23 12,-23 11,0 14,-3 7,-8 -6,-4 -14,-14 -17,-22 -4,-12 -6,-12 -6,2 -1,9 -6,20 -13,24 -8,5 -9,2 -3,-12 4,-10 7,-28 7,-39 -1,-15 3,-13 18,10 21,32 22,31 25,-30 1,-22 12,-67 26,-100 19,-47 23,-74 21,-129 -3,-62 -4,-67 -17,-50 -14,18 -14,17 -6,-6 10,-30 45,-50 89,-50 17,0 32,-5 32,-11 0,-6 7,-4 15,5 22,22 19,46 -7,46 -12,0 -33,10 -46,23 l -25,22 17,-27 c 17,-26 17,-27 -4,-25 -12,1 -26,10 -32,20 -8,15 -7,18 3,12 9,-6 10,-4 4,11 -11,23 -12,111 -1,121 4,5 16,-3 27,-16 14,-16 19,-19 19,-8 0,20 -27,47 -46,47 -20,0 -46,64 -50,118 -2,31 1,42 12,42 8,0 14,-10 14,-24 0,-16 7,-27 19,-31 24,-7 73,4 83,19 5,8 8,7 8,-1 0,-7 9,-13 21,-13 15,0 19,-5 15,-15 -3,-8 -1,-14 4,-12 5,1 16,-7 25,-18 15,-19 16,-18 10,25 -5,33 -16,54 -42,80 -20,19 -33,30 -29,23 3,-6 -6,-21 -21,-33 -15,-12 -29,-17 -31,-11 -2,5 -9,8 -15,5 -8,-3 -12,9 -12,34 -1,21 -9,55 -18,75 -15,32 -21,36 -37,27 -26,-14 -34,-12 -20,5 6,8 9,18 6,24 -3,5 -2,11 3,13 5,2 4,16 -3,33 -7,16 -15,25 -19,19 z m 38,-124 c 3,-5 2,-10 -4,-10 -5,0 -13,5 -16,10 -3,6 -2,10 4,10 5,0 13,-4 16,-10 z"
       id="path307329"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1375,2240 c 3,-5 13,-10 21,-10 8,0 12,5 9,10 -3,6 -13,10 -21,10 -8,0 -12,-4 -9,-10 z"
       id="path307331"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1683,2225 c -9,-25 4,-29 17,-6 7,15 7,21 0,21 -6,0 -13,-7 -17,-15 z"
       id="path307333"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1010,2176 c 0,-8 4,-17 9,-20 5,-4 7,3 4,14 -6,23 -13,26 -13,6 z"
       id="path307335"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1015,2095 c -14,-14 -25,-31 -24,-38 0,-9 2,-9 6,1 2,6 11,12 19,12 8,0 14,8 14,18 0,14 2,15 10,2 8,-12 10,-11 10,8 0,28 -3,28 -35,-3 z"
       id="path307337"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1072,2030 c 0,-14 2,-19 5,-12 2,6 2,18 0,25 -3,6 -5,1 -5,-13 z"
       id="path307339"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1036,2004 c -3,-9 -6,-17 -6,-18 0,-2 16,-23 35,-47 19,-24 35,-50 35,-57 0,-7 11,-18 25,-24 14,-6 25,-15 25,-20 0,-4 6,-8 13,-8 6,0 -2,13 -20,30 -17,16 -34,39 -38,50 -3,11 -10,20 -15,20 -13,0 -42,58 -35,70 3,5 1,11 -4,14 -5,3 -12,-1 -15,-10 z"
       id="path307341"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 860,2003 c 0,-5 5,-25 11,-46 8,-32 13,-36 25,-26 17,14 18,30 2,27 -12,-3 -14,2 -17,37 -1,15 -21,22 -21,8 z"
       id="path307343"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1000,1948 c -12,-22 -12,-22 6,-6 10,10 15,20 12,24 -4,3 -12,-5 -18,-18 z"
       id="path307345"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1085,1960 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307347"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2216,1955 c 5,-13 2,-14 -19,-6 -21,8 -26,6 -37,-14 -7,-14 -10,-35 -6,-52 4,-15 7,-36 7,-47 0,-18 0,-18 17,0 10,11 28,36 40,56 19,30 21,41 12,58 -13,23 -22,27 -14,5 z"
       id="path307349"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1230,1945 c 0,-2 14,-20 31,-39 22,-25 29,-41 24,-56 -4,-11 -2,-20 4,-20 6,0 11,13 11,30 0,20 -8,35 -25,46 -14,9 -25,23 -25,30 0,8 -4,14 -10,14 -5,0 -10,-2 -10,-5 z"
       id="path307351"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1485,1920 c -16,-17 -35,-28 -43,-25 -7,3 -10,0 -7,-6 4,-5 1,-16 -5,-24 -10,-12 -10,-15 0,-15 16,0 92,80 88,92 -2,5 -17,-5 -33,-22 z"
       id="path307353"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 922,1910 c 0,-14 2,-19 5,-12 2,6 2,18 0,25 -3,6 -5,1 -5,-13 z"
       id="path307355"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1327,1893 c -3,-5 1,-14 9,-21 12,-10 14,-10 14,2 0,17 -16,30 -23,19 z"
       id="path307357"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2370,1853 c 0,-13 5,-23 10,-23 13,0 13,11 0,30 -8,12 -10,11 -10,-7 z"
       id="path307359"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1340,1842 c 0,-5 -12,-14 -27,-21 -20,-9 -23,-15 -14,-20 11,-7 11,-9 0,-13 -8,-3 -11,-8 -8,-12 7,-7 19,3 52,43 20,24 21,31 7,31 -5,0 -10,-4 -10,-8 z"
       id="path307361"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1096,1806 c 3,-8 13,-17 22,-21 13,-5 13,-2 -3,15 -21,24 -26,25 -19,6 z"
       id="path307363"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2415,1810 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307365"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1362,1634 c 10,-10 20,-15 24,-12 3,4 -5,12 -18,18 -22,12 -22,12 -6,-6 z"
       id="path307367"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1550,1610 c 0,-5 5,-10 11,-10 5,0 7,5 4,10 -3,6 -8,10 -11,10 -2,0 -4,-4 -4,-10 z"
       id="path307369"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2150,1600 c 0,-5 7,-10 16,-10 8,0 12,5 9,10 -3,6 -10,10 -16,10 -5,0 -9,-4 -9,-10 z"
       id="path307371"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1317,1582 c 3,-12 9,-25 14,-28 14,-8 11,10 -6,32 -13,18 -14,18 -8,-4 z"
       id="path307373"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1620,1596 c 0,-2 11,-6 25,-8 13,-3 22,-1 19,3 -5,9 -44,13 -44,5 z"
       id="path307375"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2145,1490 c 3,-5 11,-10 16,-10 6,0 7,5 4,10 -3,6 -11,10 -16,10 -6,0 -7,-4 -4,-10 z"
       id="path307377"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2211,1493 c -1,-6 -8,-19 -17,-27 -8,-9 -11,-16 -6,-16 15,0 34,28 29,42 -4,9 -6,9 -6,1 z"
       id="path307379"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1920,1480 c 8,-5 20,-10 25,-10 6,0 3,5 -5,10 -8,5 -19,10 -25,10 -5,0 -3,-5 5,-10 z"
       id="path307381"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1180,1472 c 0,-12 19,-26 26,-19 2,2 -2,10 -11,17 -9,8 -15,8 -15,2 z"
       id="path307383"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1882,1444 c 11,-12 24,-15 43,-10 34,9 31,11 -20,20 -38,7 -39,6 -23,-10 z"
       id="path307385"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1100,1419 c 0,-10 10,-19 25,-21 17,-4 25,-1 25,8 0,8 -6,11 -16,7 -9,-3 -20,0 -25,8 -7,11 -9,11 -9,-2 z"
       id="path307387"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2063,1278 c -13,-16 -29,-86 -17,-75 9,9 35,80 30,84 -2,2 -8,-2 -13,-9 z"
       id="path307389"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1465,1270 c -4,-6 3,-10 14,-10 25,0 27,6 6,13 -8,4 -17,2 -20,-3 z"
       id="path307391"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1520,1270 c 0,-6 7,-10 15,-10 8,0 15,2 15,4 0,2 -7,6 -15,10 -8,3 -15,1 -15,-4 z"
       id="path307393"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1630,1276 c 0,-2 9,-6 20,-9 11,-3 20,-1 20,4 0,5 -9,9 -20,9 -11,0 -20,-2 -20,-4 z"
       id="path307395"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1745,1230 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307397"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1956,1154 c -4,-9 -4,-19 -1,-22 2,-3 7,3 11,12 4,9 4,19 1,22 -2,3 -7,-3 -11,-12 z"
       id="path307399"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 810,963 c -8,-4 -29,-17 -46,-30 -17,-12 -36,-23 -42,-23 -22,0 -45,-50 -44,-96 1,-32 12,-68 37,-116 22,-45 35,-84 35,-109 0,-29 10,-54 35,-92 19,-28 35,-59 35,-67 0,-33 101,-210 119,-210 5,0 18,-3 28,-7 12,-4 8,4 -12,24 -16,17 -35,37 -40,44 -39,52 -53,78 -60,109 -4,19 -15,49 -25,66 -16,28 -16,32 -1,43 14,10 13,11 -5,8 -26,-5 -42,23 -51,89 -3,24 -10,44 -16,44 -6,0 -8,3 -5,6 4,3 2,20 -3,37 -13,44 -3,67 29,67 31,0 19,18 -17,23 -21,3 -40,22 -41,40 0,4 11,7 25,7 26,0 34,-15 13,-23 -7,-3 0,-4 16,-3 33,2 46,22 19,29 -12,3 -13,5 -3,6 8,1 20,12 27,26 13,28 6,32 -23,10 -26,-20 -33,-19 -27,5 3,10 14,22 24,25 10,4 19,11 19,16 0,12 -7,11 -30,-1 -37,-20 -11,15 28,38 35,20 36,28 2,15 z"
       id="path307401"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 795,600 c 3,-5 8,-10 11,-10 2,0 4,5 4,10 0,6 -5,10 -11,10 -5,0 -7,-4 -4,-10 z"
       id="path307403"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2568,454 c -5,-4 -8,-19 -8,-33 0,-18 3,-22 11,-14 6,6 9,21 7,33 -1,12 -6,18 -10,14 z"
       id="path307405"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2546,381 c -4,-7 -5,-15 -2,-18 9,-9 19,4 14,18 -4,11 -6,11 -12,0 z"
       id="path307407"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2358,253 c 6,-2 18,-2 25,0 6,3 1,5 -13,5 -14,0 -19,-2 -12,-5 z"
       id="path307409"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2308,243 c 6,-2 18,-2 25,0 6,3 1,5 -13,5 -14,0 -19,-2 -12,-5 z"
       id="path307411"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1216,219 c -60,-5 -111,-11 -115,-14 -3,-3 63,-5 147,-3 124,2 149,5 135,16 -9,6 -26,11 -37,11 -12,-1 -70,-6 -130,-10 z"
       id="path307413"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1500,220 c -11,-7 -2,-10 32,-10 36,0 54,-6 79,-27 l 33,-28 -19,28 c -27,42 -89,60 -125,37 z"
       id="path307415"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2023,203 c 9,-2 23,-2 30,0 6,3 -1,5 -18,5 -16,0 -22,-2 -12,-5 z"
       id="path307417"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 2083,203 c 9,-2 25,-2 35,0 9,3 1,5 -18,5 -19,0 -27,-2 -17,-5 z"
       id="path307419"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1713,180 c -32,-13 -29,-17 7,-12 16,2 27,8 24,13 -3,5 -6,9 -7,8 -1,0 -12,-4 -24,-9 z"
       id="path307421"
       style="fill:#000000;fill-opacity:0.564706" />
    <path
       d="m 1778,173 c 6,-2 18,-2 25,0 6,3 1,5 -13,5 -14,0 -19,-2 -12,-5 z"
       id="path307423"
       style="fill:#000000;fill-opacity:0.564706" />
  </g>
  <text
     xml:space="preserve"
     style="font-size:13.3333px;font-family:Roboto;-inkscape-font-specification:Roboto;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:0.564706;fill-rule:evenodd;stroke-width:3;stroke-linejoin:round"
     x="321.23233"
     y="35"
     id="text19949"><tspan
       sodipodi:role="line"
       id="tspan19947"
       x="321.23233"
       y="35"
       style="font-size:13.3333px;text-align:center;text-anchor:middle">Reason</tspan><tspan
       sodipodi:role="line"
       x="321.23233"
       y="51.666626"
       style="font-size:13.3333px;text-align:center;text-anchor:middle"
       id="tspan30639" /><tspan
       sodipodi:role="line"
       x="321.23233"
       y="68.333252"
       id="tspan19953"
       style="font-size:6.66667px;text-align:center;text-anchor:middle">+ leads to +</tspan><tspan
       sodipodi:role="line"
       x="321.23233"
       y="84.99987"
       style="font-size:13.3333px;text-align:center;text-anchor:middle"
       id="tspan30641" /><tspan
       sodipodi:role="line"
       x="321.23233"
       y="101.6665"
       id="tspan19957"
       style="font-size:13.3333px;text-align:center;text-anchor:middle">Virtue</tspan><tspan
       sodipodi:role="line"
       x="321.23233"
       y="118.33312"
       style="font-size:13.3333px;text-align:center;text-anchor:middle"
       id="tspan30643" /><tspan
       sodipodi:role="line"
       x="321.23233"
       y="134.99974"
       id="tspan19959"
       style="font-size:6.66667px;text-align:center;text-anchor:middle">+ leads to +</tspan><tspan
       sodipodi:role="line"
       x="321.23233"
       y="151.66637"
       style="font-size:13.3333px;text-align:center;text-anchor:middle"
       id="tspan30645" /><tspan
       sodipodi:role="line"
       x="321.23233"
       y="168.33299"
       id="tspan19961"
       style="font-size:13.3333px;text-align:center;text-anchor:middle">Happiness</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:13.3333px;font-family:Roboto;-inkscape-font-specification:Roboto;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:0.564706;fill-rule:evenodd;stroke-width:3;stroke-linejoin:round"
     x="279"
     y="166.5"
     id="text35195"><tspan
       sodipodi:role="line"
       id="tspan35193" /></text>
  <text
     xml:space="preserve"
     id="text56907"
     style="fill:#000000;stroke-linejoin:round;font-size:6.66666667px;fill-rule:evenodd;stroke-width:3;-inkscape-font-specification:Roboto;font-family:Roboto;text-align:center;fill-opacity:0.56470591;white-space:pre;shape-inside:url(#rect56909)" />
</svg>
 `;
}
