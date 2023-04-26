import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  featureObject : [], 
  pentagonObject: [],
  graphValues: [],

  impactArray: [
    {
      env_p:
        "It has a negative impact on the environment i.e. by creating waste, leaving a significant carbon footprint, and consuming a considerable amount of resources, etc",
    },
    {
      env_n:
        "It has a positive impact on the environment i.e. by minimising resource consumption and increasing process efficiency, etc.",
    },
    {
      social_p:
        "It has a positive impact on society i.e. by improving the living conditions of humans, facilitating collaboration, enhancing the learning experience, etc.",

    },
    {
      social_n:
        "It has a negative impact on society i.e. by harming social interaction, perpetuating biases and discrimination, etc."
    },
    {
      economic_p:
      " It has a positive impact on the economy i.e. by generating monetary value, fostering innovation, increasing GDP, etc.",
    },
    {
      economic_n:
        " It has a negative impact on the economy i.e. by relying heavily on financial resources, causing job and financial loss, etc.",
    },
    {
      ind_p:
        "It positively impacts individual health, improves mental health, promotes lifelong learning, ensures privacy.",
    },
    {
      ind_n:
        "It negatively impacts the individual health e.g. causes emotional distress, impacts physical or mental health, compromises safety or privacy.",
    },
  ],
  updateImpactArray: action((state, payload) => {

    state.impactArray = payload;
  }),
  updatePentagonObj: action((state, payload) => {
    state.pentagonObject = payload
  }),
  impactArrayPop: thunk(async (actions, dimension) => {
    try {
      let filteredArr2 = []
      console.log(dimension?.name);
      const impactArr = dimension?.impactArray;
      console.log(impactArr);
      if (dimension?.answerObj?.name === "env_p" || dimension?.answerObj?.name === "env_n") {
        filteredArr2 = impactArr.filter(obj => {
          return !(obj.hasOwnProperty('env_p') || obj.hasOwnProperty('env_n'));
        });

      }
      else if (dimension?.answerObj?.name === "social_p" || dimension?.answerObj?.name === "social_n") {
        filteredArr2 = impactArr.filter(obj => {
          return !(obj.hasOwnProperty('social_p') || obj.hasOwnProperty('social_n'));
        });


      } else if (
        dimension?.answerObj?.name === "economic_p" ||
        dimension?.answerObj?.name === "economic_n"
      ) {
        filteredArr2 = impactArr.filter(obj => {
          return !(obj.hasOwnProperty('economic_p') || obj.hasOwnProperty('economic_n'));
        });

      } else if (dimension?.answerObj?.name === "ind_p" || dimension?.answerObj?.name === "ind_n") {
        filteredArr2 = impactArr.filter(obj => {
          return !(obj.hasOwnProperty('ind_p') || obj.hasOwnProperty('ind_n'));
        });

      }

      actions.updateImpactArray(filteredArr2);

    } catch (error) {
      console.error(error)
    }
  }),
  setImpactArray: thunk(async (actions, payload) => {
    actions.updateImpactArray(payload)
  }),
  maintainPentagon: thunk(async (actions, payload) => {
    const pentagonObj = payload.pentagonObject
    pentagonObj.push(payload.answers)
    actions.updatePentagonObj(pentagonObj)
  }),
  updateFeaturesObj: action((state, payload) => {
    state.feature = payload
  }),
  maintainFeature: thunk(async (actions, payload) => {
    const featureObj = payload.featureObject
    featureObj.push(payload.response)
    actions.updateFeaturesObj(featureObj)
  }),
  updateGraphValues: action((state, payload) => {
    state.graphValues = payload
  }),
  changeGraphValues: thunk(async (actions, payload) => {
    const graph = payload.graphValues
    graph.push(payload.value)
    actions.updateGraphValues(graph)

  }),
});

export default store;
