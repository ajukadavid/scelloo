<template>
    <div class="mt-10">
        <div class="mb-3">
            <tabView @update-tab="handleTabUpdate" />
        </div>
        <div class="shadow-lg">
            <div class="w-full p-5 items-center bg-white border-gray-50 rounded border h-[60px] flex justify-between ">
                <div class="flex">
                    <div class="flex flex-col">
                        <div @click="showfilter = !showfilter"
                            class="filter py-3 flex justify-center items-center mr-5 cursor-pointer">
                            <span class="material-symbols-outlined searchColor">
                                filter_alt
                            </span>
                            <span>Filter</span>
                        </div>
                    </div>
                    <div v-if="showfilter"
                        class="border border-gray-300 rounded bg-white shadow-lg w-[240px] h-fit absolute top-[120px] left-[100px]">
                        <div class="filter-box text-sm font-light flex flex-col w-full p-5">
                            <h3 class="my-3 email">SORT BY:</h3>
                            <label for="default"
                                class="w-full my-1 px-2  radio-label  flex justify-between cursor-pointer text-base">
                                Default
                                <input id="default" type="radio" v-model="sortFilter" name="sort" value="default" />
                            </label>
                            <label for="firstName"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                First Name

                                <input id="firstName" type="radio" v-model="sortFilter" name="sort" value="first name" />
                            </label>
                            <label for="lastName"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                Last Name
                                <input id="lastName" type="radio" v-model="sortFilter" name="sort" value="last name" />
                            </label>
                            <label for="dueDate"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                Due Date
                                <input id="dueDate" type="radio" v-model="sortFilter" name="sort" value="due date" />
                            </label>
                            <label for="lastLogin"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                Last Login
                                <input id="lastLogin" type="radio" v-model="sortFilter" name="sort" value="last login" />
                            </label>
                            <hr class="my-3" />
                            <h3 class="email mb-1">USERS:</h3>
                            <label for="all"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                All

                                <input id="all" type="radio" v-model="userFilter" name="sortUsers" value="all" />
                            </label>
                            <label for="active"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                Active

                                <input id="active" type="radio" name="sortUsers" v-model="userFilter" value="active" />
                            </label>
                            <label for="Inactive"
                                class="w-full my-1 radio-label px-2 flex justify-between cursor-pointer text-base">
                                Inactive
                                <input id="Inactive" type="radio" name="sortUsers" v-model="userFilter" value="Inactive" />
                            </label>
                        </div>
                    </div>
                    <div class="flex searchDiv p-2 w-[350px]">
                        <span class="searchColor material-symbols-outlined ">
                            search
                        </span>
                        <input type="text" class="innerTrow w-full pl-3 outline-none " v-model="searchInput"
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
            <div class=" h-[700px] pb-5 overflow-auto">
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
                        <template :key="user.id" v-for="user in  (tabFilter ? tabData : filteredUsers)">
                            <tr class="bg-white">
                                <td>
                                    <div class="px-5 flex w-full justify-between">
                                        <input type="checkbox" class="check" v-model="selectedUsers" :value="user.id" />
                                        <span @click="toggleDetails(user.id)"
                                            class="material-symbols-outlined icon cursor-pointer">
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
                                            <span @click="user.showMore = false" class="font-bold">${{ user.amount }}</span>
                                            <span class="font-light email text-base">{{ user.currency }}</span>
                                        </div>
                                        <span class="email text-sm">View more</span>
                                        <div v-if="user.showMore" @click="handleCloseVal(user)"
                                            class="shadow-lg flex items-center justify-center relative bottom-[10px] z-20 left-[40px] border-gray-100 w-fit border bg-white rounded-full px-1">
                                            <span class="email text-base material-symbols-outlined">
                                                close
                                            </span>
                                        </div>
                                        <div @click="user.showMore = true">
                                            <span class="email material-symbols-outlined">
                                                more_vert
                                            </span>

                                            <div v-if="user.showMore"
                                                class="border  border-gray-300 z-0  rounded bg-white shadow-lg w-[160px] h-fit absolute top-[230px] right-[100px]">
                                                <div>

                                                    <div class="flex">
                                                        <div class="flex flex-col gap-1 w-full m-2">
                                                            <span class="hover:bg-purple-50 px-1">Edit</span>
                                                            <span class="hover:bg-purple-50 px-1">View Profile</span>
                                                            <span class="text-green-500 hover:bg-purple-50 px-1">Activate
                                                                User</span>
                                                            <hr />
                                                            <span class="hover:bg-purple-50 px-1 text-red-500">Delete</span>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
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
import { ref, computed, watch } from 'vue';
import { useStore } from '../store';
import statusBadge from './statusBadge.vue';
import tabView from './tabView.vue'

const currentTab = ref('')
const searchInput = ref('');
const selectedUsers = ref([]);
const expandedRows = ref<any>([]);
const store = useStore();
const showfilter = ref(false)
const tabFilter = ref(false)
const tabData = ref<any>([])
const sortFilter = ref('All')
const userFilter = ref('All')



const handleCloseVal = (user: any) => {
    user.showMore = false
}

watch(sortFilter, (newVal) => {
    tabFilter.value = true
    tabData.value = store.state.users
    if (newVal === 'first name') {
        tabData.value = tabData.value.sort((a: any, b: any) => a.firstName.localeCompare(b.firstName));
    }
    else if (newVal === 'last name') {
        tabData.value = tabData.value.sort((a: any, b: any) => a.lastName.localeCompare(b.lastName));
    } else if (newVal === 'last name') {
        tabData.value = tabData.value.sort((a: any, b: any) => a.lastName.localeCompare(b.lastName));
    } else if (newVal === 'due date') {
        tabData.value = tabData.value.sort((a: any, b: any) => a.paymentDate.localeCompare(b.paymentDate));
    } else if (newVal === 'last login') {
        tabData.value = tabData.value.sort((a: any, b: any) => a.lastLogin.localeCompare(b.lastLogin));
    } else {
        tabFilter.value = false
    }
})



watch(userFilter, (newVal) => {
    tabFilter.value = true
    if (newVal.toLowerCase() !== 'all') {
        tabData.value = store.state.users.filter((user: any) =>
            user.status.toLowerCase() === newVal.toLowerCase()
        );
    } else {
        tabFilter.value = false
    }

})

const handleTabUpdate = (tab: string) => {
    if (tab === 'All' && !!searchInput) {
        tabFilter.value = false
    }
    if (tab === 'All') {
        tabFilter.value = true
        tabData.value = store.state.users
    } else {
        currentTab.value = tab
        tabFilter.value = true
        tabData.value = store.state.users.filter((element: any) => {
            return element.paymentStatus === currentTab.value
        });
    }
}
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

<style></style>
