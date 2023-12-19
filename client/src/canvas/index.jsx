import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { Environment } from "@react-three/drei";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      {/* <CameraRig>
      <Backdrop /> */}
      <Center>
        <Shirt />
      </Center>
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default CanvasModel;
