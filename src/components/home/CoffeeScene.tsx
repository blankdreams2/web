'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Clone } from '@react-three/drei'
import type { Group } from 'three'

// cup: inside polaroid bottom-right, gentle steam-like bob
function CupCoffee() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/3d/cupcoffee.glb')

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = -0.6 + Math.sin(t * 0.6) * 0.04
    groupRef.current.rotation.z = Math.sin(t * 0.4) * 0.015
  })

  return (
    <group ref={groupRef} position={[0.5, -2, 1.75]}>
      <primitive object={scene} scale={1.25} />
    </group>
  )
}

// machine: outside polaroid right, floating
function CoffeeMachine() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/3d/coffeemachine.glb')

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = -0.5 + Math.sin(t * 0.8) * 0.06
    groupRef.current.rotation.z = -0.08 + Math.sin(t * 0.5) * 0.02
  })

  return (
    <group ref={groupRef} position={[1.15, -0.5, 0]}>
      <primitive object={scene} scale={0.5} />
    </group>
  )
}

// penguin: top-left outside polaroid
function Penguin() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/3d/penguin.glb')

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = 0.4 + Math.sin(t * 0.7) * 0.05
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
  })

  return (
    <group ref={groupRef} position={[-0.7, 0.4, 0.4]}>
      <Clone object={scene} scale={0.5} />
    </group>
  )
}

// rice: bottom-left outside polaroid
function Burger() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/3d/burger.glb')

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = -0.9 + Math.sin(t * 0.55) * 0.05
    groupRef.current.rotation.z = Math.sin(t * 0.45) * 0.03
  })

  return (
    <group ref={groupRef} position={[-1.0, -0.9, 0.3]}>
      <primitive object={scene} scale={0.05}  />
    </group>
  )
}

// computer: top-right outside polaroid
function Computer() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/3d/computer.glb')

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = 0.35 + Math.sin(t * 0.65) * 0.05
    groupRef.current.rotation.z = -0.05 + Math.sin(t * 0.4) * 0.02
  })

  return (
    <group ref={groupRef} position={[0.85, 0.35, 0.4]}>
      <Clone object={scene} scale={0.35} />
    </group>
  )
}

// Preload models so they're ready when scene mounts
useGLTF.preload('/3d/penguin.glb')
useGLTF.preload('/3d/computer.glb')

export function CoffeeScene() {
  return (
    <div className="absolute -bottom-6 -right-12 z-10 size-48 sm:size-96 overflow-visible">
      <div className="size-full min-h-[192px] min-w-[192px] sm:min-h-[300px] sm:min-w-[300px]">
        <Canvas
          camera={{ position: [-0.2, 0.6, 3.5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <CupCoffee />
          <CoffeeMachine />
          {/* <Penguin /> */}
          {/* <Computer /> */}
          <Burger />
        </Canvas>
      </div>
    </div>
  )
}
