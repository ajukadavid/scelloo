<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center w-full">
            <div class="flex items-center">
                <div v-for="tab in tabs" @click="handleSwitchTab(tab)" class="tab w-fit  mx-1 flex flex-col cursor-pointer">
                    <div class="w-fit">
                        <span class="w-fit" :class="[activeTab === tab ? 'text-black ' : 'tabText']">
                            {{ tab }}
                        </span>
                    </div>
                    <div v-if="activeTab === tab" class="active">
                    </div>
                </div>
            </div>

            <div>
                <span class="">Total payable amount:</span> <span class="money text-2xl">$900</span> <span
                    class="font-light text-xl">USD</span>
            </div>
        </div>

        <div class="mt-4">
            <hr class="h-[2px] w-full" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['updateTab'])
const tabs = ['All', 'Paid', 'Unpaid', 'Overdue']
const activeTab = ref('')

const handleSwitchTab = (tab: string) => {
    activeTab.value = tab
    emit('updateTab', tab)
}

onMounted(() => {
    activeTab.value = 'All'
})
</script>

<style scoped>
.money {
    color: #6D5BD0
}

.tabText {
    color: #6E6893;
}

.active {
    height: 2px;
    width: 50px;
    position: relative;
    top: 18px;
    background-color: black;

}
</style>