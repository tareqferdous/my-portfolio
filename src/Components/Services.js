import React from "react";

import {} from '@fortawesome/free-brands-svg-icons';
import {faCode, faLaptop, faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faCode} className="icon fb" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faMobile} className="icon fb" />,
      heading: "Web Application",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faLaptop} className="icon fb" />,
      heading: "Web Design",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    }
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div class="container">
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-md-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
