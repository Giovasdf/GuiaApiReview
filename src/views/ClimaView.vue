<template>
    <div>
        <h1 v-if="computedEstacion && computedTemperatura !== null">
            En {{ computedEstacion }} hay {{ computedTemperatura }}°C
        </h1>
        <h1 v-else>
            Cargando datos...
        </h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            clima: {},
        };
    },
    async mounted() {
        await this.callApi();
    },
    methods: {
        async callApi() {
            try {
                const { data } = await axios.get('https://api.gael.cloud/general/public/clima/SCQN');
                this.clima = data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
    computed: {
        computedEstacion() {
            return this.clima?.Estacion || '';
        },
        computedTemperatura() {
            return this.clima?.Temp !== undefined ? this.clima.Temp : null;
        }
    }
};
</script>

<style scoped>
</style>
