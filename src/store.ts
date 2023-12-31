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
        email: "johndoe@example.com", showMore: false,
        paymentStatus: "Paid",
        paymentColor: '#007F00',
        paymentBg: '#CDFFCD',
        amount: 100,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "01/Jul/2023",
        lastLogin: "02/Jul/2023",
        status: "Active",
        statusColor: "#4A4AFF",
        statusBackgroundColor: "#E6E6F2",
      
       },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com", showMore: false,
        paymentStatus: "Unpaid",
paymentColor: '#965E00 ',
paymentBg: '#FFECCC',
        amount: 150,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "02/Jul/2023",
        lastLogin: "03/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alicejohnson@example.com", showMore: false,
       paymentStatus: "Overdue",
paymentColor: '#D81C1C',
paymentBg: '#FFE0E0',
        amount: 200,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "03/Jul/2023",
        lastLogin: "04/Jul/2023",
         status: "Inactive",
    statusColor: "#6E6893",
    statusBackgroundColor: "#F2F0F9"
      },
      {
        id: 4,
        firstName: "Michael",
        lastName: "Brown",
        email: "michaelbrown@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 120,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "04/Jul/2023",
        lastLogin: "05/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 5,
        firstName: "Emily",
        lastName: "Williams",
        email: "emilywilliams@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 90,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "05/Jul/2023",
        lastLogin: "06/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 6,
        firstName: "David",
        lastName: "Jones",
        email: "davidjones@example.com", showMore: false,
        paymentStatus: "Unpaid",
paymentColor: '#965E00 ',
paymentBg: '#FFECCC',
        amount: 180,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "06/Jul/2023",
        lastLogin: "07/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 7,
        firstName: "Olivia",
        lastName: "Miller",
        email: "oliviamiller@example.com", showMore: false,
       paymentStatus: "Overdue",
paymentColor: '#D81C1C',
paymentBg: '#FFE0E0',
        amount: 220,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "07/Jul/2023",
        lastLogin: "08/Jul/2023",
         status: "Inactive",
    statusColor: "#6E6893",
    statusBackgroundColor: "#F2F0F9"
      },
      {
        id: 8,
        firstName: "William",
        lastName: "Wilson",
        email: "williamwilson@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 130,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "08/Jul/2023",
        lastLogin: "09/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 9,
        firstName: "Sophia",
        lastName: "Davis",
        email: "sophiadavis@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 110,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "09/Jul/2023",
        lastLogin: "10/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 10,
        firstName: "James",
        lastName: "Taylor",
        email: "jamestaylor@example.com", showMore: false,
        paymentStatus: "Unpaid",
paymentColor: '#965E00 ',
paymentBg: '#FFECCC',
        amount: 170,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "10/Jul/2023",
        lastLogin: "11/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 11,
        firstName: "Ava",
        lastName: "Anderson",
        email: "avaanderson@example.com", showMore: false,
       paymentStatus: "Overdue",
paymentColor: '#D81C1C',
paymentBg: '#FFE0E0',
        amount: 190,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "11/Jul/2023",
        lastLogin: "12/Jul/2023",
         status: "Inactive",
    statusColor: "#6E6893",
    statusBackgroundColor: "#F2F0F9"
      },
      {
        id: 12,
        firstName: "Joseph",
        lastName: "Thomas",
        email: "josephthomas@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 105,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "12/Jul/2023",
        lastLogin: "13/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 13,
        firstName: "Isabella",
        lastName: "Roberts",
        email: "isabellaroberts@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 95,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "13/Jul/2023",
        lastLogin: "14/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 14,
        firstName: "Mason",
        lastName: "Johnson",
        email: "masonjohnson@example.com", showMore: false,
        paymentStatus: "Unpaid",
paymentColor: '#965E00 ',
paymentBg: '#FFECCC',
        amount: 160,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "14/Jul/2023",
        lastLogin: "15/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 15,
        firstName: "Ella",
        lastName: "Martinez",
        email: "ellamartinez@example.com", showMore: false,
       paymentStatus: "Overdue",
paymentColor: '#D81C1C',
paymentBg: '#FFE0E0',
        amount: 205,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "15/Jul/2023",
        lastLogin: "16/Jul/2023",
         status: "Inactive",
    statusColor: "#6E6893",
    statusBackgroundColor: "#F2F0F9"
      },
      {
        id: 16,
        firstName: "Liam",
        lastName: "Garcia",
        email: "liamgarcia@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 115,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "16/Jul/2023",
        lastLogin: "17/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 17,
        firstName: "Luna",
        lastName: "Clark",
        email: "lunaclark@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 105,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "17/Jul/2023",
        lastLogin: "18/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 18,
        firstName: "Noah",
        lastName: "Baker",
        email: "noahbaker@example.com", showMore: false,
        paymentStatus: "Unpaid",
paymentColor: '#965E00 ',
paymentBg: '#FFECCC',
        amount: 160,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "18/Jul/2023",
        lastLogin: "19/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      },
      {
        id: 19,
        firstName: "Mia",
        lastName: "Gonzalez",
        email: "miagonzalez@example.com", showMore: false,
       paymentStatus: "Overdue",
paymentColor: '#D81C1C',
paymentBg: '#FFE0E0',
        amount: 195,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "19/Jul/2023",
        lastLogin: "20/Jul/2023",
         status: "Inactive",
        statusColor: "#6E6893",
       statusBackgroundColor: "#F2F0F9"
      },
      {
        id: 20,
        firstName: "Benjamin",
        lastName: "Hall",
        email: "benjaminhall@example.com", showMore: false,
       paymentStatus: "Paid",
paymentColor: '#007F00',
paymentBg: '#CDFFCD',

        amount: 135,
        currency: "USD",  data: [
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
          {
            date: "01/Jan/2023",
            userActivity: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies rutrum sagittis. Pellentesque in neque at nunc tristique venenatis. Fusce dictum dapibus ligula, ac gravida augue ultricies ut. Curabitur fringilla, enim eu tempus ultricies, ligula neque eleifend massa, sed hendrerit enim metus non est."
          },
        ],
        paymentDate: "20/Jul/2023",
        lastLogin: "21/Jul/2023",
status: "Active",
    statusColor: "#4A4AFF",
    statusBackgroundColor: "#E6E6F2"      }
    ],
    
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}