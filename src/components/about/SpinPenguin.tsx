'use client'

import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function PenguinModel() {
  const { scene } = useGLTF('/3d/penguin.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.01} />
    </Center>
  )
}

export function SpinPenguin() {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="bg-muted/30 h-64 w-full max-w-md rounded-xl border dark:bg-neutral-900/50">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="size-full rounded-xl"
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <PenguinModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  )
}
