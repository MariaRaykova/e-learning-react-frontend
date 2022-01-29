import React from "react";
import PageWrapper from "../../components/PageWrapper";
// import { GitHubIcon } from "../components/icons";

const About = () => {
  return (
    <PageWrapper>
      <div className="text-center mt-5">
        <h1>About</h1>
        <p>This project was built for practice purposes.</p>

        <a className="btn btn-primary" href="https://github.com/MariaRaykova">
          {/* <GitHubIcon width={"18px"} />{" "} */}
          <span className="ml-2 mr-4">Visit Repo</span>
        </a>
      </div>
    </PageWrapper>
  );
};
export default About;
