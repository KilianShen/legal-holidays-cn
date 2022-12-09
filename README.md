## Introduction

判断某个日期是否为国家法定节假日及详细信息(目前支持 2023、2022 年)。默认查询 2023 年，如需查询 2022 年数据，api 传入参数'2022'

## Installation

> npm install legal-holidays-cn --save

> yarn add legal-holidays-cn -S

## use

`import { isHoliday } from "legal-holidays-cn";`

## API

### 判断某日期是否为法定节假日，返回布尔值

**isHoliday('20231001')** // true  
**isHoliday('20221001','2022')** // true

### 获取 2023 年所有法定节假日 日期数组

**getHolidaysByYears()**  
// ["20221231","20230101","20230102",...,"20231006"]  
**getHolidaysByYears('2022')**  
// ["20220101","20220102","20220103",...,"20221007"]

### 获取 2023 年所有法定节假日日期详细数组

**getHolidaysDetailByYears()**  
// [{desc: '元旦', date: ['20221231', '20230101', '20230102'], days: 3}, {…}, {…}, {…}, {…}, {…}, {…}]  
**getHolidaysDetailByYears('2022')**  
// [{desc: '元旦', date: ['20220101', '20220102', '20220103'], days: 3}, {…}, {…}, {…}, {…}, {…}, {…}]

### 获取某日期详细数据

**getHolidayInfo("20230501")**  
// {isHoliday: true, desc: '劳动节', date: Array(5), days: 5}  
**getHolidayInfo("20220501",'2022')**  
// {isHoliday: true, desc: '劳动节', date: Array(5), days: 5}
