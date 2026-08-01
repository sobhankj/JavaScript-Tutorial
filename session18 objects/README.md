# جلسه ۱۸ — اشیاء (Objects)

در این جلسه با ساخت object، خواندن و افزودن property آشنا می‌شویم و یک ثبت‌نام ساده روی آرایه‌ای از کاربران می‌نویسیم.

## هدف جلسه

- تعریف object با جفت‌های `key: value`
- دسترسی با نقطه‌گذاری (`user.name`) و براکت (`user["age"]`)
- افزودن property جدید
- ترکیب آرایه + object برای مدل کردن لیست کاربران
- نوشتن تابع `signup`

## ساختار پروژه

```
session18 objects/
├── script.js
├── exercise.js
└── README.md
```

## چه چیزی یاد گرفتیم؟

### ساخت object

```js
let user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    city: "New York",
    country: "USA",
    friends: ["Alice", "Bob", "Charlie"],
}
```

### دسترسی و افزودن

```js
console.log(user.name);
console.log(user["age"]);
user.work = "Software Engineer";
```

مقدار یک property می‌تواند رشته، عدد، آرایه یا حتی object دیگر باشد.

## کارهایی که انجام دادیم

1. یک object کاربر ساختیم و propertyهایش را خواندیم
2. فیلد `work` را اضافه کردیم
3. در تمرین، سیستم ثبت‌نام روی آرایه‌ی کاربران نوشتیم

## تمرین‌ها

### ثبت‌نام (`exercise.js`)

- آرایه‌ای از کاربران با `id`، `firstName`، `lastName`، `password`
- تابع `signup` کاربر جدید را با `push` اضافه می‌کند
- نام، نام خانوادگی و رمز را با `prompt` می‌گیریم و لیست نهایی را در Console می‌بینیم

```js
function signup(users, firstName, lastName, password) {
    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        password,
    }
    users.push(newUser);
    return users;
}
```

## چطور تست کنیم؟

`script.js` را برای دیدن object در Console اجرا کنید و `exercise.js` را برای ثبت یک کاربر جدید.

## جمع‌بندی

Object داده را با نام فیلد نگه می‌دارد؛ آرایه لیست را. ترکیب این دو پایه‌ی بیشتر پروژه‌های واقعی است. در جلسه‌ی بعد متدهای آرایه مثل `forEach`، `map` و `filter` را عمیق‌تر کار می‌کنیم.
