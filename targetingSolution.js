class TargetingSolution { 
    x = 0;
    y = 0;
    z = 0;
    
    
    constructor(coordinates) {
        this.x = coordinates['x'];
        this.y = coordinates['y'];
        this.z = coordinates['z'];
    }

    target() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}

let coordinates = new TargetingSolution({x:1, y:2, z:3});

console.log(coordinates.target());
