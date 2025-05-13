'use server'

import nodemailer from "nodemailer";
import { toast } from "sonner";

export async function sendMail(name: string, email: string, message: string) {
    try {
        let mailTransporter = nodemailer.createTransport({
            host: "mail.smtp2go.com",
            port: 587,
            secure: false, // use SSL
            auth: {
                // user: process.env.ZOHO_USER || "javordraskovic@gmail.com",
                // pass: process.env.ZOHO_PASS || "D6680E646B913E52CAB9CFB5A839397F6C7F",
                user: "fivermail.com",
                pass: "sC5BmL50j1p2xmwH"
            },
            tls: {
                rejectUnauthorized: false, // do not fail on invalid certs
            },
        });

        const mailDetails = {
            from: "cors.senifive@fivermail.com",
            to: "javordraskovic@gmail.com",
            subject: `Contact form submission from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
            replyTo: email, // Add this line wahh
        };

        if (!mailDetails) {
            console.error("Invalid email type");
            return;
        }

        try {
            await mailTransporter.sendMail(mailDetails);
            return { success: true, message: "Email sent successfully" };
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            return { success: false, message: "Error occurred while sending email" };
        }

    } catch (error) {
        console.error("Error occurred while sending email:", error);
    }
}
