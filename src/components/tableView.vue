<template>
    <div class="table-container">
        <div class="search-bar">
            <input type="text" v-model="searchInput" placeholder="Search" />
            <button @click="payDues">Pay Dues</button>
        </div>
        <table>
            <thead>
                <tr class="main-header">
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
                    <tr class="user-row">
                        <td>
                            <input type="checkbox" v-model="selectedUsers" :value="user.id" />
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <span class="mr-1">{{ user.firstName }}</span>
                                    <span>{{ user.lastName }}</span>
                                </div>
                                <div>
                                    <span>{{ user.email }}</span>
                                </div>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <button @click="toggleDetails(user.id)">
                                {{ expandedRows.includes(user.id) ? "Hide Details" : "Show Details" }}
                            </button>
                        </td>
                    </tr>
                    <tr v-if="expandedRows.includes(user.id)" :key="'details-' + user.id" class="user-details">
                        <td colspan="5">
                            <div class="justify-center flex bg-yellow-300 items-center">
                                <div class="text-4xl">
                                    Hello 👋🏼
                                </div>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
  
  
  

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from '../store';

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

.search-bar button {
    padding: 5px 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

table {
    width: 100%;
}

thead {
    background-color: #F4F2FF;
    height: 60px;
}

th {
    text-align: start;
    color: #6E6893;
    text-transform: uppercase;
    font-weight: 400;
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
</style>
```
