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
    topic: [
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
    topic2: [
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
    topic3: [
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
    topic4: [
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
    topic5: [
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
