class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log(`Painting with color ${this.color}`)
  }
}

const obj = new Rectangle(10, 20, 30);
const area = obj.area();
console.log("Area:- ", area)
