"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getStaticProps = void 0;
var react_1 = require("react");
var head_1 = require("next/head");
var react_2 = require("@chakra-ui/react");
var api_1 = require("../product/api");
var Carrito_1 = require("../components/Carrito");
var CompletarPedido_1 = require("../components/CompletarPedido");
function parseCurrency(value) {
    return new Intl.NumberFormat('es-UY', {
        style: 'currency',
        currency: 'UYU'
    }).format(value);
}
var Home = function (_a) {
    var products = _a.products;
    var _b = react_1.useState([]), cart = _b[0], setCart = _b[1];
    var _c = react_2.useDisclosure(), isOpen = _c.isOpen, onOpen = _c.onOpen, onClose = _c.onClose;
    var removeFromCart = function (index) {
        setCart(function (currentCart) {
            var newCart = __spreadArrays(currentCart);
            newCart.splice(index, 1);
            return newCart;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "PrecioHogar"),
            React.createElement("meta", { name: "description", content: "Tu tienda online de confianza para productos del hogar" }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement(Carrito_1["default"], { isOpen: isOpen, onClose: onClose, cart: cart, removeFromCart: removeFromCart, parseCurrency: parseCurrency }),
        React.createElement(react_2.Stack, { spacing: 6 },
            React.createElement(react_2.Grid, { gridGap: 6, templateColumns: "repeat(auto-fill, minmax(280px,1fr))" }, products.map(function (product) { return (React.createElement(react_2.Stack, { key: product.id, backgroundColor: "white", borderRadius: "lg", padding: 4, spacing: 3, boxShadow: "md", transition: "all 0.3s ease", _hover: {
                    transform: "translateY(-5px)",
                    boxShadow: "lg"
                }, position: "relative", overflow: "hidden" },
                product.badge && (React.createElement(react_2.Badge, { position: "absolute", top: 2, right: 2, colorScheme: "red", borderRadius: "full", px: 2 }, product.badge)),
                React.createElement(react_2.Box, { position: "relative", height: "200px", overflow: "hidden", borderRadius: "md" },
                    React.createElement(react_2.Image, { borderRadius: "md", height: "100%", width: "100%", objectFit: "cover", src: product.image, alt: product.title, transition: "transform 0.5s ease", _hover: { transform: "scale(1.05)" } })),
                React.createElement(react_2.Stack, { spacing: 2 },
                    React.createElement(react_2.Text, { fontWeight: "bold", fontSize: "lg", noOfLines: 1 }, product.title),
                    React.createElement(react_2.Text, { color: "gray.600", fontSize: "sm", noOfLines: 2, height: "40px" }, product.description || "Sin descripción disponible"),
                    React.createElement(react_2.Flex, { justify: "space-between", align: "center" },
                        React.createElement(react_2.Text, { color: "green.500", fontSize: "xl", fontWeight: "700" }, parseCurrency(product.price)),
                        React.createElement(react_2.Button, { colorScheme: "primary", size: "md", borderRadius: "full", leftIcon: React.createElement(react_2.Box, { as: "img", src: "/carritovacio.svg", width: "18px", height: "18px", filter: "brightness(0) invert(1)" }), onClick: function () { return setCart(function (cart) { return cart.concat(product); }); }, _hover: {
                                transform: "scale(1.05)"
                            }, transition: "all 0.2s ease" }, "Agregar"))))); })),
            Boolean(cart.length) && (React.createElement(react_2.Flex, { position: "sticky", justifyContent: "center", bottom: 4, padding: 4, backgroundColor: "rgba(56, 175, 82, 0.8)", backdropFilter: "blur(8px)", borderRadius: "lg", boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)", width: "100%", zIndex: 10, gap: 4 },
                React.createElement(react_2.Button, { colorScheme: "blue", size: "lg", leftIcon: React.createElement(react_2.Box, { as: "img", src: "/carritovacio.svg", width: "20px", height: "20px", filter: "brightness(0) invert(1)" }), fontWeight: "bold", px: 6, py: 6, onClick: onOpen, _hover: {
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg'
                    }, _active: {
                        transform: 'translateY(0)'
                    }, transition: "all 0.2s ease-in-out" },
                    "Ver Carrito (",
                    cart.length,
                    ")"),
                React.createElement(CompletarPedido_1["default"], { cart: cart, parseCurrency: parseCurrency, phoneNumber: "59892315819" }))))));
};
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1["default"].getProducts()];
            case 1:
                products = _a.sent();
                return [2 /*return*/, {
                        props: {
                            products: products
                        },
                        revalidate: 10
                    }];
        }
    });
}); };
exports["default"] = Home;
