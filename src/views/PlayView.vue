<script lang="ts">
export default {
  name: "PlayView"
};
</script>

<template>
  <div class="container">
    <QuestionModal />
    <h1>Jeopardy</h1>
    <div class="board-container">
      <div class="question-column" v-for="(value, topic) in store.questions" :key="topic">
        <h2 v-if="topic == 'Bathroom'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-alert-triangle"
          >
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            ></path>
            <line x1="12" x2="12" y1="9" y2="13"></line>
            <line x1="12" x2="12.01" y1="17" y2="17"></line>
          </svg>
        </h2>
        <h2 v-else>{{ topic }}</h2>
        <QuestionBox
          v-for="(question, index) in value"
          :key="index"
          :question="question"
          :topic="topic"
        >
        </QuestionBox>
      </div>
    </div>
  </div>
  <BottomBar />
</template>

<script lang="ts" setup>
import QuestionBox from "@/components/QuestionBox.vue";
import QuestionModal from "@/components/QuestionModal.vue";
import BottomBar from "@/components/BottomBar.vue";
import { store } from "@/store/gameStat";
</script>

<style scoped>
.container {
  padding: var(--content-padding);
}
h2 {
  text-align: center;
  margin: 0;
}
.board-container {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  gap: var(--inline-spacing);
  height: 80svh;
  width: 100%;
}
.question-column {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
  gap: var(--inline-spacing);
  height: 100%;
  width: 100%;
}
</style>
