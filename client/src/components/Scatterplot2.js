import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Scatterplot2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 30 };

    const svg = d3.select(svgRef.current);

    // Generate 100 points with three loosely correlated groups and outliers
    const data = Array.from({ length: 100 }, (_, index) => {
      let x, y, color;

      if (index < 25) {
        // Generate a group in the top right
        x = 0.7 + Math.random() * 0.3;
        y = 0.7 + Math.random() * 0.5;
        color = 'red';
      } else if (index >= 25 && index < 75) {
        // Generate a group in the middle
        x = 0.3 + Math.random() * 0.4;
        y = 0.3 + Math.random() * 0.5;
        color = 'black';
      } else if (index >= 75 && index < 90) {
        // Generate outliers
        x = Math.random() % 0.3;
        y = Math.random() % 0.3;
        color = 'blue';
      } else {
        // Generate another group
        x = Math.random();
        y = Math.random();
        color = 'orange';
      }

      return { x, y, color };
    });

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top]);

    // Draw circles for each data point
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', 5)
      .attr('fill', d => d.color);

    // Draw x-axis
    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Draw y-axis
    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary id="panel-header" aria-controls="panel-content" style={{ fontFamily: 'Neue Haas Grotesk, sans-serif'} }>
            Details
      </AccordionSummary>
    <AccordionDetails>
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
      <div style={{ marginTop: '20px', fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
        <p>
          In the scatterplot below, we visualize data points representing opinions on the Hamas-Israel conflict. Three loosely correlated groups can be observed, suggesting diverse perspectives. The red group in the top right may represent a subset with a specific viewpoint, the black group in the middle reflects another perspective, and the orange group represents additional opinions.
        </p>
        </div>
      </div>
      <svg
        ref={svgRef}
        width="400"
        height="300"
        style={{ border: '1px solid #ccc', margin: '0 auto', display: 'block' }}
      />
      <div style={{ marginTop: '20px', fontFamily: 'Neue Haas Grotesk, sans-serif' }}>
        <p>
          It's noteworthy that some data points fall outside these groups, indicating outliers or individuals with unique opinions. The scatterplot illustrates the lack of a strong united opinion on the Hamas-Israel conflict, highlighting the diversity of perspectives within the dataset.
        </p>
      </div>
    </div>
    </AccordionDetails>
    </Accordion>
  );
};

export default Scatterplot2;
