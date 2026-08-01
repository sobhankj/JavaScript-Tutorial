# جلسه ۸ — شرط‌ها با `if` / `else`

در این جلسه با ساختار شرطی `if` و `else` آشنا می‌شویم و چندین تمرین عملی انجام می‌دهیم.

## هدف جلسه

- نوشتن شرط با `if` و `else`
- استفاده از `else if` برای چند حالت
- ترکیب شرط با ورودی کاربر (`prompt`) و عملگرهای مقایسه‌ای
- اعتبارسنجی ورودی با `isNaN`

## ساختار پروژه

```
session8 if/
├── index.html
├── scripts/
│   ├── script.js
│   ├── exercise1.js
│   ├── exercise2.js
│   ├── exercise3.js
│   ├── exercise4.js
│   ├── exercise5.js
│   ├── exercise6.js
│   └── exercise7.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### ساختار پایه

```js
if (شرط) {
    // اگر شرط درست بود
} else {
    // در غیر این صورت
}
```

مثال ورود با رمز (`script.js`):

```js
let password = prompt("Enter your password");
const truepassword = "123456";

if (password === truepassword) {
    console.log("Welcome to the system");
} else {
    console.log("Invalid password");
}
```

### چند شاخه با `else if`

وقتی بیش از دو حالت داریم:

```js
if (userGrade > 15) {
    // A
} else if (userGrade > 12) {
    // B
} else {
    // C
}
```

## کارهایی که انجام دادیم

1. یک سیستم ورود ساده با چک کردن رمز ساختیم
2. چند تمرین جدا برای تمرین منطق شرطی نوشتیم

## تمرین‌ها

| فایل | موضوع تمرین |
|------|-------------|
| `exercise1.js` | تشخیص زوج یا فرد بودن عدد (`% 2`) |
| `exercise2.js` | میانگین سه عدد |
| `exercise3.js` | بررسی بزرگسال بودن (`age >= 18`) |
| `exercise4.js` | محاسبه‌ی توان دو عدد (`**`) |
| `exercise5.js` | محاسبه‌ی سن از تاریخ تولد با `Date` |
| `exercise6.js` | تبدیل دقیقه به ساعت و دقیقه |
| `exercise7.js` | نمره‌دهی A / B / C + چک ورودی نامعتبر |

> برای هر تمرین، همان فایل را در `index.html` به عنوان اسکریپت فعال کنید.

## چطور تست کنیم؟

1. در `index.html` مسیر `src` اسکریپت را به فایل موردنظر تغییر دهید
2. صفحه را در مرورگر باز کنید
3. به `prompt`ها پاسخ دهید و خروجی را در Console یا `alert` ببینید

## جمع‌بندی

`if` / `else` ابزار اصلی تصمیم‌گیری در برنامه است. در جلسه‌ی بعد با `switch` برای چند حالت مشخص آشنا می‌شویم.
