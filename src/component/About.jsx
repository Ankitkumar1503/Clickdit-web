import React from "react";
import { IoCallOutline } from "react-icons/io5";

function About() {
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
                    <a href="/folio-react/home" data-discover="true">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
              <a
                className="btn btn-white mb-0 d-inline-flex align-items-center gap-2"
                href="#"
                data-discover="true"
              >
                <IoCallOutline />
                Contact our experts
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--bi me-2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg> */}
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
      <section className="position-relative pt-6 pt-xxl-0">
        <div className="container">
          <div className="g-4 g-lg-5 row">
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/development-BHhnJp6Z.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Lead Management</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">Uploads Leads</li>
                    <li className="mb-2">CRM Sync</li>
                    <li className="mb-2">Smart Filters</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/marketing-nv1pirUn.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Calling Solutions</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">In-app calling</li>
                    <li className="mb-2">Recent calls</li>
                    <li className="mb-2">Click-to-Call</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="badge bg-dark position-absolute top-0 end-0 m-4">
                  New
                </div>
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="	https://themes.stackbros.in/folio-react/assets/brand-TnbydU9-.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Automation &amp; CRM Integration</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">n8n Workflows</li>
                    <li className="mb-2">Follow-ups</li>
                    <li className="mb-2">Deal Tracking</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/database-UJY5gxQl.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Data Insights & Reporting</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">Call logs</li>
                    <li className="mb-2">Performance analytics</li>
                    <li className="mb-2">Visualization tools</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/consulting-Cmm7XXoi.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Follow-Up Management</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">CRM integration</li>
                    <li className="mb-2">Reminders & notifications</li>
                    <li className="mb-2">Lead history</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
            <div className="col-xl-4 col-md-6">
              <div className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5 card">
                <div className="card-header bg-transparent p-0 pb-5">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/app-dev-DPNCLsn9.png"
                    height={70}
                    className="h-70px"
                    alt="icon"
                  />
                </div>
                <div className="card-footer bg-transparent mt-auto p-0">
                  <h6 className="mb-3">Mobile App Experience</h6>
                  <ul className="ps-3 mb-0">
                    <li className="mb-2">
                      Cross-platform support
                    </li>
                    <li className="mb-2">User-friendly design</li>
                    <li className="mb-2">Scalable solution</li>
                  </ul>
                </div>
                <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                  <a
                    className="btn btn-white icon-link icon-link-hover mb-0 stretched-link"
                    href="/#"
                    data-discover="true"
                  >
                    Explore service
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
          <p className="mb-0 mt-5 text-center heading-color">
            🔥 Let’s create something great work together.
            <a
              className="fw-bold hover-underline-animation heading-color"
              href="/folio-react/about/services-grid"
              data-discover="true"
            >
              Got a project in mind?
            </a>
          </p>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="position-relative col-md-6">
              <div className="position-absolute top-0 start-0 ms-xl-5">
                <img
                  src="	https://themes.stackbros.in/folio-react/assets/rocket-02-k6WSUtnv.png"
                  height={150}
                  className="h-150px rotate-335"
                  alt="rocket image"
                />
              </div>
              1
              <div className="ps-xl-7 row">
                <div className="col-sm-8">
                  <img
                    src="	https://themes.stackbros.in/folio-react/assets/13-BL6Cm7m7.jpg"
                    className="rounded-pill"
                    alt="image"
                  />
                </div>
                {/* <div className="mt-auto ms-lg-n5 mb-5 col-lg-5 col-md-8 col-sm-4">
                  <div className="shadow rounded text-center p-0 card">
                    <div className="p-3 card-body">
                      <h6 className="h1">4.8</h6>
                      <ul className="list-inline d-flex justify-content-center gap-2 mb-1">
                        <li className="list-inline-item me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-warning"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            />
                          </svg>
                        </li>
                        <li className="list-inline-item me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-warning"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            />
                          </svg>
                        </li>
                        <li className="list-inline-item me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-warning"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            />
                          </svg>
                        </li>
                        <li className="list-inline-item me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-warning"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            />
                          </svg>
                        </li>
                        <li className="list-inline-item me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--bi text-warning"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M5.354 5.119L7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327l4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403a.6.6 0 0 1 .085-.302a.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894l-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77l-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223L8 2.226z"
                            />
                          </svg>
                        </li>
                      </ul>
                      <span>2855 Reviews</span>
                    </div>
                    <div className="bg-dark p-3 card-footer">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/trustpilot-light-DeLSPSHZ.svg"
                        className="h-30px"
                        alt="trustpilotImg"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="ms-auto mt-5 mt-md-0 col-lg-5 col-md-6">
              <h2>Why choose us?</h2>
              <div
                id="accordionFaq"
                className="accordion-icon accordion-border-bottom mt-5 accordion"
              >
                <div className="mb-3 accordion-item">
                  <h2 id="heading-1" className="font-base accordion-header">
                    <button
                      type="button"
                      aria-expanded="true"
                      className="accordion-button"
                    >
                      <span className="lead">Seamless Lead Calling</span>
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse show">
                    <div className="pb-0 accordion-body">
                      Our expert team delivers a functional prototype within 24
                      hours, ensuring rapid progress and immediate feedback.
                    </div>
                  </div>
                </div>
                <div className="mb-3 accordion-item">
                  <h2 id="heading-2" className="font-base accordion-header">
                    <button
                      type="button"
                      aria-expanded="false"
                      className="accordion-button collapsed"
                    >
                      <span className="lead">Smart CRM Automation</span>
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse">
                    <div className="pb-0 accordion-body">
                      We provide a range of tools, guides, and best practices to
                      help you create designs, websites.
                    </div>
                  </div>
                </div>
                <div className="mb-3 accordion-item">
                  <h2 id="heading-3" className="font-base accordion-header">
                    <button
                      type="button"
                      aria-expanded="false"
                      className="accordion-button collapsed"
                    >
                      <span className="lead">
                        24/7 Dedicated Support
                      </span>
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse">
                    <div className="pb-0 accordion-body">
                      We provide a range of tools, guides, and best practices to
                      help you create designs, websites.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              {/* <p>
                Reach us anytime at
                <a href="/folio-react/about/services-grid" data-discover="true">
                  example@gmail.com
                </a>
              </p> */}
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
                      I agree that my data is
                      <a
                        className="hover-underline-animation text-primary-hover"
                        href="/folio-react/about/services-grid"
                        data-discover="true"
                      >
                        collected and stored
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
