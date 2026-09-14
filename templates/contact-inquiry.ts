export interface ContactInquiryEmailProps {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMessage(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

const serviceLabels: Record<string, string> = {
  "ai-automation": "AI Automation",
  "web-development": "Website Development",
  "mobile-development": "Mobile Development",
  "digital-marketing": "Digital Marketing",
  seo: "SEO Services",
  branding: "Branding & Design",
  ecommerce: "eCommerce Solutions",
  "b2b-exports": "B2B Exports",
  other: "Other / Custom Solution",
};

export function contactInquiryEmail({
  name,
  email,
  company,
  service,
  message,
}: ContactInquiryEmailProps) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = formatMessage(message);
  const serviceLabel = serviceLabels[service] || "Other / Custom Solution";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>New Project Inquiry</title>

  <style>
    html,
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #070B12 !important;
    }

    body {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      font-family: Arial, Helvetica, sans-serif;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    img {
      border: 0;
      display: block;
      max-width: 100%;
    }

    .email-wrapper {
      width: 100%;
      padding: 40px 16px;
      background-color: #070B12;
    }

    .email-container {
      width: 100%;
      max-width: 680px;
      margin: 0 auto;
      background-color: #0A1017;
      border: 1px solid #FFFFFF14;
      border-radius: 16px;
      overflow: hidden;
    }

    .email-header {
      padding: 30px 36px;
      border-bottom: 1px solid #FFFFFF0F;
      background:
        radial-gradient(
          circle at top right,
          rgba(160, 209, 79, 0.10),
          transparent 38%
        ),
        #0A1017;
    }

    .brand-row {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 2px;
      color: #A0D14F;
      font-weight: 700;
      text-transform: uppercase;
    }

    .brand-dot {
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 8px;
      border-radius: 50%;
      background-color: #A0D14F;
      vertical-align: 1px;
    }

    .email-title {
      margin: 18px 0 0;
      font-size: 38px;
      line-height: 44px;
      letter-spacing: -0.03em;
      color: #DFE2ED;
      font-weight: 700;
    }

    .email-subtitle {
      margin: 14px 0 0;
      font-size: 14px;
      line-height: 22px;
      color: #DFE2ED99;
    }

    .email-content {
      padding: 36px;
    }

    .section-label {
      margin: 0 0 18px;
      font-size: 10px;
      line-height: 15px;
      letter-spacing: 2px;
      color: #A0D14F;
      text-transform: uppercase;
      font-weight: 700;
    }

    .details-table {
      width: 100%;
      border: 1px solid #FFFFFF0E;
      border-radius: 10px;
      overflow: hidden;
      background-color: #070B12;
    }

    .detail-row {
      border-bottom: 1px solid #FFFFFF0A;
    }

    .detail-row:last-child {
      border-bottom: 0;
    }

    .detail-label {
      width: 34%;
      padding: 16px 18px;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #DFE2ED55;
      vertical-align: top;
    }

    .detail-value {
      padding: 16px 18px;
      font-size: 14px;
      line-height: 21px;
      color: #DFE2ED;
      vertical-align: top;
      word-break: break-word;
    }

    .message-wrapper {
      margin-top: 30px;
    }

    .message-box {
      padding: 22px;
      border: 1px solid #FFFFFF0E;
      border-radius: 10px;
      background-color: #070B12;
    }

    .message-text {
      margin: 0;
      font-size: 14px;
      line-height: 24px;
      color: #DFE2EDB2;
    }

    .service-badge {
      display: inline-block;
      padding: 7px 10px;
      border: 1px solid #A0D14F2B;
      border-radius: 4px;
      background-color: #A0D14F0D;
      color: #A0D14F;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .footer {
      padding: 22px 36px 28px;
      border-top: 1px solid #FFFFFF0A;
    }

    .footer-text {
      margin: 0;
      font-size: 10px;
      line-height: 17px;
      color: #DFE2ED40;
    }

    .footer-accent {
      margin-top: 10px;
      font-size: 10px;
      line-height: 17px;
      letter-spacing: 1.5px;
      color: #A0D14F80;
      text-transform: uppercase;
    }

    @media only screen and (max-width: 600px) {
      .email-wrapper {
        padding: 16px 10px !important;
      }

      .email-container {
        border-radius: 12px !important;
      }

      .email-header {
        padding: 24px 20px !important;
      }

      .email-content {
        padding: 24px 20px !important;
      }

      .footer {
        padding: 20px !important;
      }

      .brand-row {
        font-size: 10px !important;
        line-height: 15px !important;
        letter-spacing: 1.5px !important;
      }

      .email-title {
        margin-top: 14px !important;
        font-size: 28px !important;
        line-height: 34px !important;
        letter-spacing: -0.025em !important;
      }

      .email-subtitle {
        margin-top: 12px !important;
        font-size: 13px !important;
        line-height: 20px !important;
      }

      .section-label {
        margin-bottom: 14px !important;
        font-size: 9px !important;
        line-height: 14px !important;
        letter-spacing: 1.5px !important;
      }

      .detail-label,
      .detail-value {
        display: block !important;
        width: auto !important;
        padding: 10px 14px !important;
      }

      .detail-label {
        padding-bottom: 3px !important;
        font-size: 9px !important;
        line-height: 14px !important;
      }

      .detail-value {
        padding-top: 3px !important;
        padding-bottom: 14px !important;
        font-size: 13px !important;
        line-height: 20px !important;
      }

      .message-wrapper {
        margin-top: 22px !important;
      }

      .message-box {
        padding: 16px !important;
      }

      .message-text {
        font-size: 13px !important;
        line-height: 22px !important;
      }

      .service-badge {
        font-size: 9px !important;
        line-height: 13px !important;
      }

      .footer-text,
      .footer-accent {
        font-size: 9px !important;
        line-height: 15px !important;
      }
    }
  </style>
</head>

<body>
  <table
    role="presentation"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
  >
    <tr>
      <td class="email-wrapper">
        <table
          role="presentation"
          class="email-container"
          cellpadding="0"
          cellspacing="0"
          border="0"
          align="center"
        >
          <!-- HEADER -->
          <tr>
            <td class="email-header">
              <div class="brand-row">
                <span class="brand-dot"></span>
                DigiGrowtherz
              </div>

              <h1 class="email-title">
                New Project Inquiry
              </h1>

              <p class="email-subtitle">
                A new inquiry has been submitted through the DigiGrowtherz
                website.
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td class="email-content">
              <p class="section-label">
                Client Information
              </p>

              <table
                role="presentation"
                class="details-table"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr class="detail-row">
                  <td class="detail-label">
                    Full Name
                  </td>
                  <td class="detail-value">
                    ${safeName}
                  </td>
                </tr>

                <tr class="detail-row">
                  <td class="detail-label">
                    Business Email
                  </td>
                  <td class="detail-value">
                    <a
                      href="mailto:${safeEmail}"
                      style="color:#A0D14F;text-decoration:none;"
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr class="detail-row">
                  <td class="detail-label">
                    Company
                  </td>
                  <td class="detail-value">
                    ${safeCompany}
                  </td>
                </tr>

                <tr class="detail-row">
                  <td class="detail-label">
                    Service
                  </td>
                  <td class="detail-value">
                    <span class="service-badge">
                      ${escapeHtml(serviceLabel)}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <div class="message-wrapper">
                <p class="section-label">
                  Project Details
                </p>

                <div class="message-box">
                  <p class="message-text">
                    ${safeMessage}
                  </p>
                </div>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="footer">
              <p class="footer-text">
                This message was generated from the contact form on
                digigrowtherz.com.
              </p>

              <p class="footer-accent">
                BUILD • AUTOMATE • GROW
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}
