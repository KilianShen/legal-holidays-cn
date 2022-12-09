interface Holidays {
  readonly desc: string;
  readonly date: string[];
  readonly days: number;
}

const holiday2022: Holidays[] = [
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

const holiday2023: Holidays[] = [
  { desc: "元旦", date: ["20221231", "20230101", "20230102"], days: 3 },
  {
    desc: "春节",
    date: [
      "20230121",
      "20230122",
      "20230123",
      "20230124",
      "20230125",
      "20230126",
      "20230127",
    ],
    days: 7,
  },
  { desc: "清明节", date: ["20230405"], days: 3 },
  {
    desc: "劳动节",
    date: ["20230429", "20230430", "20230501", "20230502", "20230503"],
    days: 5,
  },
  { desc: "端午节", date: ["20230622", "20230623", "20230624"], days: 3 },
  { desc: "中秋节", date: ["20230929", "20230930"], days: 2 },
  {
    desc: "国庆节",
    date: [
      "20231001",
      "20231002",
      "20231003",
      "20231004",
      "20231005",
      "20231006",
    ],
    days: 6,
  },
];

let holidays: Holidays[] = [];
let allHoliday: string[] = [];

function init(year: "2023" | "2022" = "2023") {
  holidays = [];
  allHoliday = [];
  holidays = year === "2023" ? holiday2023 : holiday2022;
  holidays.forEach((item) => (allHoliday = allHoliday.concat(item.date)));
}

export const isHoliday = (val: string, year: "2023" | "2022" = "2023") => {
  init(year);
  return allHoliday.includes(val);
};

export const getHolidaysByYears = (year: "2023" | "2022" = "2023") => {
  init(year);
  return allHoliday;
};

export const getHolidaysDetailByYears = (year: "2023" | "2022" = "2023") => {
  init(year);
  return holidays;
};

export const getHolidayInfo = (val: string, year: "2023" | "2022" = "2023") => {
  init(year);
  let isHoliday = false;
  let _item: Holidays | any = {};
  holidays.forEach((item: Holidays) => {
    if (item.date.includes(val)) {
      isHoliday = true;
      _item = item;
    }
  });
  return isHoliday ? { isHoliday, ..._item } : { isHoliday };
};
