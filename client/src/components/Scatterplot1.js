import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Is the earth flat

const Scatterplot1 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 30 };

    const svg = d3.select(svgRef.current);

    // Generate 50 points with two clusters and some outliers
    const data = Array.from({ length: 50 }, (_, index) => ({
      x: index < 10 || (index >= 30 && index < 40) ? Math.random() * 0.5 : Math.random() * 0.5 + 0.5,
      y: index < 20 ? Math.random() * 0.5 : Math.random() * 0.5 + 0.5,
    }));

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
      .attr('fill', 'blue');

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
    <svg
      ref={svgRef}
      width="400"
      height="300"
      style={{ border: '1px solid #ccc' }}
    />
  );
};

export default Scatterplot1;
