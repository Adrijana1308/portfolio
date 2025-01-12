import { useAppContext } from "../../AppContext";
import "./Experience.css";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function Experience() {
  const { isOn } = useAppContext();
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const renderTimeline = screenWidth > 1217;

  return (
    <div id="experience" className={`${isOn ? "dark-mode" : ""}`}>
      <div className="Experience">
        <h2>Experience</h2>
        <p>
          During my time in college, I gained valuable experience by working on
          various projects.
        </p>
        {renderTimeline && (
          <Timeline position="alternate-reverse">
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="custom-timeline-dot" />
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="exp-section">
                  <div className="exp">
                    <h4>Programmer - INIT Grupa d.o.o.</h4>
                    <h5>December 2023 - March 2024</h5>
                    <p>
                      While working on the Cisco project, I fulfill tasks and
                      set goals within specified time frames.
                    </p>
                    <p>Skills used:</p>
                    <ul className="exp-list">
                      <li className="exp-skill">Slack</li>
                      <li className="exp-skill">Ospoco</li>
                    </ul>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="custom-timeline-dot" />
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="exp-section">
                  <div className="exp">
                    <h4>Internship - Lescan Digital d.o.o.</h4>
                    <h5>February 2023 - April 2023</h5>
                    <p>
                      I worked with the WordPress CMS system and a web search
                      engine optimization tool
                    </p>
                    <p>Skills used:</p>
                    <ul className="exp-list">
                      <li className="exp-skill">HTML</li>
                      <li className="exp-skill">CSS</li>
                      <li className="exp-skill">JavaScript</li>
                      <li className="exp-skill">Wordpress</li>
                      <li className="exp-skill">Content Harmony</li>
                    </ul>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="custom-timeline-dot" />
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="exp-section">
                  <div className="exp">
                    <h4>Web Designer - Sviben Marine d.o.o.</h4>
                    <h5>December 2017 - February 2018</h5>
                    <p>
                      I designed, implemented, and maintained a user-friendly
                      website with a focus on responsive design and seamless
                      user experience.
                    </p>
                    <p>Skills used:</p>
                    <ul className="exp-list">
                      <li className="exp-skill">HTML</li>
                      <li className="exp-skill">CSS</li>
                      <li className="exp-skill">Wordpress</li>
                    </ul>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        )}
        /*
        {!renderTimeline && (
          <div className="exp-section">
            <div className="exp">
              <h4>Programmer - INIT Grupa d.o.o.</h4>
              <h5>December 2023 - March 2024</h5>
              <p>
                While working on the Cisco project, I fulfilled tasks and set
                goals within specified time frames.
              </p>
            </div>
            <div className="exp">
              <h4>Internship - Lescan Digital d.o.o.</h4>
              <h5>February 2023 - April 2023</h5>
              <p>
                I worked with the WordPress CMS system and a web search engine
                optimization tool
              </p>
            </div>
            <div className="exp">
              <h4>Web Designer - Sviben Marine d.o.o.</h4>
              <h5>December 2017 - February 2018</h5>
              <p>
                I designed, implemented, and maintained a user-friendly website
                with a focus on responsive design and seamless user experience.
              </p>
            </div>
          </div>
        )}
        */
      </div>
    </div>
  );
}

export default Experience;
