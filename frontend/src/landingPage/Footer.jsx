import React from "react";

function Footer() {
  return (
    <footer className="p-5 border-top" style={{ background: "#FBFBFB" }}>
      <div className="container">
        <div className="row d-flex align-items-start">
          <div className="col-12 col-md-3 d-flex gap-3 flex-column">
            <a href="#" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <img src="Images/logo.svg" alt="logo" width={"150px"} />
            </a>
            <p className="text-muted small">
              © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
              <br />
              <span className="socials my-3 d-flex gap-3 fs-4">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-telegram"></i>
              </span>
            </p>
          </div>
          <div className="col-6 col-md-3 d-flex gap-2 flex-column">
            <h5 className="text-muted mb-4">Company</h5>
            <p className="text-muted">About</p>
            <p className="text-muted">Products</p>
            <p className="text-muted">Pricing</p>
            <p className="text-muted">Referral programme</p>
            <p className="text-muted">Careers</p>
            <p className="text-muted">Zerodha.tech</p>
            <p className="text-muted">Press & media</p>
            <p className="text-muted">Zerodha cares (CSR)</p>
          </div>
          <div className="col-6 col-md-3 d-flex gap-2 flex-column">
            <h5 className="text-muted mb-4">Support</h5>
            <p className="text-muted">Contact</p>
            <p className="text-muted">Support Portal</p>
            <p className="text-muted">Z-Connect blog</p>
            <p className="text-muted">List of charges</p>
            <p className="text-muted">Downloads & resources</p>
          </div>
          <div className="col-12 col-md-3 d-flex gap-2 flex-column">
            <h5 className="text-muted mb-4">Account</h5>
            <p className="text-muted">Open an account</p>
            <p className="text-muted">Fund transfer</p>
            <p className="text-muted">60 day challenge</p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-4 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
