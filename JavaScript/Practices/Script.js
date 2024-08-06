// const text = document.querySelector(".text");
// const changeColor = document.querySelector(".changeColor");

// text.style.color = 'Orange';
// changeColor.style.color = 'green';

//Callback function
// changeColor.addEventListener('click', function(){
//     text.classList.toggle('change');
// });


const userList = document.querySelector(".name-list");
// for (user of userList){
//     user.addEventListener('click', function(){
//         console.log(this);
//     });
// }

const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});


// console.log(listInput.value);