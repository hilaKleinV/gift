<script setup lang="ts">
import { ref } from "vue";

// Replace with your actual photos & captions
const photos = ref([
  { src: "src/assets/images/a/1.jpg", caption: "התמונה הראשונה שלנו 💕" },
  { src: "src/assets/images/a/2.jpg", caption: "פעם ראשונה שהכנת לי אוכל 🍝" },
  { src: "src/assets/images/a/3.jpg", caption: "מסיבה ראשונה 🎶" },
  { src: "src/assets/images/a/4.jpg", caption: "סתם סלפי מצחיק 🤪" },
  {
    src: "src/assets/images/a/5.jpg",
    caption: "עושים שטויות במסיבה 🤸🏻‍♂️",
  },
  { src: "src/assets/images/a/6.jpg", caption: "נצנצים ✨" },
  {
    src: "src/assets/images/a/7.jpg",
    caption: "אחרי המסאג במלון ברדיצ׳בסקי 💆‍♀️",
  },
  { src: "src/assets/images/a/8.jpg", caption: "חיות בגבוה 🍷" },
  { src: "src/assets/images/a/9.jpg", caption: "היינו חמודות פעם 🤗" },
  { src: "src/assets/images/a/10.jpg", caption: "מצפה ⛰️" },
  {
    src: "src/assets/images/a/11.jpg",
    caption: "כשחשבתי שנפספס את השקיעה אבל הספקנו ברגע האחרון ⛰️",
  },
  { src: "src/assets/images/a/12.jpg", caption: "מצפה ⛰️" },
  {
    src: "src/assets/images/a/13.jpg",
    caption: "בוקר טוב, אחרי שחירטטת אותי כל הלילה על הכוכבים 💫",
  },
  {
    src: "src/assets/images/a/14.jpg",
    caption: "בוקר טוב, אחרי שחירטטת אותי כל הלילה על הכוכבים 💫",
  },
  { src: "src/assets/images/a/15.jpg", caption: "דרך צופה על נחל צין" },
  { src: "src/assets/images/a/16.jpg", caption: "חוות קורנמל" },
  { src: "src/assets/images/a/17.jpg", caption: "אין על התימנים בכרם" },
  {
    src: "src/assets/images/a/18.jpg",
    caption: "כשגאיה הייתה אובססיבית אלינו בירח דבש שלה",
  },
  { src: "src/assets/images/a/19.jpg", caption: "כשבאת איתי לגאיה פעם ראשונה" },
  { src: "src/assets/images/a/20.jpg", caption: "ים" },
  { src: "src/assets/images/a/21.jpg", caption: "עוד ים" },
  { src: "src/assets/images/a/22.jpg", caption: "כשעוד הייתי מתנחלת אצלך" },
  { src: "src/assets/images/a/23.jpg", caption: "הבקרים הכי מושלמים בעולם" },
  { src: "src/assets/images/a/24.jpg", caption: "חיים שלי במרפסת באלישיב" },
  { src: "src/assets/images/a/25.jpg", caption: "לא מצליחה להזכר איפה זה 🤔" },
  {
    src: "src/assets/images/a/26.jpg",
    caption: "בדרכינו לחגוג לך יום הולדת 29",
  },
  {
    src: "src/assets/images/a/27.jpg",
    caption: "זוכרת את המקום ההזוי הזה שקניתי בו קפה?",
  },
  { src: "src/assets/images/a/28.jpg", caption: "חייבת עצירה בנוף של ים המלח" },
  {
    src: "src/assets/images/a/29.jpg",
    caption: "פה התחלתי להבין שתכריחי אותי להצטלם כל החיים",
  },
  { src: "src/assets/images/a/30.jpg", caption: "רואים שאני עושה את זה בכוח?" },
  { src: "src/assets/images/a/31.jpg", caption: "האמת תמונות חמודות שלנו" },
  {
    src: "src/assets/images/a/32.jpg",
    caption: "מלון של זקנים ואנחנו מתנהגות כמו ילדות בנות 16",
  },
  { src: "src/assets/images/a/33.jpg", caption: "משקפיים אש 😎" },
  { src: "src/assets/images/a/34.jpg", caption: "חמודות ולבנות" },
  { src: "src/assets/images/a/35.jpg", caption: "מתה על התמונה הזאת" },
  { src: "src/assets/images/a/36.jpg", caption: "את כלכך חמודה" },
  {
    src: "src/assets/images/a/37.jpg",
    caption: "אחת השקיעות היפות מחוץ לרמי לוי",
  },
  {
    src: "src/assets/images/a/38.jpg",
    caption: "זריחה ראשונה שלנו יחד! ביום הולדת שלך",
  },
  {
    src: "src/assets/images/a/39.jpg",
    caption: "פעם ראשונה שפגשתי את ליהיא ומורי",
  },
  { src: "src/assets/images/a/40.jpg", caption: "מיץ גזר מהכרם ולים" },
  { src: "src/assets/images/a/41.jpg", caption: "תביאי נשיקה" },
  {
    src: "src/assets/images/a/42.jpg",
    caption: "זוכרת שהיינו קמות ב7 בבוקר ועושות הליכה בים?",
  },
  { src: "src/assets/images/a/43.jpg", caption: "מתרגלות דיסטנס" },
  { src: "src/assets/images/a/44.jpg", caption: "מצרפות את דין" },
  { src: "src/assets/images/a/45.jpg", caption: "פרצוף יפה" },
  {
    src: "src/assets/images/a/46.jpg",
    caption:
      "נראה לי שזה היה הים האחרון שלנו בעונה הקודמת ופעם ראשונה שהכרת את איתי",
  },
  { src: "src/assets/images/a/47.jpg", caption: "אף חמוד" },
  { src: "src/assets/images/a/48.jpg", caption: "בגג של הגג" },
  {
    src: "src/assets/images/a/49.jpg",
    caption: "שמה את הצבע האהוב עלייך כדי שתרצי אותי",
  },
  { src: "src/assets/images/a/50.jpg", caption: "אחלה עמרי" },
  { src: "src/assets/images/a/51.jpg", caption: "אנחנו באמת קצת דומות" },
  {
    src: "src/assets/images/a/52.jpg",
    caption: "לא מאמינה שהצטלמתי ככה אבל אחלה תמונה",
  },
  {
    src: "src/assets/images/a/53.jpg",
    caption: "אנחנו אלופות שהלכנו לשקיעות גם כשקר 🌅",
  },
  { src: "src/assets/images/a/54.jpg", caption: "העיניים שלנו נוצצות 👀" },
  {
    src: "src/assets/images/a/55.jpg",
    caption: "שקיעה בחבצלת השרון בדרך לפרדס חנה",
  },
  { src: "src/assets/images/a/56.jpg", caption: "במקום הקבוע, גם בחורף :)" },
  { src: "src/assets/images/a/57.jpg", caption: "באלברט, הבר השכונתי שלנו!" },
  { src: "src/assets/images/a/58.jpg", caption: "בסאבלט שלנו בדן" },
  {
    src: "src/assets/images/a/59.jpg",
    caption: "זוכרת שעשית לי כאילו אנחנו בסיור מודרך?",
  },
  { src: "src/assets/images/a/60.jpg", caption: "איזה יפה היה שם" },
  { src: "src/assets/images/a/61.jpg", caption: "בדרכנו לראות עגורים" },
  { src: "src/assets/images/a/62.jpg", caption: "עוד זריחה יחד" },
  { src: "src/assets/images/a/63.jpg", caption: "תומכת בך בכדורגל גם אם גשם" },
  { src: "src/assets/images/a/64.jpg", caption: "שחקנית נשמה" },
  { src: "src/assets/images/a/65.jpg", caption: "בדרך לאימג׳ן השני שלנו יחד" },
  { src: "src/assets/images/a/66.jpg", caption: "חייבות עצירה בדאבח" },
  { src: "src/assets/images/a/67.jpg", caption: "עוד זריחה לאוסף" },
  { src: "src/assets/images/a/69.jpg", caption: "פורים שמח אינדיאנית" },
  { src: "src/assets/images/a/70.jpg", caption: "בוקר צ׳יל בשיטים" },
  { src: "src/assets/images/a/71.jpg", caption: "אני פנתרה" },
  { src: "src/assets/images/a/72.jpg", caption: "בחתונה של שמואל ונעמה!" },
  {
    src: "src/assets/images/a/73.jpg",
    caption: "צופות בסרטון שלקח לי אותך לחודש ומשהו",
  },
  {
    src: "src/assets/images/a/74.jpg",
    caption: "פעם ראשונה שראינו את השקיעה בשובר גלים ואנחנו צריכות שוב!",
  },
  {
    src: "src/assets/images/a/75.png",
    caption: "מתלהבת מהטכנולוגיה של הצ׳אט לקראת תאילנד",
  },
  { src: "src/assets/images/a/76.jpg", caption: "פעם אחרונה שתמכתי בספיר" },
  { src: "src/assets/images/a/77.jpg", caption: "טיסה נעימה אמן שלא נריב" },
  {
    src: "src/assets/images/a/78.jpg",
    caption: "עם רונצ׳ו הגבר ושכחתי את השם שלה באסה!",
  },
  {
    src: "src/assets/images/a/79.jpg",
    caption: "בסיטואציה הכי נפוצה בקשר שלנו",
  },
  { src: "src/assets/images/a/80.jpg", caption: "אני ישנה ואת ערה זה מוזר" },
  { src: "src/assets/images/a/81.jpg", caption: "הגענו לקו סמוי!!" },
  {
    src: "src/assets/images/a/82.jpg",
    caption: "גאונה שלקחת אותנו למופע דראג על היום הראשון בתאילנד",
  },
  { src: "src/assets/images/a/83.jpg", caption: "מהרגעים שאני נזכרת שאת בי" },
  {
    src: "src/assets/images/a/84.jpg",
    caption: "היו חופים ממש יפים בקו-סמוי!",
  },
  {
    src: "src/assets/images/a/85.jpg",
    caption: "במעבורת לקופנגן ולגמרי התמונה הכי אהובה עליי בכל הזמנים",
  },
  {
    src: "src/assets/images/a/86.jpg",
    caption: "שקיעה ראשונה בקופנגן בסיאם קוקיז",
  },
  {
    src: "src/assets/images/a/87.jpg",
    caption: "אורוות האמנים של קופנגן עם דניאל ושוהם",
  },
  {
    src: "src/assets/images/a/88.jpg",
    caption: "הפעם הראשונה שנתקלנו בספיר בטעות, שעוד התלהבנו מזה",
  },
  { src: "src/assets/images/a/89.jpg", caption: "זן ביץ׳" },
  { src: "src/assets/images/a/90.jpg", caption: "עוד שקיעה בזן ביץ׳" },
  {
    src: "src/assets/images/a/91.jpg",
    caption: "כשהתחלתם את ושובל להגזים עם הבוקים",
  },
  { src: "src/assets/images/a/92.jpg", caption: "אין חברותיות ממנו" },
  {
    src: "src/assets/images/a/93.jpg",
    caption: "מתה על שאת גורמת לי לעשות דברים שלא הייתי עושה בחיים והם חוויה",
  },
  { src: "src/assets/images/a/94.jpg", caption: "מחייכות בפורד" },
  {
    src: "src/assets/images/a/95.jpg",
    caption: "בדרך לבית חולים כי הבנו שמשהו לא תקין ברגל שלי",
  },
  { src: "src/assets/images/a/96.jpg", caption: "בסיקרט ביץ׳ קופנגן" },
  { src: "src/assets/images/a/97.jpg", caption: "האיש מאחורינו מקסים" },
  { src: "src/assets/images/a/98.jpg", caption: "במסעדה ההודית" },
  {
    src: "src/assets/images/a/99.jpg",
    caption: "בית חולים כמובן המקום האהוב עלינו בקופנגן",
  },
  { src: "src/assets/images/a/100.jpg", caption: "מואי תאי" },
  { src: "src/assets/images/a/101.jpg", caption: "רומן אהובנו, בדרך לקו טאו" },
  {
    src: "src/assets/images/a/102.jpg",
    caption: "מנסות להיות משפיעניות בתחום היוגה והיוגורט",
  },
  {
    src: "src/assets/images/a/103.jpg",
    caption: "במסדעה בקו טאו ששכחתי את שמה",
  },
  {
    src: "src/assets/images/a/104.jpg",
    caption: "שקיעה בקו טאו הראשונה שיכלתי לשתות בה אלכוהול סוףסוף",
  },
  {
    src: "src/assets/images/a/105.jpg",
    caption: "אהובתי חוגגת לי יום הולדת 30",
  },
  { src: "src/assets/images/a/106.jpg", caption: "הסיור הכי טוב שהיינו בו" },
  { src: "src/assets/images/a/107.jpg", caption: "יין בירות וסירה" },
  { src: "src/assets/images/a/108.jpg", caption: "מתה עלינו" },
  {
    src: "src/assets/images/a/109.jpg",
    caption: "שוב מכריחה אותי לעשות בוק ושוב צודקת שזה קטלני",
  },
  { src: "src/assets/images/a/110.jpg", caption: "הבוק ממשיך" },
  { src: "src/assets/images/a/111.jpg", caption: "עוד קצת תמונות" },
  { src: "src/assets/images/a/112.jpg", caption: "חלי ואבידן בדראג שואו" },
  { src: "src/assets/images/a/113.jpg", caption: "בסיור איים בקו טאו" },
  { src: "src/assets/images/a/114.jpg", caption: "מגלות את עולם הפורטרט" },
  { src: "src/assets/images/a/115.jpg", caption: "מאמיק" },
  { src: "src/assets/images/a/116.jpg", caption: "תמונה קטלנית" },
  { src: "src/assets/images/a/117.jpg", caption: "טעים לך, חריף לי" },
  { src: "src/assets/images/a/118.jpeg", caption: "חבישה נעימה" },
  { src: "src/assets/images/a/119.jpg", caption: "חולות על מסאג׳" },
  { src: "src/assets/images/a/120.jpg", caption: "גרין פפאיה" },
  { src: "src/assets/images/a/121.jpg", caption: "מסעדה מקומית בטונג סלה" },
  {
    src: "src/assets/images/a/122.jpg",
    caption: "האד רין, הפעם הראשונה שנכנסתי למים אחרי הפציעה",
  },
  { src: "src/assets/images/a/123.jpg", caption: "Eden garden" },
  { src: "src/assets/images/a/124.jpg", caption: "בדרך למטוס חזרה מקו סמוי" },
  { src: "src/assets/images/a/125.jpg", caption: "לכולם חם לך קר" },
  { src: "src/assets/images/a/126.jpg", caption: "שבועות במגידו" },
  { src: "src/assets/images/a/127.jpg", caption: "אהובתי תמונה מהממת" },
  { src: "src/assets/images/a/128.jpg", caption: "לאביו" },
  { src: "src/assets/images/a/129.jpg", caption: "לאביו2" },
  { src: "src/assets/images/a/130.jpg", caption: "כמה תמונות עשיו בחציר?" },
  { src: "src/assets/images/a/131.jpg", caption: "חג שמח!" },
  {
    src: "src/assets/images/a/132.jpg",
    caption: "חיים שלי אלופה קיבלת תואר שני",
  },
  {
    src: "src/assets/images/a/133.jpg",
    caption: "אבל אתתת את לא נותנת לי לפול",
  },
  { src: "src/assets/images/a/134.jpg", caption: "ערב ראשון של איראן" },
  {
    src: "src/assets/images/a/135.jpg",
    caption: "שהלכנו לים באמצע איראן ואחרי 3 דק הייתה אזעקה",
  },
  { src: "src/assets/images/a/136.jpg", caption: "מאמי" },
  { src: "src/assets/images/a/137.jpg", caption: "מבקרות פעם אחרונה באלון" },
  { src: "src/assets/images/a/138.jpg", caption: "יםיםים" },
  { src: "src/assets/images/a/139.jpg", caption: "עוד ים" },
  { src: "src/assets/images/a/140.jpg", caption: "הם בבית!" },
  { src: "src/assets/images/a/141.jpg", caption: "שבורות אחרי האימג׳ן" },
  { src: "src/assets/images/a/142.jpg", caption: "שקיעה גם בקור קיצוני" },
]);
</script>

<template>
  <div class="photos-page">
    <h1 class="title">📸 Our Memories Together</h1>
    <h3 class="sub-title">. . . שלא תגידי שאין לנו תמונות יחד</h3>

    <div class="gallery">
      <div v-for="(photo, index) in photos" :key="index" class="photo-card">
        <img :src="photo.src" alt="Memory photo" />
        <div class="caption">{{ photo.caption }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.photos-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f7, #e6f7ff);
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #ff4081;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.2s ease-out;
}

.sub-title {
  font-size: 1.2rem;
  color: #ff99cc;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.2s ease-out;
}

/* Masonry grid effect */
.gallery {
  column-count: 3;
  column-gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.photo-card {
  break-inside: avoid;
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-card:hover {
  transform: scale(1.05);
}

.photo-card img {
  width: 100%;
  display: block;
  border-radius: 12px;
  transition: opacity 0.3s ease;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0 0 12px 12px;
}

.photo-card:hover .caption {
  opacity: 1;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .gallery {
    column-count: 2;
  }
}
@media (max-width: 480px) {
  .gallery {
    column-count: 1;
  }
}
</style>
