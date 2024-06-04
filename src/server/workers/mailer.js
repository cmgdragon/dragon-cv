import nodemailer from 'nodemailer';
import oAuth2Client from './oAuth2';

const sendEmail = async (c) => {
    try {
        const { from, name, msg } = await c.req.json();

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

        await transporter.sendMail({
            from: `${from}`,
            to: process.env.MAIL_TO,
            subject: `¡Mensaje de ${name}! 🐲`,
            html: `${msg}<br><br>${from}`
        });

        return c.json({
            code: 200,
            success: '¡Mensaje enviado!'
        }, 200);
    } catch (error) {
        console.log(error);
        return c.json({
            code: 500,
            error: error.message
        }, 500);
    }
}

export default sendEmail;