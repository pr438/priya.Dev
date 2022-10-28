import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Navbar(props) {
  const inputRef = useRef(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        inputRef.current.style.backgroundColor =
          props.mode === "dark" ? "#172a45" : "#dfebf6";
      } else if (window.scrollY < lastScrollY - 10) {
        // if scroll up show the navbar
        setShow(true);
        inputRef.current.style.backgroundColor =
          props.mode === "dark" ? "#172a45" : "#dfebf6";
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className={`sideBar ${show?'fade-out':'fade-in'}`}  aria-orientation="left">
        <ul
          className="sideBarUL"
        >
          <li className="my-2">
            <a
              href="mailto:priya.a.gosai11@gmail.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              variant="secondary"
              aria-label="Email"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="2.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://github.com/bradypp"
              rel="noopener noreferrer nofollow"
              target="_blank"
              variant="secondary"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 438.549 438.549"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                height="1.5em"
                width="2.5em"
              >
                <title>GitHub</title>
                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
              </svg>
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://www.linkedin.com/in/priyagosai"
              rel="noopener noreferrer nofollow"
              target="_blank"
              variant="secondary"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 430.117 430.117"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                height="1.5em"
                width="2.5em"
              >
                <title>LinkedIn</title>
                <path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path>
              </svg>
            </a>
          </li>
          <li className="my-2"> 
            <a
              href="#"
              rel="noopener noreferrer nofollow"
              target="_blank"
              variant="secondary"
              aria-label="DevTo"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.5em"
                width="2.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
              </svg>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <header
        id="heaader"
        ref={inputRef}
        className={show ? "yawXN" : "gbyBcp"}
        style={{ opacity: 3 }}
      >
        <nav className="navbar navbar-expand-lg navbar-light Header">
          <div className="container-fluid my-1">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav">
                <li className="nav-item p-2">
                  <a
                    className="nav-link active"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                    aria-current="page"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link active"
                    href="/#about"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link active"
                    href=""
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link active"
                    href="/#contact"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <form className="d-flex">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input cPPnQU"
                    onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    data-enpassusermodified="yes"
                  />
                  <label
                    className="form-check-label rbHhz"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    <div className="hSHQXO">
                      <div
                        id="moondiv"
                        className={props.mode === "light" ? "gIfrFy" : "ebbcwL"}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                      </div>
                      <div
                        id="sunDiv"
                        className={props.mode === "light" ? "cKPswx" : "ieYkbt"}
                      >
                        <svg
                          stroke="#fff"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={12} cy={12} r={5}></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.63" y2="5.63"></line>
                          <line
                            x1="18.36"
                            y1="18.36"
                            x2="19.78"
                            y2="19.78"
                          ></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line
                            x1="4.22"
                            y1="19.78"
                            x2="5.64"
                            y2="18.36"
                          ></line>
                          <line
                            x1="18.36"
                            y1="5.64"
                            x2="19.78"
                            y2="4.22"
                          ></line>
                        </svg>
                      </div>
                    </div>
                    <div
                      id="focusDiv"
                      className={props.mode === "light" ? "hWjHld" : "kdCohf"}
                    ></div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );

}
