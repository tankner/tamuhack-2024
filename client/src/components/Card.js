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
        />
      ));
    
  return (
    <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
            {title}
        </AccordionSummary>
        <AccordionDetails>
            {searchResults}
        </AccordionDetails>
    </Accordion>
  );
};

export default Card;
