import React from "react";
import "../Home.css";
import {
    QuickFactsBox,
    WorldwideData,
    UzbekistanData,
    USData,
    AsiaData,
    NorthAmericaData,
    SouthAmericaData,
    AfricaData,
    EuropeData,
    AustraliaData,
} from "../components/index";


function App() {

    return (
        <div>

            <div className="app">
                <div className="app__left">
                    <div className="app__facts">
                        <QuickFactsBox />
                    </div>
                </div>
                <div className="app__right">
                    <WorldwideData />
                    <UzbekistanData />
                    <USData />
                    <AsiaData />
                    <EuropeData />
                    <AustraliaData />
                    <NorthAmericaData />
                    <SouthAmericaData />
                    <AfricaData />
                </div>
            </div>
        </div>
    );
}

export default App;
