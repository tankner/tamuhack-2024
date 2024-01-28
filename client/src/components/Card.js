import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import SearchResultItem from './SearchResultItem';


const Card = ({ title, content }) => {

    const searchResults = content.map((result, index) => (
        <SearchResultItem
          key={index}
          title={result.title}
          snippet={result.snippet}
          url={result.url}
          credibility={result.credibility}
        />
      ));
    
  return (
    <Accordion defaultExpanded={title==="Other results"}>
        <AccordionSummary id="panel-header" aria-controls="panel-content" style={{ fontFamily: 'Roboto, sans-serif'} }>
            {title}
        </AccordionSummary>
        <AccordionDetails style={{ fontFamily: 'Roboto, sans-serif' }}>
            {searchResults}
        </AccordionDetails>
    </Accordion>
  );
};

export default Card;
