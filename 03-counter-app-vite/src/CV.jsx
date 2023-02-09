import React from "react";

const WorkExperience = ({
  company,
  position,
  startDate,
  endDate,
  responsibilities,
}) => (
  <div>
    <h3>
      {position} at {company}
    </h3>
    <p>
      {startDate} - {endDate}
    </p>
    <ul>
      {responsibilities.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  </div>
);

const Education = ({ school, degree, startDate, endDate, fieldOfStudy }) => (
  <div>
    <h3>
      {degree} in {fieldOfStudy} at {school}
    </h3>
    <p>
      {startDate} - {endDate}
    </p>
  </div>
);

const CV = () => {
  const workExperience = [
    {
      company: "Acme Inc.",
      position: "Software Engineer",
      startDate: "January 2020",
      endDate: "Present",
      responsibilities: [
        "Develop and maintain web applications",
        "Collaborate with cross-functional teams",
        "Participate in code reviews",
      ],
    },
    {
      company: "FooBar Inc.",
      position: "Developer",
      startDate: "May 2018",
      endDate: "December 2019",
      responsibilities: [
        "Develop and maintain web applications",
        "Debug and troubleshoot issues",
        "Participate in Agile development process",
      ],
    },
  ];

  const education = [
    {
      school: "University of XYZ",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "September 2014",
      endDate: "May 2018",
    },
  ];

  return (
    <div>
      <h1>My CV</h1>
      <h2>Work Experience</h2>
      {workExperience.map((we, i) => (
        <WorkExperience key={i} {...we} />
      ))}
      <h2>Education</h2>
      {education.map((e, i) => (
        <Education key={i} {...e} />
      ))}
    </div>
  );
};

export default CV;
