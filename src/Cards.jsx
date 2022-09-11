import React from "react";
import mersal from "./Images/beast_vijay.jpg"
import beast from "./Images/beast.jpg"
import rrr from "./Images/rrr.jpg"
import ala from "./Images/ala.jpg"
import parmanu from "./Images/parmanu.jpg"
import peaks from "./Images/peaks.jpg"
import world from "./Images/world.jpg"
import bahubali from "./Images/bahubali.jpg"
import bheeshma from "./Images/bheeshma.jpg"

function Card(props) {
  return (
    <>
      <div className="top">
        <div className="columns">
          <div className="column is-full featured_wrapper p-0">
            <img
              src={mersal}
              className="featured"
            />
            <div className="title_wrapper">
              <span className="has-text-white">Trending Today</span>
              <h1 className="title is-1 has-text-white">
              Mersal
              </h1>
              <a href="https://www.netflix.com/watch/81016196?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C490baf88-b70f-4f1c-bdf8-5ea8097aa172-244772091_titles%2F1%2F%2Fmer%2F0%2F0%2CNAPA%40%40%7C490baf88-b70f-4f1c-bdf8-5ea8097aa172-244772091_titles%2F1%2F%2Fmer%2F0%2F0%2Cunknown%2C%2C490baf88-b70f-4f1c-bdf8-5ea8097aa172-244772091%7C1%2CtitlesResults%2C81016196">
              <button className="button is-medium">Watch It Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns is-multiline p-0 pt-6 last">
          <div className="column is-full">
            <p className="has-text-white">Action Movies Collection</p>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81508719?trackId=250326522&tctx=3%2C1%2Cccef6f87-432e-4beb-b849-2451ea835a27-124391540%2CGPS_BC8E813D775802D63288CE1130B055-311E2939CCF6CB-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81508719" >
            <img src={beast} />
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81476453?trackId=250312413&tctx=2%2C2%2Cccef6f87-432e-4beb-b849-2451ea835a27-124391540%2CGPS_BC8E813D775802D63288CE1130B055-52E5C7D441F6A6-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81476453">
            <img src={rrr}/>
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81252029?trackId=250311567&tctx=4%2C2%2Cccef6f87-432e-4beb-b849-2451ea835a27-124395788%2CGPS_BC8E813D775802D63288CE1130B055-17C36AE2FED9A0-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81252029">
            <img src={ala} />
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81005453?trackId=250311567&tctx=4%2C1%2Cccef6f87-432e-4beb-b849-2451ea835a27-124395788%2CGPS_BC8E813D775802D63288CE1130B055-17C36AE2FED9A0-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81005453">
            <img src={parmanu} />
            </a>
          </div>
        </div>
        <div className="columns last">
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81464765?trackId=253810016&tctx=6%2C4%2Cccef6f87-432e-4beb-b849-2451ea835a27-124395788%2CGPS_BC8E813D775802D63288CE1130B055-BB388D2D7C8445-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81464765">
            <img src={peaks} />
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81273579?trackId=250311567&tctx=4%2C8%2Cccef6f87-432e-4beb-b849-2451ea835a27-124395788%2CGPS_BC8E813D775802D63288CE1130B055-17C36AE2FED9A0-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C81273579">
            <img src={world} />
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/80203996?trackId=253576167&tctx=19%2C3%2Cccef6f87-432e-4beb-b849-2451ea835a27-124395788%2CGPS_BC8E813D775802D63288CE1130B055-F42723A24331FB-159CA59E72_p_1662895045444%2CGPS_BC8E813D775802D63288CE1130B055_p_1662895045444%2C%2C%2C%2C80203996" >
            <img src={bahubali} />
            </a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/watch/81273583?al=te&isLanguageFilter=true&tctx=1%2C2%2Cdf4e79cf-6bd8-4430-aaec-263278a29a06-14396161%2Cunknown%2Cunknown%2C%2C%2C%2C81273583">
            <img src={bheeshma} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
