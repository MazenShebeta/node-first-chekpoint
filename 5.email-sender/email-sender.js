const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        //email credential
        user: '@gmail.com',
        //password credential
        pass: ''
    }
});

const mailOptions = {
    //sender email
    from: '@gmail.com', 
    //reciever email
    to: '@gmail.com',
    subject: 'Mail Test Numero Uno',
    text: 'Well That Worked!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err)
    console.log(err)
    else
    console.log('email sent: ' + info.response)
})