import React, { Suspense } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";

import { HalfFloatType, LinearEncoding, Vector2 } from "three";
import { AdaptiveToneMappingPass } from "three/examples/jsm/postprocessing/AdaptiveToneMappingPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader.js";

import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,

  Effects 
} from "@react-three/drei";
import "./style.scss";


import { Skybox } from "./SkyBox";
import { AOTest } from "./aotest";


extend({ UnrealBloomPass, AdaptiveToneMappingPass, ShaderPass });

const RenderPipeline = () => (
  <Effects disableGamma encoding={LinearEncoding} type={HalfFloatType}>
    <unrealBloomPass
      args={[new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.0, 0.9]}
    />
    <adaptiveToneMappingPass args={[true, 256]} />
    <shaderPass args={[VignetteShader]} />
  </Effects>
);

function FullScene() {

  return (
    <>
      <OrbitControls 
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        max
      />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0008}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0008}
      />

      <AOTest />

    </>
  );
}

function App() {

  let AudioPath = process.env.PUBLIC_URL + "audio/hypercycle-theme.mp3"

  return (
    <Suspense fallback={null}>
      <Canvas 
        shadows
        flat
        gl={{
          logarithmicDepthBuffer: true,
        }}
        >

        <FullScene />
        <ambientLight intensity={0.2} />

        {/* <RenderPipeline /> */}
        <Skybox />

      </Canvas>

    </Suspense>
  );
}

export default App;