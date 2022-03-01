import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Volunteering from '../components/Resume/Volunteering';
import Nonformaleducation from '../components/Resume/Nonformaleducation';
import Internships from '../components/Resume/Internships';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import nonformal from '../data/resume/nonformal';
import volunteering from '../data/resume/volunteering';
import internship from '../data/resume/internships';

import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Non-Formal Education',
  'Volunteering',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Ani Petrosyan's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Nonformaleducation data={nonformal} />
      <Internships data={internship} />
      <Volunteering data={volunteering} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
