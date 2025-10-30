<script setup lang="ts">
import { ref } from "vue";

const revealed = ref(false);

// Replace this with your YouTube embed or Google Drive link
const videoSrc = ref(
  "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
);
</script>

<template>
  <div class="surprise-page">
    <div class="video-wrapper">
      <video controls autoplay>
        <source
          src="https://drive.google.com/file/d/1LezklnpMdd1O2X_Hi3ClkOd6oln3Swkv/view?usp=drive_link"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<style scoped>
.surprise-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #fff5f9, #fffaf0);
  color: #333;
  text-align: center;
  padding: 2rem 1rem;
}

.title {
  font-size: 2rem;
  color: #ff6f91;
  margin-bottom: 0.3rem;
}
.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

/* Gift box animation */
.gift-box {
  position: relative;
  width: 140px;
  height: 120px;
  background: #ff6f91;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  animation: bounce 2.5s infinite;
  transition: transform 0.3s;
}
.gift-box:hover {
  transform: scale(1.05);
}
.lid {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background: #ff8fa3;
  border-radius: 8px;
}
.ribbon {
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 100%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 6px;
}
.click-me {
  position: absolute;
  bottom: -32px;
  width: 100%;
  font-size: 0.9rem;
  color: #ff6f91;
  animation: blink 1.5s infinite;
}

@keyframes blink {
  50% {
    opacity: 0.3;
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Video wrapper */
.video-wrapper {
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16/9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  overflow: hidden;
}
.video-wrapper iframe,
.video-wrapper video {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pop-enter-active {
  animation: pop-in 0.5s ease-out;
}
@keyframes pop-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
