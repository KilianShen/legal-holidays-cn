interface Holidays {
  desc: string;
  date: string[];
  days: number;
}

const holidays: Holidays[] = [
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
let allHoliday: string[] = [];
holidays.forEach((item) => (allHoliday = allHoliday.concat(item.date)));

export const isHoliday = (val: string) => allHoliday.includes(val);

export const getHolidaysDetailByYears = () => holidays;

export const getHolidaysByYears = () => allHoliday;

export const getHolidayInfo = (val: string) => {
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
