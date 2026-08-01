# جلسه ۱۳ — متدهای رشته (String Methods)

در این جلسه با متدهای پرکاربرد رشته در JavaScript کار می‌کنیم و چند تمرین اعتبارسنجی و جستجو انجام می‌دهیم.

## هدف جلسه

- آشنایی با `length`، ایندکس کاراکتر، `charAt`، `charCodeAt`
- کار با `concat`، `trim`، `toUpperCase` / `toLowerCase`
- جستجو با `includes`، `search`، `indexOf`، `lastIndexOf`
- برش رشته با `slice` و `substring`

## ساختار پروژه

```
session13 string method/
├── script.js
├── exercise1.js
├── exercise2.js
├── exercise3.js
├── exercise4.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

روی یک رشته مثل `'sobhan kooshki jahromi'` این متدها را تست کردیم:

| متد / ویژگی | کاربرد |
|-------------|--------|
| `length` | طول رشته |
| `name[0]` / `charAt(0)` | کاراکتر در موقعیت مشخص |
| `charCodeAt(0)` | کد یونیکد کاراکتر |
| `concat(...)` | چسباندن رشته‌ها |
| `trim` / `trimStart` / `trimEnd` | حذف فاصله‌های اضافی |
| `toUpperCase` / `toLowerCase` | بزرگ/کوچک کردن حروف |
| `includes` / `search` / `indexOf` | پیدا کردن زیررشته |
| `slice` / `substring` | بریدن بخشی از رشته |

## کارهایی که انجام دادیم

1. متدهای اصلی رشته را در Console امتحان کردیم
2. چند تمرین کاربردی با ورودی کاربر نوشتیم

## تمرین‌ها

| فایل | موضوع |
|------|--------|
| `exercise1.js` | اعتبارسنجی طول username (≥ ۳) و password (≥ ۸) |
| `exercise2.js` | لاگین با مقایسه username بعد از `toLowerCase` |
| `exercise3.js` | بررسی وجود یک کلمه در جمله با `includes` / `search` / `indexOf` |
| `exercise4.js` | تشخیص پروتکل URL با `slice` و Ternary (`https` یا `http`) |

## چطور تست کنیم؟

هر فایل exercise را جداگانه در HTML وصل کنید، به `prompt`ها پاسخ دهید و نتیجه را در `alert` ببینید.

## جمع‌بندی

رشته فقط متن نیست؛ متدهای زیادی برای جستجو، تمیزکاری و برش دارد. در جلسه‌ی بعد سراغ متدهای شیء `Math` می‌رویم.
