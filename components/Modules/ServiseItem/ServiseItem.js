import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;
import * as Icons from "@fortawesome/free-solid-svg-icons"


export default function ServiseItem({ img, title, desc, icon }) {


  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
          <h4 style={{display:"flex", gap:"1rem"}}>
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

            {/* <i class="fa fa-truck service-icon"></i> */}
            <p>{title}</p>
          </h4>
          <p class="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}
