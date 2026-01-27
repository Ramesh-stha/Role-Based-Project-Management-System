import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER
const emailPass = process.env.EMAIL_PASS

const transporter =nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:emailUser,
        pass:emailPass,

    },
});
transporter.verify((error,success)=>{
    if(error){
        console.log("mail server error:",error);

    }else{
        console.log("mail server ready")
    }
});
export default transporter;