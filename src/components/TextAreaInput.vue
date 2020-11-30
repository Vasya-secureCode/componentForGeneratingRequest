<template>
    <div>
        <textarea v-model="textArea" style="width:20%; height: 800px; float: left;">
        </textarea>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textArea: '[{"code": "field1", "caption": "поле 1", "type": "number"}]'
        };
    },
    watch: {
        textArea(newAreA, oldArea) {
            this.$store.commit('changeTextArea', newAreA)
        }
    }
}; 

</script>
