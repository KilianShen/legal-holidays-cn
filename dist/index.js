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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolidayInfo = exports.getHolidaysByYears = exports.getHolidaysDetailByYears = exports.isHoliday = void 0;
var holidays = [
    { desc: "元旦", date: ["20220101", "20220102", "20220103"], days: 3 },
    {
        desc: "春节",
        date: [
            "20220131",
            "20220201",
            "20220202",
            "20220203",
            "20220204",
            "20220205",
            "20220206",
        ],
        days: 7,
    },
    { desc: "清明节", date: ["20220403", "20220404", "20220405"], days: 3 },
    {
        desc: "劳动节",
        date: ["20220430", "20220501", "20220502", "20220503", "20220504"],
        days: 5,
    },
    { desc: "端午节", date: ["20220603", "20220604", "20220605"], days: 3 },
    { desc: "中秋节", date: ["20220910", "20220911", "20220912"], days: 3 },
    {
        desc: "国庆节",
        date: [
            "20221001",
            "20221002",
            "20221003",
            "20221004",
            "20221005",
            "20221006",
            "20221007",
        ],
        days: 7,
    },
];
var allHoliday = [];
holidays.forEach(function (item) { return (allHoliday = allHoliday.concat(item.date)); });
var isHoliday = function (val) { return allHoliday.includes(val); };
exports.isHoliday = isHoliday;
var getHolidaysDetailByYears = function () { return holidays; };
exports.getHolidaysDetailByYears = getHolidaysDetailByYears;
var getHolidaysByYears = function () { return allHoliday; };
exports.getHolidaysByYears = getHolidaysByYears;
var getHolidayInfo = function (val) {
    var isHoliday = false;
    var _item = {};
    holidays.forEach(function (item) {
        if (item.date.includes(val)) {
            isHoliday = true;
            _item = item;
        }
    });
    return isHoliday ? __assign({ isHoliday: isHoliday }, _item) : { isHoliday: isHoliday };
};
exports.getHolidayInfo = getHolidayInfo;
