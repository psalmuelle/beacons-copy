/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 scene.gltf 
Author: Igrium (https://sketchfab.com/Sam54123)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-swivel-chair-b416b2fa9f634fe0a881166a72d0f0d2
Title: Office Swivel Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.6, 0]} scale={3}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.SwivelChair} skeleton={nodes.Object_7.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
