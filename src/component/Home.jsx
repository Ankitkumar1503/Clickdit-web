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
                  Upload your leads and start calling instantly, just like a
                  regular phone—directly from Clikdit.
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
                <a className="btn btn-primary" href="/product" data-discover="true">
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
                    href="/product"
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
                    href="/product"
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
                    href="/product"
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
                    href="/product"
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
                    href="/product"
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
                  Automated deals created in CRM
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
      </>
    </>
  );
}

export default Home;
