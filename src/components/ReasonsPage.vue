<script setup lang="ts">
import { ref } from "vue";

// Replace with your real reasons ♥
const reasons = ref([
  "אני אוהבת את הקול שלך כשאת שרה",
  "אני אוהבת את הצחוק שלך",
  "אני אוהבת שאת יודעת לצחוק על עצמך",
  "אני אוהבת שאני מרגישה הכי בנוח לידך",
  "אני אוהבת שאת מנגנת לי",
  "אני אוהבת שאת מקריאה לי שירים שכתבת",
  "אני אוהבת שאת אוהבת לצאת להרפתקאות וטיולים",
  "אני אוהבת לשחק איתך משחקי חשיבה לפני השינה",
  "אני אוהבת שאת כלכך חכמה וחדה",
  "אני אוהבת את הטוב לב שלך למשפחה ולחברים ובמיוחד אליי",
  "אני אוהבת שאנחנו נכנסות לשיחות מעניינות",
  "אני אוהבת את המשחקי מילים שלך",
  "אני אוהבת שאת עצמאית ולא מפונקת",
  "אני אוהבת שאת ספורטיבית",
  "אני אוהבת לראות אותך עם ילדים קטנים אני נמסה",
  "אני אוהבת שיש לך הרבה תחומי עניין שונים",
  "אני אוהבת שאת טובה בהכל",
  "אני אוהבת שאת כלכך בוגרת בריבים שלנו",
  "אני אוהבת שאת כלכך יצירתית",
  "אני אוהבת שאת דואגת לי ונותנת לי ביטחון",
  "אני אוהבת שאת מתרגשת מדברים קטנים",
  "אני אוהבת את הכנות שלך",
  "אני אוהבת שאת מכניסה אור הביתה ואת הטאצ׳ האישי שלך",
  "אני אוהבת את המחוות שאת עושה לי והפתקים שאת משאירה",
  "אני אוהבת שאת מאזנת אותי בכלכך הרבה מובנים",
  "אני אוהבת שאת מצחיקה אותי",
  "אני אוהבת איך שאת עם המשפחה שלי️",
  "אני אוהבת את הביטחון שלך",
  "אני אוהבת לעשות הכל איתך",
  "אני אוהבת שאת הבת זוג שלי :)",
]);
</script>

<template>
  <div class="reasons-page">
    <h1 class="title">💖 30 Reasons why I Love You 💖</h1>

    <div class="reasons-list">
      <div
        v-for="(reason, index) in reasons"
        :key="index"
        class="reason-card"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <span class="number">{{ index + 1 }}.</span>
        <p>{{ reason }}</p>
      </div>
    </div>

    <div class="final-message">
      ויש עוד מיליון סיבות למה אני אוהבת אותך!🌹 (למרות שאת תמיד חושבת שאין לי)
    </div>
  </div>
</template>

<style scoped>
.reasons-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff0f6, #e6f7ff);
  padding: 2rem;
  text-align: center;
  overflow-x: hidden;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ff4081;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  animation: fadeInDown 1s ease-out;
}

.reasons-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.reason-card {
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: left;
  font-size: 1.1rem;
  color: #444;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s forwards;
}

.reason-card .number {
  font-weight: bold;
  color: #ff4081;
  font-size: 1.2rem;
}

.final-message {
  margin-top: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff4081;
  animation: fadeIn 2s ease-in;
}

.final-message .highlight {
  color: #ff6f61;
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
