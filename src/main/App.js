import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../components/template/header/Header';
import Footer from '../components/template/footer/Footer';
import Routes from './routes';

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
);

export default App;




