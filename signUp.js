function onSignUp() {
    const emailTI = document.getElementById('emailti').value
    const passwordti_1 = document.getElementById('passwordti_1').value
    const passwordti_2 = document.getElementById('passwordti_2').value
    const firstName = document.getElementById('firstnameti').value
    const lastName = document.getElementById('lastnameti').value


    if (emailTI.length < 3) {
        alert('Email cannot have less than 3 letters!')

    } else if (passwordti_1 !== passwordti_2) {
        alert('The passwords are not the same!')

    } else if (emailTI, passwordti_1, passwordti_2, firstName, lastName == undefined) {
        alert('Every box has to be filled!')
    } else {
        alert(`You have succesfully signed up with
            E-mail: ${emailTI}
            First name: ${firstName}
            Last name: ${lastName}`)
    }



}

