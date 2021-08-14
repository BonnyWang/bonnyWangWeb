import app from './main.js'

// Setting up basic elements

const loaders = [];

// Mixer for 3D model animation
let mixer;

let clock = new THREE.Clock();

let i;

let allLoaded = 0;

// Models using GLTFLoaders
const asteroidModels = [];
let realAsteroid;
let satelliteModel;
let textMesh;


// Setting up basic ellements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha:true});

camera.position.z = 5;

// Set and add render
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add a normal map texture material to the cube
const textureloader = new THREE.TextureLoader();
const normalTexture = textureloader.load('/spacePersona/img/asteroidNormal.png');

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
cube.position.set(0,2.2,0);
cube.scale.x = 0.3;
cube.scale.y = 0.3;
cube.scale.z = 0.3;

// Create a 3D geometry corresponde to the logo
const subSphereGeometry = new THREE.SphereGeometry(0.7,21,21);
const subSphereMaterial = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const subSphere = new THREE.Mesh(subSphereGeometry,subSphereMaterial);

const cone1Geometry = new THREE.ConeGeometry( 0.2, 1.8, 32 );
const cone1Material = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const cone1 = new THREE.Mesh( cone1Geometry, cone1Material );
cone1.position.set(0.7,1.2,0);
cone1.rotation.z = -0.785;

const cone2Geometry = new THREE.ConeGeometry( 0.2, 1.8, 32 );
const cone2Material = new THREE.MeshStandardMaterial({ color: 0x11ffff });
const cone2 = new THREE.Mesh( cone2Geometry, cone2Material );
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
logoGroup.scale.x = 0.2;
logoGroup.scale.y = 0.2;
logoGroup.scale.z = 0.2;
logoGroup.position.y = -2.5;
scene.add(logoGroup)


// Generate random color small spheres at random location
const spheres = [];

for (let index = 0; index < 20; index++) {
    let posX = Math.random()*-4 +2;
    let posY = Math.random()*-4 +2;
    let sphereGeometry = new THREE.SphereGeometry( 0.05, 10, 10 );
    let sphereMaterial = new THREE.MeshStandardMaterial( { color: 0x11ffff } );
    let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.add( sphere );

    spheres[index] = sphere;
    
    sphere.position.set(posX,-posY,posX);
}




// Light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5);
scene.add(directionalLight)

const light = new THREE.PointLight( 0xff0000, 10, 100 );
light.position.set( 2, 2, 2 );
scene.add( light );

const glight = new THREE.PointLight( 0xffffff, 0.5, 0 );
glight.position.set( 0, 0, -10);
scene.add( glight );

let startBlinkTime;
startBlinkTime = Date.now();


// Animation functions
const animate = function () {

    requestAnimationFrame( animate );

    // var delta = clock.getDelta();
    // if ( mixer ) mixer.update( delta );

    if(satelliteModel.position.x <=2){
        satelliteModel.position.x +=0.001;
        satelliteModel.position.y -= 0.0005;
    }else{
        satelliteModel.position.x = -2;
        satelliteModel.position.y = -1;
    }

    satelliteModel.rotation.y += 0.001;
   
    

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    ring.rotation.x -= 0.01;
    ring.rotation.y += 0.01;

    
    if(Date.now() - startBlinkTime >= 900){
        
        startBlinkTime = Date.now();
        glight.position.z = -10;
    }
    else if (Date.now() - startBlinkTime >= 700){
        
        glight.position.z = 5;
    }
    else if (Date.now() - startBlinkTime >= 550){

        glight.position.z = -10;
    
    }else if(Date.now() - startBlinkTime >= 500){
       
        glight.position.z = 5;

    }else{

        glight.position.z = -10;

    }

    let index;
    
    for ( index = 0; index < spheres.length; index++) {
        // spheres[index].position.x += 0.01; 
        if(spheres[index].position.y >= 2){
            spheres[index].position.y = -2;
        }else{
            spheres[index].position.y += 0.01;
            spheres[index].position.x = Math.cos(spheres[index].position.y*5);
        }
        
    }

    for ( index = 0; index < asteroidModels.length; index++) {
        // spheres[index].position.x += 0.01; 
        asteroidModels[index].rotation.x +=0.05;
        asteroidModels[index].rotation.y += 0.05;
        if(asteroidModels[index].position.y >= 2){
            asteroidModels[index].position.y = -2;
        }else{
            asteroidModels[index].position.y += 0.01;
            asteroidModels[index].position.x = Math.cos(asteroidModels[index].position.y*5);
        }
        
    }


    renderer.render( scene, camera );
};



// Play animation in the background

var animationID;

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


// Add mouse events to the three js scene

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {

	mouse.x = event.touches[0].clientX - window.innerWidth/2;
	mouse.y = event.touches[0].clientY - window.innerHeight/2;

}

var clickDetectionID;

