<script lang="ts">
export default {
  name: "HomeView"
};
</script>

<template>
  <div class="container">
    <h1>Biology Jeopardy!</h1>
    <div>
      <RouterLink to="/play"
        ><Button label="Play" style="margin-right: var(--inline-spacing)" size="large"
      /></RouterLink>
      <RouterLink to="/rules"
        ><Button label="Rules" severity="secondary" outlined size="large"
      /></RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Button from "primevue/button";

loadFull(tsParticles);

tsParticles.load("tsparticles", {
  fullScreen: {
    zIndex: 0
  },
  emitters: [
    {
      position: {
        x: 0,
        y: 30
      },
      rate: {
        quantity: 5,
        delay: 0.15
      },
      particles: {
        move: {
          direction: "top-right",
          outModes: {
            top: "none",
            left: "none",
            default: "destroy"
          }
        }
      }
    },
    {
      position: {
        x: 100,
        y: 30
      },
      rate: {
        quantity: 5,
        delay: 0.15
      },
      particles: {
        move: {
          direction: "top-left",
          outModes: {
            top: "none",
            right: "none",
            default: "destroy"
          }
        }
      }
    }
  ],
  particles: {
    color: {
      value: ["#459e74", "#8a66cd"]
    },
    move: {
      decay: 0.05,
      direction: "top",
      enable: true,
      gravity: {
        enable: true
      },
      outModes: {
        top: "none",
        default: "destroy"
      },
      speed: {
        min: 10,
        max: 50
      }
    },
    number: {
      value: 0
    },
    opacity: {
      value: 1
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 30
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 30
      }
    },
    size: {
      value: {
        min: 0,
        max: 2
      },
      animation: {
        enable: true,
        startValue: "min",
        count: 1,
        speed: 16,
        sync: true
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 5,
        max: 15
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -7,
        max: 7
      }
    },
    shape: {
      type: ["circle", "square"],
      options: {}
    }
  }
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container > * {
  z-index: 1;
}
a {
  text-decoration: none;
}
</style>
