<script setup lang="ts">
// You can use a simple confetti library if you like (e.g. canvas-confetti)
// or keep the CSS animation for now
</script>

<template>
  <div class="home-page">
    <!-- Birthday Title -->
    <h1 class="birthday-title">
      🎉 Happy 30th Birthday, <span class="highlight">Shtila</span>! 🎂
    </h1>

    <!-- Subtitle -->
    <p class="subtitle">Welcome to your special birthday surprise 💖</p>

    <!-- Options -->
    <div class="options">
      <router-link to="/quiz" class="option-button">💘 Start Quiz</router-link>
      <router-link to="/photos" class="option-button"
        >📸 Our Photos</router-link
      >
      <router-link to="/reasons" class="option-button"
        >💖 30 Reasons why I Love You</router-link
      >
      <router-link to="/surprise" class="option-button"
        >🎁 Open me!</router-link
      >

      <!-- NEW -->
    </div>

    <!-- Floating hearts animation -->
    <div class="floating-hearts">
      <span v-for="n in 20" :key="n" class="heart">♥</span>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffe6f0, #fff5e6);
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

/* Title Styling */
.birthday-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff4081;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;
  animation: pop 1s ease-out;
}

.birthday-title .highlight {
  color: #ff6f61;
  font-size: 3.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 2rem;
}

/* Buttons */
.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option-button {
  background: white;
  color: #ff4081;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.option-button:hover {
  background: #ff4081;
  color: white;
  transform: scale(1.05);
}

/* Floating hearts */
.floating-hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.heart {
  position: absolute;
  bottom: -20px;
  font-size: 1.5rem;
  color: rgba(255, 64, 129, 0.6);
  animation: floatUp 6s infinite ease-in;
}

.heart:nth-child(odd) {
  color: rgba(255, 111, 97, 0.6);
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1.5);
    opacity: 0;
  }
}

@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
