
// Setting up basic elements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha:true});

// Set and add render
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add a normal map texture material to the cube
const textureloader = new THREE.TextureLoader();
const normalTexture = textureloader.load('/img/asteroidNormal.png');

const normalMaterial = new THREE.MeshStandardMaterial();
normalMaterial.metalness = 0.1;
normalMaterial.roughness = 0.2;    
normalMaterial.normalMap = normalTexture;
normalMaterial.color = new THREE.Color(0x2400ff);


// Cube Geometry
const cubeGeometry = new THREE.BoxGeometry;
const cubeMaterial = normalMaterial;
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );
cube.position.set(1,1,1);

// Create a 3D geometry corresponde to the logo
const subSphereGeometry = new THREE.SphereGeometry(0.7,21,21);
const subSphereMaterial = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const subSphere = new THREE.Mesh(subSphereGeometry,subSphereMaterial);
// scene.add(subSphere);

const cone1Geometry = new THREE.ConeGeometry( 0.2, 1.8, 32 );
const cone1Material = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const cone1 = new THREE.Mesh( cone1Geometry, cone1Material );
// scene.add( cone1 );
cone1.position.set(0.7,1.2,0);
cone1.rotation.z = -0.785;

const cone2Geometry = new THREE.ConeGeometry( 0.2, 1.8, 32 );
const cone2Material = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const cone2 = new THREE.Mesh( cone2Geometry, cone2Material );
// scene.add( cone2 );
cone2.position.set(-0.7,-1.2,0);
cone2.rotation.z = 2.355;

const ringGeometry = new THREE.TorusGeometry( 1.5, 0.25, 16, 100 );
const ringMaterial = new THREE.MeshStandardMaterial( { color: 0x11ffff } );
const ring = new THREE.Mesh( ringGeometry, ringMaterial );

const logoGroup = new THREE.Group();
logoGroup.add( subSphere );
logoGroup.add( cone1 );
logoGroup.add( cone2 );
logoGroup.add(ring);
scene.add(logoGroup)



// Generate random color small spheres at random location
const spheres = [];

for (let index = 0; index < 20; index++) {
    let posX = Math.random()*-4 +2;
    let posY = Math.random()*-4 +2;
    let sphereGeometry = new THREE.SphereGeometry( 0.1, 10, 10 );
    let sphereMaterial = new THREE.MeshStandardMaterial( { color: 0x11ffff } );
    let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.add( sphere );

    spheres[index] = sphere;
    
    sphere.position.set(posX,-posY,posX);
}




camera.position.z = 5;

// Light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
scene.add(directionalLight)

const light = new THREE.PointLight( 0xff0000, 10, 100 );
light.position.set( 2, 2, 2 );
scene.add( light );

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    ring.rotation.x -= 0.01;
    ring.rotation.y += 0.01;

    for (let index = 0; index < spheres.length; index++) {
        // spheres[index].position.x += 0.01; 
        if(spheres[index].position.y >= 2){
            spheres[index].position.y = -2;
        }else{
            spheres[index].position.y += 0.01;
            spheres[index].position.x = Math.cos(spheres[index].position.y*5);
        }
        
    }


    renderer.render( scene, camera );
};

animate();

// Play animation in the background

var animationID;

const moveElements = function () {
    console.log("move");
    animationID = requestAnimationFrame( moveElements );

    cube.position.x -=0.02;
    cube.position.y -= 0.04;

    if (cube.position.x <=0) {
        cancelAnimationFrame(animationID)
    }
}

const scaleDownLogo = function(){

    console.log("scaleDownLogo");
    animationID = requestAnimationFrame( scaleDownLogo );

    logoGroup.scale.x -= 0.01;
    logoGroup.scale.y -= 0.01;
    logoGroup.scale.z -= 0.01;

    cube.scale.x -= 0.01;
    cube.scale.y -= 0.01;
    cube.scale.z -= 0.01;

    cube.position.y +=0.01;
    cube.position.x -=0.005;
    logoGroup.position.y -= 0.02;

    if (logoGroup.scale.y <= -1) {
        cancelAnimationFrame(animationID)
    }

}