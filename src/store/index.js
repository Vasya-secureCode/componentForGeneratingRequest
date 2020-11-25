import {createStore} from 'vuex'

export default createStore({
    state () {
        return {
            components: [],
            textAreaOutput: [],
            number: [
                {number: "gt"},{number: "lt"},{number: "gte"},{number: "lte"},{number: "eq"},{number: "neq"}
            ],
            string: [
                {string: "like"},{string: "eq"},{string: "neq"}
            ],
            bool: [
                {bool: "eq"}
            ]
        }
    },
    mutations: {
        changeTextArea(state, newAreA) {
            try {
                var json = eval(newAreA);
                state.components = []
                if ( typeof json === "object" && Array.isArray(json)) {
                    json.forEach((component) => {
                        state.components.push(component);
                    })
                }
            }
            catch (e) {
                console.log('Bad')
            }
        },
        createFilter(state, id_components) {
             state.components[id_components].filterNumber = {filter: "",value: ""}
        }
    },
    getters: {
        getComponents (state) {
            return state.components;
        },
        getNumber (state) {
            return state.number;
        },
        getString (state) {
            return state.string;
        },
        getBool (state) {
            return state.bool;
        },
        getTextAreaOutput (state) {
            state.textAreaOutput = []
            var valueFilter = {}
            state.components.forEach(function(component, i) {
                valueFilter = {}
                valueFilter[component.filter] = component.value
                if (component.filterNumber && component.filterNumber.filter != "") {
                    valueFilter[component.filterNumber.filter] = component.filterNumber.value
                }
                state.textAreaOutput[i] = 
                   { 
                       code: component.code,
                       value: valueFilter
                   }
            });

            return  JSON.stringify(state.textAreaOutput);
        }
    }
});
