import * as THREE from 'three'

// get canvas
const canvas = document.getElementById('3d')

// resize canvas
const size = {
    width: innerWidth,
    height: innerHeight
}

addEventListener('resize', () => {
    size.width = innerWidth
    size.height = innerHeight
})

// make full screen
addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})

// create scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100)
scene.add(camera)
const renderer = new THREE.WebGL1Renderer({canvas})
renderer.setSize(size.width, size.height)

// animate scene 
const animate = () => {
    renderer.render(scene, camera)

    requestAnimationFrame(animate)
}

animate()