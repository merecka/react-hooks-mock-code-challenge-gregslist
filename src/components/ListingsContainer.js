import React from "react";
import { useEffect } from "react/cjs/react.development";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {

  function handleDeleteListing(listing) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing));
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} deleteListing={handleDeleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
