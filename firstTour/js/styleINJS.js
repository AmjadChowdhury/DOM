const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border = '2px solid green';
    section.style.marginTop = '10px';
    section.style.borderRadius = '5px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightgray'
}

const place = document.getElementById('places-container');
place.classList.add('bg-cyan')