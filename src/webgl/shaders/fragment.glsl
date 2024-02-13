precision mediump float;
varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv, 0.21f, 1.0f);
}