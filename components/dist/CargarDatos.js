"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var CargarDatos = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var _b = react_1.useState({
        name: '',
        address: '',
        phone: ''
    }), customerInfo = _b[0], setCustomerInfo = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var toast = react_2.useToast();
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setCustomerInfo(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function () {
        // Simple validation
        if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
            toast({
                title: 'Información incompleta',
                description: 'Por favor complete todos los campos',
                status: 'error',
                duration: 3000,
                isClosable: true
            });
            return;
        }
        setIsLoading(true);
        // Simulate processing
        setTimeout(function () {
            onSubmit(customerInfo);
            setIsLoading(false);
            onClose();
            // Reset form after submission
            setCustomerInfo({
                name: '',
                address: '',
                phone: ''
            });
        }, 500);
    };
    return (react_1["default"].createElement(react_2.Modal, { isOpen: isOpen, onClose: onClose, isCentered: true },
        react_1["default"].createElement(react_2.ModalOverlay, { backdropFilter: "blur(4px)" }),
        react_1["default"].createElement(react_2.ModalContent, { borderRadius: "lg", boxShadow: "xl" },
            react_1["default"].createElement(react_2.ModalHeader, { bg: "green.50", color: "green.700", borderTopRadius: "lg", fontWeight: "bold" }, "Informaci\u00F3n de Contacto"),
            react_1["default"].createElement(react_2.ModalCloseButton, null),
            react_1["default"].createElement(react_2.ModalBody, { py: 6 },
                react_1["default"].createElement(react_2.VStack, { spacing: 4 },
                    react_1["default"].createElement(react_2.FormControl, { isRequired: true },
                        react_1["default"].createElement(react_2.FormLabel, { fontWeight: "medium" }, "Nombre completo"),
                        react_1["default"].createElement(react_2.Input, { name: "name", value: customerInfo.name, onChange: handleChange, placeholder: "Ingrese su nombre", focusBorderColor: "green.500" })),
                    react_1["default"].createElement(react_2.FormControl, { isRequired: true },
                        react_1["default"].createElement(react_2.FormLabel, { fontWeight: "medium" }, "Direcci\u00F3n de entrega"),
                        react_1["default"].createElement(react_2.Input, { name: "address", value: customerInfo.address, onChange: handleChange, placeholder: "Ingrese su direcci\u00F3n", focusBorderColor: "green.500" })),
                    react_1["default"].createElement(react_2.FormControl, { isRequired: true },
                        react_1["default"].createElement(react_2.FormLabel, { fontWeight: "medium" }, "Tel\u00E9fono de contacto"),
                        react_1["default"].createElement(react_2.Input, { name: "phone", value: customerInfo.phone, onChange: handleChange, placeholder: "Ingrese su tel\u00E9fono", focusBorderColor: "green.500", type: "tel" })))),
            react_1["default"].createElement(react_2.ModalFooter, { bg: "gray.50", borderBottomRadius: "lg" },
                react_1["default"].createElement(react_2.Button, { variant: "outline", mr: 3, onClick: onClose }, "Cancelar"),
                react_1["default"].createElement(react_2.Button, { colorScheme: "whatsapp", onClick: handleSubmit, isLoading: isLoading, loadingText: "Procesando" }, "Continuar con el pedido")))));
};
exports["default"] = CargarDatos;
