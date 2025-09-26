import React, {useState} from "react";
import { IoCallOutline } from "react-icons/io5";

function About() {

  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

   const accordionItems = [
    {
      title: "Seamless Lead Calling",
      content: "Our expert team delivers a functional prototype within 24 hours, ensuring rapid progress and immediate feedback."
    },
    {
      title: "Smart CRM Automation", 
      content: "We provide a range of tools, guides, and best practices to help you create designs, websites."
    },
    {
      title: "24/7 Dedicated Support",
      content: "We provide a range of tools, guides, and best practices to help you create designs, websites."
    }
  ];

  return (
    <>
      <section className="bg-dark position-relative pt-xl-8 pb-0 overflow-hidden">
        <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
          <img
            src="data:image/svg+xml,%3csvg%20width='191'%20height='388'%20viewBox='0%200%20191%20388'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M69.024%208.70232C102.938%20-15.3362%20162.438%2014.1211%20182.066%2058.2587C201.693%20102.396%20180.87%20161.204%20165.783%20207.662C150.62%20253.749%20141.051%20287.731%20113.19%20323.472C85.3295%20359.213%2039.4712%20397.213%2017.8487%20384.607C-3.55549%20372.128%20-0.866141%20309.288%203.20235%20268.176C7.48925%20227.191%2012.9369%20207.808%2019.8965%20159.227C26.8562%20110.647%2034.9673%2032.9849%2069.024%208.70232Z'%20fill='url(%23paint0_linear_57_273)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_57_273'%20x1='-15.3387'%20y1='143.672'%20x2='160.535'%20y2='246.207'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            className="blur-7 opacity-2"
            alt="Grad shape"
          />
        </div>
        <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
          <img
            src="data:image/svg+xml,%3csvg%20width='191'%20height='388'%20viewBox='0%200%20191%20388'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M69.024%208.70232C102.938%20-15.3362%20162.438%2014.1211%20182.066%2058.2587C201.693%20102.396%20180.87%20161.204%20165.783%20207.662C150.62%20253.749%20141.051%20287.731%20113.19%20323.472C85.3295%20359.213%2039.4712%20397.213%2017.8487%20384.607C-3.55549%20372.128%20-0.866141%20309.288%203.20235%20268.176C7.48925%20227.191%2012.9369%20207.808%2019.8965%20159.227C26.8562%20110.647%2034.9673%2032.9849%2069.024%208.70232Z'%20fill='url(%23paint0_linear_57_273)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_57_273'%20x1='-15.3387'%20y1='143.672'%20x2='160.535'%20y2='246.207'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
            className="blur-8 opacity-1"
            alt="Grad shape"
          />
        </div>
        <div
          data-bs-theme="dark"
          className="position-relative pt-4 pt-sm-5 container"
        >
          <div className="row">
            <div className="text-center text-md-start col-lg-5 col-md-7">
              <nav
                className="mb-2 d-flex justify-content-center justify-content-md-start"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb pt-0">
                  <li className="breadcrumb-item">
                    <a href="/" data-discover="true">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
              <h1 className="mb-4">Revolutionizing Sales Communication</h1>
              <p className="lead text-light mb-4">
                We're building the future of sales automation with intelligent calling solutions 
                that streamline your workflow and boost conversion rates.
              </p>
              <a
                className="btn btn-white mb-0 d-inline-flex align-items-center gap-2"
                href="#"
                data-discover="true"
              >
                <IoCallOutline />
                Contact our experts
              </a>
            </div>
            <div className="ms-auto mt-5 mt-md-0 col-md-5 col-sm-10">
              <img
                src="https://themes.stackbros.in/folio-react/assets/service-hero-BqFeihcq.png"
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <span>
          <svg
            className="position-absolute bottom-0 start-0 mb-n1 mb-md-n6"
            viewBox="0 0 1950 237"
            xmlSpace="preserve"
          >
            <path
              className="fill-body"
              d="M1949.5,236.4H0v-164c717.2-131.2,1598.5-54.7,1949.5,0V236.4z"
            />
          </svg>
        </span>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Our Mission",
                text: "To empower sales teams with intelligent calling solutions that automate routine tasks, enhance customer engagement, and drive measurable business growth through seamless technology integration.",
                cardClass: "mission-card p-4 bg-white rounded-3 shadow-sm h-100 position-relative",
                iconClass: "fas fa-bullseye text-primary fs-4",
                topIconClass: "fas fa-rocket text-primary",
                iconBg: "bg-primary bg-opacity-10",
                textColor: "text-dark",
              },
              {
                title: "Our Vision",
                text: "To become the leading platform for sales communication automation, where every call becomes an opportunity and every interaction is optimized for maximum conversion efficiency.",
                cardClass: "vision-card p-4 bg-gradient-primary text-white rounded-3 shadow-sm h-100 position-relative",
                iconClass: "fas fa-eye fs-4",
                topIconClass: "fas fa-star",
                iconBg: "bg-white bg-opacity-20",
                textColor: "text-white",
              },
            ].map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className={item.cardClass}>
                  <div
                    className={`${item.iconBg} rounded-3 d-inline-flex align-items-center justify-content-center mb-3`}
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className={item.iconClass}></i>
                  </div>
                  <h4 className={`mb-2 fw-bold ${item.textColor} mission-vision-title`}>{item.title}</h4>
                  <p className={`mb-0 mission-vision-text ${item.textColor === "text-white" ? "text-white-80" : "text-muted"}`}>
                    {item.text}
                  </p>
                  <div className="position-absolute top-0 end-0 mt-3 me-3">
                    <div className={`${item.iconBg} rounded-circle p-2`} style={{ width: "28px", height: "28px" }}>
                      <i className={`${item.topIconClass} fs-6`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Automation Process */}
      <section className="py-5">
        <div className="container">
          {/* Process Details */}
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="mb-3">How We Automate Your Sales Process</h2>
              <p className="lead">
                Our intelligent calling platform transforms traditional sales workflows into automated, 
                data-driven processes that save time and increase efficiency.
              </p>
            </div>
          </div>
          
          {/* Flowchart */}
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="text-center mb-4">Sales Automation Workflow</h4>
                <div className="process-flow">
                  <div className="row text-center g-3">
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-blue text-white shadow-sm">
                        <h6 className="opacity-75">Step 1</h6>
                        <p className="mb-0 fw-semibold">Upload Leads via CSV</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-purple text-white shadow-sm">
                        <h6 className="opacity-75">Step 2</h6>
                        <p className="mb-0 fw-semibold">Make Calls via App</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-teal text-white shadow-sm">
                        <h6 className="opacity-75">Step 3</h6>
                        <p className="mb-0 fw-semibold">Auto CRM Updates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row mt-4 text-center g-3">
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-green text-white shadow-sm">
                        <h6 className="opacity-75">Step 4</h6>
                        <p className="mb-0 fw-semibold">Smart Follow-ups</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-orange text-white shadow-sm">
                        <h6 className="opacity-75">Step 5</h6>
                        <p className="mb-0 fw-semibold">Deal Tracking</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 border-0 rounded bg-gradient-pink text-white shadow-sm">
                        <h6 className="opacity-75">Step 6</h6>
                        <p className="mb-0 fw-semibold">Performance Analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="pt-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl mt-5 md:mt-0">
              <h2 className="text-2xl font-bold mb-5">Why choose us?</h2>
              <div className="space-y-3">
                {accordionItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <h2 className="font-normal">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left p-4 bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                        aria-expanded={openAccordion === index}
                      >
                        <span className="text-lg font-medium text-gray-900">
                          {item.title}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openAccordion === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 pb-4 pt-0">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary-grad position-relative overflow-hidden">
        <div className="position-absolute bottom-0 start-0 mb-n9 d-none d-sm-block">
          <img
            src="https://themes.stackbros.in/folio-react/assets/10-C8pasKai.png"
            height={700}
            className="rotate-270 h-500px h-lg-700px"
            alt="decoration shape"
          />
        </div>
        <div className="position-relative container">
          <div className="g-4 row">
            <div className="col-lg-5">
              <h2 className="mb-3">Let's level up your brand, together</h2>
              <p className="lead">
                Ready to transform your sales process? Get in touch with our experts to see how 
                our calling automation can revolutionize your business.
              </p>
            </div>
            <div className="ms-auto col-lg-6">
              <form className="row form-border-transparent g-3">
                <div className="col-md-6">
                  <label className="form-label">Your name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject name"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Write your message here...."
                    id="floatingTextarea2"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                </div>
                <div className="d-xl-flex align-items-center gap-3 mt-4 col-12">
                  <button className="btn btn-primary text-nowrap mb-2 mb-xl-0">
                    Send a message
                  </button>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input border"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree that my data is collected and stored.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mission-card {
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          min-height: 180px;
        }
        
        .mission-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.1) !important;
        }
        
        .vision-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
          min-height: 180px;
        }
        
        .vision-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3) !important;
        }
        
        .text-white-80 {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        
        /* Smaller font sizes for Mission & Vision */
        .mission-vision-title {
          font-size: 1.1rem !important; /* Smaller title */
        }
        
        .mission-vision-text {
          font-size: 0.9rem !important; /* Smaller text */
          line-height: 1.4 !important;
        }
        
        /* Process flow gradients */
        .bg-gradient-blue {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .bg-gradient-purple {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
        }
        
        .bg-gradient-teal {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
        }
        
        .bg-gradient-green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }
        
        .bg-gradient-orange {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }
        
        .bg-gradient-pink {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
        }
        
        @media (max-width: 768px) {
          .mission-card, .vision-card {
            padding: 1.5rem !important;
            min-height: 160px;
          }
          
          .mission-vision-title {
            font-size: 1rem !important;
          }
          
          .mission-vision-text {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default About;