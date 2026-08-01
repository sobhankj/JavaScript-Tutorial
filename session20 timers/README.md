# جلسه ۲۰ — تایمرها (`setTimeout` و `setInterval`)

در این جلسه با اجرای کد بعد از تأخیر و اجرای تکراری در فاصله‌های زمانی آشنا می‌شویم و یک شمارش معکوس می‌سازیم.

## هدف جلسه

- آشنایی با `setInterval` و توقف آن با `clearInterval`
- آشنایی با `setTimeout` و لغو آن با `clearTimeout`
- پاس دادن آرگومان به callback تایمر
- ساخت تایمر معکوس دقیقه‌:ثانیه

## ساختار پروژه

```
session20 timers/
├── script.js
├── exercise.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### `setInterval` — اجرای تکراری

```js
let i = 0;
let end = 10;

let timer = setInterval((data, endTime) => {
    console.log(`${data} of ${endTime}`);
    i++;
    if (i === end) {
        clearInterval(timer);
    }
}, 1000, i, end);
```

- آرگومان دوم: فاصله‌ی زمانی به میلی‌ثانیه (`1000` = هر ۱ ثانیه)
- آرگومان‌های بعدی به تابع callback پاس داده می‌شوند
- با `clearInterval` حلقه‌ی زمانی متوقف می‌شود

### `setTimeout` — یک‌بار بعد از تأخیر

```js
let timer2 = setTimeout(() => {
    console.log("Hello World");
}, 1000);

clearTimeout(timer2); // قبل از اجرا لغو می‌شود
```

## کارهایی که انجام دادیم

1. یک شمارنده با `setInterval` ساختیم که بعد از ۱۰ بار متوقف شود
2. `setTimeout` را تست و بلافاصله با `clearTimeout` لغو کردیم
3. تمرین شمارش معکوس نوشتیم

## تمرین‌ها

### شمارش معکوس (`exercise.js`)

```js
let second = prompt("enter the second");
let minute = prompt("enter the minute");
```

- هر ثانیه مقدار `minute:second` در Console چاپ می‌شود
- وقتی ثانیه منفی شد → یک دقیقه کم و ثانیه `59` می‌شود
- وقتی دقیقه منفی شد → `clearInterval` و توقف تایمر

## چطور تست کنیم؟

فایل‌ها را در یک HTML با `<script>` وصل کنید و Console را باز نگه دارید تا خروجی‌های زمانی را ببینید.

## جمع‌بندی

| متد | کاربرد |
|------|--------|
| `setTimeout` | یک‌بار بعد از تأخیر |
| `clearTimeout` | لغو همان تایمر |
| `setInterval` | تکرار در بازه‌های زمانی |
| `clearInterval` | توقف تکرار |

تایمرها پایه‌ی انیمیشن ساده، کپچا با محدودیت زمانی و شمارش معکوس هستند. در جلسه‌ی بعد وارد DOM و کار با عناصر HTML می‌شویم.
