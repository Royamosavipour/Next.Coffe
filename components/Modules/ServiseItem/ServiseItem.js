import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ServiseItem({ img, title, desc, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
          <h4 style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "#DA9E5B",
                borderRadius: "100%",
                height: "35px",
                width: "40px",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon
                icon={Icons[icon]}
                style={{ fontSize: "1rem", margin: "0,auto" }}
              />
            </div>

            {/* <i className="fa fa-truck service-icon"></i> */}
            <p>{title}</p>
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}
