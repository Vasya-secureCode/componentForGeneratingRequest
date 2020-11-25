<template>
<div id="convas" style="width:25%; height: 800px; float: left; border: 1px solid black;">
    <div v-for="(component, i) in allComponents" style="margin: 15px;">
        <div style="margin: 10px;">
            {{ component.code }} -
            {{ component.caption }} -
            {{ component.type }}
        </div>
        <div>
            <div v-if="component.type === 'number'" style="margin-right: 15px;">
                <div>
                    <div style="margin-right: 15px;">
                        <button type = "button" @click = "submit(i)">
                            Добавить
                        </button>
                    </div>
                    <select v-model="allComponents[i].filter" style="float: left;">
                        <option :value="filter.number"
                                v-for="filter in allNumber">
                                {{ filter.number }}
                        </option>
                    </select>
                    <div>
                        <input type="text" v-model.number="allComponents[i].value">
                    </div>
                </div>
                <div v-if="component.filterNumber != NULL">
                    <select v-model="allComponents[i].filterNumber.filter" >
                        <option :value="filter.number"
                                v-for="filter in allNumber">
                                {{ filter.number }}
                        </option>
                    </select>
                    <input type="text" v-model.number="allComponents[i].filterNumber.value">
                </div>
            </div>
            <div v-else-if="component.type === 'string'">
                <select v-model="allComponents[i].filter" style="float: left;">
                    <option :value="filter.string"
                            v-for="filter in allString">
                            {{ filter.string }}
                    </option>
                </select>
                <div>
                    <input type="text" v-model.number="allComponents[i].value">
                </div>
            </div>
            <div v-else-if="component.type === 'bool'">
                <select v-model="allComponents[i].filter" style="float: left;">
                    <option :value="filter.bool"
                            v-for="filter in allBool">
                            {{ filter.bool }}
                    </option>
                </select>
                <div>
                    <input type="text" v-model.number="allComponents[i].value">
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
    import {mapMutations} from "vuex"
    export default {
        computed: {
            allComponents() {
                return this.$store.getters.getComponents;
            },
            allNumber() {
                return this.$store.getters.getNumber;
            },
            allString() {
                return this.$store.getters.getString;
            },
            allBool() {
                return this.$store.getters.getBool;
            }
        },
        methods: {
            ...mapMutations(["createFilter"]),
            submit(i) {
                this.createFilter(i);
            }
        }
    };
    </script>