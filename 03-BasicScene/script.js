console.log('Hello Three.js');

// Variable containing most essential classes in the library
console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Object
const geometry	= new THREE.BoxGeometry(1, 1, 1);
const material	= new THREE.MeshBasicMaterial({ color: 0x00ff00});
const mesh 	= new THREE.Mesh(geometry,material);

// Add mesh to scene
scene.add(mesh);

// --- Camera, Field of View (FOV), and Aspect Ratio
//
// Creating an object to be used later:
// Sizes
const sizes = {
	width: 800,
	height: 600
	};

// Adding a PerspectiveCamera with a 75 degree angle and the Aspect Ratio (width/height)
// Note: usually the angle is a 45 degree, but for debugging purposes it is 75, for now.

// #Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Moving the camera position backward
camera.position.z = 3;

// Adding the camera to scene
scene.add(camera);

// #Canvas
const canvas = document.querySelector('canvas.webgl');

// ...

// #Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
	});

// updating the size of the Renderer
renderer.setSize(sizes.width, sizes.height);

// First render
renderer.render(scene, camera);




//const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);





