import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);

  function handleListingsFetch(listings) {
    setListings(listings);
  }

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  function handleSearch(searchText) {
    if (searchText === "") {
      fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings));
    } else {
      const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(searchText.toLowerCase()));
      setListings(searchedListings);
    } 
  }

  return (
    <div className="app">
      <Header onListingSearch={handleSearch} />
      <ListingsContainer setListings={handleListingsFetch} listings={listings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
