// A colored 3d letter F
// from https://webgl2fundamentals.org/
export const F = {
    a_position: { numComponents: 3, data: new Float32Array([
          // left column front
          0,   0,  0,
          0, 15,  0,
          3,   0,  0,
          0, 15,  0,
          3, 15,  0,
          3,   0,  0,

          // top rung front
          3,   0,  0,
          3,  3,  0,
          10,   0,  0,
          3,  3,  0,
          10,  3,  0,
          10,   0,  0,

          // middle rung front
          3,  6,  0,
          3,  9,  0,
          6.7,  6,  0,
          3,  9,  0,
          6.7,  9,  0,
          6.7,  6,  0,

          // left column back
            0,   0,  3,
           3,   0,  3,
            0, 15,  3,
            0, 15,  3,
           3,   0,  3,
           3, 15,  3,

          // top rung back
           3,   0,  3,
          10,   0,  3,
           3,  3,  3,
           3,  3,  3,
          10,   0,  3,
          10,  3,  3,

          // middle rung back
           3,  6,  3,
           6.7,  6,  3,
           3,  9,  3,
           3,  9,  3,
           6.7,  6,  3,
           6.7,  9,  3,

          // top
            0,   0,   0,
          10,   0,   0,
          10,   0,  3,
            0,   0,   0,
          10,   0,  3,
            0,   0,  3,

          // top rung right
          10,   0,   0,
          10,  3,   0,
          10,  3,  3,
          10,   0,   0,
          10,  3,  3,
          10,   0,  3,

          // under top rung
          3,   3,   0,
          3,   3,  3,
          10,  3,  3,
          3,   3,   0,
          10,  3,  3,
          10,  3,   0,

          // between top rung and middle
          3,   3,   0,
          3,   6,  3,
          3,   3,  3,
          3,   3,   0,
          3,   6,   0,
          3,   6,  3,

          // top of middle rung
          3,   6,   0,
          6.7,   6,  3,
          3,   6,  3,
          3,   6,   0,
          6.7,   6,   0,
          6.7,   6,  3,

          // right of middle rung
          6.7,   6,   0,
          6.7,   9,  3,
          6.7,   6,  3,
          6.7,   6,   0,
          6.7,   9,   0,
          6.7,   9,  3,

          // bottom of middle rung.
          3,   9,   0,
          3,   9,  3,
          6.7,   9,  3,
          3,   9,   0,
          6.7,   9,  3,
          6.7,   9,   0,

          // right of bottom
          3,   9,   0,
          3,  15,  3,
          3,   9,  3,
          3,   9,   0,
          3,  15,   0,
          3,  15,  3,

          // bottom
          0,   15,   0,
          0,   15,  3,
          3,  15,  3,
          0,   15,   0,
          3,  15,  3,
          3,  15,   0,

          // left side
          0,   0,   0,
          0,   0,  3,
          0, 15,  3,
          0,   0,   0,
          0, 15,  3,
          0, 15,   0,
  ]) },
    a_color: { numComponents: 3, data: new Uint8Array([
          // left column front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // top rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // middle rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // left column back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // middle rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,

          // top rung right
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,

          // under top rung
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,

          // between top rung and middle
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,

          // top of middle rung
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,

          // right of middle rung
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,

          // bottom of middle rung.
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,

          // right of bottom
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,

          // bottom
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,

          // left side
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
    ]) },
    a_normal: { numComponents: 3, data: new Float32Array([
          // left column front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
 
          // top rung front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
 
          // middle rung front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
 
          // left column back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
 
          // top rung back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
 
          // middle rung back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
 
          // top
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
 
          // top rung right
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
 
          // under top rung
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
 
          // between top rung and middle
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
 
          // top of middle rung
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
 
          // right of middle rung
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
 
          // bottom of middle rung.
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
 
          // right of bottom
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
 
          // bottom
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
 
          // left side
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
  ]) },
};
