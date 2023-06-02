// HTML DOM
/**
 * Có 3 thành phần 
 * 1. Element thẻ : Id , class , tag
 * // Css selector , HTML collection
 * 2. Attribute thuộc tính thẻ mở
 * 3. Text Chữ
 */
// Node
//---------------------
// Js
document.write('Hello World');
// console.log(document);

var lanh = document.getElementsByClassName('header'); // lay nhieu
// var lanh = document.getElementById('header'); //lay1
// var lanh = document.getElementsByTagName('h1'); //lay nhieu the
// console.log(lanh);

var heading = document.querySelector('.box .heading-2');
// var heading = document.querySelectorAll('.box .heading-2');// lay het
// var heading = document.querySelector('.box .heading-2:first-child');// lay so 1
//var heading = document.querySelector('.box .heading-2:nth-child(2)');// lay so 2

console.log(heading);

// console.log(document.forms['form-1']);
console.log(document.forms.thaynghiadz);
console.log(document.anchors);// the a