import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import Message from './components/Message';
import Footer from './components/Footer';
class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer></ProductsContainer>
                        <Message></Message>
                        <CartContainer></CartContainer>
                    </div>
                </main>
               <Footer></Footer>
            </div>
        );
    }
}

export default App;
