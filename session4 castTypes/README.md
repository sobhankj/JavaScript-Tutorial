# جلسه ۴ — تبدیل نوع داده (Type Casting)

در این جلسه یاد می‌گیریم چطور یک مقدار را از یک نوع به نوع دیگر تبدیل کنیم.

## هدف جلسه

- تبدیل رشته به عدد با `Number()` یا `+`
- تبدیل عدد به رشته با `String()`
- تبدیل عدد به بولین با `Boolean()`
- بررسی نتیجه با `typeof`

## ساختار پروژه

```
session4 castTypes/
├── index.html
├── scripts/
│   └── script.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### ۱. تبدیل String به Number

```js
let numStr = '10';
let numNum = Number(numStr);
// معادل: let numNum = +numStr;
```

### ۲. تبدیل Number به String

```js
let ageNum = 20;
let ageStr = String(ageNum);
```

### ۳. تبدیل Number به Boolean

```js
let numberNum = 10;
let numberBool = Boolean(numberNum); // true
```

> نکته: در JavaScript مقدار `0` برابر `false` و اعداد غیرصفر معمولاً `true` هستند.

## کارهایی که انجام دادیم

1. یک رشته‌ی عددی را به `number` تبدیل کردیم
2. یک عدد را به `string` تبدیل کردیم
3. یک عدد را به `boolean` تبدیل کردیم
4. قبل و بعد از تبدیل، نوع داده را با `typeof` چاپ کردیم

## تمرین‌ها

تمرین جدا در این جلسه تعریف نشده؛ تمرین اصلی همان تبدیل‌های موجود در `script.js` است.

## چطور تست کنیم؟

1. `index.html` را باز کنید
2. در Console نوع داده‌ها قبل و بعد از تبدیل را مقایسه کنید

## جمع‌بندی

| تابع / روش | از → به |
|------------|---------|
| `Number(value)` یا `+value` | string → number |
| `String(value)` | number → string |
| `Boolean(value)` | number → boolean |

تبدیل نوع وقتی مهم می‌شود که داده از کاربر می‌آید (مثلاً از `prompt`)؛ چون ورودی معمولاً `string` است. این موضوع را در جلسه‌ی بعد می‌بینیم.
