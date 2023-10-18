import { useAppContext } from '../../AppContext';
import './Education.css';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'

function Education() {
  const { isOn } = useAppContext();
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const renderTimeline = screenWidth > 1217; 

  return (
    <div id="education" className={`${isOn ? 'dark-mode' : ''}`}>
      <div className="Education">
        <h2>Education</h2>
        <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
        {renderTimeline && (
          <Timeline position="alternate-reverse">
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='custom-timeline-dot'/>
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className='edu-section'> 
                  <div className='edu'>
                      <h4>FACULTY OF INFORMATICS, PULA</h4>
                      <h5>I will be completing my studies in December, 2023. </h5>
                      <p>During my time as a student, I acquired valuable skills in delivering projects within specified deadlines, collaborating effectively within teams, and working with various programming languages.</p>
                  </div>
              </div>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='custom-timeline-dot' />
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className='edu-section'> 
                  <div className='edu'>
                      <h4>WEB DEVELOPER COURSE, COLLEGE OF ALGEBRA</h4>
                      <h5>March 2017 - July 2017</h5>
                      <p>I attended a course at College of Algebra in Zagreb to further enhance my knowledge in web application development. The lessons I learned and the skills I gained during this course significantly contributed to my ability to build projects and provided my with a deeper understanding of the development process.</p>
                  </div>
              </div>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='custom-timeline-dot' />
                <TimelineConnector className="custom-timeline-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <div className='edu-section'> 
                  <div className='edu'>
                      <h4>WEB DESIGNER COURSE, COLLEGE OF ALGEBRA</h4>
                      <h5>September 2016 - February 2017</h5>
                      <p>In the year 2017, I successfully completed a comprehensive web design course at Algebra in Zagreb. The course provided me with indepth knowledge and practical skills in various aspects of web design, including layout design, visual aesthetics, HTML and CSS. </p>
                  </div>
              </div>
            </TimelineContent>
            </TimelineItem>
          </Timeline>
        )}
        {!renderTimeline && (
          <div className="edu-section">
            <div className="edu">
                <h4>FACULTY OF INFORMATICS, PULA</h4>
                <h5>I will be completing my studies in December, 2023. </h5>
                <p>During my time as a student, I acquired valuable skills in delivering projects within specified deadlines, collaborating effectively within teams, and working with various programming languages.</p>
            </div>
            <div className="edu">
                <h4>WEB DEVELOPER COURSE, COLLEGE OF ALGEBRA</h4>
                <h5>March 2017 - July 2017</h5>
                <p>I attended a course at College of Algebra in Zagreb to further enhance my knowledge in web application development. The lessons I learned and the skills I gained during this course significantly contributed to my ability to build projects and provided my with a deeper understanding of the development process.</p>
            </div>
            <div className="edu">
                <h4>WEB DESIGNER COURSE, COLLEGE OF ALGEBRA</h4>
                <h5>September 2016 - February 2017</h5>
                <p>In the year 2017, I successfully completed a comprehensive web design course at Algebra in Zagreb. The course provided me with indepth knowledge and practical skills in various aspects of web design, including layout design, visual aesthetics, HTML and CSS. </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;