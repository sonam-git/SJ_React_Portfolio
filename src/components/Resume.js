import { Grid,Button,Typography } from '@mui/material'
import React from 'react'


const Resume = () => {
  return (
   
      <Grid style={{marginTop:80, padding: 10}}>
        <Grid>
          <Grid item xs = {6}>
          <Typography variant="h2" style={{ textAlign: "center", fontWeight: 400, marginBottom: 25 }}>Resume</Typography> </Grid>
            <Grid item xs = {6}>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Material UI
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku, AWS,
                Netlify
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>University of Toronto, 2020-2024</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
        <Grid>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Full-Stack Developer, Elden Lord</h4>
              <h5>The Lands Between, 2022-present</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Developer Intern</h4>
              <h5>DELL CND Inc., Summer 2022-2023</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
            </Grid>
            </Grid>
            <Grid ontainer>
            <Grid >
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                ongoDB
              </li>
              <li>
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul>
            </Grid>
          </Grid>
      </Grid>
  )
}

export default Resume