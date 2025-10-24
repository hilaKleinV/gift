<script setup lang="ts">
import { ref } from "vue";

interface Question {
  text: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    text: "כמה הקלטות שלחת לי ביום הראשון שהתחלנו לדבר בוואטסאפ",
    options: ["3", "6", "8", "9"],
    correct: 3,
  },
  {
    text: "כמה זמן היה הדייט הראשון שלנו",
    options: ["שעה", "שעתיים", "שלוש שעות", "ארבע שעות"],
    correct: 3,
  },
  {
    text: "אחרי כמה ימים מהדייט הראשון שלנו הצעת לי לגור בדירה שצמודה אלייך",
    options: ["4 ימים", "שבוע", "שבועיים", "שבועיים וחצי"],
    correct: 0,
  },
  {
    text: "בכמה חופשות או טיולים היינו (בארץ ובחו״ל)",
    options: ["4", "5", "6", "7"],
    correct: 1,
  },
  {
    text: "מי קראה ראשונה מאמי לשנייה",
    options: ["אני", "את"],
    correct: 1,
  },
  {
    text: "ואחרי כמה זמן מהדייט הראשון כבר התחלת לקרוא לי מאמי",
    options: ["5 ימים", "שבוע", "שבוע ויומיים", "חודש"],
    correct: 0,
  },
  {
    text: "אחרי כמה זמן הכרחתי אותך להפגש עם חברות שלי(בר וגאיה) ביעקב בנחלה",
    options: ["שבוע", "שבוע וחצי", "שבועיים", "חודש ושבוע"],
    correct: 2,
  },
  {
    text: "איזה משפט הייתי אומרת לך הרבה בהתחלה שלנו",
    options: ["מגנובי", "איזה תחת יפה יש לך", "לא לשפוט", "לאא זה הזוי בעייני"],
    correct: 2,
  },
  {
    text: "מה היית אומרת לי כדי שאזכיר לך לספר לי דברים כשנפגש",
    options: ["תרשמי בפתקים", "תשימי תזכורת", "תכתבי בחול", "שימי שעון מעורר"],
    correct: 2,
  },
  {
    text: "בדייט השלישי שלנו בקולנוע הפסגה את עבדת עליי, זוכרת איך",
    options: [
      "אמרת שאת חובבת סרטים ישנים",
      "אמרת שאת הולכת לשם כל הזמן",
      "אמרת שקנית יין איטלקי משובך אבל הוא בעצם היה יין רגיל וזול",
      "אמרת שאת לא אוהבת משחקי מילים",
    ],
    correct: 2,
  },
  {
    text: "מה הדבר החמור שעשינו בדייט הרביעי(בערך) שלנו",
    options: [
      "ברחנו בלי לשלם",
      "אכלנו משולחן שלא שלנו",
      "גנבנו שתי כוסות יין",
      "התחצפנו למלצרים",
    ],
    correct: 2,
  },
  {
    text: "איך קראו למלון הראשון שהיינו בו בתאילנד",
    options: [
      "Love Island",
      "The Beach Resort",
      "Paradise Hotel",
      "Love Beach",
    ],
    correct: 3,
  },
  {
    text: "איך קראו לאי הבודד שגילינו בתאילד",
    options: ["koh Ma", "Koh Tae Nai", "Koh Yao Yai", "Koh Nom Sao"],
    correct: 1,
  },
  {
    text: "איך קראו לפקיד בגרין פפאיה",
    options: ["שו", "יו", "מה", "לא"],
    correct: 1,
  },
  {
    text: "בכמה הופעות היינו יחד",
    options: ["2", "3", "4", "5"],
    correct: 3,
  },
  {
    text: "על איזו מילה או משפט נתעקנו קודם",
    options: [
      "שתילה",
      "אוהבת אותחת",
      "טאובב(כמו יעל פוליאקוב)",
      "האיזון המושלם",
    ],
    correct: 2,
  },
  {
    text: "מה המשפט של אמא שלך שאני הכי אוהבת",
    options: ["שקית הקאה", "שי-חוק", "פאק רציני", "תשימי פיג׳מה וזהו"],
    correct: 2,
  },
  {
    text: "לפני שהכרתי את משפחתך באתי איתך למודיעין ונשארתי אצל אמא שלך בזמן שהיית אצל ספיר, מה הכרחת אותי לעשות",
    options: [
      "לשטוף כלים",
      "לסדר את הבית",
      "לעשות שנ״צ בחדר שלך",
      "להצטלם בסוכה",
    ],
    correct: 3,
  },
  {
    text: "כמה זמן שכחת אותי בשיחת וידאו בחדר משפחה מול קריקטורה של אבא שלך",
    options: ["10 דקות", "חצי שעה", "שעה", "שעתיים וחצי"],
    correct: 2,
  },
  {
    text: "כמה אני אוהבת אותך מ1 עד מיליון",
    options: ["1", "43", "10043", "1000000"],
    correct: 3,
  },
];

