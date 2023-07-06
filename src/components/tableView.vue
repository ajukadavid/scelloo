<template>
    <div class="mt-10">
        <div class="mb-3">
            <tabView />
        </div>
        <div class="shadow-lg">
            <div class="w-full p-5 items-center bg-white border-gray-50 rounded border h-[60px] flex justify-between ">
                <div class="flex">
                    <div class="filter flex justify-center items-center mr-5">
                        <span class="material-symbols-outlined searchColor">
                            filter_alt
                        </span>
                        <span>Filter</span>
                    </div>
                    <div class="flex innerTrow p-2 w-[350px]">
                        <span class="searchColor material-symbols-outlined ">
                            search
                        </span>
                        <input type="text" class="innerTrow w-full pl-3" v-model="searchInput"
                            placeholder="Search Users by Name, Email or Date" />
                    </div>
                </div>
                <div class="">
                    <button
                        class="text-uppercase font-semibold border rounded-lg px-3 py-2 cursor-pointer  text-lg text-white"
                        @click="payDues">PAY
                        DUES</button>
                </div>
            </div>
            <div>
                <table border="1">
                    <thead>
                        <tr class="main-header text-sm">
                            <th></th>
                            <th>Name</th>
                            <th>User status</th>
                            <th>Payment status</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template :key="user.id" v-for="user in filteredUsers">
                            <tr @click="toggleDetails(user.id)" class="user-row">
                                <td>
                                    <div class="px-5 flex w-full justify-between">
                                        <input type="checkbox" class="check" v-model="selectedUsers" :value="user.id" />
                                        <span class="material-symbols-outlined icon">
                                            expand_circle_down
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex flex-col">
                                        <div>
                                            <span class="mr-1">{{ user.firstName }}</span>
                                            <span>{{ user.lastName }}</span>
                                        </div>
                                        <div class="email">
                                            <span>{{ user.email }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex flex-col">
                                        <div>
                                            <statusBadge :status="user.status"
                                                :background-color="user.statusBackgroundColor"
                                                :text-color="user.statusColor" />
                                        </div>
                                        <div class="text-sm mt-2">
                                            <span class="email">Last login: {{ user.lastLogin }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex flex-col">
                                        <div>
                                            <statusBadge :status="user.paymentStatus" :background-color="user.paymentBg"
                                                :text-color="user.paymentColor" />
                                        </div>
                                        <div class="text-sm mt-2">
                                            <span>Paid on {{ user.lastLogin }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex w-full items-center  justify-between">
                                        <div class="flex flex-col">
                                            <span class="font-bold">${{ user.amount }}</span>
                                            <span class="font-light email text-base">{{ user.currency }}</span>
                                        </div>
                                        <span class="email text-sm">View more</span>
                                        <div>
                                            <span class="email material-symbols-outlined">
                                                more_vert
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="expandedRows.includes(user.id)" :key="'details-' + user.id">
                                <td colspan="5">
                                    <table>
                                        <thead>
                                            <tr class="innerTable text-sm">
                                                <th>
                                                    <div class="ml-20">
                                                        date
                                                    </div>
                                                </th>
                                                <th>user activity</th>
                                                <th>detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="data in user.data" class="innerTrow text-sm">
                                                <td>
                                                    <div class="ml-20 mr-5 font-light">{{ data.date }}</div>
                                                </td>
                                                <td>
                                                    <div>{{ data.userActivity }}</div>
                                                </td>
                                                <td>
                                                    <div>{{ data.details }}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
  
  
  

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from '../store';
import statusBadge from './statusBadge.vue';
import tabView from './tabView.vue'

const currentTab = ref('')
const searchInput = ref('');
const selectedUsers = ref([]);
const expandedRows = ref<any>([]);
const store = useStore();

const filteredUsers = computed(() => {
    return store.state.users.filter((user: any) =>
        user.firstName.toLowerCase().includes(searchInput.value.toLowerCase())
    );
});

const toggleDetails = (userId: any) => {
    if (expandedRows.value.includes(userId)) {
        expandedRows.value = expandedRows.value.filter((id: any) => id !== userId);
    } else {
        expandedRows.value.push(userId);
    }
};

const payDues = () => {
    // Make API call to mark selected users as paid
    // using selectedUsers.value array
    console.log("Paying dues for users:", selectedUsers.value);
};
</script>

<style>
.table-container {
    margin: 20px;
}

.search-bar {
    margin-bottom: 10px;
}

.search-bar input[type="text"] {
    padding: 5px;
    margin-right: 10px;
}


.check {
    border-color: #8B82BA;
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 1.9px;
    padding: 2px;
}

.innerTable {
    background-color: #F2F0F9;
}

table {
    width: 100%;
}

thead {
    background-color: #F4F2FF;
    height: 60px;
}

.innerTrow {
    background-color: #F4F2FF;

}

th {
    text-align: start;
    color: #6E6893;
    text-transform: uppercase;
    font-weight: 600;
}

button {
    background-color: #6D5BD0;
}

.searchColor {
    color: #8B82BA;
}

.main-header {
    border: 1px solid #E4E1F1
}

td {
    padding: 5px;
}

.user-row {
    cursor: pointer;

}

.user-details {
    background-color: #f2f2f2;
}

tr {
    border-bottom: 1px solid #D9D5EC;
}

.icon {
    color: #8B82BA
}

.email {
    color: #6E6893
}

.filter {
    border: 1px solid #E2DFEE;
    padding-inline: 10px;
    border-radius: 10px;
}
</style>
