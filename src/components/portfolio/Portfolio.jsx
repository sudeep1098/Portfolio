import React from "react";
import "./portfolio.css";
import Img1 from "../../images/img-1.png";
import Img2 from "../../images/img-2.png";
import Img3 from "../../images/img-3.png";
import Img4 from "../../images/img-4.png";
import Img5 from "../../images/portfolio5.png";
import Img6 from "../../images/portfolio6.jpg";
import { useState } from "react";

const Portfolio = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const articleCount = 5;
  const articles = [];
   const projects = [
	{
      id: 1,
      image: Img2,
      github: "/iMall",
      demo_link: "http://imall-php.infinityfreeapp.com/",
      title: "iMall using PHP, MYSQL, HTMl, CSS",
      description:
        "An Ecommerce website where you can buy anything.It is a fully responsive website.",
    },
    {
      id: 2,
      image: Img4,
      github: "/iDiscuss",
      demo_link: "http://forumphp.infinityfreeapp.com/",
      title: "iDiscus using PHP, MYSQL",
      description:
        "A forum to discuss about coding and the problems you face while coding.",
    },
	{
      id: 3,
      image: Img1,
      github: "/netflix-clone",
      demo_link: "https://netflix-clone1098.netlify.app",
      title: "NetFlix-Clone using Reactjs and Firebase",
      description: "Made a clone of Netflix using Reactjs and firebase.",
    },
	{
      id: 4,
      image: Img3,
      github: "/portfolio",
      demo_link: "https://portfolio1098.netlify.app",
      title: "Portfolio using Reactjs and Emailjs",
      description: "My personal portfolio containing my skills and projects.",
    },
    {
      id: 5,
      image: Img5,
      github: "/Secrets",
      demo_link: "http://imall-php.infinityfreeapp.com/",
      title: "Secrets using OAuth2.0 and ejs",
      description:
        "Save secrets or anything you want to not talk about. Used OAuth2.0 authorization to keep our database safe from hackers.",
    },
	{
      id: 6,
      image: Img6,
      github: "/Todolist",
      demo_link: "https://netflix-clone1098.netlify.app",
      title: "ToDo List using Node and Express",
      description: "Save notes or anything you want to not forget about.",
    },
  ];

  function hoverHandle(id) {
    setHoverIndex(id);
  }

  projects.map(({ id, image, title, description, github, demo_link }) => {
    // if ((id = articleCount)) {
    const altCount = `p-${id}`;

    const article = (
      <article
        onMouseEnter={() => hoverHandle(id)}
        onMouseLeave={() => hoverHandle(null)}
        className="portfolio__item"
        key={id}
      >
        <div className="portfolio__item-image">
          <img src={image} alt={altCount} />
        </div>
        <h3 className={`project-title ${id === hoverIndex ? "hovered" : ""}`}>
          {title}
        </h3>
        {id === hoverIndex && (
          <p className="project-description">{description}</p>
        )}
        <div className="portfolio__item-cta">
          <a
            className="btn"
            href={`https://github.com/sudeep1098${github}`}
            target="_blank"
          >
            Github
          </a>
          <a className="btn btn-primary" href={demo_link} target="_blank">
            Live Demo
          </a>
        </div>
      </article>
    );
    articles.push(article);
    // }
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{articles}</div>
    </section>
  );
};

export default Portfolio;
