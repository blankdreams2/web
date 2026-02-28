'use client'

import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function CarModel() {
  const { scene } = useGLTF('/3d/car.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.05} />
    </Center>
  )
}

export function SpinCar() {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="relative h-64 w-full max-w-md rounded-xl bg-muted/30 dark:bg-neutral-900/50">
        <span className="font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm">
          spin the car
        </span>
        <Canvas
          camera={{ position: [1, 0, 0], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="size-full rounded-xl"
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <CarModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  )
}
