const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'presales.everteam@gmail.com',
        pass: 'P@$$W0rd123'

    }});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const data = req.body;

        const mailOptions = {
            from: 'Presales Everteam <presales.everteam@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: data.email,
            subject: `Meeting Subject: ${data.event_name}`, // email subject
            html: `<html>
            <body>
               <strong>Meeting Subject: </strong>${data.event_name}
               <br><br>
               <strong>Time: </strong><br>
               Staring Time: ${data.event_start_date}<br>
               Ending Time: ${data.event_end_date}<br><br>
               <strong>Event Location: </strong>${data.event_location}<br><br>
               <strong>Topics: </strong><br>
               <ul id="topics">
                ${data.event_agenda}
            </ul>
               <br>
               <strong>Invitees: </strong><br>
               <ul id="attendees">
               ${data.event_invitees}
               </ul><br><br>
               <a href=
               "https://presales-etgs.com/demo/everteam.meeting/#/invitation/${data.event_name}"
               style=
               "background-color:#00AE8D;padding:14px 28px 14px 28px;border-radius:3px;line-height:18px!important;letter-spacing:0.125em;text-transform:uppercase;font-size:13px;font-family:'Open Sans',Arial,sans-serif;font-weight:400;color:#ffffff;text-decoration:none;display:inline-block;line-height:18px!important"
               target=
               "_blank">Confirm</a>
               <a href=
               "https://presales-etgs.com/demo/everteam.meeting/#/invitation/${data.event_name}"
               style=
               "background-color:#DC3545;padding:14px 28px 14px 28px;border-radius:3px;line-height:18px!important;letter-spacing:0.125em;text-transform:uppercase;font-size:13px;font-family:'Open Sans',Arial,sans-serif;font-weight:400;color:#ffffff;text-decoration:none;display:inline-block;line-height:18px!important"
               target=
               "_blank">Decline</a>
            </body>
         </html>`
          };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
