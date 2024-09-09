<template>
    <div>
        <img :src="getPicture" alt="Pokémon Image" v-if="getPicture" />
        <p v-else>Cargando imagen...</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PokeApi',

    data() {
        return {
            pokemon: {},
        };
    },

    async mounted() {
        await this.callApi();
    },

    methods: {
        async callApi() {
            try {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/25');
                this.pokemon = data;
                console.log(this.pokemon);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },

    computed: {
        getPicture() {
            return this.pokemon?.sprites?.other?.home?.front_default || '';
        }
    },
};
</script>
