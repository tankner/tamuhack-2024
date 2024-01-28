import React, { useState } from 'react';
import Card from './Card';
import SearchResultItem from './SearchResultItem';
import {h1, c1, h2, c2, e1, h3} from "../data/earthFlatContent";
import {h11, c11, h22, c22, h33, c33, e2} from "../data/israelContent";
import GoogleSearchHeader from './GoogleSearchHeader';
import { useSearchParams } from 'react-router-dom';
import Scatterplot1 from './Scatterplot1';
import Scatterplot2 from './Scatterplot2';
import './style.css'

function SearchResult() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search-term');

    if (searchTerm === "Is the earth flat?") {
        // var searchResults = e1.map((result, index) => (
        //     <SearchResultItem
        //       key={index}
        //       title={result.title}
        //       snippet={result.snippet}
        //       url={result.url}
        //     />
        //   ));
        return (
            <>
            <GoogleSearchHeader/>
            <Scatterplot1/>
            <Card title={h1} content={c1}/>
            <Card title={h2} content={c2}/>
            <Card title={h3} content={e1}/>
            {/* {searchResults} */}
            </>
        )
    }
    else {
        const searchResults = e2.map((result, index) => (
            <SearchResultItem
              key={index}
              title={result.title}
              snippet={result.snippet}
              url={result.url}
            />
          ));
        return (
            <>
            <GoogleSearchHeader/>
            <Scatterplot2/>
            <Card title={h11} content={c11}/>
            <Card title={h22} content={c22}/>
            <Card title={h33} content={c33}/>
            <Card title={h3} content={e2}/>
            </>
        )
    }

}
export default SearchResult;