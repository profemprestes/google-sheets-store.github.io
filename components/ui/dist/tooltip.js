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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Tooltip = void 0;
var react_1 = require("@chakra-ui/react");
var React = require("react");
exports.Tooltip = React.forwardRef(function Tooltip(props, ref) {
    var _a = props.showArrow, showArrow = _a === void 0 ? true : _a, children = props.children, _b = props.isDisabled, isDisabled = _b === void 0 ? false : _b, content = props.content, rest = __rest(props, ["showArrow", "children", "isDisabled", "content"]);
    if (isDisabled)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(react_1.Tooltip, __assign({ label: content, hasArrow: showArrow, placement: "top", openDelay: 300, ref: ref }, rest), children));
});
