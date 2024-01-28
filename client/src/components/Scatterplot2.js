import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Israel Hamas correlation

const Scatterplot2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 30 };

    const svg = d3.select(svgRef.current);

    // Generate 10 random points
    const data = Array.from({ length: 10 }, () => ({
      x: Math.random() * (width - margin.left - margin.right),
      y: Math.random() * (height - margin.top - margin.bottom),
    }));

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
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

export default Scatterplot2;
