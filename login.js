// here test the 'box' onClickButton function





function onLogin() {

    const emailTI = document.getElementById('emailti').value;
    const password = document.getElementById('passwordti').value;
    console.log('My Credentials: email:', emailTI, 'password:', password);
    alert(
        `Der Bneutzer hat sich erflogreich mit ${emailTI} und ${password} angemeldet`
    )

    const box = document.getElementById('box')
    console.log(box.style.backgroundColor)
    if (box.style.backgroundColor === 'darkgrey' || box.style.backgroundColor === '') {
        box.style.backgroundColor = 'blue'
    } else {
        box.style.backgroundColor = 'darkgrey'
    }




}




