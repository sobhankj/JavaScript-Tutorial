# جلسه ۹ — دستور `switch`

در این جلسه با `switch` برای انتخاب بین چند حالت آشنا می‌شویم و دسته‌بندی سن کاربر را پیاده‌سازی می‌کنیم.

## هدف جلسه

- آشنایی با ساختار `switch` / `case` / `break` / `default`
- استفاده از الگوی `switch (true)` برای شرط‌های بازه‌ای
- نمایش نتیجه با `alert`

## ساختار پروژه

```
session9 switchCase/
├── index.html
├── scripts/
│   └── script.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### ساختار کلی `switch`

```js
switch (مقدار) {
    case حالت۱:
        // کد
        break;
    case حالت۲:
        // کد
        break;
    default:
        // اگر هیچ‌کدام نبود
        break;
}
```

- `case`: یک حالت مشخص
- `break`: جلوگیری از ادامه‌ی اجرای caseهای بعدی
- `default`: حالت پیش‌فرض

### الگوی `switch (true)`

وقتی بازه‌ها را چک می‌کنیم (مثل سن)، می‌توان شرط‌های بولین را در `case` نوشت:

```js
let userAge = +prompt("Enter your age", 1);

switch (true) {
    case userAge >= 70:
        alert("You are a senior citizen");
        break;
    case userAge >= 50:
        alert("You are a middle aged");
        break;
    case userAge >= 18:
        alert("You are an adult");
        break;
    default:
        alert("You are a child");
        break;
}
```

ترتیب `case`ها مهم است؛ چون اولین شرط درست، اجرا و با `break` متوقف می‌شود.

## کارهایی که انجام دادیم

1. سن کاربر را با `prompt` گرفتیم
2. با `switch` او را در یکی از دسته‌های کودک / بزرگسال / میانسال / سالمند قرار دادیم
3. پیام مناسب را با `alert` نشان دادیم

## تمرین‌ها

تمرین اصلی همین فایل `script.js` است: دسته‌بندی سنی با `switch`.

## چطور تست کنیم؟

1. `index.html` را باز کنید
2. سن‌های مختلف (مثلاً ۱۰، ۲۵، ۵۵، ۷۵) را امتحان کنید
3. پیام‌های مختلف را ببینید

## جمع‌بندی

| ابزار | مناسب برای |
|--------|------------|
| `if` / `else` | شرط‌های پیچیده و ترکیبی |
| `switch` | چند حالت مشخص یا بازه‌های مرتب |

در جلسه‌ی بعد شرط کوتاه (Ternary) را یاد می‌گیریم.
