import { MeshPhysicalMaterial } from "three";

let grillsMaterial = new MeshPhysicalMaterial( {
    color: '#600000',
    roughness: 1,
    clearcoat: 0.1,
} );

let mattBlack = new MeshPhysicalMaterial( {
    color: '#000000',
    roughness: 1,
    clearcoat: 0.03,
} );

let rubber = new MeshPhysicalMaterial( {
    color: '#090909',
    roughness: 0.5,
} );

let emissiveHighlight = new MeshPhysicalMaterial( {
    color: '#ff5d5d',
    roughness: 1,
    emissive: '#ff5d5d',
    emissiveIntensity: 1.7,
} );

let headlamp = new MeshPhysicalMaterial( {
    color: '#5ff9ff',
    roughness: 1,
    // emissive: '#800000',
    // emissiveIntensity: 1
} );

let ledlamp = new MeshPhysicalMaterial( {
    color: '#777777',
    roughness: 1,
    // emissive: '#800000',
    // emissiveIntensity: 1
} );

let clusterglow = new MeshPhysicalMaterial( {
    color: '#444444',
    roughness: 1,
    emissive: '#49cca5',
    emissiveIntensity: 1
} );

let gunmetal = new MeshPhysicalMaterial( {
    color: '#333333',
    metalness: 1,
    roughness: 0.45,
    sheen: 0.1
} );

let steel = new MeshPhysicalMaterial( {
    color: '#444444',
    metalness: 1,
    roughness: 0.3,
    sheen: 0.1
} );

let yellow = new MeshPhysicalMaterial( {
    color: '#ffae00',
    metalness: 1,
    roughness: 0.3,
    sheen: 0.1
} );

let chrome = new MeshPhysicalMaterial( {
    color: '#999999',
    metalness: 1,
    roughness: 0.2,
    sheen: 0.1
} );

let glass = new MeshPhysicalMaterial( {
    color: "#333333",
      roughness: 0,
      opacity: 1,
      transmission: 1,
      envMapIntensity: 7
} );

let titanium = new MeshPhysicalMaterial( {
    color: '#444444',
    metalness: 1,
    roughness: 0.45,
    sheen: 0.1,
    envMapIntensity: 5
} );

let glosspaint = new MeshPhysicalMaterial( {
    // color: '#ffaf23',
    color: '#000000',
    roughness: 0.4,
    // clearcoat: 0.6,
    envMapIntensity: 1
} );

export {
    grillsMaterial, mattBlack, rubber, chrome, steel, gunmetal, clusterglow, 
    ledlamp, headlamp, emissiveHighlight, glass, titanium, glosspaint
}