# جلسه ۱۲ — توابع (Functions)

در این جلسه با تعریف تابع، پارامتر، مقدار پیش‌فرض و `return` آشنا می‌شویم.

## هدف جلسه

- تفاوت Function Declaration و Function Expression
- نوشتن تابع با پارامتر و بدون پارامتر
- برگرداندن نتیجه با `return`
- مقدار پیش‌فرض برای پارامترها (`default parameters`)

## ساختار پروژه

```
session12 Function/
├── script.js
├── exercise1.js
├── exercise2.js
├── exercise3.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### Function Declaration

```js
function sayHello() {
    console.log("Hello");
}
```

### Function Expression

```js
let sayHello = function() {
    console.log("Hello");
}
```

### پارامتر و `return`

```js
function saySomething(message) {
    console.log(message);
}

function add(a, b) {
    return a + b;
}
```

### مقدار پیش‌فرض

```js
function minus(a, b = 0) {
    return a - b;
}
```

اگر `b` پاس داده نشود، مقدارش `0` در نظر گرفته می‌شود.

## کارهایی که انجام دادیم

1. تابع بدون پارامتر و با پارامتر نوشتیم
2. توابع محاسباتی با `return` ساختیم
3. از default parameter استفاده کردیم
4. چند تمرین کوتاه برای تمرین نوشتیم

## تمرین‌ها

| فایل | موضوع |
|------|--------|
| `exercise1.js` | تابع جمع با مقدار پیش‌فرض `0` |
| `exercise2.js` | تابع تشخیص زوج بودن (`isEven`) |
| `exercise3.js` | تابع میانگین سه عدد |

## چطور تست کنیم؟

هر فایل را در یک HTML وصل کنید یا در Console صدا بزنید، مثلاً:

```js
add(2, 3)
isEven(4)
average(10, 20, 30)
```

## جمع‌بندی

تابع یعنی بسته‌ای از کد که قابل استفاده مجدد است. از این به بعد منطق‌های تکراری را داخل تابع می‌گذاریم. جلسه‌ی بعد متدهای رشته را می‌بینیم.
