<script lang="ts">
export default {
  name: "QuestionBox"
};
</script>

<template>
  <div :class="{ box: true, completed: question.isComplete }" @click="openModal(question, topic)">
    <strong :style="{ display: question.isComplete ? 'none' : 'unset' }">{{
      question.points
    }}</strong>
  </div>
</template>

<script lang="ts" setup>
import type { Question } from "@/utils/types";
import { store } from "@/store/gameStat";

defineProps<{ question: Question; topic: string }>();

const openModal = (question: Question, topic: string) => {
  if (question.isComplete) {
    return;
  }
  question.isComplete = true;
  store.currentQuestion = { ...question, topic: topic };
  store.openQuestionModal = true;
};
</script>

<style scoped>
.box {
  transition: 0.3s;
  padding: var(--content-padding);
  background: var(--primary-color);
  color: var(--primary-color-text);
  cursor: pointer;
  border-radius: var(--border-radius);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
}

.box:hover {
  background-color: var(--primary-400);
}

.box.completed {
  background-color: var(--surface);
  color: transparent;
  cursor: unset;
}
</style>
