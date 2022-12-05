interface Holidays {
    desc: string;
    date: string[];
    days: number;
}
export declare const isHoliday: (val: string) => boolean;
export declare const getHolidaysDetailByYears: () => Holidays[];
export declare const getHolidaysByYears: () => string[];
export declare const getHolidayInfo: (val: string) => any;
export {};
