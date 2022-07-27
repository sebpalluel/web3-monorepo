"use strict";
exports.__esModule = true;
var __1 = require("..");
jest.spyOn(global.console, "log");
describe("logger", function () {
    it("prints a message", function () {
        (0, __1.log)("hello");
        expect(console.log).toBeCalled();
    });
});
