import pricingImage from "../assets/pricing/pricing_image.png";
import rocket from "../assets/pricing/rocket.png";
import flame from "../assets/pricing/flame.png";

function Pricing() {
  return (
    <>
      <section className="bg-secondary position-relative pt-xl-8 pb-0 mb-n4 overflow-hidden">
        <div className="position-absolute end-0 top-0 mt-6 me-n6 z-index-2 d-none d-md-block">
          <img
            src={pricingImage}
            height={400}
            className="h-400px"
            alt="Clay-decoration"
          />
        </div>
        <div className="position-relative z-index-2 pt-4 pt-sm-5 container">
          <div className="inner-container-small text-center mb-5 mb-sm-7">
            <nav
              className="mb-2 d-flex justify-content-center"
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <a href="/" data-discover="true">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pricing
                </li>
              </ol>
            </nav>
            <h1 className="mb-0">Affordable &amp; flexible pricing plans</h1>
          </div>
          <div className="g-4 g-lg-5 row" style={{ marginBottom: "80px" }}>
            <div className="mx-auto col-xl-10">
              <div className="card-hover-shadow card-hover-transition bg-body bg-opacity-75 rounded-4 p-4 p-sm-5 card">
                <div className="g-4 g-md-0 row">
                  <div className="col-md-6">
                    <div className="icon-xl bg-secondary-grad shadow-primary rounded-circle mb-4 pricing_custom">
                      <img
                        src={rocket}
                        height={40}
                        className="h-40px"
                        alt="rocket image"
                      />
                    </div>
                    <p className="lead heading-color fw-semibold mb-2">
                      Basic plan
                    </p>
                    <p className="mb-2">
                      <span className="h1 mb-0">$59</span> /month
                    </p>
                    <p className="mb-0">
                      Ideal for small teams, the Basic plan manages up to 10
                      projects.
                    </p>
                  </div>
                  <div className="ms-auto col-md-5">
                    <div className="d-flex flex-column h-100 p-0 card-body">
                      <span className="fw-semibold opacity-6 mb-1 mb-md-3">
                        Quick look at all the features
                      </span>
                      <ul className="list-group list-group-borderless mb-3">
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Customizable features
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          5 user accounts
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Customizable features
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          10 GB storage
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Email support
                        </li>
                      </ul>
                      <a
                        className="btn btn-dark icon-link icon-link-hover justify-content-center mb-0"
                        href="#"
                        data-discover="true"
                      >
                        Purchase
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--bi"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto col-xl-10">
              <div className="card-hover-shadow card-hover-transition bg-body bg-opacity-75 rounded-4 p-4 p-sm-5 card">
                <div className="g-4 g-md-0 row">
                  <div className="col-md-6">
                    <div className="icon-xl bg-secondary-grad shadow-primary rounded-circle mb-4 pricing_custom">
                      <img
                        src={flame}
                        height={40}
                        className="h-40px"
                        alt="rocket image"
                      />
                    </div>
                    <p className="lead heading-color fw-semibold mb-2">
                      Professional plan
                    </p>
                    <p className="mb-2">
                      <span className="h1 mb-0">$99</span> /month
                    </p>
                    <p className="mb-0">
                      Get priority email support and access to premium templates
                      for a more comprehensive solution.
                    </p>
                  </div>
                  <div className="ms-auto col-md-5">
                    <div className="d-flex flex-column h-100 p-0 card-body">
                      <span className="fw-semibold opacity-6 mb-1 mb-md-3">
                        Quick look at all the features
                      </span>
                      <ul className="list-group list-group-borderless mb-3">
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Access to basic features
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          15 user accounts
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Customizable features
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          50 GB storage
                        </li>
                        <li className="list-group-item d-flex align-items-center heading-color mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-success me-1"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
                            />
                          </svg>
                          Dedicated account manager
                        </li>
                      </ul>
                      <a
                        className="btn btn-dark icon-link icon-link-hover justify-content-center mb-0"
                        href="#"
                        data-discover="true"
                      >
                        Purchase
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--bi"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
