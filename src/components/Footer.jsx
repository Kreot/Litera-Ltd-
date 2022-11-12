import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <LocalPhoneIcon />
          +7 (727) 339-89-88
        </div>
        <div>
          <WhatsAppIcon />+ 7 775 97 87 400
        </div>
        <div>
          <EmailIcon />
          literaltd.kz@gmail.com
        </div>
        <div>
          <img
            style={{
              width: "25px",
            }}
            src="https://www.citypng.com/public/uploads/preview/round-circular-white-skype-logo-icon-png-316349480916sqxgoauii.png"
            alt="skype icon"
          />
          literaltd.kz
        </div>
      </div>
      <div>
        <div>
          <LocalPhoneIcon />
          +996 (312) 98-68-97
        </div>
        <div>
          <WhatsAppIcon />+ 996 (706) 98-68-97
        </div>
        <div>
          <EmailIcon />
          literaltd.kg@gmail.com
        </div>
        <div>
          <img
            style={{
              width: "25px",
            }}
            src="https://www.citypng.com/public/uploads/preview/round-circular-white-skype-logo-icon-png-316349480916sqxgoauii.png"
            alt="skype icon"
          />
          literaltd.kg
        </div>
      </div>
    </div>
  );
};

export default Footer;
