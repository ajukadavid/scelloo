<template>
    <div class="table-container">
        <div class="search-bar">
            <input type="text" v-model="searchInput" placeholder="Search" />
            <button @click="payDues">Pay Dues</button>
        </div>
        <ul class="user-list">
            <li v-for="user in filteredUsers" :key="user.id" class="user-row">
                <input type="checkbox" v-model="selectedUsers" :value="user.id" />
                <span class="user-info">{{ user.firstName }} {{ user.lastName }} ({{ user.email }})</span>
                <button @click="toggleDetails(user.id)">
                    {{ expandedRows.includes(user.id) ? "Hide Details" : "Show Details" }}
                </button>
                <div v-if="expandedRows.includes(user.id)" class="user-details">
                    <p>Payment Status: {{ user.paymentStatus }}</p>
                    <p>Amount: {{ user.amount }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, computed } from 'vue';

const searchInput = ref('');
const selectedUsers = ref([]);
const expandedRows = ref<any>([]);

// Your user data array
const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        paymentStatus: "Paid",
        amount: 100,
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        paymentStatus: "Unpaid",
        amount: 150,
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alicejohnson@example.com",
        paymentStatus: "Overdue",
        amount: 200,
    },
    {
        id: 4,
        firstName: "Michael",
        lastName: "Brown",
        email: "michaelbrown@example.com",
        paymentStatus: "Paid",
        amount: 120,
    },
    {
        id: 5,
        firstName: "Emily",
        lastName: "Williams",
        email: "emilywilliams@example.com",
        paymentStatus: "Paid",
        amount: 90,
    },
    {
        id: 6,
        firstName: "David",
        lastName: "Jones",
        email: "davidjones@example.com",
        paymentStatus: "Unpaid",
        amount: 180,
    },
    {
        id: 7,
        firstName: "Olivia",
        lastName: "Miller",
        email: "oliviamiller@example.com",
        paymentStatus: "Overdue",
        amount: 220,
    },
    {
        id: 8,
        firstName: "William",
        lastName: "Wilson",
        email: "williamwilson@example.com",
        paymentStatus: "Paid",
        amount: 130,
    },
    {
        id: 9,
        firstName: "Sophia",
        lastName: "Davis",
        email: "sophiadavis@example.com",
        paymentStatus: "Paid",
        amount: 110,
    },
    {
        id: 10,
        firstName: "James",
        lastName: "Taylor",
        email: "jamestaylor@example.com",
        paymentStatus: "Unpaid",
        amount: 170,
    },
    {
        id: 11,
        firstName: "Ava",
        lastName: "Anderson",
        email: "avaanderson@example.com",
        paymentStatus: "Overdue",
        amount: 190,
    },
    {
        id: 12,
        firstName: "Joseph",
        lastName: "Thomas",
        email: "josephthomas@example.com",
        paymentStatus: "Paid",
        amount: 105,
    },
    {
        id: 13,
        firstName: "Isabella",
        lastName: "Roberts",
        email: "isabellaroberts@example.com",
        paymentStatus: "Paid",
        amount: 95,
    },
    {
        id: 14,
        firstName: "Mason",
        lastName: "Johnson",
        email: "masonjohnson@example.com",
        paymentStatus: "Unpaid",
        amount: 160,
    },
    {
        id: 15,
        firstName: "Ella",
        lastName: "Martinez",
        email: "ellamartinez@example.com",
        paymentStatus: "Overdue",
        amount: 205,
    },


];

const filteredUsers = computed(() => {
    return users.filter((user) =>
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

.user-list {
    list-style: none;
    padding: 0;
}

.user-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-details {
    margin-left: 20px;
    padding: 10px;
    background-color: #f2f2f2;
}

.user-details p {
    margin: 5px 0;
}

.user-row button {
    margin-left: 10px;
}
</style>