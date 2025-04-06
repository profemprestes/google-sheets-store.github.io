"use client";
"use strict";
exports.__esModule = true;
exports.Toaster = exports.toaster = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
// Create a custom toaster interface
exports.toaster = {
    success: function (title, description) {
        window.dispatchEvent(new CustomEvent('toast', {
            detail: { type: 'success', title: title, description: description }
        }));
    },
    error: function (title, description) {
        window.dispatchEvent(new CustomEvent('toast', {
            detail: { type: 'error', title: title, description: description }
        }));
    },
    warning: function (title, description) {
        window.dispatchEvent(new CustomEvent('toast', {
            detail: { type: 'warning', title: title, description: description }
        }));
    },
    info: function (title, description) {
        window.dispatchEvent(new CustomEvent('toast', {
            detail: { type: 'info', title: title, description: description }
        }));
    },
    loading: function (title, description) {
        window.dispatchEvent(new CustomEvent('toast', {
            detail: { type: 'loading', title: title, description: description }
        }));
    }
};
exports.Toaster = function () {
    var toast = react_1.useToast();
    var bgColor = react_1.useColorModeValue('white', 'gray.800');
    react_2.useEffect(function () {
        var handleToast = function (event) {
            var _a = event.detail, type = _a.type, title = _a.title, description = _a.description;
            toast({
                title: title,
                description: description,
                status: type === 'loading' ? 'info' : type,
                duration: type === 'loading' ? null : 5000,
                isClosable: true,
                position: "bottom-right",
                render: function (_a) {
                    var onClose = _a.onClose;
                    return (React.createElement(react_1.Box, { p: 4, bg: bgColor, borderRadius: "md", boxShadow: "md", width: { base: "full", md: "sm" } },
                        React.createElement(react_1.Stack, { direction: "row", alignItems: "center", spacing: 3 },
                            type === 'loading' ? (React.createElement(react_1.Spinner, { size: "sm", color: "blue.500" })) : null,
                            React.createElement(react_1.Stack, { flex: "1", maxWidth: "100%" },
                                title && React.createElement(react_1.Text, { fontWeight: "bold" }, title),
                                description && React.createElement(react_1.Text, { fontSize: "sm" }, description)),
                            React.createElement(react_1.CloseButton, { size: "sm", onClick: onClose }))));
                }
            });
        };
        window.addEventListener('toast', handleToast);
        return function () { return window.removeEventListener('toast', handleToast); };
    }, [toast, bgColor]);
    return null;
};
