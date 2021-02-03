import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
  
function Search() {
    let query = useQuery().get("q");
    
    return (
        <div>
            {query ? (
                <h3>You searched for {query}</h3>
            ) : (
                <h3>You did not search for anything</h3>
            )}
        </div>
    );
  }
  
  export default Search;