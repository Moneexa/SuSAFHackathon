import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  pentagonObject: [],
  impactArray: [
    {
      env_p:
        "It affects environment i.e. produces waste, has a large carbon footprint, utilizes excessive amount of resources.",
    },
    {
      env_n:
        "It has a positive impact on the environment e.g. reduces the use of any resources, makes any process efficient.",
    },
    {
      social_p:
        "It impacts society by improving the living conditions of humans.",
    },
    {
      social_n:
        "It could have a negative impact on society e.g harms social interaction.",
    },
    {
      economic_p:
        " It positively impacts economy e.g. creates monetary value, promotes innovation, increases GDP of the region, improves governance.",
    },
    {
      economic_n:
        "It negatively impacts economy e.g. job loss, financial loss, relies heavily on financial resources.",
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
  maintainPentagon: thunk(async (actions, payload) => {
    const pentagonObj = payload.pentagonObject
    pentagonObj.push(payload.answers)
    actions.updatePentagonObj(pentagonObj)
  })

});

export default store;
