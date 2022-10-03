import Stats from 'stats.js'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './test-three.scss'

export default function TestThree() {
  const containerRef = useRef(null)
  const w = window.innerWidth * 0.87
  const h = window.innerHeight
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, w / h, 1, 3000)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(w, h)

  const stat = new Stats()
  stat.setMode(0)
  stat.domElement.style.position = 'absolute'
  stat.domElement.style.right = '0px'
  stat.domElement.style.top = '0px'
  stat.domElement.style.left = 'auto'

  const debug = document.createElement('div')
  debug.style.position = 'absolute'
  debug.style.right = '100px'
  debug.style.top = '0px'
  debug.style.width = '500px'
  debug.style.height = '30px'
  debug.style.fontSize = '20px'
  debug.style.color = 'white'
  debug.style.textAlign = 'right'

  debug.innerHTML = '...'

  renderer.setClearColor(0x2f3630)
  camera.position.set(0, 0, 500)

  var light = new THREE.PointLight(0xffffff, 1, 1500)
  scene.add(light)
  light.position.y = 100
  light.position.x = 250

  let geo = new THREE.SphereGeometry(300, 10, 10)
  let mat = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  })
  var sphere = new THREE.Mesh(geo, mat)
  scene.add(sphere)

  function render() {
    requestAnimationFrame(render)
    stat.begin()

    sphere.rotation.y += 0.02
    debug.innerHTML = 'rot.y(' + sphere.rotation.y + ')'

    stat.end()
    renderer.render(scene, camera)
  }

  useEffect(() => {
    containerRef.current.appendChild(renderer.domElement)
    containerRef.current.appendChild(stat.domElement)
    containerRef.current.appendChild(debug)
    render()
  }, [])

  return (
    <>
      <div id='myBox' ref={containerRef}></div>
    </>
  )
}
