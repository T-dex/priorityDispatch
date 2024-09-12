import{ FC, useState } from 'react';
import useAPIHook from './useAPIHook'

const ItemComponent: FC<ItemComponentProps> = ({ setResults }) => {
  const [searchTerms, setSearchTerms] = useState("")
  const {setFetchedState}=useAPIHook(searchTerms)
 
    
    const searchResults = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setResults(searchTerms)
        setFetchedState(searchTerms)
    }

    const inputValues = (event:{ target:{ value: string; }}) => {
        setSearchTerms(event.target.value)
 
    }
  
  return (
      <>
          <form onSubmit={searchResults}>
              <label>
                  Search:
                <input type="text" name="search" onChange={inputValues} />
              </label>
              <input type="submit" value="Find it!"/>
          </form>  
      
    </>
  );
};

export default ItemComponent;