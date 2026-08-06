import { useEffect, useState } from "react";
import * as THREE from "three";

// The house mark, loaded once and shared by every vessel that carries it.
//
// The SVG is rasterised into a canvas rather than handed straight to
// TextureLoader: an SVG element's intrinsic size is whatever the browser
// decides (this one reports 124x150), so uploading it directly gives a
// blurry, arbitrarily-sized texture — and some browsers refuse to upload an
// SVG image to WebGL at all. Drawing it ourselves fixes the resolution and
// works everywhere.

const TEXTURE_HEIGHT = 256;
const ASPECT = 464.78 / 564.2; // from the SVG's viewBox

let cached = null;
let pending = null;

function load() {
  if (cached) return Promise.resolve(cached);
  if (!pending) {
    pending = new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.height = TEXTURE_HEIGHT;
        canvas.width = Math.round(TEXTURE_HEIGHT * ASPECT);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 4;
        cached = texture;
        resolve(texture);
      };
      // a missing logo must never break the scene
      image.onerror = () => resolve(null);
      image.src = "/dt-favicon.svg";
    });
  }
  return pending;
}

export function useLogoTexture() {
  const [texture, setTexture] = useState(cached);
  useEffect(() => {
    let alive = true;
    load().then((t) => {
      if (alive) setTexture(t);
    });
    return () => {
      alive = false;
    };
  }, []);
  return texture;
}

export const LOGO_ASPECT = ASPECT;
