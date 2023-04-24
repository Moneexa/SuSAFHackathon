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
    const impactArr = state.impactArray
    if (payload[0] !== -1 && payload[1] !== -1) {
        impactArr.splice(payload[0], 1);
        impactArr.splice(payload[1], 1);
      }
  
    state.impactArray = impactArr;
  }),
  updatePentagonObj: action((state, payload)=>{
    state.pentagonObject = payload
  }),
  impactArrayPop: thunk(async (actions, state, dimension) => {
    let indexToRemove1 = 0,
      indexToRemove2 = 0;
    const impactArr = state.impactArray;
    console.log(impactArr);
    if (dimension.name === "env_p" || dimension.name === "env_n") {
      indexToRemove1 = impactArr.indexOf(0);
      indexToRemove2 = impactArr.indexOf(1);
    } else if (dimension.name === "social_p" || dimension.name === "social_n") {
      indexToRemove1 = impactArr.indexOf(2);
      indexToRemove2 = impactArr.indexOf(3);
    } else if (
      dimension.name === "economic_p" ||
      dimension.name === "economic_n"
    ) {
      indexToRemove1 = impactArr.indexOf(4);
      indexToRemove2 = impactArr.indexOf(5);
    } else if (dimension.name === "ind_p" || dimension.name === "ind_n") {
      indexToRemove1 = impactArr.indexOf(6);
      indexToRemove2 = impactArr.indexOf(7);
    }

    
    actions.updateImpactArray([indexToRemove1, indexToRemove2]);
  }),
  maintainPentagon: thunk(async(actions, state, payload) => {
     const pentagonObj = state.pentagonObject
     pentagonObj.push(payload)
     actions.updatePentagonObj(pentagonObj)
  })

});

export default store;
