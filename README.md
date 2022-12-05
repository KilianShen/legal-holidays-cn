## Introduction

判断某个日期是否为国家法定节假日及详细信息(目前仅支持 2022 年)

## Installation

> npm install legal-holidays-cn --save

> yarn add legal-holidays-cn -S

## use

`import { isHoliday } from "legal-holidays-cn";`

## API

### 判断某日期是否为法定节假日，返回布尔值

`isHoliday('20221001') // true`

### 获取 2022 年所有法定节假日 日期数组

`getHolidaysByYears() // ["20220101","20220102","20220103",...,"20221007"]`

### 获取 2022 年所有法定节假日日期详细数组

`getHolidaysDetailByYears() `
`// [{desc: '元旦', date: ['20220101', '20220102', '20220103'], days: 3}, {…}, {…}, {…}, {…}, {…}, {…}]`

### 获取某日期详细数据

`getHolidayInfo("20220501")  // {isHoliday: true, desc: '中秋节', date: Array(3), days: 3}`
