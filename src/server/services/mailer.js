import nodemailer from 'nodemailer';
import oAuth2Client from './oAuth2';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (req, res) => {

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken
        }
    });
    
    try {
        await transporter.sendMail({
            from: `${req.body.name} 🐲 <${req.body.from}>`,
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