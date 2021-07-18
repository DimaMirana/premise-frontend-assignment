import { useEffect, useState } from "react";
import { CardList } from "./containers/card-list/CardList";
import { SearchBox } from "./containers/search-box/SearchBox";
import {sampleData} from "./data/sampleData";
import "./styles/variables.scss";

function App() {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState('');
  
  useEffect(()=>{
    setData(sampleData);
  },[])
  
  const filteredCards = data.filter(card => 
    card.name.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <SearchBox
        placeholder="search card"
        handleChange = {(e)=>{setSearch(e.target.value)}}
      />
      <CardList cards={filteredCards}/>
    </div>
  );
}

export default App;
