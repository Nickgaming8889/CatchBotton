const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function(){
    alert("A verdad que si querias UwU")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){

    const randomX = parseInt(Math.random(70)*600);
    const randomY = parseInt(Math.random(55)*600);

    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`)
});