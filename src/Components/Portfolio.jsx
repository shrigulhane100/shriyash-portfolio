/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "tackle AI with Shriyash",
    description:
      "A platform designed to aid in the preparation for coding interviews for Data Scientist.",
    url: "https://sites.google.com/view/tackleaiwithshriyash/",
  },
  {
    title: "Autonomous Tagging Of Stack Overflow Questions ",
    description:
      "This tool can help Stack Overflow users categorize their programming questions more effectively, making it easier for others to provide relevant answers.",
    url: "https://www.youtube.com/watch?v=f9QntnEojjU",
  },
  {
    title: "Landmark Classification Tagging for Social Media",
    description:
      "Developed a deep learning model using PyTorch to detect and classify landmarks in images. Trained on a dataset of over 5000 images of landmarks from around the world.",
    url: "https://github.com/shrigulhane100/landmark-tagging",
  },
  {
    title: "Online Automated EDA report generator",
    description:
      "Developed an online data analysis tool that allows users to upload datasets and download interactive reports in seconds. Deployed using Streamlit",
    url: "https://shrigulhane100-automated-data-analysis-report-genera-app-lflx0j.streamlit.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
