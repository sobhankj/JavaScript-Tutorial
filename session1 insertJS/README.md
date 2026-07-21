# جلسه ۱ — اضافه کردن JavaScript به HTML

در این جلسه یاد می‌گیریم چطور کد JavaScript را به یک صفحه HTML وصل کنیم و تفاوت روش‌های مختلف را ببینیم.

## هدف جلسه

آشنایی با سه روش رایج برای اجرای JavaScript در صفحه:

1. اسکریپت داخل خود HTML (Inline)
2. فایل JavaScript جداگانه (External)
3. اجرای کد با رویداد `onload`

## ساختار پروژه

```
session1 insertJS/
├── index.html
├── script/
│   └── script.js
└── README.md
```

## روش‌های اتصال JavaScript

### ۱. اسکریپت داخلی (Inline Script)

کد مستقیماً داخل تگ `<script>` در همان فایل HTML نوشته می‌شود:

```html
<script>
    console.log("Hello World [inline script]");
</script>
```

- مناسب برای تست‌های کوتاه و مثال‌های آموزشی
- برای پروژه‌های بزرگ توصیه نمی‌شود؛ چون HTML و منطق برنامه قاطی می‌شوند

### ۲. اسکریپت خارجی (External Script)

کد در یک فایل جدا (مثل `script/script.js`) قرار می‌گیرد و با `src` به HTML وصل می‌شود:

```html
<script src="./script/script.js"></script>
```

محتوای `script.js`:

```js
console.log("Hello World [external script]");
```

- کد تمیزتر و قابل نگهداری‌تر است
- می‌توان یک فایل را در چند صفحه استفاده کرد
- روش استاندارد در پروژه‌های واقعی

### ۳. رویداد `onload` روی `body`

با ویژگی `onload` می‌توان کدی را درست بعد از بارگذاری کامل صفحه اجرا کرد:

```html
<body onload="console.log('Hello World [onload event]');">
```

- وقتی صفحه و منابعش لود شدند اجرا می‌شود
- در پروژه‌های مدرن معمولاً به‌جای آن از `window.onload` یا `DOMContentLoaded` داخل فایل JS استفاده می‌شود

## ترتیب اجرا در این مثال

با باز کردن `index.html` در مرورگر و نگاه به Console، پیام‌ها تقریباً به این ترتیب دیده می‌شوند:

1. `Hello World [inline script]` — وقتی مرورگر به تگ `<script>` داخلی برسد
2. `Hello World [external script]` — وقتی فایل `script.js` اجرا شود
3. `Hello World [onload event]` — بعد از اتمام بارگذاری صفحه

> نکته: چون اسکریپت‌ها در انتهای `<body>` هستند، قبل از `onload` اجرا می‌شوند. رویداد `onload` آخرین مورد است.

## چطور تست کنیم؟

1. فایل `index.html` را در مرورگر باز کنید
2. DevTools را باز کنید (`F12` یا `Ctrl + Shift + I`)
3. به تب **Console** بروید
4. سه پیام `Hello World` را ببینید

## جمع‌بندی

| روش | محل کد | کاربرد اصلی |
|-----|--------|-------------|
| Inline | داخل HTML | مثال‌های کوتاه و تست سریع |
| External | فایل `.js` جدا | پروژه‌های واقعی و کد تمیز |
| `onload` | روی تگ HTML / در JS | اجرا بعد از لود کامل صفحه |

در جلسه‌های بعدی بیشتر روی نوشتن منطق در فایل‌های خارجی تمرکز می‌کنیم.
