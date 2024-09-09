<template>
    <div>
        <h1 v-if="dolar.serie && dolar.serie.length > 0">
            Valor Dólar en Fecha: {{ valorDolar }} CLP el {{ dolar.serie[0].fecha }}
        </h1>
        <h1 v-else>
            Cargando datos...
        </h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DolarFecha',
    data() {
        return {
            dolar: {}, 
            valorDolar: 0
        }
    },
    methods: {
        async callApi() {
            try {
                const { data } = await axios.get('https://mindicador.cl/api/dolar/05-11-1993');
                this.dolar = data;
                if (this.dolar.serie && this.dolar.serie.length > 0) {
                    this.valorDolar = this.dolar.serie[0].valor;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
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