function renderAnimate() {

    clickDetectionID = requestAnimationFrame(renderAnimate);
      
    cube.position.x += mouse.x*0.00002;
    logoGroup.position.x += mouse.x*0.00002;
    textMesh.position.x += mouse.x*0.00008;

    if(textMesh.position.x >= 0.5){
        app.showQ1();

        cube.position.x = 0;
        logoGroup.position.x = 0;

        scaleDownLogo();

        scene.remove(textMesh);
        cancelAnimationFrame(clickDetectionID);
    }

	// update the picking ray with the camera and mouse position

	// raycaster.setFromCamera( mouse, camera );

	// // calculate objects intersecting the picking ray
	// const intersects = raycaster.intersectObjects( scene.children );

	// for (i = 0; i < intersects.length; i ++ ) {


    //     if(intersects[i].object == textMesh){
    //         console.log("Text clicked");
    //         app.showQ1();
    //         scaleDownLogo();

    //         scene.remove(textMesh);
    //         cancelAnimationFrame(clickDetectionID);
    //     }

	// 	intersects[ i ].object.material.color.set( 0x000000 );

	// }
    
    if(textMesh.position.x >= -0.2 && (mouse.x == 0)){
        textMesh.position.x = -1.5;
    }

    textMesh.position.x +=0.001;

	renderer.render( scene, camera );

}






// Preload
let preAnimID;
const preLoadAnimation = function(){
    preAnimID = requestAnimationFrame(preLoadAnimation);
    realAsteroid.rotation.x +=0.1;
    renderer.render(scene, camera);
}

// Result Load Animation
let resultLoadAnimID;
let resultLoadStart;

const resultLoad = function(){
    resultLoadStart = Date.now();
    resultLoadAnim();
}

const resultLoadAnim = function(){
    resultLoadAnimID = requestAnimationFrame(resultLoadAnim);
    scene.add(realAsteroid);

    realAsteroid.rotation.y += 0.3;
    realAsteroid.scale.x += 0.005;
    realAsteroid.scale.y += 0.005;
    realAsteroid.scale.z += 0.005;

    if(Date.now() - resultLoadStart >= 2500){
        scene.remove(realAsteroid);
        cancelAnimationFrame(resultLoadAnimID);
        app.qShowIndex += 1;
        
    }

    console.log("loadingResult");
    
}

export default resultLoad;


// Load Functions


const loadAsteroids = function(){
    const asteroids = ['/spacePersona/img/asteroid0.glb','/spacePersona/img/asteroid1.glb','/spacePersona/img/fakeAsteroid.glb'];

    for ( i = 0; i < asteroids.length; i++) {
        loaders[i] = new THREE.GLTFLoader();
        loaders[i].load( asteroids[i], function ( gltf ) {

            scene.add( gltf.scene );

            // Need to be careful here since the load function is ashynchronous
            asteroidModels[asteroidModels.length] = gltf.scene;

            gltf.scene.position.y = Math.random()*-4+2;

            allLoaded += 1;

            if(allLoaded === 3){
                loadRealAsteroid();
            }
        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );
        
    }

}

const loadRealAsteroid = function(){
    const realAstoidLoader = new THREE.GLTFLoader();
    realAstoidLoader.load("/spacePersona/img/realAsteroid.glb", function ( gltf ) {

        realAsteroid = gltf.scene;

        // if(!app.startShow){
        scene.add( gltf.scene );

        preLoadAnimation();
        loadText();
        // }
        
    }, undefined, function ( error ) {

        console.error( error );

    } );
}

const loadText = function(){
    // Load 3D text
    const textLoader = new THREE.FontLoader();

    textLoader.load( '/spacePersona/img/font.json', function ( font ) {

        const textGeometry = new THREE.TextGeometry( '>>滑动进入矿时代', {
            font: font,
            size: 0.2,
            height: 0.1,
        } );

        const textMeterial = new THREE.MeshStandardMaterial({color: 0x11ff00});
        textMesh = new THREE.Mesh(textGeometry, textMeterial);

        textMesh.position.x = -0.5;
        textMesh.position.y = -1.5;

        allLoaded += 1;

        loadSatellite();

        // if(allLoaded >= 5){
            // app.startShow = true;
            // scene.add(textMesh);
            // renderAnimate();
        // }
    } );

}


// Load satellite model
const loadSatellite = function(){

    const satelliteLoader = new THREE.GLTFLoader();
    satelliteLoader.load("/spacePersona/img/satellite.glb", function ( gltf ) {

        scene.add( gltf.scene );

        satelliteModel = gltf.scene;
        satelliteModel.position.x = -1;
        satelliteModel.position.y = -2.5;
        satelliteModel.position.z = 0;

        console.log("loaded satellite");


        if(typeof preAnimID !== 'undefined'){
            cancelAnimationFrame(preAnimID);
            
        }

        if(typeof realAsteroid !== 'undefined'){
            scene.remove(realAsteroid);
        }
        
        allLoaded += 1;

        // if(allLoaded >= 5){
            app.startShow = true;
            scene.add(textMesh);
            renderAnimate();
        // }


        animate();

    }, function ( xhr ) {

        console.log(xhr.loaded / xhr.total);

        app.loadProgress = Math.floor(xhr.loaded / xhr.total* 100);

    }, function ( error ) {

        console.error( error );

    } );
}

loadAsteroids();
document.addEventListener('touchmove', onMouseMove);

// loader.load( '/spacePersona/img/asteroid1.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

//     asteroidModel = gltf.scene;

//     // var animations = gltf.animations;
    
//     // mixer = new THREE.AnimationMixer( gltf.scene);

//     // var action = mixer.clipAction( animations[ 0 ] ); // access first animation clip
//     // action.play();

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

