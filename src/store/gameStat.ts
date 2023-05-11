import { reactive } from "vue";
import type { Question } from "@/utils/types";

type GameStore = {
  team1: number;
  team2: number;
  none: number;
  is1Turn: boolean;
  openQuestionModal: boolean;
  currentQuestion: null | (Question & { topic: string });
  questions: Record<string, Question[]>;
};

export const store = reactive({
  team1: 0,
  team2: 0,
  none: 0,
  is1Turn: true,
  openQuestionModal: false,
  currentQuestion: null,
  questions: {
    Issues: [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 100
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 200
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 300
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 400
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 500
      }
    ],
    "Food Chains": [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 100
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 200
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 300
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 400
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 500
      }
    ],
    "Nutrient Cycles": [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 100
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 200
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 300
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 400
      },
      {
        question: "What are four ways in which humans influence the nitrogen cycle?",
        answer: "Fertilizer, Crop Rotation, Lawn Aeration and Pesticides",
        isComplete: false,
        points: 500
      }
    ],
    "Population Relationships": [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 100
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 200
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 300
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 400
      },
      {
        question: "",
        answer: "",
        isComplete: false,
        points: 500
      }
    ],
    Ecology: [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 100
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 200
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 300
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 400
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 500
      }
    ],
    Bathroom: [
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 1
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 2
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 3
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 4
      },
      {
        question: "q",
        answer: "a",
        isComplete: false,
        points: 5
      }
    ]
  }
} as GameStore);
