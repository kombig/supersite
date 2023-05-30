import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";

import ThreeDLightningSupport from "../../../../three-d-lightning-support/three-d-lightning-support";

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSevenCss from "./section-sevenCss.module.css";

const SectionSeven = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSevenCss.content}>
                    <h1 className={sectionSevenCss.title}>3D визуализация</h1>
                    <Canvas
                        camera={{
                            fov: 90,
                            position: [1000,500, 700],
                            far: 100000
                        }}
                    >
                        <Suspense fallback={null}>
                            <Environment preset={"city"}/>
                            {/* @ts-ignore */}
                            <OrbitControls/>
                            <ThreeDLightningSupport/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSeven;
