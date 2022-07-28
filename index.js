var scene = new THREE.Scene(); //what you'll be viewing

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); //what the user sees the world through
//0.1 and 1000 and near and far clipping pane. Anything before the near clipping pane and after the far clipping pane you won't be able to see.

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//ensure the cube stays the same when the window resizes
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//create the shape

var geometry = new THREE.BoxGeometry(1, 1, 1); //width, depth, height

var cubeMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/image1.JPG"),
    side: THREE.DoubleSide,
  }),
];
//create a material color

var material = new THREE.MeshBasicMaterial(cubeMaterials);
//wireframe: true will show me the cube drawn, wireframe: false will just show me the front of the cube, it would look more like a square

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;
controls.update();

var update = function () {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};

//draw scene
var render = function () {
  renderer.render(scene, camera);
};

// run game loop
var GameLoop = function () {
  requestAnimationFrame(GameLoop); //allows us to run it every frame

  update();

  render();
};
GameLoop();
