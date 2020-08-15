import React, { createContext, Component } from 'react'

const DefaultState = {
    propertyListings: []
}

const PropertyListingsContext = createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer;

export class PropertyListingsProvider extends React.Component {
    state = DefaultState
  
    componentDidMount() {
      fetch('http://localhost:3008/data')
        .then(res => res.json())
        .then(res => {
          this.setState({ propertyListings: res })
        })
    }
  
    render() {
      const { children } = this.props
      const { propertyListings } = this.state
  
      return (
        <PropertyListingsContext.Provider
          value={{
            propertyListings
          }}
        >
          {children}
        </PropertyListingsContext.Provider>
      )
    }
  }