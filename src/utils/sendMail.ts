
import transporter from "@/src/utils/mailconfig";
interface SendMailOptions {
    to:string;
    subject:string;
    html:string;
}

const fromEmail = process.env.EMAIL_USER
const sendMail=async ({to,subject,html}:SendMailOptions):Promise<void>=>{
    await transporter.sendMail({
        from:fromEmail,
        to,
        subject,
        html,
    });

};
export default sendMail;