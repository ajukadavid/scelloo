import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  users: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        paymentStatus: "Paid",
        amount: 100,
        currency: "USD",
        paymentDate: "01/Jul/2023",
        lastLogin: "02/Jul/2023",
        status: "Active"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        paymentStatus: "Unpaid",
        amount: 150,
        currency: "USD",
        paymentDate: "02/Jul/2023",
        lastLogin: "03/Jul/2023",
        status: "Active"
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alicejohnson@example.com",
        paymentStatus: "Overdue",
        amount: 200,
        currency: "USD",
        paymentDate: "03/Jul/2023",
        lastLogin: "04/Jul/2023",
        status: "Inactive"
      },
      {
        id: 4,
        firstName: "Michael",
        lastName: "Brown",
        email: "michaelbrown@example.com",
        paymentStatus: "Paid",
        amount: 120,
        currency: "USD",
        paymentDate: "04/Jul/2023",
        lastLogin: "05/Jul/2023",
        status: "Active"
      },
      {
        id: 5,
        firstName: "Emily",
        lastName: "Williams",
        email: "emilywilliams@example.com",
        paymentStatus: "Paid",
        amount: 90,
        currency: "USD",
        paymentDate: "05/Jul/2023",
        lastLogin: "06/Jul/2023",
        status: "Active"
      },
      {
        id: 6,
        firstName: "David",
        lastName: "Jones",
        email: "davidjones@example.com",
        paymentStatus: "Unpaid",
        amount: 180,
        currency: "USD",
        paymentDate: "06/Jul/2023",
        lastLogin: "07/Jul/2023",
        status: "Active"
      },
      {
        id: 7,
        firstName: "Olivia",
        lastName: "Miller",
        email: "oliviamiller@example.com",
        paymentStatus: "Overdue",
        amount: 220,
        currency: "USD",
        paymentDate: "07/Jul/2023",
        lastLogin: "08/Jul/2023",
        status: "Inactive"
      },
      {
        id: 8,
        firstName: "William",
        lastName: "Wilson",
        email: "williamwilson@example.com",
        paymentStatus: "Paid",
        amount: 130,
        currency: "USD",
        paymentDate: "08/Jul/2023",
        lastLogin: "09/Jul/2023",
        status: "Active"
      },
      {
        id: 9,
        firstName: "Sophia",
        lastName: "Davis",
        email: "sophiadavis@example.com",
        paymentStatus: "Paid",
        amount: 110,
        currency: "USD",
        paymentDate: "09/Jul/2023",
        lastLogin: "10/Jul/2023",
        status: "Active"
      },
      {
        id: 10,
        firstName: "James",
        lastName: "Taylor",
        email: "jamestaylor@example.com",
        paymentStatus: "Unpaid",
        amount: 170,
        currency: "USD",
        paymentDate: "10/Jul/2023",
        lastLogin: "11/Jul/2023",
        status: "Active"
      },
      {
        id: 11,
        firstName: "Ava",
        lastName: "Anderson",
        email: "avaanderson@example.com",
        paymentStatus: "Overdue",
        amount: 190,
        currency: "USD",
        paymentDate: "11/Jul/2023",
        lastLogin: "12/Jul/2023",
        status: "Inactive"
      },
      {
        id: 12,
        firstName: "Joseph",
        lastName: "Thomas",
        email: "josephthomas@example.com",
        paymentStatus: "Paid",
        amount: 105,
        currency: "USD",
        paymentDate: "12/Jul/2023",
        lastLogin: "13/Jul/2023",
        status: "Active"
      },
      {
        id: 13,
        firstName: "Isabella",
        lastName: "Roberts",
        email: "isabellaroberts@example.com",
        paymentStatus: "Paid",
        amount: 95,
        currency: "USD",
        paymentDate: "13/Jul/2023",
        lastLogin: "14/Jul/2023",
        status: "Active"
      },
      {
        id: 14,
        firstName: "Mason",
        lastName: "Johnson",
        email: "masonjohnson@example.com",
        paymentStatus: "Unpaid",
        amount: 160,
        currency: "USD",
        paymentDate: "14/Jul/2023",
        lastLogin: "15/Jul/2023",
        status: "Active"
      },
      {
        id: 15,
        firstName: "Ella",
        lastName: "Martinez",
        email: "ellamartinez@example.com",
        paymentStatus: "Overdue",
        amount: 205,
        currency: "USD",
        paymentDate: "15/Jul/2023",
        lastLogin: "16/Jul/2023",
        status: "Inactive"
      },
      {
        id: 16,
        firstName: "Liam",
        lastName: "Garcia",
        email: "liamgarcia@example.com",
        paymentStatus: "Paid",
        amount: 115,
        currency: "USD",
        paymentDate: "16/Jul/2023",
        lastLogin: "17/Jul/2023",
        status: "Active"
      },
      {
        id: 17,
        firstName: "Luna",
        lastName: "Clark",
        email: "lunaclark@example.com",
        paymentStatus: "Paid",
        amount: 105,
        currency: "USD",
        paymentDate: "17/Jul/2023",
        lastLogin: "18/Jul/2023",
        status: "Active"
      },
      {
        id: 18,
        firstName: "Noah",
        lastName: "Baker",
        email: "noahbaker@example.com",
        paymentStatus: "Unpaid",
        amount: 160,
        currency: "USD",
        paymentDate: "18/Jul/2023",
        lastLogin: "19/Jul/2023",
        status: "Active"
      },
      {
        id: 19,
        firstName: "Mia",
        lastName: "Gonzalez",
        email: "miagonzalez@example.com",
        paymentStatus: "Overdue",
        amount: 195,
        currency: "USD",
        paymentDate: "19/Jul/2023",
        lastLogin: "20/Jul/2023",
        status: "Inactive"
      },
      {
        id: 20,
        firstName: "Benjamin",
        lastName: "Hall",
        email: "benjaminhall@example.com",
        paymentStatus: "Paid",
        amount: 135,
        currency: "USD",
        paymentDate: "20/Jul/2023",
        lastLogin: "21/Jul/2023",
        status: "Active"
      }
    ]
    
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}