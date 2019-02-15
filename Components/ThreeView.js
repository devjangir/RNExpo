import * as Expo from 'expo';
import React, {Component} from 'react';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
/**
 * ComponentName
 */
class ThreeView extends Component { // eslint-disable-line react/prefer-stateless-function
  _onGLContextCreate1 = async (gl) => {
// 1. Scene
// var scene = new THREE.Scene();
// // 2. Camera
// const camera = new THREE.PerspectiveCamera(
//   75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
// // 3. Renderer
// const renderer = ExpoTHREE.createRenderer({ gl });
// renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
//
// // Define our shape (Below is a tetrahedron, but can be whatever)
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// // Define the material, Below is material with hex color #00ff00
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// // For custom material of any image, simply download any image into your project and use:
// // Define the full 3-D object
// const objectToRender = new THREE.Mesh(geometry, material);
// // Specifying the cameras Z position will allow the object to appear in front of the camera rather that in line (which the camera which is the default)
// camera.position.z = 2;
//
// scene.add(objectToRender);
// requestAnimationFrame(render);
// renderer.render(scene, camera);
// gl.endFrameEXP();
  }

  _onGLContextCreate = async gl => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
      );
      const renderer = ExpoTHREE.createRenderer({ gl });
      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

      //const geometry = new THREE.SphereBufferGeometry(1, 36, 36);
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshNormalMaterial({ color: 'yellow' })
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      camera.position.z = 4;
      const render = () => {
        requestAnimationFrame(render);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };
      render();
    };


  render() {
    return (
      <Expo.GLView
        style={{flex:1, backgroundColor: 'green'}}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }
}
export default ThreeView;
