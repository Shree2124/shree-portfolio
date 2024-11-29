import { createTransport } from "nodemailer";

const sendMail = async (data) => {

};

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

const sendMails = asyncHandler(async (req, res) => {
    const { email, name, msg, number } = req.body
    const data = { email, name, number, msg }
    const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    await transport.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: "message from portfolio",
        html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message from Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }
        .email-body {
            padding: 20px;
            color: #333333;
        }
        .email-body p {
            margin: 10px 0;
            line-height: 1.6;
        }
        .label {
            font-weight: bold;
            color: #555555;
        }
        .email-footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            Message from Portfolio
        </div>
        <div class="email-body">
            <p>
                <span class="label">Name:</span> ${data.name}
            </p>
            <p>
                <span class="label">Phone Number:</span> ${data.number}
            </p>
            <p>
                <span class="label">Message:</span>
            </p>
            <p>${data.msg}</p>
        </div>
        <div class="email-footer">
            &copy; ${new Date().getFullYear()} Your Portfolio. All Rights Reserved.
        </div>
    </div>
</body>
</html>
    `,
    });
    return res.status(200).json("email send successfully")
})

export {
    sendMails
}
