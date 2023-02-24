"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Header_1 = require("./components/Header");
const Main_1 = require("./components/Main");
const HomePage_1 = require("./pages/HomePage");
const Details_1 = require("./pages/Details");
const NotFound_1 = require("./pages/NotFound");
function App() {
    return (<>
      <Header_1.Header />
      <Main_1.Main>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<HomePage_1.HomePage />}/>
          <react_router_dom_1.Route path="/country/:name" element={<Details_1.Details />}/>
          <react_router_dom_1.Route path="*" element={<NotFound_1.NotFound />}/>
        </react_router_dom_1.Routes>
      </Main_1.Main>
    </>);
}
exports.default = App;
