let walker;

function setup(){
  createCanvas(640,360)
  background(127)

  walker_purple = new Walker('#8A2BE2')
  walker_teal = new Walker('#7FFFD4') 
  walker_coral = new Walker('#FF7F50')
}

// Q: what tells draw() to keep repeating?
// https://p5js.org/reference/#/p5/draw
// the draw() function continuously executes the lines of code 
// use noLoop() to stop; use loop() to resume after noLoop()
// source code: https://github.com/processing/p5.js/blob/e44dc8c93099a85648052f85d725c507806bdd7d/src/core/main.js#L362

function draw(){

  // Q: is there a forEach() in p5?

  walker_purple.step()
  walker_purple.render(color)
  
  walker_teal.step()
  walker_teal.render(color)

  walker_coral.step()
  walker_coral.render(color)
}

class Walker {
  constructor (color) {
  // constructor(red,green,blue) {
    // width and height are system variables
    // set by the function createCanvas(width, height)
    this.x = width / 2
    this.y = height / 2
    this.color = color
  }

  step() {
    let choice = floor(random(4));

    if (choice === 0) {
      // one step right
      this.x++
    } else if (choice == 1) {
      // one step left
      this.x--
    } else if (choice == 2) {
      // one step down
      this.y++
    } else if (choice == 3) {
      // one step up
      this.y--
    }

    // https://p5js.org/reference/#/p5/constrain
    // constrain(val, min, max) constrains a val betwn a min && max value
    this.x = constrain(this.x, 0, width - 1) 
    this.y = constrain(this.y, 0, height - 1)

  }

  render() {
    // https://p5js.org/reference/#/p5/stroke
    // stroke() sets the color used to draw lines 
    stroke(color(this.color)) 
    point(this.x, this.y)
  }
}