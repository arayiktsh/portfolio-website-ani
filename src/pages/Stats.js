import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import data from '../data/articles';

import Cell from '../components/Projects/Cell';

const Stats = () => (
  <Main
    title="Articles"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Articles</Link></h2>
        </div>
      </header>
      <Personal />
    </article>

    <article className="post" id="articles">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/articles">Articles</Link></h2>
          <p>Here you can find all the articles I wrote. </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>

  </Main>);

export default Stats;
