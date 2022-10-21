import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import imgPath from 'scene.gltf'

const ComputerModel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      })

      renderer.outputEncoding = THREE.sRGBEncoding
      const camera = new THREE.PerspectiveCamera(30, 1)
      camera.position.set(0.2, 0.3, 3)
      const loader = new GLTFLoader()
      scene.background = new THREE.Color('white')
      const light = new THREE.DirectionalLight(0xffff00, 10)
      scene.add(light)
      // console.log('gl : ', imgPath)
      loader.load('../../../ComputerModel/scene.gltf', object => {
        scene.add(object.scene)
        // renderer.render(scene, camera)
        scene.background = new THREE.Color('white')
        function animate() {
          requestAnimationFrame(animate)
          object.scene.rotation.y += 0.01
          renderer.render(scene, camera)
        }
        animate()
      })
    }
  }, [canvasRef])

  return <canvas ref={canvasRef} id="canvas" width="70" height="70"></canvas>
}

export default ComputerModel
