import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {

  return (
    <section id="services">
      <h5>What i Studied</h5>
      <h2>Education</h2>

      <div className="container services__container">
        {/* 10 Class */}
        <article className="service">
          <div className="service__head">
            <h3>10th Class</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icons" />
              <p>2016-2017</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />
              <p>Holy Angels School, Rajpura</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />
              <p>Marks Obtained: 73%</p>
            </li>
          </ul>
        </article>
        {/* 12th Class */}
        <article className="service">
          <div className="service__head">
            <h3>12th Class</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icons" />

              <p>2018-2019</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />

              <p>Scholars Public School, Rajpura</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />

              <p>Marks Obtained: 78.8%</p>
            </li>
          </ul>
        </article>
        {/* B.Tech ECE */}
        <article className="service">
          <div className="service__head">
            <h3>College</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icons" />
              <p>2019 - 2023</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />
              <p>Bachelor of Technology &amp; ECE </p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons cgc" />
              <p>Chandigarh Group Of Colleges Landran, Mohali</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icons" />

              <p>Marks Obtained: 7.7 SGPA</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
