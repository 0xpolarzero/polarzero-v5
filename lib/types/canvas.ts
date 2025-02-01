import { Vector3 } from 'three';

export type EntityType = '/' | '/writing' | '/portfolio' | '/resume' | '';

export type EntityUniform = {
  uTime: {
    value: number;
  };
  uRadius: {
    value: number;
  };
  uColorA: {
    value: Vector3;
  };
  uColorB: {
    value: Vector3;
  };
  uGain: {
    value: number;
  };
  uBrighten: {
    value: number;
  };
};

export type EntityParameters = {
  count: number;
  radius: number;
  colors: [number, number, number][];
};
