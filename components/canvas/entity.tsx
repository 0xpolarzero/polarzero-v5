import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

import fragmentShader from './shaders/fragmentShader';
import vertexShaders from './shaders/vertexShaders';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { ENTITY_PARAMETERS } from '@/lib/constants/canvas';
import { EntityType, EntityUniform } from '@/lib/types/canvas';

const Entity = () => {
  const type: EntityType = usePathname() as EntityType;
  const ref = useRef<THREE.Points | null>(null);
  const { viewport } = useThree();

  const { count, radius } = ENTITY_PARAMETERS;
  const colors = useMemo(() => ENTITY_PARAMETERS.colors, []);

  const particlesPosition: Float32Array = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const d = Math.sqrt(Math.random() - 0.5) * radius;
      const th = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      const x = d * Math.sin(th) * Math.cos(phi);
      const y = d * Math.sin(th) * Math.sin(phi);
      const z = d * Math.cos(th);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count, radius]);

  const uniforms: EntityUniform = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
      // spread it manually just for the compiler...
      uColorA: new THREE.Uniform(new THREE.Vector3(colors[0][0], colors[0][1], colors[0][2])),
      uColorB: new THREE.Uniform(new THREE.Vector3(colors[1][0], colors[1][1], colors[1][2])),

      uGain: {
        value: 1.0,
      },
      uBrighten: {
        value: 1.0,
      },
    }),
    [radius, colors],
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const shaderMaterial = ref.current.material as THREE.ShaderMaterial;

    // Time
    shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();

    // Placement
    ref.current.position.x = type === '/' || type === '/resume' ? viewport.width / 4 : 0;
  });

  useEffect(() => {
    if (!ref.current || !type) return;

    const shaderMaterial = ref.current.material as THREE.ShaderMaterial;
    shaderMaterial.vertexShader = vertexShaders[type];
    shaderMaterial.needsUpdate = true;
  }, [type]);

  return (
    <points ref={ref} scale={1.5}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        vertexShader={vertexShaders['/']}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default Entity;
