import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Scatterplot1 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 30 };

    const svg = d3.select(svgRef.current);

    // Generate 100 points with clusters and outliers
    const data = Array.from({ length: 100 }, (_, index) => {
      let x, y, color;

      if (index < 3) {
        // Generate tight cluster on the top right
        x = 0.7 + Math.random() * 0.05;
        y = 0.7 + Math.random() * 0.05;
        color = 'red';
      } else if (index < 90) {
        x = Math.random() * (0.4 * Math.random());
        y = Math.random() * (0.4 * Math.random());
        color = 'orange';
      } else {
        x = Math.random();
        y = Math.random();
        color = 'black';
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
              In the scatterplot below, we visualize data points representing individuals or articles based on normalized correlation values (represented on the x and y axes). The red cluster in the top right corner indicates a minority of people or articles that share common characteristics or traits. On the other hand, the orange cluster in the middle represents an overwhelming majority with different characteristics.
            </p>
            </div>
          </div>
          <svg
            ref={svgRef}
            width="400"
            height="300"
            style={{ border: '1px solid #ccc', margin: '0 auto', display: 'block' }}
          />
          <div style={{ marginTop: '20px', fontFamily: 'Neue Haas Grotesk, sans-serif', fontSize:"15" }}>
            <p>
              Interestingly, a significant number of data points fall outside these clusters, suggesting diversity or variation in the dataset. Some articles or individuals do not align with either group, indicating a lack of a clear direction or pattern.
            </p>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Scatterplot1;
