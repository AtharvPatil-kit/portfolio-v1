import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>TechNova Solutions</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Collaborated with design and product teams to implement user-friendly interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>GITHub</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and developed scalable web applications using modern front-end and back-end technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
