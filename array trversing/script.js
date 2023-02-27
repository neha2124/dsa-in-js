let arr = [1,23,34,33,4,45,78,9,01,10,39,38]
// traverse in array
// for(let i=0; i<arr.length; i++){
//     document.write(` arr of ${i} is ${arr[i]} <br>`)
// }
//accessing the given value
let el = document.getElementById("element")
function get(){
   let ele = el.value
    if(ele < arr.length ){
     alert(arr[ele])
    }else{
        alert("please input valid value")
    }
}
// inserting a value at given position 
// let data = [1,23,33,23,4,5,9,0,29,]
// function insert (){
//     let pos = document.getElementById("position").value;
//     let newEl = document.getElementById("new-el").value
//     newEl = parseInt(newEl)
//     console.log(data)
//     for(let i= data.length-1; i>=0; i--){
//         if(i == pos){
//             data[i] =newEl
//         }
//     }
// console.log(data)
// }
// insert()

//delete a value from given position
// let data =[10,20,30,32,24,10]
// let pos =3
// for(let i=pos; i<data.length; i++){
//     data[i]=data[i+1]
// }
// data.length = data.length-1;
// console.warn(data)