import React from "react";

function Product() {
  const integrations = [
    {
      id: 1,
      name: "CRM Integration",
      category: "CRM",
      description: "Seamlessly connect with Graphlo to automate your customer relationship management. Sync contacts in real-time, track customer interactions, and generate comprehensive analytics reports to optimize your sales strategy.",
      features: ["Real-time contact sync", "Advanced analytics dashboard", "Automated workflow triggers", "Custom field mapping"],
      icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41.2639%2025.031C41.2639%2035.254%2036.2453%2044.2379%2028.5006%2049.8141C40.6444%2048.0793%2050%2037.6084%2050%2025.031C50%2012.3915%2040.6444%201.98262%2028.5006%200.247802C36.1834%205.76205%2041.2639%2014.8079%2041.2639%2025.031Z'%20fill='%23007DFC'/%3e%3cpath%20d='M17.4722%2048.8229C19.207%2049.3805%2020.9418%2049.7523%2022.8005%2049.8762C29.554%2043.6804%2033.7671%2034.8204%2033.7671%2024.9691C33.7671%2015.1178%2029.492%206.25785%2022.8005%200.124023C20.9418%200.309896%2019.145%200.681644%2017.4722%201.17731C23.1723%207.43505%2026.6419%2015.7994%2026.6419%2025.0311C26.6419%2034.2628%2023.1723%2042.5652%2017.4722%2048.8229Z'%20fill='%23007DFC'/%3e%3cpath%20d='M-0.00018401%2025.0311C-0.000184386%2033.6432%204.33686%2041.264%2011.0283%2045.725C16.5426%2040.5206%2020.0122%2033.1476%2020.0122%2025.0311C20.0122%2016.8526%2016.5426%209.47966%2011.0283%204.33716C4.33687%208.79812%20-0.000183631%2016.357%20-0.00018401%2025.0311Z'%20fill='%23007DFC'/%3e%3c/svg%3e",
      // status: "Active",
      benefits: ["Increase conversion rates by 35%", "Reduce manual data entry by 90%", "Gain actionable customer insights"]
    },
    {
      id: 2,
      name: "Lead Calling System",
      category: "Communication",
      description: "Transform your lead management with our intuitive calling system. Upload leads via CSV and start calling instantly with crystal-clear voice quality and built-in call analytics.",
      features: ["One-click CSV upload", "High-quality VoIP calling", "Call recording and analytics", "Click-to-dial functionality"],
      icon: "https://themes.stackbros.in/folio-react/assets/11-B1-tWTi5.svg",
      // status: "Active",
      benefits: ["Reduce lead response time to under 2 minutes", "Increase call completion rates by 60%", "Track call performance in real-time"]
    },
    {
      id: 3,
      name: "Advanced Lead Management",
      category: "Data Management",
      description: "Efficiently manage and organize your leads with our advanced import system. Support for multiple file formats with intelligent data validation and duplicate detection.",
      features: ["Multi-format support (CSV, XLSX)", "Automated data validation", "Duplicate lead detection", "Bulk lead operations"],
      icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.4904%2048.5587C35.8826%2048.5587%2045.0983%2041.696%2048.0394%2031.696C46.863%2031.892%2045.4904%2031.892%2044.314%2031.892C36.863%2031.892%2030.1963%2028.7548%2025.4904%2023.6567C20.7845%2028.7548%2014.1179%2031.892%206.6669%2031.892C5.49043%2031.892%204.11788%2031.892%202.94141%2031.696C6.07866%2041.892%2015.0983%2048.5587%2025.4904%2048.5587Z'%20fill='%23057475'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44.3138%2027.3822C45.8824%2027.3822%2047.451%2027.1861%2049.0197%2026.7939C49.0197%2026.2057%2049.0197%2025.6175%2049.0197%2025.0292C49.0197%2014.6371%2042.1569%205.4214%2032.1569%202.48022C32.353%203.6567%2032.353%205.02924%2032.353%206.20571C32.353%2011.3038%2030.7844%2016.2057%2028.2354%2020.3234C32.353%2024.6371%2038.0393%2027.3822%2044.3138%2027.3822Z'%20fill='%2369C5C5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.66682%2027.3822C12.9413%2027.3822%2018.6276%2024.6371%2022.5492%2020.1273C20.0002%2016.2057%2018.4315%2011.3038%2018.4315%206.20571C18.4315%205.02924%2018.4315%203.6567%2018.6276%202.48022C8.82368%205.4214%201.96094%2014.6371%201.96094%2025.0292C1.96094%2025.6175%201.96094%2026.2057%201.96094%2026.7939C3.52956%2027.1861%205.09819%2027.3822%206.66682%2027.3822Z'%20fill='%2369C5C5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.4901%2016.0098C27.0588%2013.0686%2027.8431%209.73529%2027.8431%206.20588C27.8431%204.63725%2027.647%203.06863%2027.2549%201.5C26.6666%201.5%2026.0784%201.5%2025.4901%201.5C24.9019%201.5%2024.3137%201.5%2023.7254%201.5C23.3333%203.06863%2023.1372%204.63725%2023.1372%206.20588C23.1372%209.73529%2024.1176%2013.0686%2025.4901%2016.0098Z'%20fill='%23057475'/%3e%3c/svg%3e",
      // status: "Active",
      benefits: ["Process 1000+ leads in under 5 minutes", "Reduce data errors by 95%", "Automated lead scoring and prioritization"]
    },
    {
      id: 4,
      name: "CRM Synchronization",
      category: "Data Integration",
      description: "Keep all your customer data synchronized across platforms. Automatic two-way sync ensures your CRM always has the most up-to-date information from every call.",
      features: ["Real-time bidirectional sync", "Custom field mapping", "Conflict resolution", "Sync history and reporting"],
      icon: "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.0766%2044.7913V28.0531L25.6094%2036.402V26.1578L40.0766%2017.7736L48.9938%2022.9222V39.6603L40.0766%2044.7913Z'%20fill='%23BD2304'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.58126%2032.5293V17.7734L22.3378%2010.4132L28.7072%2014.0933L37.589%208.96241L22.3378%200.151367L0.664062%2012.6425V37.6602L22.3378%2050.1514V39.8895L9.58126%2032.5293Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.606%2036.3956L40.0769%2028.0531L48.9764%2022.9045L40.0769%2017.7736L25.606%2026.1515V36.3956Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.664062%2012.6426V37.6603L22.3378%2050.1515V39.8896L9.58126%2032.5294V17.7736L0.664062%2012.6426Z'%20fill='%23BD2304'/%3e%3c/svg%3e",
      // status: "Active",
      benefits: ["Eliminate manual data entry completely", "Ensure 100% data accuracy across systems", "Reduce administrative overhead by 70%"]
    },
    {
      id: 5,
      name: "Smart Follow-up Automation",
      category: "Workflow Automation",
      description: "Never miss a follow-up opportunity again. Our intelligent system automatically schedules follow-ups based on call outcomes and customer engagement levels.",
      features: ["AI-powered follow-up scheduling", "Multi-channel follow-ups (email, SMS)", "Performance tracking", "Customizable follow-up templates"],
      icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.91626%2024.3992V50H0V29.9276L6.91626%2024.3992Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M6.91602%2024.3992V50H13.8323V28.6825L6.91602%2024.3992Z'%20fill='%23222221'/%3e%3cpath%20d='M20.5444%2013.9426V49.9999H11.3228V21.5745L20.5444%2013.9426Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M20.5444%2013.9426V49.9999H29.7661V19.6537L20.5444%2013.9426Z'%20fill='%23222221'/%3e%3cpath%20d='M37.5776%200V50H25.1553V11.4186L37.5776%200Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M37.5776%200V50H49.9999V11.4186L37.5776%200Z'%20fill='%23222221'/%3e%3c/svg%3e",
      // status: "Active",
      benefits: ["Increase follow-up completion by 85%", "Reduce missed opportunities by 75%", "Automate personalized customer touchpoints"]
    },
    {
      id: 6,
      name: "Workflow Integration",
      category: "Process Automation",
      description: "Create powerful automated workflows that handle everything from lead qualification to deal closure without manual intervention.",
      features: ["Visual workflow builder", "500+ app integrations", "Custom automation triggers", "Real-time workflow monitoring"],
      icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8126%2031.25V18.75V6.25L4%2012.5V25V37.5L14.8126%2043.75L25.608%2050L36.4206%2043.75L25.608%2037.5L14.8126%2031.25Z'%20fill='%23098EC2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.6079%2012.5V25L36.4205%2031.25L47.216%2037.5V25L36.4205%2018.75V6.25L25.6079%200V12.5Z'%20fill='%237697FB'/%3e%3c/svg%3e",
      // status: "Active",
      benefits: ["Automate complex sales processes", "Reduce manual tasks by 80%", "Create custom business logic without coding"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden pt-lg-8 pb-md-7 bg-dark">
        <div className="position-absolute end-0 top-0">
          <img
            src="data:image/svg+xml,%3csvg%20width='959'%20height='454'%20viewBox='0%200%20959%20454'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M893.499%2020.6109C981.675%2072.0769%20976.157%20235.045%20897.35%20323.727C818.543%20412.41%20665.883%20425.5%20546.664%20438.892C428.199%20451.737%20342.484%20464.813%20234.275%20438.76C126.066%20412.708%20-5.45477%20348.692%200.802629%20287.54C6.99682%20227.005%20150.279%20169.262%20246.36%20136.65C342.379%20104.656%20391.26%2097.1742%20506.98%2063.4509C622.701%2029.7275%20804.634%20-30.9258%20893.499%2020.6109Z'%20fill='url(%23paint0_linear_1057_868)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1057_868'%20x1='506.024'%20y1='-31.1413'%20x2='455.127'%20y2='466.262'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            className="opacity-1 blur-8 h-300px rotate-335"
            alt="Background gradient"
          />
        </div>
        
        <div className="position-relative pt-4 pt-md-5 container">
          <div className="text-center text-white">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <h3 className="" style={{color: '#FFFFFF'}}>
                  Power Your Sales with Seamless Integrations
                </h3>
                <p className="lead mb-5">
                  Connect your calling platform with the tools you already use. Automate lead management, 
                  sync data in real-time, and focus on what matters most—closing deals.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                  <div className="text-center px-3">
                    <div className="h3 text-primary mb-1">85%</div>
                    <div className="small">Faster Lead Processing</div>
                  </div>
                  <div className="text-center px-3">
                    <div className="h3 text-primary mb-1">60%</div>
                    <div className="small">Increase in Productivity</div>
                  </div>
                  <div className="text-center px-3">
                    <div className="h3 text-primary mb-1">95%</div>
                    <div className="small">Reduction in Manual Tasks</div>
                  </div>
                </div>
                
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button className="btn btn-primary btn-lg px-4">
                    Start Free Trial
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4">
                    View All Integrations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Grid Section */}
      <section className="py-6 bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="h1 mb-3">Call, Sync, Close — All From One App</h2>
            <p className="lead text-muted mb-0">
              Make calls from the app, upload leads via CSV, and sync every interaction to your CRM automatically for faster closes.
            </p>
          </div>

          <div className="g-4 g-xl-5 row">
            {integrations.map((integration) => (
              <div key={integration.id} className="col-lg-4 col-md-6">
                <div className="card-hover-transition bg-white shadow-sm h-100 p-4 card border-0">
                  <div className="p-0 card-body">
                    <div className="d-flex gap-3 align-items-center mb-4">
                      <div
                        className="icon-lg text-center shadow-primary bg-white rounded-3 flex-shrink-0 product_img"
                        style={{ lineHeight: "3.2rem" }}
                      >
                        <img
                          src={integration.icon}
                          className="h-30px"
                          alt={`${integration.name} icon`}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <h6 className="mb-1 fw-bold">{integration.name}</h6>
                          <span className="badge bg-success bg-opacity-10 text-success small">
                            {integration.status}
                          </span>
                        </div>
                        <span className="text-muted small">{integration.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted mb-4">{integration.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="small fw-bold mb-3">Key Features:</h6>
                      <ul className="list-unstyled mb-0">
                        {integration.features.map((feature, index) => (
                          <li key={index} className="d-flex align-items-center mb-2">
                            <svg className="text-success me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            <span className="small">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-light rounded p-3">
                      <h6 className="small fw-bold mb-2">Business Impact:</h6>
                      <ul className="list-unstyled small mb-0">
                        {integration.benefits.map((benefit, index) => (
                          <li key={index} className="text-muted">• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* <div className="bg-transparent p-0 mt-4 card-footer">
                    <a
                      className="link-primary-grad icon-link icon-link-hover stretched-link mb-0 fw-semibold"
                      href="#"
                      data-discover="true"
                    >
                      Explore Integration Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          {/* <div className="text-center mt-6 pt-4">
            <div className="bg-primary text-white rounded-3 p-5">
              <h3 className="h2 mb-3">Ready to Transform Your Sales Process?</h3>
              <p className="mb-4 opacity-75">
                Join thousands of sales teams who have increased their productivity with our integrations.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-light btn-lg px-4">
                  Get Started Today
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Product;