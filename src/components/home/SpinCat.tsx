'use client'

import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function CatModel() {
  const { scene } = useGLTF('/3d/cat.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.5} />
    </Center>
  )
}

export function SpinCat() {
  return (
    <section className="flex flex-col items-center py-12">
      {/* <p className="text-muted-foreground text-sm">Drag to spin the cat</p> */}
      <div className="h-64 w-full max-w-md rounded-xl bg-muted/30 dark:bg-neutral-900/50">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="size-full rounded-xl"
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <CatModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  )
}
