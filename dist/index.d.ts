interface Holidays {
    readonly desc: string;
    readonly date: string[];
    readonly days: number;
}
export declare const isHoliday: (val: string, year?: "2023" | "2022") => boolean;
export declare const getHolidaysByYears: (year?: "2023" | "2022") => string[];
export declare const getHolidaysDetailByYears: (year?: "2023" | "2022") => Holidays[];
export declare const getHolidayInfo: (val: string, year?: "2023" | "2022") => any;
export {};
