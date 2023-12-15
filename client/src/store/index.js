import { proxy } from "valtio";

// initialize the proxy state
const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true, // is a logo being displayed on shirt
  isFullTexture: false,
  logoDecal: "./threejs.png", // three logo
  fullDecal: "./threejs.png", // three logo
});

export default state;
