"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
const react_router_dom_1 = require("react-router-dom");
const io5_1 = require("react-icons/io5");
const Button_1 = require("../components/Button");
const CountryDetails_1 = require("../features/details/CountryDetails");
const Details = () => {
    const { name } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div>
      <Button_1.Button onClick={() => navigate(-1)}>
        <io5_1.IoArrowBack /> Back
      </Button_1.Button>
      <CountryDetails_1.CountryDetails name={name} navigate={navigate}/>
    </div>);
};
exports.Details = Details;
