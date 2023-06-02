// 1. getElementById
// 2. getElementsByTagName
// 3. getElementsByClassName
// 4. querySelector
// 5. querySelectorAll
// 6. HTML collection
// 7. document.write
//--------------------------------------------
// var h1ele = document.getElementsByTagName('h1')[0];
// console.log(h1ele);

// var h1ele = document.getElementsByClassName('header');
// console.log(h1ele);

var hihi = document.querySelectorAll('.header');
for(var i=0; i<hihi.length; i++){
    console.log(hihi[i]);
}
