const sections = document.getElementsByTagName('section');
// console.log(sections);

for(const section of sections){
    // console.log(section);
    console.log(section.innerText)
}

const sectionList = document.getElementById('section-1');
console.log(sectionList)

const ulLI = document.getElementsByClassName('section-1List');
for(const li of ulLI){
    console.log(li)
}

const staticSelect = document.querySelectorAll('#section-1 .section-1List');
for(const li of staticSelect){
    console.log(li.innerText);
}

// getattribute.setAttribute korte chaile id diye dora lage..
const title = document.getElementById('title2');
console.log(title.getAttribute('id')); // id r namegula dibe
console.log(title.getAttribute('class'));//class r namegual dibe
title.setAttribute('title','tip tip');
console.log(title.classList)

title.innerText = 'New heading from js';
title.style.color = 'blue';
title.style.backgroundColor = 'lightcoral';
console.log(title.nextElementSibling);
console.log(title.parentNode)

const sec = document.getElementById('section-3');
console.log(sec.childNodes)

// where to add
const main = document.getElementById('main-container');

// ki add korbo..
const newSection = document.createElement('section');
// add korsi..
main.append(newSection);

const h1 = document.createElement('h1');
h1.innerText = 'Last heading section';

newSection.append(h1)

const ul = document.createElement('ul');
ul.innerHTML = `
<ul>
  <li>Hello 1</li>
  <li>Hello 2</li>
  <li>Hello 3</li>
</ul>
`
newSection.append(ul);

