const nodemailer = require('nodemailer');;

const sendMail = (email, password, {res}) => {
    console.log(process.env.NODEMAILER_PASSWORD);
	const mailer = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NODEMAILER_USERNAME,
			pass: process.env.NODEMAILER_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.NODEMAILER_USERNAME,
		to: email,
		subject: 'Mail for a new password',
		html: 'The password set for your account is: ' + password
	};

	mailer.sendMail(mailOptions, (error, response) => {
		if (error) {
			console.log(error);
			res.status(400);
			throw new Error('Email Invalid');
		}
	});
};

module.exports = {sendMail}