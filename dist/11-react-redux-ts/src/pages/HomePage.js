"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const Controls_1 = require("../features/controls/Controls");
const CountryList_1 = require("../features/countries/CountryList");
const HomePage = () => {
    return (<>
      <Controls_1.Controls />
      <CountryList_1.CountryList />
    </>);
};
exports.HomePage = HomePage;
