<script lang="ts">
export default {
  name: "QuestionModal"
};
</script>

<template>
  <Dialog
    v-model:visible="store.openQuestionModal"
    modal
    :header="store.currentQuestion?.topic + ' | ' + store.currentQuestion?.points"
    :style="{ width: '50vw' }"
    :closable="false"
  >
    <p>
      {{ store.currentQuestion?.question }}
    </p>
    <Inplace>
      <template #display>
        <Button label="Reveal Answer" severity="secondary">
          <template #icon>
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
              class="lucide lucide-eye"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </template>
        </Button>
      </template>
      <template #content>
        <p>
          {{ store.currentQuestion?.answer }}
        </p>
      </template>
    </Inplace>
    <template #footer>
      <template v-if="store.currentQuestion?.topic == 'Bathroom'">
        <Button label="Correct" severity="success" @click="bathroom('team1', 0)">
          <template #icon>
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
              class="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </template>
        </Button>
        <Button label="Incorrect Team 1" severity="danger" @click="bathroom('team1', -50)">
          <template #icon>
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
              class="lucide lucide-x"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </template>
        </Button>
        <Button label="Incorrect Team 2" severity="danger" @click="bathroom('team2', -50)">
          <template #icon>
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
              class="lucide lucide-x"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </template>
        </Button>
      </template>
      <template v-else>
        <Button label="Team 1" class="team1" @click="add('team1')">
          <template #icon>
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
              class="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </template>
        </Button>
        <Button label="Both Incorrect" severity="danger" @click="add('none')"
          ><template #icon>
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
              class="lucide lucide-x"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg> </template
        ></Button>
        <Button label="Team 2" class="team2" @click="add('team2')">
          <template #icon>
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
              class="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </template>
        </Button>
      </template>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";
import Inplace from "primevue/inplace";
import Button from "primevue/button";
import { store } from "@/store/gameStat";

const add = (key: "team1" | "team2" | "none") => {
  store[key] += store.currentQuestion?.points || 0;
  store.is1Turn = !store.is1Turn;
  store.openQuestionModal = false;
};
const bathroom = (team: "team1" | "team2", points: number) => {
  store.openQuestionModal = false;
  store[team] += points || 0;
};
</script>

<style scoped>
:deep(.p-inplace-display) {
  background-color: transparent !important;
}
.team1 {
  background-color: var(--purple-300);
  border-color: var(--purple-300);
}
.team1:hover {
  background-color: var(--purple-400);
  border-color: var(--purple-400);
}
.team2 {
  background-color: var(--green-300);
  border-color: var(--green-300);
}
.team2:hover {
  background-color: var(--green-400);
  border-color: var(--green-400);
}
svg {
  height: 1em;
}
</style>
