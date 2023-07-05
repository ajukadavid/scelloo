<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    textColor: String,
    backgroundColor: String,
    status: String
})

const textColor = computed(() => {
    return props.textColor
})
const bg = computed(() => {
    return props.backgroundColor
})
</script>

<template>
    <div class="badge flex items-center justify-center">
        <div>
            <div class="dot"></div>
        </div>
        <span class="text-sm">{{ props.status }}</span>
    </div>
</template>

<style scoped>
.badge {
    border: 1px solid v-bind(bg);
    background-color: v-bind(bg);
    border-radius: 30px;
    width: 70px;
    height: 20px;
    color: v-bind(textColor);
}

.dot {
    width: 7px;
    height: 7px;
    border-radius: 60px;
    margin-right: 6px;
    background-color: v-bind(textColor);
}
</style>