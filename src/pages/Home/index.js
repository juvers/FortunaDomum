import React from 'react';
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
  } from '../../context/PropertyListingsProvider';
import Listing from '../../components/listing'

import Hero from '../../components/hero'

function Home() {
  return(
    <>
    <Hero />
    <div className="container">
        <PropertyListingsProvider>
            <PropertyListingsConsumer>
                {({ propertyListings }) => (
                    <ul>
                    {propertyListings.map(listing => (
                        <Listing key={listing.id} listing={listing} />
                    ))}
                    </ul>
                )}
            </PropertyListingsConsumer>
        </PropertyListingsProvider>
    </div>
    </>
  ) 
  
}

export default Home