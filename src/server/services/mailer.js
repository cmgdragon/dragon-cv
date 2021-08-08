import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (req, res) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
    });
    
    try {
        await transporter.sendMail({
            from: req.body.from,
            to: process.env.MAIL_TO,
            subject: `¡Mensaje de ${req.body.name}!`,
            text: req.body.msg
        });

        res.status(200).send({
            code: 200,
            success: '¡Mensaje enviado!'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            code: 500,
            error: error.message
        });
    }
}

export default sendEmail;