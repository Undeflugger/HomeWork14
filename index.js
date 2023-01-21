const input = document.getElementById('input');
const text = document.querySelector('textarea');
text.addEventListener('focus', addDiv);
text.addEventListener('focusout',removeDiv);

function addDiv(event){
    event.stopPropagation();
    const div = document.createElement('div');
    div.id = 'ghost';
    div.style = 'height: 70px; width: 150px; background: grey; margin-left: 15px;';
    input.append(div);
    console.log(div);
}

function removeDiv(event){
    document.getElementById('ghost').remove();
}
