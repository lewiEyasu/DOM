/*const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
*/
const alllink = document.querySelectorAll('a');
for(let link of alllink){
    link.style.color = 'red';

}

const list = document.querySelectorAll('li');
for(let li of list){
    li.innerHTML ='<a href="/wiki/Plumage" title="Plumage" style="color: red;">hello my man</a>' 
}