const currentIndex = ref(0);
const selectedIndex = ref<number | null>(null);
const isCorrect = ref(false);
const showFeedback = ref(false);

function selectOption(index: number) {
  if (showFeedback.value) return;
  selectedIndex.value = index;
  const correct = questions[currentIndex.value].correct;

  if (index === correct) {
    isCorrect.value = true;
    showFeedback.value = true;
    setTimeout(() => {
      showFeedback.value = false;
      selectedIndex.value = null;
      isCorrect.value = false;
      if (currentIndex.value < questions.length - 1) {
        currentIndex.value++;
      } else {
        alert("🎉מאמיק יא אלופה אני מקווה שהצלחת את הרוב! אני אוהבת אותך💖");
      }
    }, 1500);
  } else {
    isCorrect.value = false;
    showFeedback.value = true;
    setTimeout(() => {
      showFeedback.value = false;
      selectedIndex.value = null;
    }, 1000);
  }
}
</script>

<template>
  <div class="quiz-container">
    <!-- Stepper -->
    <div class="stepper">
      <div
        v-for="(q, i) in questions"
        :key="i"
        class="step"
        :class="{ active: i <= currentIndex }"
      >
        {{ i + 1 }}
      </div>
    </div>

    <!-- Question -->
    <h2 class="question">{{ "?" + questions[currentIndex].text }}</h2>

    <!-- Options -->
    <div class="options">
      <button
        v-for="(option, i) in questions[currentIndex].options"
        :key="i"
        class="option"
        :class="{
          selected: i === selectedIndex,
          correct: showFeedback && i === questions[currentIndex].correct,
          wrong:
            showFeedback &&
            i === selectedIndex &&
            i !== questions[currentIndex].correct,
        }"
        @click="selectOption(i)"
      >
        {{ option }}
      </button>
    </div>

    <!-- Feedback -->
    <div v-if="showFeedback" class="feedback">
      <span v-if="isCorrect" class="correct-text">✅ Correct!</span>
      <span v-else class="wrong-text">💌 Try again</span>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #fff;
  text-align: center;
  gap: 2rem;
}

.stepper {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.step {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4) inset;
}

.step.active {
  background: #ff6b81;
  box-shadow: 0 0 10px #ff6b81;
}

.question {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.options {
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
}

.option {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.3rem;
  transition: all 0.2s;
  cursor: pointer;
}

.option:hover {
  background: rgba(255, 255, 255, 0.3);
}

.option.correct {
  background: #4caf50;
  animation: pop 0.3s;
}

.option.wrong {
  background: #f44336;
  animation: shake 0.4s;
}

.feedback {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.correct-text {
  color: #4caf50;
}

.wrong-text {
  color: #f44336;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-8px);
  }
  50% {
    transform: translateX(8px);
  }
  75% {
    transform: translateX(-8px);
  }
}

@keyframes pop {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>
