import { jsx, jsxs } from 'react/jsx-runtime';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function CarModel() {
  const { scene } = useGLTF("/3d/car.glb");
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.05 }) });
}
function SpinCar() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full max-w-md rounded-xl bg-muted/30 dark:bg-neutral-900/50", children: [
    /* @__PURE__ */ jsx("span", { className: "font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm", children: "spin the car" }),
    /* @__PURE__ */ jsxs(
      Canvas,
      {
        camera: { position: [1, 0, 0], fov: 50 },
        gl: { antialias: true, alpha: true },
        className: "size-full rounded-xl",
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
          /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
          /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(CarModel, {}) }),
          /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, enablePan: false })
        ]
      }
    )
  ] }) });
}

export { SpinCar as S };
