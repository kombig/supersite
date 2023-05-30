import React, {useRef} from 'react';
import {useGLTF} from '@react-three/drei'

export default function ThreeDLightningSupport({props}: any) {
    // @ts-ignore
    const {nodes, materials} = useGLTF('/models/lightning-support/lightning-support.glb')
    // eslint-disable-next-line react/no-unknown-property
    return <group {...props} dispose={null}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <mesh geometry={nodes.Upper_004.geometry} material={materials.Material} position={[0, 5500, 0]}/>
    </group>
}

useGLTF.preload('/models/lightning-support/lightning-support.glb')