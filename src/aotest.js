import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

import *  as THREE from "three";

import * as genericMaterials from "./GenericMaterials/GenericMaterials";
// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.

// const aorm = new THREE.TextureLoader().load( process.env.PUBLIC_URL + "models/tests/AORM.jpg", function ( map ) {
//   Table.material.map.flipY = false;
// });

let gunmetal = new THREE.MeshPhysicalMaterial( {
  color: '#999999',
  metalness: 0.3,
  roughness: 0.5,

} );

export function AOTest(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "models/tests/ao-test1.glb");
  
  const bakedAO = materials['Material.001'].aoMap;

  materials['Material.001'].dispose();

  // materials['Material.001'].roughness = 0.25;
  // materials['Material.001'].metalness = 0.25;
  // materials['Material.001'].metalness = 1;
  gunmetal.aoMap = bakedAO;
  // console.log(nodes.Cone.material);
  console.log(gunmetal);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={gunmetal}
        //material={nodes.Cone.material}
        position={[-0.08, 0.33, 0]}
        rotation={[0, 0, -3.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        //material={nodes.Cone.material}
        material={gunmetal}

        position={[-0.1, -0.12, 0]}
      />
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "models/tests/ao-test1.glb");

