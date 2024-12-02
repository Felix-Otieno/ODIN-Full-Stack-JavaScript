function Student() {   
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

EighthGrader.prototype = Object.create(Student.prototype)

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

function NinthGrader(name) {
    this.name = name
    this.grade = 9
  }
  
// noooo! not again!
NinthGrader.prototype = Object.create(Student.prototype)
  
NinthGrader.prototype.sayName = function() {
    console.log("HAHAHAHAHAHA")
}
  
const studentOne = new NinthGrader('Josh')
studentOne.sayName()

const studentTwo = new EighthGrader('Mary')
studentTwo.sayName()