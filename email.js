const template = ({ name, email, program, subject, message }) => `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Inquiry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 2px solid #137598;
        }
        .header {
            background-color: white;
            color: #137598;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #137598;
        }
        .header img {
            min-width: 200px;
            width: 300px;
            margin-bottom: 10px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            color: #137598;
            font-size: 22px;
            margin-bottom: 20px;
        }
        .content p {
            margin: 10px 0;
            font-size: 16px;
        }
        .content .highlight {
            color: #333;
            font-weight: bold;
        }
        .footer {
            background-color: #137598;
            color: #ffffff;
            text-align: center;
            padding: 15px;
            font-size: 14px;
        }
        .footer a {
            color: #ffffff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header Section with Logo -->
        <div class="header">
            <img src="https://online.claretianuniversity.edu.ng/assets/img/cun-logo.png" alt="School Logo">
            <h1>Course Inquiry</h1>
        </div>

        <!-- Main Content Section -->
        <div class="content">
            <h2>New Inquiry Details</h2>
            <p><span class="highlight">Name:</span> ${name}</p>
            <p><span class="highlight">Email:</span> ${email}</p>
            <p><span class="highlight">Program:</span> ${program}</p>
            <p><span class="highlight">Subject:</span> ${subject}</p>
            <p><span class="highlight">Message:</span></p>
            <p>${message}</p>
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>Thank you for reaching out to us! We will get back to you shortly.</p>
            <p>© 2024 Your School Name | <a href="https://online.claretianuniversity.edu.ng">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`;

// Export the function to generate the template with values
module.exports = { template };
