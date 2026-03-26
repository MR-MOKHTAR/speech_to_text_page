export const TELEGRAM_BOT_URL = "https://t.me/SpeechToText313bot";

export const features = [
  {
    emoji: "⚡",
    title: "سرعت برق‌آسا",
    desc: "ویس‌های چند دقیقه‌ای در چند ثانیه پردازش می‌شن. وقت شما ارزش داره!",
  },
  {
    emoji: "🎯",
    title: "دقت بالا",
    desc: "با هوش مصنوعی Gemini، لهجه‌ها و اصطلاحات محاوره‌ای رو هم به خوبی می‌فهمه.",
  },
  {
    emoji: "🔒",
    title: "حریم خصوصی",
    desc: "فایل‌های صوتی بلافاصله بعد از پردازش حذف می‌شن و هیچ‌جا ذخیره نمی‌شن.",
  },
  {
    emoji: "♾️",
    title: "بدون محدودیت",
    desc: "ویس‌های طولانی رو راحت بفرستید، همه رو یکجا برات می‌نویسیم.",
  },
  {
    emoji: "📱",
    title: "همیشه در دسترس",
    desc: "مستقیم تو تلگرام، بدون نصب هیچ اپ اضافه‌ای.",
  },
  {
    emoji: "🌐",
    title: "چند زبانه",
    desc: "فارسی، انگلیسی، عربی و ده‌ها زبان دیگه رو پشتیبانی می‌کنه.",
  },
];

export const steps = [
  {
    num: "۱",
    emoji: "🤖",
    title: "ربات رو استارت کن",
    desc: "روی دکمه زیر کلیک کن و در تلگرام /start رو بزن.",
  },
  {
    num: "۲",
    emoji: "🎤",
    title: "ویست رو بفرست",
    desc: "صدات رو ضبط کن یا ویس رو از چت دیگه‌ای فوروارد کن.",
  },
  {
    num: "۳",
    emoji: "✍️",
    title: "متن رو دریافت کن",
    desc: "تو چند ثانیه متن دقیق و آماده کپی دریافت می‌کنی!",
  },
];

export const stats = [
  { num: 10000, suffix: "+", label: "کاربر فعال" },
  { num: 500000, suffix: "+", label: "ویس تبدیل شده" },
  { num: 99, suffix: "٪", label: "دقت تشخیص" },
];

export const particlesData = Array.from({ length: 18 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 8,
  delay: i * 0.2,
}));
