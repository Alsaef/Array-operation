# When to Use Spread Operator with Arrays in JavaScript

JavaScript-এ array handle করার সময় অনেক confusion হয় — কখন spread operator (`...`) ব্যবহার করতে হবে আর কখন লাগবে না।
এই README.md এ step-by-step বোঝানো হলো।

---

## 1. মূল ধারণা — Mutating vs Non-Mutating Methods

JavaScript array method দুটি ভাগ করা যায়:

1. **Mutating methods** – মূল array পরিবর্তন করে।
2. **Non-mutating methods** – নতুন array তৈরি করে, মূল array অপরিবর্তিত থাকে।

> যদি মূল array change না করতে চাও, mutating methods এর সাথে spread operator ব্যবহার করো।

---

## 2. Mutating Methods (Spread প্রয়োজন হতে পারে)

| Method | কাজ | মূল array পরিবর্তিত হয়? |
|--------|-----|-----------------------|
| `.reverse()` | array উল্টায় | ✅ হ্যাঁ |
| `.sort()` | array sort করে | ✅ হ্যাঁ |
| `.splice()` | element add/remove করে | ✅ হ্যাঁ |
| `.fill()` | array-এর সব value replace করে | ✅ হ্যাঁ |
| `.pop()` | শেষ element remove করে | ✅ হ্যাঁ |
| `.push()` | শেষ element add করে | ✅ হ্যাঁ |
| `.shift()` | প্রথম element remove করে | ✅ হ্যাঁ |
| `.unshift()` | প্রথম element add করে | ✅ হ্যাঁ |

**Example:**
```js
const numbers = [10, 20, 30];
const reversed = [...numbers].reverse();
console.log(numbers);  // [10, 20, 30] – safe
console.log(reversed); // [30, 20, 10]
```

---

## 3. Non-Mutating Methods (Spread দরকার নেই)

| Method | কাজ | মূল array পরিবর্তিত হয়? |
|--------|-----|-----------------------|
| `.map()` | নতুন array তৈরি করে | ❌ না |
| `.filter()` | শর্ত অনুযায়ী নতুন array তৈরি করে | ❌ না |
| `.reduce()` | array থেকে single value তৈরি করে | ❌ না |
| `.concat()` | দুটি array merge করে | ❌ না |
| `.slice()` | array-এর অংশ কেটে নতুন array দেয় | ❌ না |
| `.find()` | প্রথম মেলানো element return করে | ❌ না |
| `.includes()` | element খুঁজে true/false দেয় | ❌ না |
| `.forEach()` | iterate করে, return কিছু দেয় না | ❌ না |

**Example:**
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(numbers); // [1, 2, 3] – safe
console.log(doubled); // [2, 4, 6]
```

---

## 4. Quick Rule of Thumb

- যদি method মূল array **change করে** → spread operator ব্যবহার করে copy তৈরি করো।  
- যদি method **নতুন array return করে** → spread operator দরকার নেই।

---

## 5. Summary Example

```js
const arr = [3, 1, 2];

// Mutating method → spread দিয়ে safe
const sorted = [...arr].sort();
console.log(arr);    // [3, 1, 2]
console.log(sorted); // [1, 2, 3]

// Non-mutating method → spread দরকার নেই
const doubled = arr.map(x => x * 2);
console.log(arr);     // [3, 1, 2]
console.log(doubled); // [6, 2, 4]
```

---

### Takeaway

- Spread operator দিয়ে main array **safe রাখো** যখন method mutate করে।  
- Non-mutating methods এর সাথে spread operator ব্যবহার optional।  
- এই understanding রাখলে JavaScript array handling অনেক safer হবে.

