import Stats from 'stats.js'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './GeoMetrix.css'
import Texture from '../../assets/images/box.jpeg'

export default function GeoMetrix() {
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

  var light = new THREE.PointLight(0xffffff, 1, 500)
  scene.add(light)
  light.position.y = 100
  light.position.x = 0
  light.position.z = 200

  let geo = new THREE.BoxGeometry(100, 100, 100)
  let mat = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  })
  var box1 = new THREE.Mesh(geo, mat)
  scene.add(box1)
  box1.position.x = -w / 3
  box1.position.y = 100

  geo = new THREE.BoxGeometry(100, 100, 100)
  mat = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
  })
  var box2 = new THREE.Mesh(geo, mat)
  scene.add(box2)
  box2.position.x = -w / 6
  box2.position.y = 100

  const texture = new THREE.TextureLoader().load(Texture)
  geo = new THREE.BoxGeometry(100, 100, 100)
  mat = new THREE.MeshPhongMaterial({
    map: texture,
  })
  var box3 = new THREE.Mesh(geo, mat)
  scene.add(box3)
  box3.position.y = 100

  geo = new THREE.BoxGeometry(100, 100, 100)
  mat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.BackSide,
  })
  var box4 = new THREE.Mesh(geo, mat)
  scene.add(box4)
  box4.position.x = w / 6
  box4.position.y = 100

  function render() {
    requestAnimationFrame(render)
    stat.begin()

    box1.rotation.x += 0.02
    box2.rotation.y += 0.03
    box3.rotation.x += 0.01
    box3.rotation.z += 0.02
    box4.rotation.x += 0.01
    box4.rotation.z += 0.02

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
