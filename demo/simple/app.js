var WIDTH = 800;
var HEIGHT = 400;

var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 1000;

var $container = document.getElementById('container');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR);

var scene = new THREE.Scene();

scene.add(camera);

camera.position.z = 300;
renderer.setSize(WIDTH, HEIGHT);

$container.appendChild(renderer.domElement);


var radius = 50;
var segments = 16;
var rings = 16;
var sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0xcc000e
});

var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        radius,
        segments,
        rings
      ),
    sphereMaterial
    );

scene.add(sphere);

// create a point light
var pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);


renderer.render(scene, camera);
