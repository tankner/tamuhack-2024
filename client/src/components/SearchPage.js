import React, { useState , useRef } from 'react';
import styled from 'styled-components';
import SettingsButton from './SettingsButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);

  img {
    width: 400px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 1em;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 20px 16px;
    line-height: 27px;
    height: 36px;
    min-width: 60px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
  font-family: Arial;
`;

const EngineIcon = styled.div`
display: flex;
cursor: pointer;
align-items: center;
border: 0;

`;

const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 40%;
  border: 1px solid #ddd;
  border-top: none;
  background-color: #fff;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 41%;
  border-radius: 0 0 0.6em 0.6em;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border-top: 1px solid #ddd;
  text-align: left;
  &:hover {
    background-color: #f2f2f2;
  }
`;



const SearchPage = () => {
  const [searchEngine, setSearchEngine] = useState('Google');
  const [suggestions, setSuggestions] = useState([]);
  const searchTermRef = useRef();

  const handleSearchEngineChange = (newSearchEngine) => {
    console.log("New Search Engine: ", newSearchEngine);
    setSearchEngine(newSearchEngine);
  };
  let searchTerm = useRef();

  const getLogoPath = (searchEngine) => {
    return `${process.env.PUBLIC_URL}/${searchEngine.toLowerCase()}logo2.png`;
  };

  const manuallyDefinedSuggestions = ['Is Hamas a threat to US', 'Is there a Texas Civil War', 'Is the earth flat',"Ian Romero", 'Is the earth round',"Is the earth good","Is the earth normal","Is the earth flattering","Is the earth flat controversy","Is the earth flat debate","Is the earth flat funny moments", 'Is the earth a cube', 'Is the earth a sphere', 'Is the earth a pyramid', "Google parent company Alphabet acquires Apple", "Istanbul faces glooming economic depression", "Is Hamilton a found father", "Israel Palestine Conflict", "Israel 1948", "Israel US relations", "Israel Palestinian War", "Israel Poverty", "Israel Palestinian Map", "Israel Palestine Relations", "Israel Palestine Controversy", "Israel Palestine Complications"];

  const handleInputChange = (event) => {
    const query = event.target.value.trim();

    // Filter suggestions based on the user's input (starts with the input sequence)
    const filteredSuggestions = manuallyDefinedSuggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(query.toLowerCase())
    );
    if (query === "") {
      setSuggestions([]);
    } else {
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    searchTermRef.current.value = suggestion;
    setSuggestions([]); // Clear suggestions after selecting one
  };

  return (
    <Container>
      <LogoSection>
        <img
          // src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          src = {`${process.env.PUBLIC_URL}/LUMOS.png`}
          alt='google-logo'
        />
      </LogoSection>
      <SearchSection>
        <Form action='/' method='GET' role='search'
          onSubmit={(e) => {
            e.preventDefault();
            searchTerm = e.target[0].value;
            window.location.href = `searchresults?search-term=${searchTerm}&search-engine=${searchEngine}`;
          }}
        >
          <Search>
            <SearchIcon>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              </svg>
            </SearchIcon>
            <SearchInput
              ref={searchTermRef}
              onChange={handleInputChange}
              placeholder="Search..."
            />

            <SuggestionsList>
              {suggestions.slice(0,4).map((suggestion, index) => (
                <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.toLowerCase()}
                </SuggestionItem>
              ))}
            </SuggestionsList>

            <EngineIcon>
              <img
                style={{ width: 20, height: 20 }} src={getLogoPath(searchEngine)} alt={`${searchEngine} Logo`}
              />
            </EngineIcon>
          </Search>
        </Form>
        <ButtonSection>
          <SettingsButton
          searchEngine={searchEngine}
          onSearchEngineChange={handleSearchEngineChange}/>
        </ButtonSection>

      </SearchSection>
    </Container>
  );
};

export default SearchPage;
