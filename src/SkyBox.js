import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { CubeTextureLoader } from "three";

export const Skybox = () => {
  const { scene } = useThree();

  useEffect(() => {
    const urls = [
        process.env.PUBLIC_URL + "/textures/skybox/right.png",
        process.env.PUBLIC_URL + "/textures/skybox/left.png",
        process.env.PUBLIC_URL + "/textures/skybox/top.png",
        process.env.PUBLIC_URL + "/textures/skybox/bottom.png",
        process.env.PUBLIC_URL + "/textures/skybox/front.png",
        process.env.PUBLIC_URL + "/textures/skybox/back.png",
    ];

    const cube = new CubeTextureLoader().load(urls);


    //cube.rotation([Math.PI / 2, 0, 0]);

    scene.background = cube;
  }, []);

  return null;
};

function getRadians(degrees) {
    return Math.PI / 180 * degrees;
  }