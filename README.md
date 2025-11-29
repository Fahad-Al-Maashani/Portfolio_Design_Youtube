# Personal Portfolio Website · الموقع الشخصي للملف المهني

## English

### Overview
This repository contains a modern single-page portfolio for anyone who want design his own portfolio website. The layout is optimized for screening by recruiters: clear hero messaging, highlighted experience, scannable project summaries, and quick contact options. The stack is intentionally lightweight (HTML, CSS, vanilla JS) so the page can be hosted on any static host without build tooling.

### Features
- Sticky header with responsive navigation and CTA buttons
- Hero section with impactful headline, stats, and availability card
- About, Skills, Projects, Experience, Testimonials, and Contact sections arranged for easy scanning
- Modern styling with gradients, glassmorphism cards, and accessibility-conscious typography
- Mobile menu toggle, current year injection, and simulated contact-form submission feedback

### Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser to preview locally.
3. (Optional) Use a lightweight HTTP server for better caching and routing, e.g. `npx serve .`.

### Customization Tips
- Update hero text, metrics, and CTA email in `index.html`.
- Replace project copy inside the `#projects` section with real case studies.
- Adjust brand colors, gradients, or typography in `styles.css` (top-level CSS variables under `:root`).
- Modify the form submission behavior or integrate with a real backend by editing `script.js`.

### File Structure
```
webdesign/
├── index.html   # Main page markup with all sections
├── styles.css   # Global styles, components, and responsive rules
└── script.js    # Mobile menu toggle + demo contact form handler
```

### Deployment
Upload the three files to any static host (GitHub Pages, Netlify Drop, Vercel, etc.). Ensure all assets stay in the same directory so relative paths remain valid. No environment variables or build steps are required.

### Contact
For questions or collaboration requests, edit the email links in the hero and footer to point to your preferred inbox.

---

## العربية

### نظرة عامة
يحتوي هذا المستودع على موقع شخصي حديث من صفحة واحدة لفهد المعشني. تم تصميم البنية لتناسب متطلبات التقديم للوظائف: رسالة قوية في الجزء العلوي، إبراز الخبرات، ملخصات مختصرة للمشاريع، ووسائل تواصل واضحة. تم الاعتماد على HTML وCSS وJavaScript فقط ليكون النشر بسيطًا على أي منصة استضافة ثابتة.

### المزايا
- شريط علوي ثابت مع قائمة تنقل تستجيب لأحجام الشاشات المختلفة وأزرار دعوة لاتخاذ إجراء
- قسم رئيسي يضم عنوانًا لافتًا، إحصائيات الخبرة، وبطاقة توضح التوافر المهني
- أقسام عن السيرة الذاتية، المهارات، المشاريع، الخبرات، الشهادات، والتواصل مرتبة بطريقة تسهّل قراءتها
- تصميم حديث يعتمد على التدرجات اللونية والبطاقات الشفافة ومراعاة متطلبات الوصول في الخطوط والألوان
- تفاعل بسيط عبر JavaScript لفتح القائمة على الأجهزة الصغيرة، وتحديث سنة الحقوق تلقائيًا، ورسالة تأكيد لنموذج التواصل

### كيفية البدء
1. قم باستنساخ المستودع أو تنزيله.
2. افتح ملف `index.html` مباشرة في المتصفح لمعاينة الموقع.
3. (اختياري) استخدم خادمًا بسيطًا مثل `npx serve .` لتحسين التخزين المؤقت والتصفح المحلي.

### تخصيص الموقع
- حدّث نصوص قسم البطل، الأرقام، وروابط البريد الإلكتروني داخل `index.html`.
- استبدل وصف المشاريع في قسم `#projects` بدراسات حالة حقيقية.
- عدّل ألوان الهوية أو التدرجات أو الخطوط من خلال المتغيرات المعرفة في أعلى `styles.css`.
- يمكنك تعديل سلوك نموذج التواصل أو ربطه بواجهة خلفية حقيقية بتحديث ملف `script.js`.

### بنية الملفات
```
webdesign/
├── index.html   # الصفحة الرئيسية وجميع الأقسام
├── styles.css   # أنماط التصميم والقواعد المتجاوبة
└── script.js    # تحكم القائمة على الجوال ومعالجة نموذج التواصل
```

### النشر
يمكن رفع الملفات الثلاثة إلى أي خدمة استضافة مواقع ثابتة مثل GitHub Pages أو Netlify أو Vercel. تأكد من بقاء الملفات معًا في نفس المسار للحفاظ على الروابط النسبية دون تعديل. لا توجد حاجة لأي متغيرات بيئة أو عملية بناء.

### التواصل
قم بتعديل روابط البريد الإلكتروني داخل القسم الرئيسي والتذييل لتوجيه الرسائل إلى البريد الذي تفضله.
