import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export const sendEmail = async (c)  => {
    const body = await c.req.json();
    console.log(body)
        if (!body['name'] || !body['from'] || !body['msg']) {
      c.status(400)
      return c.json({
          "status": "error",
          "message": "Invalid body"
      })
    }

    try {
        const { name, from, msg: email_message } = body

        const msg = createMimeMessage()
        msg.setSender({ name, addr: c.env.SENDER })
        msg.setRecipient(c.env.RECIPIENT)
        msg.setSubject(`¡Mensaje de ${name}! 🐲`)
        msg.addMessage({
            contentType: 'text/html',
            data: `${email_message}<br><br>${from}`
        })
      
        var message = new EmailMessage(
            c.env.SENDER,
            c.env.RECIPIENT,
            msg.asRaw()
        )

        await c.env.SEB.send(message)
    } catch (e) {

        c.status(500)
        return c.json({
            "status": "error",
            "message": "Email failed to send",
            "error_details": e.message
        });
    }
  
    c.status(200)
    return c.json({
        "code": 200,
        "status": "success",
        "message": "Email sent successfully"
    });
};