import * as THREE from 'three'
import { DirectionalLightHelper } from 'three'
import GSAP from 'gsap'
import Experience from '../Experience.js'

export default class Environment {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.debug = this.experience.debug
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    directionalLight.position.set(5, 10, 7.5); // Set the position of the light
    directionalLight.castShadow = true; // Enable shadows if needed
    this.scene.add(directionalLight);
    // Debug
    if(this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('environment')
      this.obj = {
        colorObj: {r:0 , g: 0, b: 0}
      }
    }

    // Setup
    this.setBackground()
  }

  setBackground() {
    this.bgColor = 0xd6d2ca
    this.scene.background = new THREE.Color(this.bgColor)
    this.scene.fog = new THREE.Fog(this.bgColor, 5, 20)
  }

  resize() {}

  update() {}
}
