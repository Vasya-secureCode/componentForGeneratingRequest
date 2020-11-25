<template>
    <div>
        <textarea v-model="textAreaOutput" style="width:20%; height: 800px; float: left;">
        </textarea>
    </div>
</template>

<script>
export default {
    computed: {
        textAreaOutput() {
            return this.$store.getters.getTextAreaOutput;
        }
    }
};
</script>
