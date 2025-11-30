# Personal Portfolio Template · قالب الملف المهني الشخصي

## English

### Purpose
A modern single-page portfolio anyone can adapt in minutes. No build tools or frameworks—just edit the highlighted spots and publish the three files. Recruiters see the same structure: hero, skills, projects, experience, testimonials, and contact.

### What's Inside
- `index.html` – semantic layout with EDITABLE comments around every piece of copy.
- `styles.css` – design tokens and section styles with clearly marked variables.
- `script.js` – tiny enhancements (mobile menu, current year, contact form toast) with hints on what to change.

### Quick Start
1. Download or clone this repo.
2. Double-click `index.html` to preview locally.
3. Ready to share? Upload the three files to GitHub Pages, Netlify, Vercel, etc.

### Customize Without Coding
Every customizable zone is labeled `EDITABLE`. Use your editor’s “Find” feature to jump between them.

#### 1. Update Text & Links (`index.html`)
- **Logo + name:** replace the initials right under `<!-- EDITABLE: Replace name/initial below -->`.
- **Navigation + call-to-action email:** edit the nav links and `mailto` address inside the header block.
- **Hero:** swap in your role, headline, paragraph, stats, CTA buttons, and the “Why hire me?” list.
- **About / Skills / Projects / Experience / Testimonials / Contact:** each section starts with an `<!-- EDITABLE SECTION ... -->` note. Replace the copy, bullet lists, dates, and testimonials with your own story.
- **Footer:** change social URLs and the contact email inside the `footer-links` comment.

#### 2. Change Colors & Style Tokens (`styles.css`)
- At the top you’ll see `/* EDITABLE: adjust colors, radii, and layout tokens here */` followed by variables like `--bg`, `--accent`, `--radius`.
- Update these values to switch the palette, spacing, or corner rounding without touching the rest of the CSS.
- You can also tweak section-specific rules (e.g., `.hero`, `.projects`) if you feel comfortable—look for intuitive class names.

#### 3. Adjust Behavior (`script.js`)
- The first line reminds you this file is optional. Leave it as-is if you only need the static template.
- Change the alert text inside the contact-form handler or replace it with your own service (Formspree, Netlify Forms, etc.).
- Customize the mobile nav toggle behavior if you want different interactions—code is only ~30 lines.

### File Map
```
webdesign/
├── index.html   # EDITABLE comments mark every text block
├── styles.css   # Theme variables + layout rules (top comment = edit zone)
└── script.js    # Menu toggle + demo contact form alert (with EDITABLE note)
```

### Deployment
- **GitHub Pages:** push to a repo and enable Pages (root directory). Files load instantly.
- **Netlify / Vercel:** drag-and-drop the folder or connect your repo—no build command required.
- **Any static host:** keep all three files in the same folder so the relative paths stay valid.

### Need Help?
Open an issue or fork the template and tailor it. Remember to replace every `mailto:` address with your inbox so leads reach you.

---

## العربية

### الهدف
قالب موقع شخصي حديث من صفحة واحدة يمكن لأي شخص تعديله خلال دقائق. لا توجد أدوات بناء أو أطر عمل؛ كل ما عليك هو تعديل المواقع المعلّمة ثم رفع الملفات الثلاثة. الهيكل ثابت ليسهل على مسؤولي التوظيف قراءة أقسام البطل، المهارات، المشاريع، الخبرة، التوصيات، والتواصل.

### محتويات القالب
- `index.html` – هيكل HTML مع تعليقات `EDITABLE` حول كل نص قابل للتعديل.
- `styles.css` – متغيرات التصميم وقواعد الأقسام مع إشارة واضحة للجزء القابل للتخصيص.
- `script.js` – تحسينات بسيطة (قائمة الجوال، سنة الحقوق، تنبيه نموذج التواصل) مع إرشادات للتعديل.

### البدء السريع
1. حمّل المستودع أو استنسخه.
2. افتح `index.html` في المتصفح لمعاينة فورية.
3. جاهز للنشر؟ ارفع الملفات الثلاثة إلى GitHub Pages أو Netlify أو Vercel أو أي استضافة ثابتة.

### تخصيص سهل بدون برمجة
كل منطقة مخصصة تم وسمها بكلمة `EDITABLE`. استخدم وظيفة البحث في المحرر للانتقال بينها بسرعة.

#### 1. تحديث النصوص والروابط (`index.html`)
- **الشعار والاسم:** عدّل الحروف تحت التعليق `<!-- EDITABLE: Replace name/initial below -->`.
- **القائمة العلوية + البريد:** عدّل روابط الأقسام ورابط البريد في الجزء الخاص بالرأس.
- **قسم البطل:** غيّر المسمى الوظيفي، العنوان، الفقرة، الأرقام، الأزرار، وقائمة “لماذا توظفني؟”.
- **الأقسام الأخرى (التعريف، المهارات، المشاريع، الخبرة، الآراء، التواصل):** يبدأ كل قسم بتعليق `<!-- EDITABLE SECTION ... -->`، فقط استبدل النصوص والقوائم بالتفاصيل الخاصة بك.
- **التذييل:** حدّث روابط الشبكات الاجتماعية وعنوان البريد داخل تعليق `footer-links`.

#### 2. تغيير الألوان وعناصر الهوية (`styles.css`)
- في الأعلى ستجد التعليق `/* EDITABLE: adjust colors, radii, and layout tokens here */` متبوعًا بمتغيرات مثل `--bg` و`--accent`.
- عدّل هذه القيم لتغيير لوحة الألوان أو المسافات أو انحناء الزوايا دون الحاجة للمساس بباقي الأنماط.
- يمكن تعديل قواعد الأقسام (مثل `.hero` أو `.projects`) إذا رغبت، فجميع الأسماء واضحة.

#### 3. تعديل السلوك (`script.js`)
- السطر الأول يذكّرك أن هذا الملف اختياري؛ اتركه كما هو إن لم تكن بحاجة لتعديلات.
- عدّل نص التنبيه داخل معالج نموذج التواصل أو استبدله بتكامل مع خدمة مثل Formspree أو Netlify Forms.
- لديك حرية تعديل طريقة عمل قائمة الجوال إن أردت تفاعلًا مختلفًا—الكود لا يتجاوز 30 سطرًا تقريبًا.

### خريطة الملفات
```
webdesign/
├── index.html   # تعليقات EDITABLE توضح كل جزء قابل للتغيير
├── styles.css   # متغيرات الهوية وقواعد التخطيط (قسم التعديل في الأعلى)
└── script.js    # التحكم بقائمة الجوال وتنبيه النموذج (مع تعليق EDITABLE)
```

### النشر
- **GitHub Pages:** ادفع الملفات إلى مستودع ثم فعّل الخدمة (المجلد الجذر).
- **Netlify / Vercel:** اسحب المجلد وأفلته أو اربطه بالمستودع—لا حاجة لأوامر بناء.
- **أي استضافة ثابتة:** احتفظ بالملفات الثلاثة معًا في نفس المجلد للحفاظ على المسارات النسبية.

### تحتاج مساعدة؟
افتح تذكرة أو قم بعمل Fork وخصص القالب كما تريد. لا تنسَ استبدال كل عنوان `mailto:` ببريدك حتى تصلك طلبات العمل مباشرة.
