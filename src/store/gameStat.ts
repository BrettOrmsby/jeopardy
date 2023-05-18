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
        question: "What is a species at risk?",
        answer: "An organism that may disappear unless humans step in to help.",
        isComplete: false,
        points: 100
      },
      {
        question: "How might an invasive species negatively impact an ecosystem?",
        answer: `Answers include:
Competition: increased competition might lead to declines in populations of native species
Predation: invasive species might be able to pray upon native species easier because the pray have not evolved defences against them
Habitat alteration: invasive species might modify environmental factors like water quality
Disease introduction: invasive species might bring new diseases with them that native species have not developed resistance towards
Nutrient cycle disruption: invasive species might affect the nutrient cycle and leave fewer nutrients for other species`,
        isComplete: false,
        points: 200
      },
      {
        question: "What effect might pesticides have on an environment?",
        answer: "Answers include harming non-targeted species, contaminating soil or water, and harming predators by decreasing their prey or through bioamplification.",
        isComplete: false,
        points: 300
      },
      {
        question: "Name at least two factors that improve the sustainability of habitat fragments.",
        answer: "Answers include larger fragments, one big fragment instead of several smaller fragments, closer fragments, connected fragments and less access by humans (roads and trails).",
        isComplete: false,
        points: 400
      },
      {
        question: "What is acid precipitation and how does it affect aquatic and terrestrial ecosystems?",
        answer: "Acid precipitation is precipitation that is more acidic than usual caused by certain chemicals released in the air. Acid precipitation causes lakes and rivers to become more acidic, decreasing the number of species that can live there. It decreases the nutrients in terrestrial ecosystems, lowering the number of plant species.",
        isComplete: false,
        points: 500
      }
    ],
    "Food Chains": [
      {
        question: "What is the difference between a producer and a consumer?",
        answer: "A producer creates its own energy (food) and a consumer gets its energy from eating organisms.",
        isComplete: false,
        points: 100
      },
      // TODO: what are the others
      {
        question: "Name three ways energy is lost when travelling through a food chain.",
        answer: "Energy can be lost due to movement, seeding and feces.",
        isComplete: false,
        points: 200
      },
      {
        question: "What is an autotroph and a heterotroph?",
        answer: "A autotroph is a producer and a heterotroph is a consumer.",
        isComplete: false,
        points: 300
      },
      {
        question: "Create a five-step food chain and label the levels of consumers. (hint: quaternary consumer)",
        answer: "dandelion (producer) → fly (primary consumer) → spider (secondary consumer) → frog (tertiary consumer) → snake (quaternary consumer)",
        isComplete: false,
        points: 400
      },
      {
        question: "List and explain five different words for describing what animals consume. (hint: rabbits only eat plants)",
        answer: `Herbivore: consumes plants
Carnivore: consumes animals
Omnivore: consumes plants and animals
Scavenger: consumes dead animals
Decomposer: consumes detritus (dead organic material)
`,
        isComplete: false,
        points: 500
      }
    ],
    "Nutrient Cycles": [
      {
        question: "What is a nutrient cycle?",
        answer: "A pattern of continual use and reuse of a nutrient.",
        isComplete: false,
        points: 100
      },
      {
        question: "When and where does denitrification occur?",
        answer: "In the soil when there is a lack of oxygen available.",
        isComplete: false,
        points: 200
      },
      {
        question: "What can cause both nitrogen fixation and decomposition?",
        answer: "Bacteria",
        isComplete: false,
        points: 300
      },
      {
        question: "What are the two main processes of the carbon cycle and their formulas?",
        answer: `Photosynthesis: 
  CO₂ + H₂O + Light → C₆H₁₂O₆ + O₂
  carbon dioxide + water + light → glucose + oxygen
  
Cellular Respiration: 
  C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energy
  glucose + oxygen → carbon dioxide + water + energy`,
        isComplete: false,
        points: 400
      },
      {
        question: "What are three ways in which humans influence the nitrogen cycle?",
        answer: "Answers include fertilizer, crop Rotation, lawn aeration and pesticides.",
        isComplete: false,
        points: 500
      }
    ],
    "Population and Relationships": [
      {
        question: "What is a limiting factor?",
        answer: "Any factor that restricts the size of a population.",
        isComplete: false,
        points: 100
      },
      {
        question: "Define and give an example of commensalism.",
        answer: "Commensalism means that one individual benefits and the other neither benefits nor is harmed. For example, some ferns benefit from the shade provided by taller trees.",
        isComplete: false,
        points: 200
      },
      {
        question: "What is carrying capacity? What happens as carrying capacity is reached?",
        answer: "Carrying capacity is the maximum population size of a particular species that a given ecosystem can sustain. As the carrying capacity is reached, the species becomes more susceptible to predators and disease.",
        isComplete: false,
        points: 300
      },
      {
        question: "If the rabbit population increases, what would happen to the fox population? Would the result then affect the rabbit population?",
        answer: "The fox population would increase because of the greater food source and this would then cause the rabbit population to decrease because there are more predators.",
        isComplete: false,
        points: 400
      },
      {
        question: "How do at least 3 abiotic factors contribute to the carrying capacity of an environment? ",
        answer: `Answers include:
Light availability: More light allows more plant growth that provides more food sources
Water availability: More water allows less competition to drink
Nutrient Availability: More nutrients allow more plant growth that provides more food sources
Temperature: Extreme temperatures contribute to less plant growth which limits the food available for animals
Acidity: Acidity of water in aquatic ecosystems contribute to less plant growth and fewer species
Salinity: The salt levels of water affect what can survive in the water`,
        isComplete: false,
        points: 500
      }
    ],
    Ecology: [
      {
        question: "What do abiotic and biotic mean?",
        answer: "Abiotic means non-living things in an ecosystem and biotic means living or once-living things in an ecosystem.",
        isComplete: false,
        points: 100
      },
      {
        question: "What is ecology?",
        answer: "The study of the relationship between living things and their environment.",
        isComplete: false,
        points: 200
      },
      {
        question: "What is one way you or your team members contribute to keeping ecosystems balanced?",
        answer: "Answers may vary.",
        isComplete: false,
        points: 300
      },
      {
        question: "What Canadian biome contains the most biodiversity?",
        answer: "Boreal Forest",
        isComplete: false,
        points: 400
      },
      {
        question: "What are 3 ways in which ecosystems remain balanced?",
        // TODO
        answer: "Answers include nutrient cycles, predation, competition and biodiversity.",
        isComplete: false,
        points: 500
      }
    ],
    Bathroom: [
      {
        question: "How many categories of species at risk are there? What level is the most severe?",
          answer: "There are 5 categories of species at risk with extinct being the most severe. (extinct, extirpated, endangered, threatened, special concern/vulnerable)",
        isComplete: false,
        points: 1
      },
      {
        question: "What is the max number of organisms that can appear on a food chain?",
        answer: "There is no max number of organisms that can appear on a food chain.",
        isComplete: false,
        points: 2
      },
      {
        question: "Name two biotic limiting factors.",
        answer: "Answers include competition, predation, mutualism, commensalism and parasitism.",
        isComplete: false,
        points: 3
      },
      {
        question: "Approximately what percent of energy is kept at each trophic level?",
        answer: "10%",
        isComplete: false,
        points: 4
      },
      {
        question: "What is the main abiotic factor that contributes to desert ecosystems like the tundra?",
        answer: "Lack of precipitation",
        isComplete: false,
        points: 5
      }
    ]
  }
} as GameStore);
