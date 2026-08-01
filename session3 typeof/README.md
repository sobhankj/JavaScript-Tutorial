# جلسه ۳ — انواع داده و `typeof`

در این جلسه با انواع داده‌ی پایه در JavaScript و تشخیص نوع هر مقدار با عملگر `typeof` آشنا می‌شویم.

## هدف جلسه

- آشنایی با سه نوع داده‌ی رایج: `string`، `number`، `boolean`
- استفاده از `typeof` برای فهمیدن نوع متغیر

## ساختار پروژه

```
session3 typeof/
├── index.html
├── scripts/
│   └── script.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### انواع داده

```js
const name = 'sobhan kooshki jahromi' // string
const age = 20                        // number
const isStudent = true                // boolean
```

| نوع | مثال | توضیح |
|-----|------|--------|
| `string` | `'hello'` | متن |
| `number` | `20` | عدد |
| `boolean` | `true` / `false` | درست یا غلط |

### عملگر `typeof`

با `typeof` می‌توان نوع یک مقدار را گرفت و چاپ کرد:

```js
console.log("name is " + typeof name);
console.log("age is " + typeof age);
console.log("isStudent is " + typeof isStudent);
```

خروجی تقریبی:

```
name is string
age is number
isStudent is boolean
```

## کارهایی که انجام دادیم

1. سه متغیر با انواع مختلف ساختیم
2. با `typeof` نوع هر کدام را بررسی کردیم
3. نتیجه را در Console نمایش دادیم

## تمرین‌ها

تمرین جداگانه‌ای در این پوشه نیست؛ تمرکز روی تعریف انواع داده و تست `typeof` بوده است.

## چطور تست کنیم؟

1. `index.html` را در مرورگر باز کنید
2. Console را باز کنید
3. نوع هر سه متغیر را ببینید

## جمع‌بندی

دانستن نوع داده مهم است؛ چون رفتار عملگرها و تبدیل‌ها به نوع مقدار بستگی دارد. در جلسه‌ی بعد یاد می‌گیریم چطور نوع داده را عمداً تغییر دهیم (Casting).
