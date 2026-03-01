'use client'

import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useRef } from 'react'

function CatModel() {
  const { scene } = useGLTF('/3d/cat.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.5} />
    </Center>
  )
}

function SpinCatScene() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const onInteractionStart = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/spinningcat.mp3')
      audioRef.current.loop = false
    }
    const audio = audioRef.current
    audio.currentTime = 0
    void audio.play().catch(() => {})
  }, [])

  const onInteractionEnd = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [])

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <CatModel />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        onStart={onInteractionStart}
        onEnd={onInteractionEnd}
      />
    </>
  )
}

export function SpinCat() {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="relative h-64 w-full max-w-md rounded-xl bg-muted/30 dark:bg-neutral-900/50">
        <span className="font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm">
          spin the boy
        </span>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="size-full rounded-xl"
        >
          <SpinCatScene />
        </Canvas>
      </div>
    </section>
  )
}
