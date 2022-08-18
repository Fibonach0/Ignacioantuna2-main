function sendEmail() {

    let name = valueById('name')
    let email = valueById('email')
    let subject = valueById('subject')
    let text = valueById('comments')

    Email.send({
            Host: "smtp.gmail.com",
            Username: "ignacio.antu@gmail.com",
            Password: "fqgowavhdwqkopuk",
            To: 'ignacio.antu@gmail.com',
            From: email,
            Subject: name + " ; ; " + subject,
            Body: text,
        })
        .then(function(message) {
            alert("El mensaje se envió correctamente. Muchas gracias! ")
        });
}

function valueById(element) {
    return document.getElementById(element).value
}