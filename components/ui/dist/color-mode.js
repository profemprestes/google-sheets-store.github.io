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
exports.ColorModeButton = exports.ColorModeIcon = exports.useColorModeValue = exports.useColorMode = exports.ColorModeProvider = void 0;
var react_1 = require("@chakra-ui/react");
var next_themes_1 = require("next-themes");
var lu_1 = require("react-icons/lu");
var React = require("react");
function ColorModeProvider(props) {
    return (React.createElement(next_themes_1.ThemeProvider, __assign({ attribute: "class", disableTransitionOnChange: true }, props)));
}
exports.ColorModeProvider = ColorModeProvider;
function useColorMode() {
    var _a = next_themes_1.useTheme(), resolvedTheme = _a.resolvedTheme, setTheme = _a.setTheme;
    var toggleColorMode = function () {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return {
        colorMode: resolvedTheme,
        setColorMode: setTheme,
        toggleColorMode: toggleColorMode
    };
}
exports.useColorMode = useColorMode;
function useColorModeValue(light, dark) {
    var colorMode = useColorMode().colorMode;
    return colorMode === "dark" ? dark : light;
}
exports.useColorModeValue = useColorModeValue;
function ColorModeIcon() {
    var colorMode = useColorMode().colorMode;
    return colorMode === "dark" ? React.createElement(lu_1.LuMoon, null) : React.createElement(lu_1.LuSun, null);
}
exports.ColorModeIcon = ColorModeIcon;
function ColorModeButton(props) {
    var toggleColorMode = useColorMode().toggleColorMode;
    return (React.createElement(react_1.IconButton, __assign({ size: "md", fontSize: "lg", variant: "ghost", color: "current", onClick: toggleColorMode, icon: React.createElement(ColorModeIcon, null), "aria-label": "Toggle color mode" }, props)));
}
exports.ColorModeButton = ColorModeButton;
