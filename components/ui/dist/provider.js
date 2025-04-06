"use client";
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
exports.Provider = void 0;
var react_1 = require("@chakra-ui/react");
var color_mode_1 = require("./color-mode");
var theme_1 = require("../../theme");
function Provider(props) {
    return (React.createElement(react_1.ChakraProvider, { theme: theme_1["default"] },
        React.createElement(color_mode_1.ColorModeProvider, __assign({}, props))));
}
exports.Provider = Provider;
