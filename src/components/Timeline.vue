<script setup lang="ts">
const timeline = [
  {
    date: "January 2023",
    title: "When We First Met 💘",
    photo: "https://via.placeholder.com/300x200?text=First+Meet",
    description: "I still remember your smile that day 💗",
  },
  {
    date: "March 2023",
    title: "Our First Trip ✈️",
    photo: "https://via.placeholder.com/300x200?text=First+Trip",
    description: "Exploring the world together for the first time 🌍",
  },
  {
    date: "July 2023",
    title: "Our Anniversary 🎉",
    photo: "https://via.placeholder.com/300x200?text=Anniversary",
    description: "One year of love and laughter 🥰",
  },
  {
    date: "Today",
    title: "This Love Quiz 💖",
    photo: "https://via.placeholder.com/300x200?text=Now",
    description: "Celebrating how far we’ve come 💞",
  },
];
</script>

<template>
  <div class="timeline-container">
    <h2 class="title">Our Love Story 💕</h2>
    <div class="timeline">
      <div
        v-for="(event, index) in timeline"
        :key="index"
        class="timeline-item"
      >
        <div class="content">
          <h3 class="date">{{ event.date }}</h3>
          <h2 class="event-title">{{ event.title }}</h2>
          <img :src="event.photo" alt="Timeline photo" class="photo" />
          <p class="description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
  padding: 3rem 1.5rem;
  color: #fff;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: rgba(255, 255, 255, 0.5);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: center;
  position: relative;
}

.content {
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  width: 80%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  animation: fadeUp 0.8s ease both;
}

.date {
  font-size: 1.2rem;
  opacity: 0.8;
}

.event-title {
  font-size: 1.8rem;
  margin: 0.5rem 0;
}

.photo {
  width: 100%;
  border-radius: 1rem;
  margin: 1rem 0;
}

.description {
  font-size: 1.1rem;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
