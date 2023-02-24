"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByCode = exports.searchByCountry = exports.ALL_COUNTRIES = void 0;
const BASE_URL = 'https://restcountries.com/v2/';
exports.ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
const searchByCountry = (name) => BASE_URL + 'name/' + name;
exports.searchByCountry = searchByCountry;
const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
exports.filterByCode = filterByCode;
