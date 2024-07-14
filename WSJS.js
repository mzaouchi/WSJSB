var name = "Belhssane"

console.log(name)

console.log(typeof(name))



var a = 6

console.log(a)

var b = typeof(a)

console.log(b)

var test = true

console.log(typeof(test))

var t = [1,2,3,55,8888]

console.log(t)
console.log(t[3])

console.log(typeof(t))

var fedi = {
    track:  "FULLSTACK JS",
    bornOn : "12/12/1999",
    present : true
    }
  
  console.log(fedi)
  console.log(fedi.bornOn)
  console.log(fedi.track)
  
  console.log(typeof(fedi))
  
  console.log(Object.keys(fedi))
  
  console.log(Object.values(fedi))
  
  console.log(Object.entries(fedi))

  var belhssane 

  console.log(typeof(belhssane))

  var a = null
console.log(typeof(a))

var a = 5
var b = 2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a)
a = a + 3
console.log(a)
a++
console.log(a)
a += 4 // a= a + 4
console.log(a)
a--
console.log(a)
a-=2
console.log(a)

a+= 0.5

console.log(a)

console.log(a**2)

var a = 5
var b = 9
var c = "5"
console.log(a + Number(c))
console.log(Number("Essia"))
console.log(a == b)
console.log(a == c)
console.log(a === c)
console.log(a != c)
console.log(a !== c)
console.log(a > b)
console.log(a >= c)

var a = 5
var b = 9
var c = "5"
console.log(a + Number(c))
console.log(Number("Essia"))
console.log(a == b)
console.log(a == c)
console.log(a === c)
console.log(a != c)
console.log(a !== c)
console.log(a > b)
console.log(a >= c)

console.log(a == b && a >= c)
console.log(a == b || a >= c)

var age = 50

if(age<18){
  console.log("Mineur")
}else if(age<60){
  console.log("Adulte")
}else{
  console.log("Meyet")
}