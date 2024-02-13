uniform float time;
varying vec2 vUv;

void main() {
  vec3 nPosition = position;
  nPosition.z += sin(nPosition.y * 2.0 * sin(2.0) + time * 0.51);
  nPosition.z += sin(nPosition.x * 2.0 * sin(2.0) + time * 0.51);

  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(nPosition, 1.0);
}