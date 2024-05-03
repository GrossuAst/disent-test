import styles from './app.module.css';
import { Routes, Route, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { getAllCountries, fakeRequest } from "../../utils/api";

import Home from "../../pages/home";
import NotFoundPage from '../../pages/not-found-page';
import CountryPage from '../../pages/country-page';
import Preloader from "../preloader";
import Error from '../error';

const App = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [getCountriesFailed, setGetCountriesFailed] = useState(false);

    // для иммитации ошибки необходимо раскомментить testFakeRequest(); и закомментить fetchCountries();
    useEffect(() => {
        fetchCountries();
        // testFakeRequest();
    }, []);

    function retry() {
        fetchCountries();
        // testFakeRequest();
    };
    
    function fetchCountries() {
        setIsLoading(true);
        getAllCountries()
        .then((res) => {
            setCountriesList(res);
            setIsLoading(false);
            setGetCountriesFailed(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setGetCountriesFailed(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    };

    function testFakeRequest() {
        setIsLoading(true);
        fakeRequest()
        .then((res) => {
        })
        .catch((err) => {
            setIsLoading(false);
            setGetCountriesFailed(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    };

    return (
        <div className={ styles.app }>
            <Routes>

                <Route
                    index
                    element={
                    isLoading ? <Preloader /> : getCountriesFailed ? <Error retry={ retry } /> : <Home countriesList={countriesList} />
                    }
                />

                <Route path=":name" element={<CountryPage />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </div>
    )
};

export default App;