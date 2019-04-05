// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log(`----------------- Prototypes Refactored into Classes -------------------`)
class CubiodMaker2 {
  constructor(cubeObj){
    this.length = cubeObj.length;
    this.width = cubeObj.width;
    this.height = cubeObj.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

const cuboid2 = new CubiodMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(`==========================     CLASS     ========================================`);
console.log(`=======================     STRETCH START     ===================================`);
console.log(`=================================================================================`);

class CubeMaker extends CubiodMaker2 {
  constructor(cubeObj) {
    super(cubeObj);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }

  cubeVolume() {
    return Math.pow(this.length, 3);
  }
}

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

console.log(cube.cubeSurfaceArea());
console.log(cube.cubeVolume());

console.log(`==========================     CLASS     ========================================`);
console.log(`=======================     STRETCH END     ===================================`);
console.log(`=================================================================================`);
