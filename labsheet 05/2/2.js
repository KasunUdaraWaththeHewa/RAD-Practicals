class Solid{
    constructor() {
        if (this.constructor === Solid) {
            throw new Error("Cannot instantiate abstract class.");
        }
    }
    calculateSurfaceArea() {
        throw new Error("Abstract method calculateSurfaceArea() not implemented.");
    }

    calculateVolume() {
        throw new Error("Abstract method calculateVolume() not implemented.");
    }
}
class Cube extends Solid{
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }
    calculateSurfaceArea() {
        return 6 * this.sideLength ** 2;
    }

    calculateVolume() {
        return this.sideLength ** 3;
    }

}
class Cuboid extends Solid{
    constructor(length, width, height) {
        super();
        this.length = length;
        this.width = width;
        this.height = height;
    }

    calculateSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

    calculateVolume() {
        return this.length * this.width * this.height;
    }
}
class Cylinder extends Solid{
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateSurfaceArea() {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }

    calculateVolume() {
        return Math.PI * this.radius ** 2 * this.height;
    }
}
class Sphere extends Solid{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateSurfaceArea() {
        return 4 * Math.PI * this.radius ** 2;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * this.radius ** 3;
    }
}
class Cone extends Solid{
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateSurfaceArea() {
        const slantHeight = Math.sqrt(this.radius ** 2 + this.height ** 2);
        return Math.PI * this.radius * (this.radius + slantHeight);
    }

    calculateVolume() {
        return (1 / 3) * Math.PI * this.radius ** 2 * this.height;
    }
}