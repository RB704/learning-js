// if(1=="1")
// {
//     showmessage("zsxdcfgvhbjn");
// }
// else {
//     showpercent("qwertyuioqwertyui");
// }

// const header = document.getElementById('message');

// header.addEventListener('click',function(){
//     let review = document.getElementById('review');
//     if (review.classList.contains('d-none')){
//         review.classList.remove('d-none');
//         header.textContent = "Close this shit";
//     }
//     else{
//         review.classList.add('d-none');
//         header.textContent = "You cant Close this shit";
//     }
// });

const values = ['a','bbb','c','d'];
// values.splice(1,2,'foo');
// console.log(values);
values.forEach(function(item){
    console.log(item);
});

const set = values.filter(function(item){
    return item >'b';
});
console.log(set);

const found = values.find(function(item){
    return item.length > 1;
})