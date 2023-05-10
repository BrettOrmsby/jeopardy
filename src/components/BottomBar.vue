<script lang="ts">
export default {
  name: "BottomBar"
};
</script>

<template>
  <div class="bar">
    <div>
      <RouterLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></RouterLink>
    </div>
    <div>
      <Button class="team1" @click="team1overlay?.toggle">
        Team 1:
        {{ store.team1 }}
      </Button>
      <OverlayPanel ref="team1overlay">
        <Button
          label="50"
          severity="danger"
          style="margin-right: var(--inline-spacing)"
          @click="store.team1 -= 50"
        >
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
              class="lucide lucide-minus"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </template>
        </Button>
        <Button label="50" severity="success" @click="store.team1 += 50">
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
              class="lucide lucide-plus"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </template>
        </Button>
      </OverlayPanel>
    </div>

    <span class="turn">
      <span v-if="store.is1Turn" class="rightmargin">
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
          class="lucide lucide-arrow-left"
        >
          <line x1="19" x2="5" y1="12" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </span>
      Turn
      <span v-if="!store.is1Turn" class="leftmargin">
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
          class="lucide lucide-arrow-right"
        >
          <line x1="5" x2="19" y1="12" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </span>
    <Button class="team2" @click="team2overlay?.toggle">
      Team 2:
      {{ store.team2 }}
    </Button>
    <OverlayPanel ref="team2overlay">
      <Button
        label="50"
        severity="danger"
        style="margin-right: var(--inline-spacing)"
        @click="store.team2 -= 50"
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
            class="lucide lucide-minus"
          >
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg> </template
      ></Button>
      <Button label="50" severity="success" @click="store.team2 += 50"
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
            class="lucide lucide-plus"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg> </template
      ></Button>
    </OverlayPanel>
    <div>
      <RouterLink to="/rules"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import OverlayPanel from "primevue/overlaypanel";
import Button from "primevue/button";
import { store } from "@/store/gameStat";
import { ref } from "vue";
const team1overlay = ref<any>();
const team2overlay = ref<any>();
</script>

<style scoped>
.bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: var(--surface-card);
  padding: var(--content-padding);
}

.turn {
  display: flex;
  align-items: center;
  font-weight: 500;
}
.turn .leftmargin {
  margin-left: var(--inline-spacing);
}
.turn .rightmargin {
  margin-right: var(--inline-spacing);
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

a {
  color: var(--primary-400);
}
a:hover{
  color: var(--primary-500)
}
</style>
