
export const VerificationEmailTemplate = (token : string) : string =>  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Verify Your Email</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Web safe fallback + Google font */
      @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;700&display=swap");

      body {
        margin: 0;
        padding: 0;
        background-color: #141414;
        font-family: "Kumbh Sans", Arial, sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
      }

      .email-container {
        max-width: 500px;
        width: 100%;
        margin: auto;
        background-color: #1a1a1a;
        border: 1px solid #262626;
        border-radius: 12px;
        padding: 40px 20px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-direction: column;
      }

      .logo {
        width: 90px;
        height: 90px;
        /* margin-bottom: 24px; */
      }

      h1 {
        color: #ffffff;
        font-size: 26px;
        margin: 10px 0;
      }

      p {
        color: #7e7e81;
        font-size: 15px;
        line-height: 1.5;
        margin: 0 0 24px;
      }

      .btn {
        display: inline-block;
        background-color: #ffd11a;
        color: #000;
        padding: 12px 20px;
        width: 100px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 30px;
      }

      .footer {
        border-top: 1px solid #262626;
        padding-top: 20px;
        text-align: center;
        color: #666666;
      }

      .footer a {
        color: #666666;
        text-decoration: none;
        font-weight: 600;
        margin: 0 10px;
        display: inline-block;
        font-size: 20px;
      }

      .footer-icons img {
        width: 20px;
        margin: 0 6px;
      }

      .footer-note {
        font-size: 13px;
        margin-top: 10px;
        color: #666666;
      }

      /* Responsive fix for mobile */
      @media screen and (max-width: 540px) {
        .email-container {
          padding: 24px 12px;
        }
        .logo {
          width: 70px;
          height: 70px;
      
        }

        .btn {
          font-size: 14px;
          padding: 10px 20px;
        }

        .footer a {
          font-size: 20px;
          margin: 5px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <a href="https://writeflow.shriii.xyz" target="_blank">
        <img
          src="https://writeflow.shriii.xyz/assets/logo-DMT5UwEz.svg"
          alt="WriteFlow Logo"
          class="logo"
        />
      </a>

      <h1>Verify Your Email</h1>
      <p>Click the button below to verify your account and get started.</p>

     <div>
         <a
        href="https://writeflow.shriii.xyz/verify?token=${token}"
        class="btn"
        target="_blank"
        >Verify Email</a
      >
     </div>

      <div class="footer">
        <a href="https://writeflow.shriii.xyz" target="_blank" class="footer-heading">WriteFlow</a>

        <div class="footer-icons" style="margin: 12px 0">
          <a href="https://www.instagram.com/itzzz_shriii/"
            ><img
              src="https://cdn-icons-png.flaticon.com/24/1384/1384063.png"
              alt="Instagram"
          /></a>
          <a href="https://www.linkedin.com/in/shrinivas-sherikar-a77980231/"
            ><img
              src="https://cdn-icons-png.flaticon.com/24/1384/1384014.png"
              alt="LinkedIn"
          /></a>
          <a href="https://github.com/Shrinivas2708"
            ><img
              src="https://cdn-icons-png.flaticon.com/24/733/733553.png"
              alt="GitHub"
          /></a>
          <a href="https://x.com/ItzzzShri"
            ><img
              src="https://cdn-icons-png.flaticon.com/24/3670/3670151.png"
              alt="X / Twitter"
          /></a>
        </div>

        <div class="footer-note">© 2024 FutureTech. All rights reserved.</div>
      </div>
    </div>
  </body>
</html>
`
