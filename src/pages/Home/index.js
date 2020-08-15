import React from 'react';
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
  } from '../../context/PropertyListingsProvider';

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
                        <li>{listing.title}</li>
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