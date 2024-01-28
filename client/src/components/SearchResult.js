import React, { useState } from 'react';
import Card from './Card';
import SearchResultItem from './SearchResultItem';
import {h1, c1, h2, c2, e1} from "../data/earthFlatContent";
import {h11, c11, h22, c22, e2} from "../data/israelContent";
import GoogleSearchHeader from './GoogleSearchHeader';
import './style.css'

function SearchResult({query}) {


    if (query === "Is the earth flat?") {
        const searchResults = e1.map((result, index) => (
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
            <Card title={h1} content={c1}/>
            <Card title={h2} content={c2}/>
            {searchResults}
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
            <Card title={h1} content={c1}/>
            <Card title={h2} content={c2}/>
            {searchResults}
            </>
        )
    }

}
export default SearchResult;