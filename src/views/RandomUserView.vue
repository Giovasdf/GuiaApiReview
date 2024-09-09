<template>
    <div>
        <h1>Random User</h1>
        <ul>
            <li v-for="user in users" :key="user.email">
                {{ user.name.first }} {{ user.name.last }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RandomUser',
    data() {
        return {
            users: []
        };
    },
    methods: {
        async callApi() {
            try {
                const { data } = await axios.get('https://randomuser.me/api/?results=200');
                this.users = data.results;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
    },
    async mounted() {
        await this.callApi();
    }
};
</script>

<style scoped>
</style>
