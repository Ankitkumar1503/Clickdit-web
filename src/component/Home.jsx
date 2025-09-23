import React from "react";

function Home() {
  return (
    <>
      <section className="bg-secondary-grad position-relative overflow-hidden pt-sm-8 pt-lg-9 pb-5">
        <span className="position-absolute bottom-0 start-0">
          <svg
            className="fill-body"
            width={1920}
            height={254}
            viewBox="0 0 1920 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M556.048 176.63C371.384 97.9289 108.406 143.838 0 176.63V254H1920V0C1863.62 35.5602 1712.53 98.8233 1559.27 67.394C1406.01 35.9648 1206.33 86.6647 1125.65 115.943C1012.72 168.964 740.712 255.331 556.048 176.63Z"></path>
          </svg>
        </span>
        <div className="position-relative pt-4 pt-md-0 container">
          <div className="row">
            <div className="mb-5 mb-md-0 col-lg-6 col-md-7">
              <h1 className="display-5 mb-3 mb-md-4">
                Smart Sales Automation with{" "}
                <span className="text-primary">Clikdit</span>
              </h1>
              <p className="lead mb-3 mb-md-4">
                Boost your sales team’s efficiency with seamless calling, lead
                management, and CRM automation—All in one app.
              </p>
              <a
                role="button"
                tabIndex={0}
                href="#"
                className="icon-link icon-link-hover btn btn-primary-grad"
              >
                Get Started
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
                  ></path>
                </svg>{" "}
              </a>
            </div>
            <div className="ms-auto col-md-5">
              <img
                src="https://themes.stackbros.in/folio-react/assets/ai-robot-D_MnI6XM.png"
                className="aos aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
                alt="AI-robot"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-sm-6" style={{ paddingBottom: "0px" }}>
        <div className="container">
          <div className="g-4 g-lg-5 row">
            <div className="mb-4 mb-sm-0 col-md-4">
              <div className="card-body bg-transparent text-center p-0 card">
                <div className="icon-xl bg-warning bg-opacity-25 rounded-2 m-auto d-flex justify-content-center align-items-center mb-4">
                  <svg
                    className="text-warning"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.5812 5.73541C42.4755 5.6878 43.2267 6.4001 43.2268 7.29567C43.2269 13.8143 42.6409 18.8998 41.541 22.788C40.441 26.6766 38.7961 29.4729 36.6033 31.2632C32.5146 34.6013 27.199 33.9631 21.9796 32.0571C23.4158 28.3359 25.8081 25.0887 29.3104 23.7778C30.1186 23.4753 30.5285 22.575 30.226 21.7668C29.9235 20.9586 29.0232 20.5486 28.215 20.8511C23.8177 22.4969 21.0169 26.2907 19.3648 30.1898C17.4616 27.1276 16.4531 24.1562 16.4066 21.3509C16.3559 18.2854 17.4583 15.553 19.5442 13.2865C23.6288 8.8482 31.3809 6.27845 41.5812 5.73541ZM19.3648 30.1898C19.168 30.6543 18.9875 31.1203 18.8225 31.5843C18.3369 32.9501 17.9746 34.3281 17.7223 35.6495C17.5234 35.2543 17.3162 34.8545 17.1014 34.4543C16.0691 32.531 14.8248 30.5291 13.4449 28.9866C12.1246 27.5107 10.3818 26.1181 8.33203 26.1181C7.46909 26.1181 6.76953 26.8177 6.76953 27.6806C6.76953 28.5436 7.46909 29.2431 8.33203 29.2431C8.97047 29.2431 9.91593 29.7288 11.1159 31.0701C12.2562 32.3448 13.3641 34.0992 14.348 35.9322C15.3244 37.7513 16.1429 39.5801 16.719 40.9601C17.0063 41.6484 17.2317 42.221 17.3845 42.6196C17.4609 42.8189 17.5191 42.9744 17.5578 43.079C17.5771 43.1313 17.5916 43.1709 17.601 43.1967L17.6113 43.2251L17.6135 43.2314L17.6138 43.2323L17.6139 43.2325L17.6139 43.2326C17.8947 44.0168 18.7414 44.4429 19.5386 44.2011C20.3358 43.9592 20.8031 43.1344 20.6007 42.3262C20.3928 41.4965 20.3128 40.0863 20.4886 38.3158C20.6617 36.5727 21.0725 34.5843 21.7669 32.6311C21.8354 32.4387 21.9062 32.2473 21.9796 32.0571C21.5007 31.8822 21.0225 31.6966 20.5462 31.5024C20.2561 31.3842 20.0082 31.1814 19.8348 30.9205C19.6725 30.6764 19.5158 30.4328 19.3648 30.1898Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h6 className="mb-3">Effortless Lead Calling</h6>
                <p className="mb-0">
                  Upload your leads and start calling instantly,
                  just like a regular phone—directly from Clikdit.
                </p>
              </div>
            </div>
            <div className="mb-4 mb-sm-0 col-md-4">
              <div className="card-body bg-transparent text-center p-0 card">
                <div className="icon-xl bg-primary bg-opacity-25 rounded-2 m-auto d-flex justify-content-center align-items-center mb-4">
                  <svg
                    className="text-primary"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4979 31.473C10.1631 31.7097 9.86596 31.9497 9.63182 32.1838C7.74117 34.0744 7.08688 36.5528 6.87055 38.4055C6.76034 39.3494 6.75755 40.1826 6.78209 40.7813C6.7944 41.0822 7.01417 42.7876 7.03109 42.9622C7.20559 42.979 8.91109 43.1988 9.2118 43.2111C9.81073 43.2357 10.6437 43.233 11.5877 43.1226C13.4403 42.9063 15.9188 42.2519 17.8094 40.3613C18.0436 40.1272 18.2835 39.8301 18.5203 39.4953C18.6762 39.2749 18.7542 39.1647 18.9789 38.6159C19.4868 37.3761 19.2859 35.0169 18.5758 33.8809C18.2614 33.3782 17.987 33.1036 17.4383 32.5549C16.8895 32.0061 16.6151 31.7317 16.1123 31.4174C14.9762 30.7074 12.6172 30.5065 11.3774 31.0142C10.8286 31.239 10.7184 31.3169 10.4979 31.473Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.1041 7.29265C36.9837 6.94724 38.6268 6.82155 39.8045 6.78213C40.5789 6.75622 40.9662 6.74326 41.3677 6.86095C42.1349 7.08586 42.9093 7.86015 43.1341 8.62745C43.2518 9.02893 43.2389 9.41618 43.2129 10.1907C43.1735 11.3683 43.0479 13.0114 42.7024 14.8909C42.0406 18.492 40.5504 23.077 37.1997 26.8837L36.7606 35.3195C36.566 39.0589 33.477 41.9912 29.7324 41.9912C25.9624 41.9912 22.8622 39.0203 22.7014 35.2537L22.6185 33.3108L16.6843 27.3766L14.7413 27.2937C10.9748 27.133 8.00391 24.0326 8.00391 20.2626C8.00391 16.518 10.9361 13.4292 14.6757 13.2345L23.1114 12.7955C26.9181 9.44472 31.5031 7.95447 35.1041 7.29265ZM31.2491 22.9166C31.2491 25.2178 29.3837 27.0833 27.0824 27.0833C24.7812 27.0833 22.9158 25.2178 22.9158 22.9166C22.9158 20.6154 24.7812 18.7499 27.0824 18.7499C29.3837 18.7499 31.2491 20.6154 31.2491 22.9166Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h6 className="mb-3">CRM Integration & Automation</h6>
                <p className="mb-0">
                  Every call is automatically tracked. Our n8n workflow creates
                  deals in CRM and schedules follow-ups for you.
                </p>
              </div>
            </div>
            <div className="mb-4 mb-sm-0 col-md-4">
              <div className="card-body bg-transparent text-center p-0 card">
                <div className="icon-xl bg-pink bg-opacity-25 rounded-2 m-auto d-flex justify-content-center align-items-center mb-4">
                  <svg
                    className="text-warning"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.5812 5.73541C42.4755 5.6878 43.2267 6.4001 43.2268 7.29567C43.2269 13.8143 42.6409 18.8998 41.541 22.788C40.441 26.6766 38.7961 29.4729 36.6033 31.2632C32.5146 34.6013 27.199 33.9631 21.9796 32.0571C23.4158 28.3359 25.8081 25.0887 29.3104 23.7778C30.1186 23.4753 30.5285 22.575 30.226 21.7668C29.9235 20.9586 29.0232 20.5486 28.215 20.8511C23.8177 22.4969 21.0169 26.2907 19.3648 30.1898C17.4616 27.1276 16.4531 24.1562 16.4066 21.3509C16.3559 18.2854 17.4583 15.553 19.5442 13.2865C23.6288 8.8482 31.3809 6.27845 41.5812 5.73541ZM19.3648 30.1898C19.168 30.6543 18.9875 31.1203 18.8225 31.5843C18.3369 32.9501 17.9746 34.3281 17.7223 35.6495C17.5234 35.2543 17.3162 34.8545 17.1014 34.4543C16.0691 32.531 14.8248 30.5291 13.4449 28.9866C12.1246 27.5107 10.3818 26.1181 8.33203 26.1181C7.46909 26.1181 6.76953 26.8177 6.76953 27.6806C6.76953 28.5436 7.46909 29.2431 8.33203 29.2431C8.97047 29.2431 9.91593 29.7288 11.1159 31.0701C12.2562 32.3448 13.3641 34.0992 14.348 35.9322C15.3244 37.7513 16.1429 39.5801 16.719 40.9601C17.0063 41.6484 17.2317 42.221 17.3845 42.6196C17.4609 42.8189 17.5191 42.9744 17.5578 43.079C17.5771 43.1313 17.5916 43.1709 17.601 43.1967L17.6113 43.2251L17.6135 43.2314L17.6138 43.2323L17.6139 43.2325L17.6139 43.2326C17.8947 44.0168 18.7414 44.4429 19.5386 44.2011C20.3358 43.9592 20.8031 43.1344 20.6007 42.3262C20.3928 41.4965 20.3128 40.0863 20.4886 38.3158C20.6617 36.5727 21.0725 34.5843 21.7669 32.6311C21.8354 32.4387 21.9062 32.2473 21.9796 32.0571C21.5007 31.8822 21.0225 31.6966 20.5462 31.5024C20.2561 31.3842 20.0082 31.1814 19.8348 30.9205C19.6725 30.6764 19.5158 30.4328 19.3648 30.1898Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h6 className="mb-3">Recent Calls & Follow-ups</h6>
                <p className="mb-0">
                  Stay on top of your pipeline with easy access to recent calls
                  and follow-up tasks synced from CRM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="position-relative pt-0 pb-0 pb-xl-8">
        <div className="px-xl-7 container">
          <div className="align-items-center row">
            <div className="position-relative pe-xl-6 mb-5 mb-lg-0 col-lg-6">
              <div className="position-absolute top-0 start-0 ms-n6">
                <img
                  src="data:image/svg+xml,%3csvg%20width='191'%20height='388'%20viewBox='0%200%20191%20388'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M69.024%208.70232C102.938%20-15.3362%20162.438%2014.1211%20182.066%2058.2587C201.693%20102.396%20180.87%20161.204%20165.783%20207.662C150.62%20253.749%20141.051%20287.731%20113.19%20323.472C85.3295%20359.213%2039.4712%20397.213%2017.8487%20384.607C-3.55549%20372.128%20-0.866141%20309.288%203.20235%20268.176C7.48925%20227.191%2012.9369%20207.808%2019.8965%20159.227C26.8562%20110.647%2034.9673%2032.9849%2069.024%208.70232Z'%20fill='url(%23paint0_linear_57_273)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_57_273'%20x1='-15.3387'%20y1='143.672'%20x2='160.535'%20y2='246.207'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                  className="blur-7 opacity-1"
                  alt="Grad shape"
                />
              </div>
              <img
                src="https://themes.stackbros.in/folio-react/assets/07-dJuGwSPi.jpg"
                className="rounded-4 z-index-2 position-relative"
                alt="about image"
              />
            </div>
            <div className="ms-auto col-lg-6">
              <div
                className="d-flex align-items-center"
                style={{ maxWidth: "30rem" }}
              >
                <h2 className="display-4 text-primary-grad mb-0">14+</h2>
                <h6 className="mb-0 ms-3">Products successfully launched</h6>
              </div>
              <hr className="border-primary border-opacity-50 mt-4 mb-5" />
              <div
                className="nav-pills nav-pills-dark gap-3 nav"
                id="nav-tab"
                role="tablist"
              >
                <div className="nav-item">
                  <a
                    id="react-aria1827498469-:r9:-tab-nav-mission"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-mission"
                    type="button"
                    role="tab"
                    aria-controls="react-aria1827498469-:r9:-tabpane-nav-mission"
                    aria-selected="true"
                    data-rr-ui-event-key="nav-mission"
                    className="nav-link nav-link active"
                    tabIndex={0}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi me-2"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <g fill="currentColor">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></path>
                        <path d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
                      </g>
                    </svg>
                    Our Mission
                  </a>
                </div>
                <div className="nav-item">
                  <a
                    id="react-aria1827498469-:r9:-tab-nav-vision"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-vision"
                    type="button"
                    role="tab"
                    aria-controls="react-aria1827498469-:r9:-tabpane-nav-vision"
                    aria-selected="false"
                    data-rr-ui-event-key="nav-vision"
                    tabIndex={-1}
                    className="nav-link nav-link"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi me-2"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <g fill="currentColor">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></path>
                      </g>
                    </svg>
                    Our Vision
                  </a>
                </div>
                <div className="nav-item">
                  <a
                    id="react-aria1827498469-:r9:-tab-nav-goal"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-goal"
                    type="button"
                    role="tab"
                    aria-controls="react-aria1827498469-:r9:-tabpane-nav-goal"
                    aria-selected="false"
                    data-rr-ui-event-key="nav-goal"
                    tabIndex={-1}
                    className="nav-link nav-link"
                    href="#"
                  >
                    <svg
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
                        d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864c.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"
                      ></path>
                    </svg>
                    Our Goal
                  </a>
                </div>
              </div>
              <div className="mt-4 tab-content">
                <div
                  role="tabpanel"
                  id="react-aria1827498469-:r9:-tabpane-nav-mission"
                  aria-labelledby="react-aria1827498469-:r9:-tab-nav-mission"
                  className="fade fade tab-pane active show"
                >
                  <p className="mb-2">
                    We aim to simplify sales and communication through smart
                    calling technology and automation. Our mission is to empower
                    businesses to connect with leads faster, track every
                    interaction, and close deals with confidence.
                  </p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Advanced AI-powered sales technology
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Boosting efficiency with automated workflows
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Driving sustainable growth with data-driven insights
                    </li>
                  </ul>
                </div>
                <div
                  role="tabpanel"
                  id="react-aria1827498469-:r9:-tabpane-nav-vision"
                  aria-labelledby="react-aria1827498469-:r9:-tab-nav-vision"
                  className="fade fade tab-pane"
                >
                  <p className="mb-2">
                    Effective design communicates your brand's identity,
                    cultivates trust, and can significantly impact conversion
                    rates and customer loyalty.
                  </p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Tailored solutions
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Proven track Record
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Cost-effectiveness
                    </li>
                  </ul>
                </div>
                <div
                  role="tabpanel"
                  id="react-aria1827498469-:r9:-tabpane-nav-goal"
                  aria-labelledby="react-aria1827498469-:r9:-tab-nav-goal"
                  className="fade fade tab-pane"
                >
                  <p className="mb-2">
                    We provide a range of tools, guides, and best practices to
                    help you create designs, websites.
                  </p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Digital pioneers
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Continuous learning
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bi text-success me-2"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                          ></path>
                          <path d="m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
                        </g>
                      </svg>
                      Inspiring transformation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-100 start-0 translate-middle ms-9 mt-4 z-index-9 d-none d-xl-block">
          <img
            src="https://themes.stackbros.in/folio-react/assets/ai-hand-ncs6m_pn.png"
            className="aos ms-9 ps-6 aos-init"
            data-aos="fade-right"
            data-aos-delay={100}
            data-aos-duration={800}
            data-aos-easing="ease-in-out"
            alt="ai hand"
          />
        </div>
      </section> */}
      <section className="py-0 position-relative">
        <div className="position-absolute end-0 bottom-0 me-lg-7 mb-n7 z-index-2 d-none d-md-block">
          <img
            src="https://themes.stackbros.in/folio-react/assets/ai-robot-2-DLK04c_c.png"
            height={300}
            className="aos aos-init"
            data-aos="fade-left"
            data-aos-delay={100}
            data-aos-duration={800}
            data-aos-easing="ease-in-out"
            alt="robot image"
          />
        </div>
        <div className="bg-dark position-relative overflow-hidden py-8">
          <div className="position-absolute top-0 start-0 mt-n9">
            <img
              src="https://themes.stackbros.in/folio-react/assets/ai-pattern-DIr2UHE7.png"
              className="mt-n7"
              alt="aiPattern"
            />
          </div>
          <div className="position-absolute top-0 start-0 mt-n3">
            <svg
              className="fill-body"
              width={1920}
              height={146}
              viewBox="0 0 1920 146"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1457.5 123.815C1692.5 141 1811.59 85.4373 1920 50.5V3L0 0.5V23.4269V141C56.3835 103.114 283.285 126.587 439.5 141C607.5 156.5 776.5 126.673 873.5 108.5C1087 68.5 1255.23 109.024 1457.5 123.815Z"></path>
            </svg>
          </div>
          <div className="position-absolute bottom-0 end-0 mb-n8 me-n9">
            <img
              src="data:image/svg+xml,%3csvg%20width='959'%20height='454'%20viewBox='0%200%20959%20454'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M893.499%2020.6109C981.675%2072.0769%20976.157%20235.045%20897.35%20323.727C818.543%20412.41%20665.883%20425.5%20546.664%20438.892C428.199%20451.737%20342.484%20464.813%20234.275%20438.76C126.066%20412.708%20-5.45477%20348.692%200.802629%20287.54C6.99682%20227.005%20150.279%20169.262%20246.36%20136.65C342.379%20104.656%20391.26%2097.1742%20506.98%2063.4509C622.701%2029.7275%20804.634%20-30.9258%20893.499%2020.6109Z'%20fill='url(%23paint0_linear_1057_868)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1057_868'%20x1='506.024'%20y1='-31.1413'%20x2='455.127'%20y2='466.262'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              className="opacity-2 blur-9"
              alt="Grad shape"
            />
          </div>
          <div
            data-bs-theme="dark"
            className="position-relative pt-5 container"
          >
            <div className="row">
              <div className="mb-5 mb-lg-0 col-lg-4">
                <h2 className="mb-3 mb-lg-4">
                  Sales-boosting AI solutions for your team
                </h2>
                <p className="mb-3 mb-lg-4">
                  Discover our AI services designed to optimize operations,
                  enhance decisions, and drive growth.
                </p>
                <a
                  className="btn btn-primary"
                  href="#"
                  data-discover="true"
                >
                  Explore all services
                </a>
              </div>
              <div className="ms-auto hover-opacity-fade col-lg-7">
                <div className="hover-item d-flex align-items-center border-bottom position-relative py-4">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/01-PN2sBZMR.svg"
                    className="me-3"
                    alt="service icon"
                  />
                  <h6 className="mb-0">Lead Calling Simplified</h6>
                  <a
                    className="icon-link icon-link-hover text-body stretched-link ms-auto"
                    href="#"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi fs-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="hover-item d-flex align-items-center border-bottom position-relative py-4">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.15625%2022.9438V32.3689C2.15625%2032.5876%202.26874%2032.7939%202.46249%2032.9064L10.7625%2037.8564V27.7814C10.2983%2027.5171%202.15625%2022.9438%202.15625%2022.9438Z'%20fill='url(%23paint0_linear_448_2358)'/%3e%3cpath%20d='M29.2344%2027.7814L29.2344%2037.8564L37.5344%2032.9064C37.7281%2032.7939%2037.8406%2032.5876%2037.8406%2032.3689V22.9438C37.8406%2022.9438%2029.6842%2027.5267%2029.2344%2027.7814Z'%20fill='url(%23paint1_linear_448_2358)'/%3e%3cpath%20d='M37.2234%2021.8564L29.8296%2017.4189C29.2318%2017.7863%2022.0473%2022.075%2021.2422%2022.5627C21.2422%2022.5627%2028.6047%2026.7002%2028.6047%2026.7002C29.1637%2026.3843%2037.1347%2021.9065%2037.2234%2021.8564Z'%20fill='url(%23paint2_linear_448_2358)'/%3e%3cpath%20d='M10.7617%208.0249V16.3187C11.3973%2016.6906%2018.5329%2020.9787%2019.3742%2021.4749C19.3742%2021.4749%2019.3742%2012.8624%2019.3742%2012.8624C18.92%2012.6042%2010.7617%208.0249%2010.7617%208.0249Z'%20fill='url(%23paint3_linear_448_2358)'/%3e%3cpath%20d='M10.1735%2017.4189L2.77344%2021.8564C3.39596%2022.1951%2010.5585%2026.24%2011.3922%2026.7002C11.3922%2026.7002%2018.7547%2022.5627%2018.7547%2022.5627C18.7547%2022.5627%2010.4221%2017.5765%2010.1735%2017.4189Z'%20fill='url(%23paint4_linear_448_2358)'/%3e%3cpath%20d='M12.0117%2037.8562L19.3742%2033.4687V23.6499L12.0117%2027.7812V37.8562Z'%20fill='url(%23paint5_linear_448_2358)'/%3e%3cpath%20d='M20.625%2033.4687L27.9875%2037.8562C27.9799%2037.1507%2027.993%2028.7382%2027.9875%2027.7812L20.625%2023.6499V33.4687Z'%20fill='url(%23paint6_linear_448_2358)'/%3e%3cpath%20d='M20.625%2012.8624V21.4749L29.2375%2016.3124V8.0249C28.5708%208.40213%2021.4771%2012.3791%2020.625%2012.8624Z'%20fill='url(%23paint7_linear_448_2358)'/%3e%3cpath%20d='M28.6203%206.93757L20.3203%201.9626C20.1266%201.84385%2019.8765%201.84385%2019.6828%201.9626L11.3828%206.93757C11.3828%206.93757%2019.9999%2011.7746%2020.0015%2011.7751C20.8539%2011.3014%2027.9811%207.30109%2028.6203%206.93757Z'%20fill='url(%23paint8_linear_448_2358)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_448_2358'%20x1='6.45936'%20y1='22.9438'%20x2='6.45936'%20y2='37.8564'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_448_2358'%20x1='33.5375'%20y1='22.9438'%20x2='33.5375'%20y2='37.8564'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_448_2358'%20x1='29.2328'%20y1='17.4189'%20x2='29.2328'%20y2='26.7002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_448_2358'%20x1='15.068'%20y1='8.0249'%20x2='15.068'%20y2='21.4749'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_448_2358'%20x1='10.7641'%20y1='17.4189'%20x2='10.7641'%20y2='26.7002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_448_2358'%20x1='15.693'%20y1='23.6499'%20x2='15.693'%20y2='37.8562'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear_448_2358'%20x1='24.3069'%20y1='23.6499'%20x2='24.3069'%20y2='37.8562'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint7_linear_448_2358'%20x1='24.9313'%20y1='8.0249'%20x2='24.9313'%20y2='21.4749'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint8_linear_448_2358'%20x1='20.0016'%20y1='1.87354'%20x2='20.0016'%20y2='11.7751'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    className="me-3"
                    alt="service icon"
                  />
                  <h6 className="mb-0">Lead Uploads</h6>
                  <a
                    className="icon-link icon-link-hover text-body stretched-link ms-auto"
                    href="#"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi fs-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="hover-item d-flex align-items-center border-bottom position-relative py-4">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_448_2311)'%3e%3cpath%20d='M0.839844%2022.9336C3.2541%2031.0016%2010.785%2037.1719%2020.001%2037.1719C29.2145%2037.1719%2036.7473%2031.0036%2039.1621%2022.9336C31.0385%2029.196%208.90191%2029.1484%200.839844%2022.9336Z'%20fill='url(%23paint0_linear_448_2311)'/%3e%3cpath%20d='M1.88471%2020.7509C2.94094%2021.6679%204.42124%2022.4797%206.28452%2023.1639C13.9002%2025.9602%2026.0965%2025.9615%2033.7156%2023.1639C35.5788%2022.4797%2037.0592%2021.668%2038.1155%2020.7509C40.7549%2018.4593%2040.6967%2015.4068%2037.466%2013.0811C36.5507%2012.4222%2035.4124%2011.8308%2034.0678%2011.3122C34.3807%2012.4974%2034.5482%2013.7411%2034.5482%2015.0233C34.5482%2015.9169%2034.2019%2017.2157%2032.5523%2018.3279C31.7322%2018.8808%2030.6274%2019.3576%2029.2687%2019.7451C22.9447%2021.5485%2011.7023%2021.1959%207.4482%2018.3279C5.79857%2017.2157%205.45237%2015.9169%205.45237%2015.0233C5.45237%2013.741%205.61982%2012.4973%205.93276%2011.312C4.58806%2011.8307%203.44956%2012.4222%202.53427%2013.0811C-0.694885%2015.4056%20-0.756532%2018.4581%201.88471%2020.7509Z'%20fill='url(%23paint1_linear_448_2311)'/%3e%3cpath%20d='M19.9997%2018.5008C26.7349%2018.5008%2032.1947%2016.9439%2032.1947%2015.0232C32.1947%208.28809%2026.7349%202.82812%2019.9997%202.82812C13.2646%202.82812%207.80469%208.28801%207.80469%2015.0232C7.80461%2016.9439%2013.2646%2018.5008%2019.9997%2018.5008Z'%20fill='url(%23paint2_linear_448_2311)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_448_2311'%20x1='20.001'%20y1='22.9336'%20x2='20.001'%20y2='37.1719'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_448_2311'%20x1='20'%20y1='11.312'%20x2='20'%20y2='25.2616'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_448_2311'%20x1='19.9997'%20y1='2.82812'%20x2='19.9997'%20y2='18.5008'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_448_2311'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    className="me-3"
                    alt="service icon"
                  />
                  <h6 className="mb-0">CRM Sync</h6>
                  <a
                    className="icon-link icon-link-hover text-body stretched-link ms-auto"
                    href="#"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi fs-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="hover-item d-flex align-items-center border-bottom position-relative py-4">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='43'%20height='40'%20viewBox='0%200%2043%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.47032%2011.8643L3.30078%2022.5695H9.22748L15.397%2011.8643H9.47032Z'%20fill='url(%23paint0_linear_448_2328)'/%3e%3cpath%20d='M29.152%2011.297L25.6055%205.14315L22.8462%200.355957L19.8828%205.49818L26.1882%2016.4392L29.152%2011.297Z'%20fill='url(%23paint1_linear_448_2328)'/%3e%3cpath%20d='M19.2703%205.85352H0L6.05735%2016.3647L9.05999%2011.1543L16.2179%2011.159L19.5273%2016.7955H25.5762L19.2703%205.85352Z'%20fill='url(%23paint2_linear_448_2328)'/%3e%3cpath%20d='M19.2703%205.14317L22.2346%200H2.96429L0%205.14317H19.2703Z'%20fill='url(%23paint3_linear_448_2328)'/%3e%3cpath%20d='M15.5229%2022.9244L18.9132%2017.1507L16.0157%2012.2158L9.84375%2022.9249L19.4789%2039.6443L25.5362%2029.1331H19.1679L15.5229%2022.9244Z'%20fill='url(%23paint4_linear_448_2328)'/%3e%3cpath%20d='M3.30078%2023.2798L12.9364%2040.0002H18.8631L9.22511%2023.2798H3.30078Z'%20fill='url(%23paint5_linear_448_2328)'/%3e%3cpath%20d='M16.5547%2023.2798L19.5744%2028.423H32.2779L29.3141%2023.2798H16.5547Z'%20fill='url(%23paint6_linear_448_2328)'/%3e%3cpath%20d='M32.8911%2028.0673L42.5268%2011.3479L39.5653%206.20947L29.9297%2022.9289L32.8911%2028.0673Z'%20fill='url(%23paint7_linear_448_2328)'/%3e%3cpath%20d='M26.3967%2017.5055H19.528L16.5547%2022.5696H29.3137L38.9516%205.85352H26.8369L29.974%2011.2973L26.3967%2017.5055Z'%20fill='url(%23paint8_linear_448_2328)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_448_2328'%20x1='9.3489'%20y1='11.8643'%20x2='9.3489'%20y2='22.5695'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_448_2328'%20x1='24.5174'%20y1='0.355957'%20x2='24.5174'%20y2='16.4392'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_448_2328'%20x1='12.7881'%20y1='5.85352'%20x2='12.7881'%20y2='16.7955'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_448_2328'%20x1='11.1173'%20y1='0'%20x2='11.1173'%20y2='5.14317'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_448_2328'%20x1='17.69'%20y1='12.2158'%20x2='17.69'%20y2='39.6443'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_448_2328'%20x1='11.0819'%20y1='23.2798'%20x2='11.0819'%20y2='40.0002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear_448_2328'%20x1='24.4163'%20y1='23.2798'%20x2='24.4163'%20y2='28.423'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint7_linear_448_2328'%20x1='36.2282'%20y1='6.20947'%20x2='36.2282'%20y2='28.0673'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint8_linear_448_2328'%20x1='27.7532'%20y1='5.85352'%20x2='27.7532'%20y2='22.5696'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    className="me-3"
                    alt="service icon"
                  />
                  <h6 className="mb-0">Smart Follow-ups</h6>
                  <a
                    className="icon-link icon-link-hover text-body stretched-link ms-auto"
                    href="#"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi fs-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="hover-item d-flex align-items-center border-bottom position-relative py-4">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38.0437%2029.6127L23.7%204.73145L12.4688%2024.1939H16.825L22.4375%2014.7752C22.6836%2014.3751%2023.3022%2014.3694%2023.5187%2014.7939C23.5187%2014.7939%2034.2687%2034.0252%2034.2687%2034.0252L34.9687%2035.2814L38.0312%2030.2502C38.15%2030.0502%2038.1562%2029.8064%2038.0437%2029.6127Z'%20fill='url(%23paint0_linear_448_2300)'/%3e%3cpath%20d='M18.2812%2024.1935H21.525L19.8938%2021.4873L18.2812%2024.1935Z'%20fill='url(%23paint1_linear_448_2300)'/%3e%3cpath%20d='M22.9531%2016.3438L20.6156%2020.2688L26.2469%2029.6C26.3594%2029.7938%2026.3656%2030.0313%2026.2531%2030.2313C26.1406%2030.425%2025.9344%2030.55%2025.7094%2030.55H2.14062L5.13436%2035.5875C5.24689%2035.775%205.45312%2035.8938%205.67189%2035.8938H33.8719L22.9531%2016.3438Z'%20fill='url(%23paint2_linear_448_2300)'/%3e%3cpath%20d='M24.6078%2029.3002L22.2828%2025.4439H11.3891C11.1703%2025.4439%2010.9641%2025.3252%2010.8516%2025.1314C10.7391%2024.9377%2010.7391%2024.7002%2010.8516%2024.5064L22.6141%204.10645H16.7891C16.5641%204.10645%2016.3578%204.2252%2016.2453%204.42516L2.13281%2029.3002H24.6078Z'%20fill='url(%23paint3_linear_448_2300)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_448_2300'%20x1='25.2965'%20y1='4.73145'%20x2='25.2965'%20y2='35.2814'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_448_2300'%20x1='19.9031'%20y1='21.4873'%20x2='19.9031'%20y2='24.1935'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_448_2300'%20x1='18.0063'%20y1='16.3438'%20x2='18.0063'%20y2='35.8938'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_448_2300'%20x1='13.3703'%20y1='4.10645'%20x2='13.3703'%20y2='29.3002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23543DE7'/%3e%3cstop%20offset='1'%20stop-color='%237F39F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    className="me-3"
                    alt="service icon"
                  />
                  <h6 className="mb-0">Sales Automation</h6>
                  <a
                    className="icon-link icon-link-hover text-body stretched-link ms-auto"
                    href="#"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--bi fs-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="inner-container text-center mt-8">
              <h4>AI technologies and tools we utilize</h4>
              <ul className="list-inline d-flex justify-content-center flex-wrap gap-4 my-5 my-lg-6">
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8126%2031.25V18.75V6.25L4%2012.5V25V37.5L14.8126%2043.75L25.608%2050L36.4206%2043.75L25.608%2037.5L14.8126%2031.25Z'%20fill='%23098EC2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.6079%2012.5V25L36.4205%2031.25L47.216%2037.5V25L36.4205%2018.75V6.25L25.6079%200V12.5Z'%20fill='%237697FB'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.0766%2044.7913V28.0531L25.6094%2036.402V26.1578L40.0766%2017.7736L48.9938%2022.9222V39.6603L40.0766%2044.7913Z'%20fill='%23BD2304'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.58126%2032.5293V17.7734L22.3378%2010.4132L28.7072%2014.0933L37.589%208.96241L22.3378%200.151367L0.664062%2012.6425V37.6602L22.3378%2050.1514V39.8895L9.58126%2032.5293Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.606%2036.3956L40.0769%2028.0531L48.9764%2022.9045L40.0769%2017.7736L25.606%2026.1515V36.3956Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.664062%2012.6426V37.6603L22.3378%2050.1515V39.8896L9.58126%2032.5294V17.7736L0.664062%2012.6426Z'%20fill='%23BD2304'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.127%200C15.466%200%2011.2287%201.69492%207.83887%204.23729L30.9321%2031.9915L49.788%2017.7966C48.9406%207.83898%2040.466%200%2030.0846%200'%20fill='%23FFC60E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.0847%2050C41.1017%2050%2050%2041.1017%2050%2030.0847V29.0254L32.839%2041.7373C30.9322%2043.2203%2028.178%2042.7966%2026.6949%2041.1017L2.11864%2011.4407C0.847458%2013.983%200%2016.9491%200%2019.9152V29.8729C0%2040.8898%208.89831%2049.7881%2019.9153%2049.7881'%20fill='%23FF9900'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43.3398%2025L50%200L0%2013.3205L11.1973%2024.5177V24.5175L39.3826%2010.6179L25.2899%2038.6102H25.2897L36.6795%2050L43.3398%2025Z'%20fill='%23F967BE'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.3826%2010.6179L25.2899%2038.6102H11.1973V24.5175L39.3826%2010.6179Z'%20fill='%23FFA9DD'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41.2639%2025.031C41.2639%2035.254%2036.2453%2044.2379%2028.5006%2049.8141C40.6444%2048.0793%2050%2037.6084%2050%2025.031C50%2012.3915%2040.6444%201.98262%2028.5006%200.247802C36.1834%205.76205%2041.2639%2014.8079%2041.2639%2025.031Z'%20fill='%23007DFC'/%3e%3cpath%20d='M17.4722%2048.8229C19.207%2049.3805%2020.9418%2049.7523%2022.8005%2049.8762C29.554%2043.6804%2033.7671%2034.8204%2033.7671%2024.9691C33.7671%2015.1178%2029.492%206.25785%2022.8005%200.124023C20.9418%200.309896%2019.145%200.681644%2017.4722%201.17731C23.1723%207.43505%2026.6419%2015.7994%2026.6419%2025.0311C26.6419%2034.2628%2023.1723%2042.5652%2017.4722%2048.8229Z'%20fill='%23007DFC'/%3e%3cpath%20d='M-0.00018401%2025.0311C-0.000184386%2033.6432%204.33686%2041.264%2011.0283%2045.725C16.5426%2040.5206%2020.0122%2033.1476%2020.0122%2025.0311C20.0122%2016.8526%2016.5426%209.47966%2011.0283%204.33716C4.33687%208.79812%20-0.000183631%2016.357%20-0.00018401%2025.0311Z'%20fill='%23007DFC'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.51064%2035.6426C8.51064%2037.9831%206.59574%2039.8979%204.25532%2039.8979C1.91489%2039.8979%20-8.37027e-08%2037.9831%20-1.86006e-07%2035.6426L-1.32529e-06%204.5788C-1.4276e-06%202.23837%201.91489%200.323482%204.25532%200.323482C6.59574%200.323482%208.51064%202.23837%208.51064%204.5788L8.51064%2035.6426Z'%20fill='%23E77B64'/%3e%3cpath%20d='M22.3402%2045.7447C22.3402%2048.0851%2020.4253%2050%2018.0849%2050C15.7445%2050%2013.8296%2048.0851%2013.8296%2045.7447L13.8296%2014.6809C13.8296%2012.3404%2015.7445%2010.4255%2018.0849%2010.4255C20.4253%2010.4255%2022.3402%2012.3404%2022.3402%2014.6809L22.3402%2045.7447Z'%20fill='%23EE6CA5'/%3e%3cpath%20d='M36.1703%2035.6426C36.1703%2037.9831%2034.2554%2039.8979%2031.915%2039.8979C29.5746%2039.8979%2027.6597%2037.9831%2027.6597%2035.6426L27.6597%204.5788C27.6597%202.23837%2029.5746%200.323482%2031.915%200.323482C34.2554%200.323482%2036.1703%202.23837%2036.1703%204.5788L36.1703%2035.6426Z'%20fill='%2365B12A'/%3e%3cpath%20d='M49.9999%2045.7447C49.9999%2048.0851%2048.085%2050%2045.7446%2050C43.4042%2050%2041.4893%2048.0851%2041.4893%2045.7447L41.4893%2015.6809C41.4893%2013.3404%2043.4041%2011.4255%2045.7446%2011.4255C48.085%2011.4255%2049.9999%2013.3404%2049.9999%2015.6809L49.9999%2045.7447Z'%20fill='%2359ADCD'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.1959%201.60083C9.51036%204.1432%204.14313%209.51044%201.69492%2016.1959C0.659134%2019.0208%200.094162%2022.034%200%2024.953C0%2027.9662%200.564972%2030.9794%201.60075%2033.8042L24.9529%2010.4521L16.1959%201.60083Z'%20fill='%23B22234'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.9528%200C21.9396%200%2018.9264%200.564972%2016.1016%201.60075L24.9528%2010.452L39.5479%2024.9529L48.305%2016.1017C45.7626%209.51036%2040.4895%204.14313%2033.804%201.60075C30.9792%200.564972%2027.966%200%2024.9528%200Z'%20fill='%23CA9352'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.4518%2024.9529L1.60059%2033.8041C4.14296%2040.4896%209.41603%2045.7627%2016.1957%2048.305C19.0205%2049.3408%2022.0337%2049.9058%2025.0469%2049.9058C28.0601%2049.9058%2031.0733%2049.3408%2033.8981%2048.305L24.9528%2039.548L10.4518%2024.9529Z'%20fill='%23CA9352'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.3053%2016.1958L39.5482%2024.9529L24.9531%2039.548L33.8044%2048.3992C40.4898%2045.7627%2045.7629%2040.4896%2048.3053%2033.8041C49.3411%2030.9792%2049.906%2027.966%2049.906%2024.9529C50.0002%2021.9397%2049.4352%2019.0207%2048.3053%2016.1958Z'%20fill='%23B22234'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
                <li className="list-inline-item me-0">
                  <a
                    className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2"
                    href="#"
                    data-discover="true"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.4904%2048.5587C35.8826%2048.5587%2045.0983%2041.696%2048.0394%2031.696C46.863%2031.892%2045.4904%2031.892%2044.314%2031.892C36.863%2031.892%2030.1963%2028.7548%2025.4904%2023.6567C20.7845%2028.7548%2014.1179%2031.892%206.6669%2031.892C5.49043%2031.892%204.11788%2031.892%202.94141%2031.696C6.07866%2041.892%2015.0983%2048.5587%2025.4904%2048.5587Z'%20fill='%23057475'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44.3138%2027.3822C45.8824%2027.3822%2047.451%2027.1861%2049.0197%2026.7939C49.0197%2026.2057%2049.0197%2025.6175%2049.0197%2025.0292C49.0197%2014.6371%2042.1569%205.4214%2032.1569%202.48022C32.353%203.6567%2032.353%205.02924%2032.353%206.20571C32.353%2011.3038%2030.7844%2016.2057%2028.2354%2020.3234C32.353%2024.6371%2038.0393%2027.3822%2044.3138%2027.3822Z'%20fill='%2369C5C5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.66682%2027.3822C12.9413%2027.3822%2018.6276%2024.6371%2022.5492%2020.1273C20.0002%2016.2057%2018.4315%2011.3038%2018.4315%206.20571C18.4315%205.02924%2018.4315%203.6567%2018.6276%202.48022C8.82368%205.4214%201.96094%2014.6371%201.96094%2025.0292C1.96094%2025.6175%201.96094%2026.2057%201.96094%2026.7939C3.52956%2027.1861%205.09819%2027.3822%206.66682%2027.3822Z'%20fill='%2369C5C5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.4901%2016.0098C27.0588%2013.0686%2027.8431%209.73529%2027.8431%206.20588C27.8431%204.63725%2027.647%203.06863%2027.2549%201.5C26.6666%201.5%2026.0784%201.5%2025.4901%201.5C24.9019%201.5%2024.3137%201.5%2023.7254%201.5C23.3333%203.06863%2023.1372%204.63725%2023.1372%206.20588C23.1372%209.73529%2024.1176%2013.0686%2025.4901%2016.0098Z'%20fill='%23057475'/%3e%3c/svg%3e"
                      className="h-40px"
                      alt="icon"
                    />
                  </a>
                </li>
              </ul>
              <a
                role="button"
                tabIndex={0}
                href="#"
                className="icon-link icon-link-hover btn btn-outline-secondary"
              >
                Uncover our AI capabilities
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
                  ></path>
                </svg>{" "}
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <>
        {/* <section className="overflow-hidden">
          <div className="mb-5 container">
            <div className="row">
              <div className="col-lg-5 col-sm-8">
                <h2 className="text-center text-sm-start mb-0">
                  Success stories and projects
                </h2>
              </div>
              <div className=" ms-auto col-lg-5 col-sm-4">
                <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
                  <button
                    type="button"
                    className="btn-lg btn-icon rounded-circle mb-0 swiper-button-prev-project rtl-flip btn btn-secondary"
                  >
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
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="btn-lg btn-icon rounded-circle mb-0 swiper-button-next-project rtl-flip btn btn-secondary"
                  >
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
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper swiper-outside-n5 swiper-initialized swiper-horizontal px-4 px-sm-5 swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active"
                data-swiper-slide-index={0}
                style={{ width: 357, marginRight: 50 }}
              >
                <div className="card-img-scale card-content-hover card-metro-hover rounded-4 card">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/01-AC58fWYV.jpg"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                  <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/05-9ecwCA23.svg"
                      className="h-30px"
                      alt="client logo"
                    />
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a
                          className="text-white stretched-link"
                          href="#"
                          data-discover="true"
                        >
                          AI-Driven customer insights platform
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                data-swiper-slide-index={1}
                style={{ width: 357, marginRight: 50 }}
              >
                <div className="card-img-scale card-content-hover card-metro-hover rounded-4 card">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/02-7CqzRn0a.jpg"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                  <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/06-BCnLzfX0.svg"
                      className="h-30px"
                      alt="client logo"
                    />
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a
                          className="text-white stretched-link"
                          href="#"
                          data-discover="true"
                        >
                          Automated customer support with NLP
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={2}
                style={{ width: 357, marginRight: 50 }}
              >
                <div className="card-img-scale card-content-hover card-metro-hover rounded-4 card">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/03-BOG0Vwln.jpg"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                  <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                    <img
                      src="data:image/svg+xml,%3csvg%20width='205'%20height='50'%20viewBox='0%200%20205%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1837_869)'%3e%3cpath%20d='M6.91626%2024.3984V49.9992H0V29.9268L6.91626%2024.3984Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M6.91797%2024.3984V49.9992H13.8342V28.6817L6.91797%2024.3984Z'%20fill='%23222221'/%3e%3cpath%20d='M20.5458%2013.9414V49.9987H11.3242V21.5733L20.5458%2013.9414Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M20.543%2013.9414V49.9987H29.7647V19.6525L20.543%2013.9414Z'%20fill='%23222221'/%3e%3cpath%20d='M37.5785%200V50H25.1562V11.4186L37.5785%200Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M37.5781%200V50H50.0004V11.4186L37.5781%200Z'%20fill='%23222221'/%3e%3cmask%20id='mask0_1837_869'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='65'%20y='0'%20width='140'%20height='50'%3e%3cpath%20d='M205%200H65V50H205V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1837_869)'%3e%3cpath%20d='M65.418%2036.6504V14.4744H68.746V36.6504H65.418ZM77.1387%2036.6504H73.9387V19.4664H76.8187V21.2584L78.6107%2019.4664H84.9787L86.3547%2020.8744L87.7307%2019.4664H95.0267L97.2667%2021.6744V36.6504H94.0667V22.4744H87.2827V36.6504H84.0827V22.4744H78.6747L77.1387%2023.8504V36.6504ZM105.201%2043.1464H102.001V19.4664H104.881V21.2584L106.673%2019.4664H113.233L115.473%2021.6744V34.4104L113.233%2036.6504H105.201V43.1464ZM112.273%2022.4744H106.737L105.201%2023.8504V33.7064H112.273V22.4744ZM123.389%2036.6504H120.189V19.4664H123.069V21.6424L125.277%2019.4664H129.245V22.5384H125.213L123.389%2024.2664V36.6504ZM135.142%2016.3624H131.814V13.3544H135.142V16.3624ZM135.078%2036.6504H131.878V19.4664H135.078V36.6504ZM143.076%2036.6504H139.876V19.4664H142.756V21.2584L144.548%2019.4664H151.396L153.636%2021.6744V36.6504H150.404V22.4744H144.612L143.076%2023.8504V36.6504ZM166.92%2036.6504H161.192L158.952%2034.4104V22.1224H156.584V19.4664H158.952V15.9784H162.152V19.4664H166.568V22.1224H162.152V33.6424H166.92V36.6504ZM173.423%2016.3624H170.095V13.3544H173.423V16.3624ZM173.359%2036.6504H170.159V19.4664H173.359V36.6504ZM182.798%2036.6504H179.598V22.1224H176.814V19.4664H179.598V15.2744L181.838%2013.0664H187.15V15.7224H182.798V19.4664H186.83V22.1224H182.798V36.6504ZM189.819%2037.7384H192.923V40.3624H200.123V35.7224H191.803L189.595%2033.5144V19.4664H192.795V32.9064H200.123V19.4664H203.323V40.9384L201.051%2043.1464H192.091L189.819%2040.9384V37.7384Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1837_869'%3e%3crect%20width='205'%20height='50'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      className="h-30px"
                      alt="client logo"
                    />
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a
                          className="text-white stretched-link"
                          href="#"
                          data-discover="true"
                        >
                          Smart inventory management for retail
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={3}
                style={{ width: 357, marginRight: 50 }}
              >
                <div className="card-img-scale card-content-hover card-metro-hover rounded-4 card">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/04-Cgrv08CS.jpg"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                  <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/02-Dgy3Cl0W.svg"
                      className="h-30px"
                      alt="client logo"
                    />
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a
                          className="text-white stretched-link"
                          href="#"
                          data-discover="true"
                        >
                          AI-powered fraud detection
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={4}
                style={{ width: 357, marginRight: 50 }}
              >
                <div className="card-img-scale card-content-hover card-metro-hover rounded-4 card">
                  <img
                    src="https://themes.stackbros.in/folio-react/assets/05-CLROXl33.jpg"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                  <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/03-Dgu1XeO_.svg"
                      className="h-30px"
                      alt="client logo"
                    />
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a
                          className="text-white stretched-link"
                          href="#"
                          data-discover="true"
                        >
                          AI-Driven customer insights platform
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-container-small bg-primary-grad rounded-3 text-center py-3 mt-6 mx-3 mx-md-auto">
            <p className="text-white mb-0 px-2 px-sm-5 px-md-0">
              🔥 Kickstart your project! collaborate with us for success!
              <a
                className="fw-semibold hover-underline-animation text-white"
                href=""
                data-discover="true"
              >
                Start today
              </a>
            </p>
          </div>
        </section> */}
        <section className="pt-6">
  <div className="container">
    <div className="row">

      {/* Leads Managed */}
      <div className="col-md-4">
        <div className="d-flex justify-content-between">
          <div className="text-center">
            <div className="d-flex">
              <h4
                className="purecounter display-2 mb-0"
                data-purecounter-start={0}
                data-purecounter-end={5000}
                data-purecounter-delay={300}
              >
                <span>500</span>
              </h4>
              <span className="display-2 text-primary mb-0">+</span>
            </div>
            <p className="px-3 py-2 bg-body mt-n3 position-relative">
              Leads managed via Clikdit
            </p>
          </div>
          <div className="vr bg-primary-grad opacity-1 my-3" />
        </div>
      </div>

      {/* Automated Deals */}
      <div className="text-center col-md-4">
        <div className="d-flex justify-content-center">
          <h4
            className="purecounter display-2 mb-0"
            data-purecounter-start={0}
            data-purecounter-end={1200}
            data-purecounter-delay={300}
          >
            <span>120</span>
          </h4>
          <span className="display-2 text-purple mb-0">+</span>
        </div>
        <p className="px-3 py-2 bg-body mt-n3 position-relative">
          Automated deals created in HubSpot
        </p>
      </div>

      {/* Active Sales Users */}
      <div className="col-md-4">
        <div className="d-flex justify-content-between">
          <div className="vr bg-primary-grad opacity-1 my-3" />
          <div className="text-center">
            <div className="d-flex">
              <span className="display-2 heading-color mb-0">&gt;</span>
              <h4
                className="purecounter display-2 mb-0"
                data-purecounter-start={0}
                data-purecounter-end={300}
                data-purecounter-delay={300}
              >
                <span>30</span>
              </h4>
              <span className="display-2 text-pink mb-0"></span>
            </div>
            <p className="px-3 py-2 bg-body mt-n3 position-relative">
              Active sales users on Clikdit
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        <section className="pt-0">
  <div className="relative container">
    {/* Floating Avatars */}
    <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
      <img
        className="absolute top-0 left-0 mt-6 -ml-3 w-16 h-16 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/10-55zuZDDJ.jpg"
        alt="avatar"
      />
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 -ml-9 -mt-2 w-12 h-12 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/02-heFxDHOc.jpg"
        alt="avatar"
      />
      <img
        className="absolute top-0 right-0 mr-7 -mt-4 w-14 h-14 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/06-YTqO2sXr.jpg"
        alt="avatar"
      />
      <img
        className="absolute bottom-1/2 right-0 mb-8 -mr-4 w-16 h-16 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/09-BP9iiVIJ.jpg"
        alt="avatar"
      />
      <img
        className="absolute bottom-0 right-0 mr-9 mb-4 w-14 h-14 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/03-CNBkP2Up.jpg"
        alt="avatar"
      />
      <img
        className="absolute bottom-0 left-0 ml-8 -mb-3 w-12 h-12 rounded-full"
        src="https://themes.stackbros.in/folio-react/assets/01-DkrMaLUg.jpg"
        alt="avatar"
      />
    </div>

    {/* Background Container */}
    <div className="bg-secondary relative rounded-4 overflow-hidden px-5 py-7 md:py-8 z-0">
      {/* Decorative SVG Background Elements */}
      <div className="absolute right-0 top-0 -mr-5 mt-3 z-0">
        <svg
          className="text-primary opacity-1"
          width={453}
          height={138}
          viewBox="0 0 453 138"
          fill="currentColor"
        >
          <path d="M452.303 -0.000286079V0.792195H337.93L303.294 35.4047H202.253L196.613 29.7642L130.255 29.7642L106.527 53.5151L26.2305 53.5151V52.7227L106.201 52.7227L129.928 28.995L196.939 28.995L202.58 34.6356H302.968L337.603 -0.000286079H452.303Z"/>
          <path d="M452.297 78.3851V79.1543L354.473 79.1543L328.321 53.0026H273.617L263.502 42.9102L213.436 42.9102L180.921 75.425L87.6186 75.425L81.5818 69.3882H51.9805V68.5957H81.9081L87.9449 74.6558H180.595L213.109 42.1177L263.828 42.1177L273.944 52.2334H328.648L354.799 78.3851L452.297 78.3851Z"/>
          <path d="M452.299 90.7848V91.554L348.531 91.554L323.405 66.4279L220.127 66.4279L177.706 108.849L137.64 108.849L128.806 100.038H41.75V99.2457H129.132L137.966 108.079L177.38 108.079L219.801 65.6587L323.731 65.6587L348.858 90.7848L452.299 90.7848Z"/>
          <path d="M452.301 111.437V112.23L297.302 112.23L281.732 96.6364L209.29 96.6364L183.931 121.996H80.0469V121.226H183.605L208.964 95.8672L282.058 95.8672L297.628 111.437L452.301 111.437Z"/>
          <path d="M271.641 108.08V108.849H216.191L192.207 132.833H119.648V132.064H191.88L215.864 108.08H271.641Z"/>
          <path d="M197.777 45.2641L175.704 67.3369H119.648V66.5677H175.378L197.218 44.7281L197.777 45.2641Z"/>
          <path d="M180.202 83.4674V84.2365L95.8964 84.2365L90.2092 89.9004H5.46094V89.1312H89.9062L95.5701 83.4674L180.202 83.4674Z"/>
          <path d="M44.5774 97.3488C43.0482 95.8196 40.5689 95.8196 39.0398 97.3488C37.5106 98.878 37.5106 101.357 39.0398 102.886C40.5689 104.416 43.0482 104.416 44.5774 102.886C46.1066 101.357 46.1066 98.878 44.5774 97.3488Z"/>
          <path d="M8.3079 86.6461C6.77872 85.1169 4.29941 85.1169 2.77023 86.6461C1.24104 88.1753 1.24104 90.6546 2.77023 92.1838C4.29941 93.713 6.77871 93.713 8.3079 92.1838C9.83708 90.6546 9.83709 88.1753 8.3079 86.6461Z"/>
          <path d="M54.761 66.5524C53.2318 65.0232 50.7525 65.0232 49.2234 66.5524C47.6942 68.0816 47.6942 70.5609 49.2234 72.0901C50.7525 73.6192 53.2318 73.6192 54.761 72.0901C56.2902 70.5609 56.2902 68.0816 54.761 66.5524Z"/>
          <path d="M30.0721 53.0713C30.0311 50.9091 28.2451 49.1896 26.0829 49.2306C23.9207 49.2716 22.2012 51.0576 22.2422 53.2198C22.2832 55.382 24.0692 57.1015 26.2314 57.0605C28.3936 57.0195 30.1131 55.2335 30.0721 53.0713Z"/>
          <path d="M123.492 66.9646C123.492 64.802 121.739 63.0488 119.576 63.0488C117.413 63.0488 115.66 64.802 115.66 66.9646C115.66 69.1272 117.413 70.8804 119.576 70.8804C121.739 70.8804 123.492 69.1272 123.492 66.9646Z"/>
          <path d="M84.0815 121.506C84.0815 119.343 82.3284 117.59 80.1658 117.59C78.0031 117.59 76.25 119.343 76.25 121.506C76.25 123.669 78.0031 125.422 80.1658 125.422C82.3284 125.422 84.0815 123.669 84.0815 121.506Z"/>
          <path d="M123.652 129.693C122.122 128.164 119.643 128.164 118.114 129.693C116.585 131.223 116.585 133.702 118.114 135.231C119.643 136.76 122.122 136.76 123.652 135.231C125.181 133.702 125.181 131.223 123.652 129.693Z"/>
          <path d="M221.777 80.112C220.247 78.5828 217.768 78.5828 216.239 80.112C214.71 81.6411 214.71 84.1204 216.239 85.6496C217.768 87.1788 220.247 87.1788 221.777 85.6496C223.306 84.1204 223.306 81.6411 221.777 80.112Z"/>
          <path d="M169.945 49.2281V54.9619H175.679V49.2281H169.945Z"/>
          <path d="M155.848 49.2281V54.9619H161.581V49.2281H155.848Z"/>
          <path d="M141.766 49.2281V54.9619H147.499V49.2281H141.766Z"/>
          <path d="M308.512 80.0182V85.752H314.246V80.0182H308.512Z"/>
          <path d="M283.973 80.0182V85.752H289.706V80.0182H283.973Z"/>
          <path d="M259.449 80.0182V85.752H265.183V80.0182H259.449Z"/>
        </svg>
      </div>
      
      <div className="absolute left-0 bottom-0 mb-3 -ml-5 z-0">
        <svg
          className="text-primary opacity-1"
          width={453}
          height={138}
          viewBox="0 0 453 138"
          fill="currentColor"
        >
          <path d="M-0.00186092 -0.000286079V0.792195H114.371L149.007 35.4047H250.047L255.688 29.7642L322.046 29.7642L345.774 53.5151L426.07 53.5151V52.7227L346.1 52.7227L322.373 28.995L255.362 28.995L249.721 34.6356H149.333L114.697 -0.000286079H-0.00186092Z"/>
          <path d="M0.00357036 78.3851V79.1543L97.8277 79.1543L123.979 53.0026H178.684L188.799 42.9102L238.865 42.9102L271.38 75.425L364.682 75.425L370.719 69.3882H400.32V68.5957H370.393L364.356 74.6558H271.706L239.191 42.1177L188.473 42.1177L178.357 52.2334H123.653L97.5014 78.3851L0.00357036 78.3851Z"/>
          <path d="M0.00180058 90.7848V91.554L103.769 91.554L128.896 66.4279L232.174 66.4279L274.595 108.849L314.661 108.849L323.495 100.038H410.551V99.2457H323.169L314.335 108.079L274.921 108.079L232.5 65.6587L128.569 65.6587L103.443 90.7848L0.00180058 90.7848Z"/>
          <path d="M0.000130941 111.437V112.23L154.999 112.23L170.569 96.6364L243.01 96.6364L268.37 121.996H372.254V121.226H268.696L243.337 95.8672L170.243 95.8672L154.673 111.437L0.000130941 111.437Z"/>
          <path d="M180.66 108.08V108.849H236.11L260.094 132.833H332.652V132.064H260.421L236.436 108.08H180.66Z"/>
          <path d="M254.524 45.2641L276.596 67.3369H332.652V66.5677H276.923L255.083 44.7281L254.524 45.2641Z"/>
          <path d="M272.099 83.4674V84.2365L356.404 84.2365L362.092 89.9004H446.84V89.1312H362.395L356.731 83.4674L272.099 83.4674Z"/>
          <path d="M407.723 97.3488C409.253 95.8196 411.732 95.8196 413.261 97.3488C414.79 98.878 414.79 101.357 413.261 102.886C411.732 104.416 409.253 104.416 407.723 102.886C406.194 101.357 406.194 98.878 407.723 97.3488Z"/>
          <path d="M443.993 86.6461C445.522 85.1169 448.001 85.1169 449.531 86.6461C451.06 88.1753 451.06 90.6546 449.531 92.1838C448.001 93.713 445.522 93.713 443.993 92.1838C442.464 90.6546 442.464 88.1753 443.993 86.6461Z"/>
          <path d="M397.54 66.5524C399.069 65.0232 401.548 65.0232 403.077 66.5524C404.607 68.0816 404.607 70.5609 403.077 72.0901C401.548 73.6192 399.069 73.6192 397.54 72.0901C396.011 70.5609 396.011 68.0816 397.54 66.5524Z"/>
          <path d="M422.229 53.0713C422.27 50.9091 424.056 49.1896 426.218 49.2306C428.38 49.2716 430.1 51.0576 430.059 53.2198C430.018 55.382 428.232 57.1015 426.069 57.0605C423.907 57.0195 422.188 55.2335 422.229 53.0713Z"/>
          <path d="M328.809 66.9646C328.809 64.802 330.562 63.0488 332.725 63.0488C334.887 63.0488 336.641 64.802 336.641 66.9646C336.641 69.1272 334.887 70.8804 332.725 70.8804C330.562 70.8804 328.809 69.1272 328.809 66.9646Z"/>
          <path d="M368.219 121.506C368.219 119.343 369.972 117.59 372.135 117.59C374.298 117.59 376.051 119.343 376.051 121.506C376.051 123.669 374.298 125.422 372.135 125.422C369.972 125.422 368.219 123.669 368.219 121.506Z"/>
          <path d="M328.649 129.693C330.178 128.164 332.658 128.164 334.187 129.693C335.716 131.223 335.716 133.702 334.187 135.231C332.658 136.76 330.178 136.76 328.649 135.231C327.12 133.702 327.12 131.223 328.649 129.693Z"/>
          <path d="M230.524 80.112C232.053 78.5828 234.533 78.5828 236.062 80.112C237.591 81.6411 237.591 84.1204 236.062 85.6496C234.533 87.1788 232.053 87.1788 230.524 85.6496C228.995 84.1204 228.995 81.6411 230.524 80.112Z"/>
          <path d="M282.355 49.2281V54.9619H276.622V49.2281H282.355Z"/>
          <path d="M296.453 49.2281V54.9619H290.719V49.2281H296.453Z"/>
          <path d="M310.535 49.2281V54.9619H304.801V49.2281H310.535Z"/>
          <path d="M143.789 80.0182V85.752H138.055V80.0182H143.789Z"/>
          <path d="M168.328 80.0182V85.752H162.594V80.0182H168.328Z"/>
          <path d="M192.852 80.0182V85.752H187.118V80.0182H192.852Z"/>
        </svg>
      </div>

      {/* Testimonial Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            {/* Star Rating */}
            <div className="flex justify-center mb-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-warning"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="mb-4">
              <p className="text-base text-heading-color mb-0">
                Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="relative z-30">
              <h6 className="mb-0 font-semibold">Louis Ferguson</h6>
              <span className="text-sm text-gray-600">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* <section className="pt-0 pb-md-6">
          <div className="container">
            <div className="row">
              <div className="mb-4 mb-sm-5 mb-lg-0 col-lg-4">
                <h2 className="mb-3 mb-lg-4">Solutions we've built for...</h2>
                <p className="mb-3 mb-lg-4">
                  Our AI solutions have driven innovation, streamlined
                  operations, and fueled exceptional business growth.
                </p>
                <a
                  role="button"
                  tabIndex={0}
                  href="#"
                  className="icon-link icon-link-hover btn btn-primary"
                >
                  Become a client
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
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="col-lg-8">
                <div className=" border-md-transparent g-0 row">
                  <div className="border-primary border-opacity-10 border-end border-bottom col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/03-Dgu1XeO_.svg"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/03-BbFucOrd.svg"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                  <div className="border-primary border-opacity-10 border-end border-bottom col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='205'%20height='50'%20viewBox='0%200%20205%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1837_869)'%3e%3cpath%20d='M6.91626%2024.3984V49.9992H0V29.9268L6.91626%2024.3984Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M6.91797%2024.3984V49.9992H13.8342V28.6817L6.91797%2024.3984Z'%20fill='%23222221'/%3e%3cpath%20d='M20.5458%2013.9414V49.9987H11.3242V21.5733L20.5458%2013.9414Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M20.543%2013.9414V49.9987H29.7647V19.6525L20.543%2013.9414Z'%20fill='%23222221'/%3e%3cpath%20d='M37.5785%200V50H25.1562V11.4186L37.5785%200Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M37.5781%200V50H50.0004V11.4186L37.5781%200Z'%20fill='%23222221'/%3e%3cmask%20id='mask0_1837_869'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='65'%20y='0'%20width='140'%20height='50'%3e%3cpath%20d='M205%200H65V50H205V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1837_869)'%3e%3cpath%20d='M65.418%2036.6504V14.4744H68.746V36.6504H65.418ZM77.1387%2036.6504H73.9387V19.4664H76.8187V21.2584L78.6107%2019.4664H84.9787L86.3547%2020.8744L87.7307%2019.4664H95.0267L97.2667%2021.6744V36.6504H94.0667V22.4744H87.2827V36.6504H84.0827V22.4744H78.6747L77.1387%2023.8504V36.6504ZM105.201%2043.1464H102.001V19.4664H104.881V21.2584L106.673%2019.4664H113.233L115.473%2021.6744V34.4104L113.233%2036.6504H105.201V43.1464ZM112.273%2022.4744H106.737L105.201%2023.8504V33.7064H112.273V22.4744ZM123.389%2036.6504H120.189V19.4664H123.069V21.6424L125.277%2019.4664H129.245V22.5384H125.213L123.389%2024.2664V36.6504ZM135.142%2016.3624H131.814V13.3544H135.142V16.3624ZM135.078%2036.6504H131.878V19.4664H135.078V36.6504ZM143.076%2036.6504H139.876V19.4664H142.756V21.2584L144.548%2019.4664H151.396L153.636%2021.6744V36.6504H150.404V22.4744H144.612L143.076%2023.8504V36.6504ZM166.92%2036.6504H161.192L158.952%2034.4104V22.1224H156.584V19.4664H158.952V15.9784H162.152V19.4664H166.568V22.1224H162.152V33.6424H166.92V36.6504ZM173.423%2016.3624H170.095V13.3544H173.423V16.3624ZM173.359%2036.6504H170.159V19.4664H173.359V36.6504ZM182.798%2036.6504H179.598V22.1224H176.814V19.4664H179.598V15.2744L181.838%2013.0664H187.15V15.7224H182.798V19.4664H186.83V22.1224H182.798V36.6504ZM189.819%2037.7384H192.923V40.3624H200.123V35.7224H191.803L189.595%2033.5144V19.4664H192.795V32.9064H200.123V19.4664H203.323V40.9384L201.051%2043.1464H192.091L189.819%2040.9384V37.7384Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1837_869'%3e%3crect%20width='205'%20height='50'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="data:image/svg+xml,%3csvg%20width='205'%20height='50'%20viewBox='0%200%20205%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.91626%2024.3992V50H0V29.9276L6.91626%2024.3992Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M6.91602%2024.3992V50H13.8323V28.6825L6.91602%2024.3992Z'%20fill='%23222221'/%3e%3cpath%20d='M20.5444%2013.9426V49.9999H11.3228V21.5745L20.5444%2013.9426Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M20.5444%2013.9426V49.9999H29.7661V19.6537L20.5444%2013.9426Z'%20fill='%23222221'/%3e%3cpath%20d='M37.5776%200V50H25.1553V11.4186L37.5776%200Z'%20fill='%23D9D9D9'/%3e%3cpath%20d='M37.5776%200V50H49.9999V11.4186L37.5776%200Z'%20fill='%23222221'/%3e%3cg%20clip-path='url(%23clip0_67_2010)'%3e%3cpath%20d='M65.4161%2036.65V14.474H68.7441V36.65H65.4161ZM77.1368%2036.65H73.9368V19.466H76.8168V21.258L78.6088%2019.466H84.9768L86.3528%2020.874L87.7288%2019.466H95.0248L97.2648%2021.674V36.65H94.0648V22.474H87.2808V36.65H84.0808V22.474H78.6728L77.1368%2023.85V36.65ZM105.199%2043.146H101.999V19.466H104.879V21.258L106.671%2019.466H113.231L115.471%2021.674V34.41L113.231%2036.65H105.199V43.146ZM112.271%2022.474H106.735L105.199%2023.85V33.706H112.271V22.474ZM123.387%2036.65H120.187V19.466H123.067V21.642L125.275%2019.466H129.243V22.538H125.211L123.387%2024.266V36.65ZM135.14%2016.362H131.812V13.354H135.14V16.362ZM135.076%2036.65H131.876V19.466H135.076V36.65ZM143.074%2036.65H139.874V19.466H142.754V21.258L144.546%2019.466H151.394L153.634%2021.674V36.65H150.402V22.474H144.61L143.074%2023.85V36.65ZM166.918%2036.65H161.19L158.95%2034.41V22.122H156.582V19.466H158.95V15.978H162.15V19.466H166.566V22.122H162.15V33.642H166.918V36.65ZM173.421%2016.362H170.093V13.354H173.421V16.362ZM173.357%2036.65H170.157V19.466H173.357V36.65ZM182.796%2036.65H179.596V22.122H176.812V19.466H179.596V15.274L181.836%2013.066H187.148V15.722H182.796V19.466H186.828V22.122H182.796V36.65ZM189.817%2037.738H192.921V40.362H200.121V35.722H191.801L189.593%2033.514V19.466H192.793V32.906H200.121V19.466H203.321V40.938L201.049%2043.146H192.089L189.817%2040.938V37.738Z'%20fill='%23181717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_67_2010'%3e%3crect%20width='140'%20height='50'%20fill='white'%20transform='translate(65)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                  <div className="border-primary border-opacity-10 border-bottom col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='199'%20height='50'%20viewBox='0%200%20199%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1837_894)'%3e%3cpath%20d='M49.8648%2012.0619C50.4911%209.605%2049.0071%207.10557%2046.5502%206.47929C44.0932%205.85302%2041.5938%207.33705%2040.9675%209.79398C40.3413%2012.2509%2041.8253%2014.7504%2044.2822%2015.3766C46.7391%2016.0029%2049.2386%2014.5189%2049.8648%2012.0619Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M34.4468%207.94642C35.2753%207.11586%2035.7878%205.96996%2035.7878%204.70426C35.7878%202.16869%2033.7324%200.113281%2031.1968%200.113281C29.5939%200.113281%2028.1846%200.935993%2027.3635%202.18092C27.1453%202.39953%201.93732%2033.4662%201.76673%2033.725C0.93824%2034.5555%200.425781%2035.7014%200.425781%2036.9671C0.425781%2039.5027%202.48119%2041.5581%205.01676%2041.5581C6.61972%2041.5581%208.029%2040.7354%208.8501%2039.4904C9.06801%2039.2716%2034.2762%208.20497%2034.4468%207.94642Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M40.0003%2024.8602C40.8309%2024.0294%2041.3445%2022.8819%2041.3445%2021.6143C41.3445%2019.0788%2039.2891%2017.0234%2036.7535%2017.0234C35.1498%2017.0234%2033.7401%2017.847%2032.919%2019.0929C32.699%2019.3129%2015.5747%2040.4925%2015.4028%2040.7533C14.5722%2041.5841%2014.0586%2042.7316%2014.0586%2043.9992C14.0586%2046.5348%2016.114%2048.5902%2018.6496%2048.5902C20.2532%2048.5902%2021.663%2047.7668%2022.4841%2046.5207C22.7041%2046.3007%2039.8285%2025.1211%2040.0003%2024.8602Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M8.55664%2015.2148C10.9263%2014.3132%2012.1164%2011.6613%2011.2148%209.29153C10.3132%206.92183%207.66124%205.73172%205.29154%206.63336C2.92183%207.53499%201.73173%2010.187%202.63336%2012.5567C3.53499%2014.9264%206.18694%2016.1165%208.55664%2015.2148Z'%20fill='%231C3CF1'/%3e%3cmask%20id='mask0_1837_894'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='65'%20y='0'%20width='134'%20height='50'%3e%3cpath%20d='M199%200H65V50H199V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1837_894)'%3e%3cpath%20d='M71.898%2036.849L65.082%2013.937H67.482L72.122%2029.681C72.442%2030.801%2072.73%2031.953%2073.018%2033.457C73.402%2031.793%2073.722%2030.801%2074.074%2029.681L79.066%2013.937H81.466L86.458%2029.681C86.81%2030.833%2087.13%2031.985%2087.482%2033.457C87.834%2031.697%2088.122%2030.577%2088.378%2029.713L93.114%2013.937H95.45L88.57%2036.849H86.394L80.25%2017.393L74.106%2036.849H71.898ZM96.4797%2036.849H94.1437L102.56%2013.937H105.408L113.92%2036.849H111.52L109.28%2030.769H98.7197L96.4797%2036.849ZM103.68%2017.169L99.4237%2028.753H108.544L104.256%2017.169C104.16%2016.849%20104%2016.465%20103.968%2016.241C103.936%2016.433%20103.808%2016.849%20103.68%2017.169ZM120.229%2027.281L112.453%2013.937H115.045L120.709%2023.825C120.965%2024.305%20121.157%2024.689%20121.381%2025.201C121.669%2024.625%20121.669%2024.625%20122.085%2023.825L127.685%2013.937H130.213L122.533%2027.281V36.849H120.229V27.281ZM137.228%2013.457V33.073H147.02V36.849H133.132V13.457H137.228ZM154.446%2013.457V36.849H150.35V13.457H154.446ZM163.664%2036.849H159.632V13.457H163.696L174.672%2030.033V13.457H178.704V36.849H174.672L163.664%2020.273V36.849ZM198.41%2036.849H183.882V13.457H198.41V17.233H187.978V23.249H197.322V26.865H187.978V33.073H198.41V36.849Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1837_894'%3e%3crect%20width='199'%20height='50'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="data:image/svg+xml,%3csvg%20width='199'%20height='50'%20viewBox='0%200%20199%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.8662%2012.0624C50.4925%209.60553%2049.0085%207.1061%2046.5516%206.47982C44.0946%205.85355%2041.5952%207.33758%2040.9689%209.79451C40.3427%2012.2514%2041.8267%2014.7509%2044.2836%2015.3771C46.7405%2016.0034%2049.24%2014.5194%2049.8662%2012.0624Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M34.4478%207.94642C35.2763%207.11586%2035.7888%205.96996%2035.7888%204.70426C35.7888%202.16869%2033.7334%200.113281%2031.1978%200.113281C29.5949%200.113281%2028.1856%200.935993%2027.3645%202.18092C27.1463%202.39953%201.9383%2033.4662%201.76771%2033.725C0.939217%2034.5555%200.426758%2035.7014%200.426758%2036.9671C0.426758%2039.5027%202.48217%2041.5581%205.01774%2041.5581C6.6207%2041.5581%208.02998%2040.7354%208.85108%2039.4904C9.06899%2039.2716%2034.2772%208.20497%2034.4478%207.94642Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M40.0008%2024.8615C40.8314%2024.0307%2041.345%2022.8832%2041.345%2021.6156C41.345%2019.0801%2039.2896%2017.0247%2036.754%2017.0247C35.1503%2017.0247%2033.7406%2017.8483%2032.9195%2019.0942C32.6995%2019.3142%2015.5752%2040.4938%2015.4033%2040.7546C14.5727%2041.5854%2014.0591%2042.7329%2014.0591%2044.0005C14.0591%2046.5361%2016.1145%2048.5915%2018.6501%2048.5915C20.2537%2048.5915%2021.6635%2047.7681%2022.4846%2046.522C22.7046%2046.302%2039.829%2025.1224%2040.0008%2024.8615Z'%20fill='%231C3CF1'/%3e%3cpath%20d='M8.55583%2015.214C10.9255%2014.3124%2012.1156%2011.6605%2011.214%209.29076C10.3124%206.92106%207.66043%205.73095%205.29073%206.63259C2.92102%207.53422%201.73092%2010.1862%202.63255%2012.5559C3.53418%2014.9256%206.18613%2016.1157%208.55583%2015.214Z'%20fill='%231C3CF1'/%3e%3cg%20clip-path='url(%23clip0_67_2015)'%3e%3cpath%20d='M71.8961%2036.85L65.0801%2013.938H67.4801L72.1201%2029.682C72.4401%2030.802%2072.7281%2031.954%2073.0161%2033.458C73.4001%2031.794%2073.7201%2030.802%2074.0721%2029.682L79.0641%2013.938H81.4641L86.4561%2029.682C86.8081%2030.834%2087.1281%2031.986%2087.4801%2033.458C87.8321%2031.698%2088.1201%2030.578%2088.3761%2029.714L93.1121%2013.938H95.4481L88.5681%2036.85H86.3921L80.2481%2017.394L74.1041%2036.85H71.8961ZM96.4778%2036.85H94.1418L102.558%2013.938H105.406L113.918%2036.85H111.518L109.278%2030.77H98.7178L96.4778%2036.85ZM103.678%2017.17L99.4218%2028.754H108.542L104.254%2017.17C104.158%2016.85%20103.998%2016.466%20103.966%2016.242C103.934%2016.434%20103.806%2016.85%20103.678%2017.17ZM120.227%2027.282L112.451%2013.938H115.043L120.707%2023.826C120.963%2024.306%20121.155%2024.69%20121.379%2025.202C121.667%2024.626%20121.667%2024.626%20122.083%2023.826L127.683%2013.938H130.211L122.531%2027.282V36.85H120.227V27.282ZM137.226%2013.458V33.074H147.018V36.85H133.13V13.458H137.226ZM154.444%2013.458V36.85H150.348V13.458H154.444ZM163.662%2036.85H159.63V13.458H163.694L174.67%2030.034V13.458H178.702V36.85H174.67L163.662%2020.274V36.85ZM198.408%2036.85H183.88V13.458H198.408V17.234H187.976V23.25H197.32V26.866H187.976V33.074H198.408V36.85Z'%20fill='%231D1F17'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_67_2015'%3e%3crect%20width='134'%20height='50'%20fill='white'%20transform='translate(65)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                  <div className="border-primary border-opacity-10 border-end col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/02-Dgy3Cl0W.svg"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/02-Co-v-Hli.svg"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                  <div className="border-primary border-opacity-10 border-end col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='200'%20height='51'%20viewBox='0%200%20200%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1837_904)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.0781%2028.0528V44.791L48.9953%2039.66V22.9219L40.0781%2028.0528Z'%20fill='%23BD2304'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.3378%2010.4142L9.58126%2017.7744L0.664062%2012.6435L22.3378%200.152344L37.589%208.96339L28.7072%2014.0943L22.3378%2010.4142Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.6055%2036.3954L40.0764%2028.0529L48.9759%2022.9043L40.0764%2017.7734L25.6055%2026.1513V36.3954Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.664062%2012.6445V37.6622L22.3378%2050.1534V39.8915L9.58126%2032.5313V17.7755L0.664062%2012.6445Z'%20fill='%23BD2304'/%3e%3cmask%20id='mask0_1837_904'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='65'%20y='0'%20width='135'%20height='50'%3e%3cpath%20d='M200%200H65V50H200V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1837_904)'%3e%3cpath%20d='M83.2876%2035.9648C81.7066%2036.5848%2079.7846%2036.7708%2077.7386%2036.7708C77.4286%2036.7708%2077.1186%2036.7708%2076.8086%2036.7398C70.0816%2036.4298%2065.1836%2032.3998%2065.1836%2025.2698C65.1836%2018.0778%2070.4226%2013.6758%2077.4286%2013.6758C79.5676%2013.6758%2081.6446%2014.0788%2083.1946%2014.8228L82.9156%2020.1238C81.6446%2019.5348%2079.8776%2019.1008%2077.9556%2019.1008C73.2126%2019.1008%2070.3296%2021.6738%2070.3296%2025.5798C70.3296%2029.2998%2072.5616%2031.6558%2076.3746%2032.0898C77.0566%2032.1518%2077.8006%2032.1518%2078.4826%2032.1208V26.1068H83.2876V35.9648ZM86.4825%2036.3988V19.5658H91.1945V21.7978H91.3185C92.1865%2019.9998%2094.2325%2019.1628%2096.9605%2019.1628L96.6505%2024.6498C92.6825%2024.4948%2091.2875%2026.0758%2091.2875%2029.9818V36.3988H86.4825ZM116.241%2042.2888V19.5658H120.953V21.5808H121.077C122.038%2020.0928%20123.929%2019.1628%20126.223%2019.1628C130.78%2019.1628%20134.19%2022.4178%20134.19%2027.9978C134.19%2033.5778%20130.501%2036.8018%20126.192%2036.8018C124.022%2036.8018%20122.1%2035.8408%20121.139%2034.0738H121.046V42.2888H116.241ZM125.169%2032.3688C127.401%2032.3688%20129.138%2030.6328%20129.138%2028.2148C129.138%2025.7968%20127.401%2024.0918%20125.169%2024.0918C122.906%2024.0918%20121.139%2025.7038%20121.139%2028.2148C121.139%2030.6948%20122.906%2032.3688%20125.169%2032.3688ZM170.366%2036.0578C168.878%2036.5848%20167.204%2036.8018%20165.375%2036.8018C159.299%2036.8018%20155.424%2033.7018%20155.424%2027.9048C155.424%2022.8828%20158.71%2019.1628%20163.763%2019.1628C168.909%2019.1628%20171.481%2023.1928%20171.481%2027.7498C171.481%2028.4318%20171.45%2029.1758%20171.326%2029.7338H160.786C161.406%2031.8728%20163.329%2032.8338%20166.243%2032.8338C167.669%2032.8338%20168.847%2032.6478%20169.963%2032.2448L170.366%2036.0578ZM163.825%2023.6268C162.275%2023.6268%20160.879%2024.5258%20160.538%2026.7888H166.955C166.862%2025.0218%20165.623%2023.6268%20163.825%2023.6268ZM174.125%2036.3988V19.5658H178.836V21.7978H178.961C179.829%2019.9998%20181.875%2019.1628%20184.603%2019.1628L184.293%2024.6498C180.325%2024.4948%20178.929%2026.0758%20178.929%2029.9818V36.3988H174.125Z'%20fill='white'/%3e%3cpath%20d='M108.064%2025.7051C108.064%2024.7131%20107.072%2024.0931%20104.995%2024.0931C102.98%2024.0931%20101.089%2024.6821%2099.6018%2025.3641L99.2608%2020.5591C100.717%2019.7841%20102.918%2019.1641%20105.491%2019.1641C110.761%2019.1641%20113.024%2021.6131%20113.024%2026.1391V36.4001H108.126V34.3541C106.886%2035.8421%20105.46%2036.8031%20102.98%2036.8031C100.19%2036.8031%2098.1758%2035.3461%2098.1758%2032.5251C98.1758%2028.9291%20101.058%2027.8751%20104.654%2027.2861C106.018%2027.0381%20106.762%2026.8521%20107.413%2026.6041C107.94%2026.3871%20108.064%2026.1391%20108.064%2025.7051ZM108.126%2029.0841C107.63%2029.3321%20106.824%2029.6421%20105.801%2029.8591C104.189%2030.2311%20103.197%2030.6341%20103.197%2032.0291C103.197%2033.1451%20104.127%2033.6721%20105.305%2033.6721C106.669%2033.6721%20107.661%2032.8351%20108.126%2031.8121V29.0841ZM185.937%2036.4001V32.7731L193.47%2024.1551H186.278V19.5671H199.329V23.8761L191.796%2032.2151H199.484V36.4001H185.937Z'%20fill='white'/%3e%3cpath%20d='M148.143%2027.8438C148.143%2025.5498%20147.182%2023.9998%20144.919%2023.9998C142.687%2023.9998%20141.664%2025.5188%20141.664%2027.8748V36.3998H136.859V12.8398H141.571V21.5198H141.695C142.687%2020.0628%20144.206%2019.1638%20146.593%2019.1638C150.778%2019.1638%20152.917%2021.9538%20152.917%2026.0458V36.3998H148.143V27.8438Z'%20fill='%23BD2304'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1837_904'%3e%3crect%20width='200'%20height='51'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="data:image/svg+xml,%3csvg%20width='200'%20height='51'%20viewBox='0%200%20200%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.0767%2028.0531V44.7913L48.9939%2039.6603V22.9222L40.0767%2028.0531Z'%20fill='%23BD2304'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.3378%2010.4132L9.58126%2017.7734L0.664062%2012.6425L22.3378%200.151367L37.589%208.96241L28.7072%2014.0933L22.3378%2010.4132Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.606%2036.3956L40.0769%2028.0531L48.9764%2022.9045L40.0769%2017.7736L25.606%2026.1515V36.3956Z'%20fill='%23DC2400'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.664062%2012.6426V37.6603L22.3378%2050.1515V39.8896L9.58126%2032.5294V17.7736L0.664062%2012.6426Z'%20fill='%23BD2304'/%3e%3cg%20clip-path='url(%23clip0_67_2000)'%3e%3cpath%20d='M83.2891%2035.966C81.7081%2036.586%2079.7861%2036.772%2077.7401%2036.772C77.4301%2036.772%2077.1201%2036.772%2076.8101%2036.741C70.0831%2036.431%2065.1851%2032.401%2065.1851%2025.271C65.1851%2018.079%2070.4241%2013.677%2077.4301%2013.677C79.5691%2013.677%2081.6461%2014.08%2083.1961%2014.824L82.9171%2020.125C81.6461%2019.536%2079.8791%2019.102%2077.9571%2019.102C73.2141%2019.102%2070.3311%2021.675%2070.3311%2025.581C70.3311%2029.301%2072.5631%2031.657%2076.3761%2032.091C77.0581%2032.153%2077.8021%2032.153%2078.4841%2032.122V26.108H83.2891V35.966ZM86.484%2036.4V19.567H91.196V21.799H91.32C92.188%2020.001%2094.234%2019.164%2096.962%2019.164L96.652%2024.651C92.684%2024.496%2091.289%2026.077%2091.289%2029.983V36.4H86.484ZM116.243%2042.29V19.567H120.955V21.582H121.079C122.04%2020.094%20123.931%2019.164%20126.225%2019.164C130.782%2019.164%20134.192%2022.419%20134.192%2027.999C134.192%2033.579%20130.503%2036.803%20126.194%2036.803C124.024%2036.803%20122.102%2035.842%20121.141%2034.075H121.048V42.29H116.243ZM125.171%2032.37C127.403%2032.37%20129.139%2030.634%20129.139%2028.216C129.139%2025.798%20127.403%2024.093%20125.171%2024.093C122.908%2024.093%20121.141%2025.705%20121.141%2028.216C121.141%2030.696%20122.908%2032.37%20125.171%2032.37ZM170.367%2036.059C168.879%2036.586%20167.205%2036.803%20165.376%2036.803C159.3%2036.803%20155.425%2033.703%20155.425%2027.906C155.425%2022.884%20158.711%2019.164%20163.764%2019.164C168.91%2019.164%20171.483%2023.194%20171.483%2027.751C171.483%2028.433%20171.452%2029.177%20171.328%2029.735H160.788C161.408%2031.874%20163.33%2032.835%20166.244%2032.835C167.67%2032.835%20168.848%2032.649%20169.964%2032.246L170.367%2036.059ZM163.826%2023.628C162.276%2023.628%20160.881%2024.527%20160.54%2026.79H166.957C166.864%2025.023%20165.624%2023.628%20163.826%2023.628ZM174.126%2036.4V19.567H178.838V21.799H178.962C179.83%2020.001%20181.876%2019.164%20184.604%2019.164L184.294%2024.651C180.326%2024.496%20178.931%2026.077%20178.931%2029.983V36.4H174.126Z'%20fill='%231D1F17'/%3e%3cpath%20d='M108.066%2025.705C108.066%2024.713%20107.074%2024.093%20104.997%2024.093C102.982%2024.093%20101.091%2024.682%2099.6033%2025.364L99.2623%2020.559C100.719%2019.784%20102.92%2019.164%20105.493%2019.164C110.763%2019.164%20113.026%2021.613%20113.026%2026.139V36.4H108.128V34.354C106.888%2035.842%20105.462%2036.803%20102.982%2036.803C100.192%2036.803%2098.1773%2035.346%2098.1773%2032.525C98.1773%2028.929%20101.06%2027.875%20104.656%2027.286C106.02%2027.038%20106.764%2026.852%20107.415%2026.604C107.942%2026.387%20108.066%2026.139%20108.066%2025.705ZM108.128%2029.084C107.632%2029.332%20106.826%2029.642%20105.803%2029.859C104.191%2030.231%20103.199%2030.634%20103.199%2032.029C103.199%2033.145%20104.129%2033.672%20105.307%2033.672C106.671%2033.672%20107.663%2032.835%20108.128%2031.812V29.084ZM185.939%2036.4V32.773L193.472%2024.155H186.28V19.567H199.331V23.876L191.798%2032.215H199.486V36.4H185.939Z'%20fill='%23181717'/%3e%3cpath%20d='M148.143%2027.844C148.143%2025.55%20147.182%2024%20144.919%2024C142.687%2024%20141.664%2025.519%20141.664%2027.875V36.4H136.859V12.84H141.571V21.52H141.695C142.687%2020.063%20144.206%2019.164%20146.593%2019.164C150.778%2019.164%20152.917%2021.954%20152.917%2026.046V36.4H148.143V27.844Z'%20fill='%23BD2304'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_67_2000'%3e%3crect%20width='135'%20height='50'%20fill='white'%20transform='translate(65)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                  <div className="border-primary border-opacity-10 col-md-4 col-6">
                    <div className="text-center p-3 p-md-5">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/06-BCnLzfX0.svg"
                        className="dark-mode-item h-40px"
                        alt="client logo"
                      />
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/06-FtCM7RXn.svg"
                        className="light-mode-item h-40px"
                        alt="client logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="position-relative py-0">
          <div className="position-absolute top-100 start-0 translate-middle ms-9 mt-n8 z-index-9 d-none d-lg-block">
            <img
              src="https://themes.stackbros.in/folio-react/assets/ai-robot-3-BLoiGBaG.png"
              className="aos aos-init"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={800}
              data-aos-easing="ease-in-out"
              alt="ai robot"
            />
          </div>
          <div className="bg-secondary-grad position-relative overflow-hidden py-6 py-md-8">
            <span className="position-absolute top-0 start-0 mt-n5">
              <svg
                className="fill-body"
                width={1930}
                height={137}
                viewBox="0 0 1930 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464.909 117.12C228.685 132.607 108.971 82.5335 0 51.0476V1.5L1930 0V26.649V132.607C1873.32 98.4636 1645.24 119.618 1488.21 132.607C1319.34 146.576 1149.46 119.696 1051.95 103.318C837.339 67.2694 668.231 103.79 464.909 117.12Z"></path>
              </svg>
            </span>
            <div className="ps-lg-6 pt-6 container">
              <div className="g-4 align-items-center row">
                <div className="col-xxl-4 col-lg-9">
                  <h2 className="text-center text-sm-start">
                    Our prestigious awards
                  </h2>
                </div>
                <div className="d-sm-flex justify-content-sm-between ms-auto col-xxl-8 col-lg-9">
                  <div
                    className="card-body bg-transparent text-center m-auto card"
                    style={{ maxWidth: "15rem" }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-1-Bj9Be7kB.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                      <ul className="list-group list-group-borderless align-items-center">
                        <li className="list-group-item fw-semibold heading-color d-flex pb-0">
                          Best Website Award
                        </li>
                        <li className="list-group-item fw-semibold text-primary d-flex pb-0">
                          2023
                        </li>
                      </ul>
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-2-CK-02fiq.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                    </div>
                    <span className="fw-semibold opacity-6">Accordion to</span>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='354'%20height='100'%20viewBox='0%200%20354%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1324_739)'%3e%3cpath%20d='M92.0195%200H108.105V100H92.0195V0ZM164.403%2068.1C164.403%2083.404%20151.466%2084.624%20147.618%2084.624C138.003%2084.624%20136.254%2075.672%20136.254%2070.272V32H120.169V70.192C120.169%2079.672%20123.16%2087.496%20128.404%2092.712C133.037%2097.324%20139.977%2099.844%20147.497%2099.844C152.829%2099.844%20160.381%2098.192%20164.403%2094.54V100H180.488V32H164.403V68.1ZM212.658%208H196.573V32H184.509V48H196.573V100H212.658V48H224.722V32H212.658V8ZM275.378%2079.668C271.875%2082.8%20267.251%2084.536%20262.176%2084.536C250.989%2084.536%20242.773%2076.364%20242.773%2065.144C242.773%2053.924%20250.728%2046.096%20262.176%2046.096C267.163%2046.096%20271.875%2047.748%20275.466%2050.88L277.907%2052.968L288.753%2042.184L286.038%2039.748C279.657%2034.016%20271.184%2030.8%20262.172%2030.8C242.066%2030.8%20227.464%2045.232%20227.464%2065.06C227.464%2084.804%20242.416%2099.752%20262.172%2099.752C271.353%2099.752%20279.914%2096.536%20286.215%2090.712L288.837%2088.276L277.823%2077.5L275.378%2079.668ZM346.165%2037.928C341.532%2033.32%20336.103%2030.8%20328.584%2030.8C323.251%2030.8%20317.211%2032.452%20313.19%2036.1V0H297.105V100H313.19V62.54C313.19%2047.236%20324.12%2046.02%20327.968%2046.02C337.583%2046.02%20337.318%2054.976%20337.318%2060.368V100H353.403V60.452C353.403%2050.972%20351.412%2043.148%20346.165%2037.928Z'%20fill='%230F2C36'/%3e%3cpath%20d='M261.645%2053.7529C264.73%2053.7529%20267.688%2054.9717%20269.869%2057.1411C272.049%2059.3105%20273.275%2062.2529%20273.275%2065.3209C273.275%2068.389%20272.049%2071.3313%20269.869%2073.5007C267.688%2075.6702%20264.73%2076.8889%20261.645%2076.8889C258.561%2076.8889%20255.603%2075.6702%20253.422%2073.5007C251.241%2071.3313%20250.016%2068.389%20250.016%2065.3209C250.016%2062.2529%20251.241%2059.3105%20253.422%2057.1411C255.603%2054.9717%20258.561%2053.7529%20261.645%2053.7529Z'%20fill='%23FF3D2E'/%3e%3cpath%20d='M69.5051%2074.8838C63.3888%2081.1438%2055.0808%2084.5358%2046.3385%2084.5358C28.4197%2084.5358%2015.3907%2070.5358%2015.3907%2051.3198C15.3907%2032.0158%2028.4197%2018.0158%2046.3385%2018.0158C54.9963%2018.0158%2063.2118%2021.4038%2069.4207%2027.5798L71.8656%2030.0158L82.6185%2019.3198L80.258%2016.8838C71.3429%207.75181%2059.279%202.7998%2046.3385%202.7998C19.9388%202.7998%200.09375%2023.6678%200.09375%2051.4038C0.09375%2079.0558%2020.0273%2099.8398%2046.3385%2099.8398C59.3675%2099.8398%2071.4313%2094.7998%2080.3465%2085.6678L82.707%2083.2318L72.0426%2072.3638L69.5051%2074.8838Z'%20fill='%230F2C36'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1324_739'%3e%3crect%20width='353.488'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      className="h-30px mt-2"
                      alt="logo"
                    />
                  </div>
                  <div
                    className="card-body bg-transparent text-center m-auto card"
                    style={{ maxWidth: "15rem" }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-1-Bj9Be7kB.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                      <ul className="list-group list-group-borderless align-items-center">
                        <li className="list-group-item fw-semibold heading-color d-flex pb-0">
                          Digital Vanguard Award
                        </li>
                        <li className="list-group-item fw-semibold text-primary d-flex pb-0">
                          2022
                        </li>
                      </ul>
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-2-CK-02fiq.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                    </div>
                    <span className="fw-semibold opacity-6">Accordion to</span>
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/fwa-DhdYdftj.svg"
                      className="h-30px mt-2"
                      alt="logo"
                    />
                  </div>
                  <div
                    className="card-body bg-transparent text-center m-auto card"
                    style={{ maxWidth: "15rem" }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-1-Bj9Be7kB.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                      <ul className="list-group list-group-borderless align-items-center">
                        <li className="list-group-item fw-semibold heading-color d-flex pb-0">
                          Website of the day
                        </li>
                        <li className="list-group-item fw-semibold text-primary d-flex pb-0">
                          2021
                        </li>
                      </ul>
                      <img
                        src="https://themes.stackbros.in/folio-react/assets/wing-2-CK-02fiq.svg"
                        className="rtl-flip"
                        alt="award wing"
                      />
                    </div>
                    <span className="fw-semibold opacity-6">Accordion to</span>
                    <img
                      src="https://themes.stackbros.in/folio-react/assets/dribbble-Big78WYE.svg"
                      className="h-30px mt-2"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    </>
  );
}

export default Home;
