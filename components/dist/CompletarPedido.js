"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var CargarDatos_1 = require("./CargarDatos");
var CompletarPedido = function (_a) {
    var cart = _a.cart, parseCurrency = _a.parseCurrency, _b = _a.phoneNumber, phoneNumber = _b === void 0 ? "59892315819" : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c;
    var _d = react_2.useDisclosure(), isOpen = _d.isOpen, onOpen = _d.onOpen, onClose = _d.onClose;
    var _e = react_1.useState(null), customerInfo = _e[0], setCustomerInfo = _e[1];
    // Skip rendering if cart is empty
    if (cart.length === 0)
        return null;
    var handleSubmitInfo = function (info) {
        setCustomerInfo(info);
        // Generate the WhatsApp message text with customer info
        var text = "\uD83D\uDED2 *PEDIDO NUEVO* \uD83D\uDED2\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n\uD83D\uDC64 *DATOS DEL CLIENTE:*\n\u2022 *Nombre:* " + info.name + "\n\u2022 *Direcci\u00F3n:* " + info.address + "\n\u2022 *Tel\u00E9fono:* " + info.phone + "\n\n\uD83D\uDCCB *PRODUCTOS SOLICITADOS:*\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n" + cart.map(function (product, index) {
            return index + 1 + ". *" + product.title + "*\n   \uD83D\uDCB0 " + parseCurrency(product.price);
        }).join('\n\n') + "\n\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\uD83D\uDCB5 *TOTAL A PAGAR:* " + parseCurrency(cart.reduce(function (total, product) { return total + product.price; }, 0)) + "\n\n\uD83D\uDE4F \u00A1Gracias por su compra!";
        // Open WhatsApp with the formatted message
        window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text), '_blank');
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Button, { colorScheme: "whatsapp", size: "lg", width: fullWidth ? "100%" : "auto", height: "60px", rightIcon: react_1["default"].createElement(react_2.Flex, { align: "center", justify: "center", bg: "whiteAlpha.300", p: 2, borderRadius: "full" },
                react_1["default"].createElement(react_2.Image, { src: "/whatsapp-icon.svg", alt: "WhatsApp", width: "24px", height: "24px" })), fontWeight: "bold", fontSize: "md", px: 8, boxShadow: "md", _hover: {
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                textDecoration: 'none'
            }, _active: {
                transform: 'translateY(0)',
                boxShadow: 'md'
            }, transition: "all 0.2s ease-in-out", onClick: onOpen },
            react_1["default"].createElement(react_2.Flex, { direction: "column", align: "center" },
                react_1["default"].createElement(react_2.Text, null, "Completar pedido"),
                react_1["default"].createElement(react_2.Text, { fontSize: "xs", fontWeight: "normal", opacity: 0.9 },
                    "(",
                    cart.length,
                    " ",
                    cart.length === 1 ? 'producto' : 'productos',
                    ")"))),
        react_1["default"].createElement(CargarDatos_1["default"], { isOpen: isOpen, onClose: onClose, onSubmit: handleSubmitInfo })));
};
exports["default"] = CompletarPedido;
