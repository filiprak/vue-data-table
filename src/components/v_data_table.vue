<template>
    <div class="v-data-table">
        <v-data-table-row
            v-if="header"
            :columns="header"
            :sizes="sizes"
            :design="headerDesign"
        >
            <slot name="header"></slot>
        </v-data-table-row>

        <v-data-table-row
            v-for="(row, index) in data"
            :key="index"
            :columns="header"
            :sizes="sizes"
        >
            <slot name="row" :data="row"></slot>
        </v-data-table-row>
    </div>
</template>

<script>
    import VDataTableRow from './v_data_table_row';

    export default {
        name: 'v-data-table',
        components: {VDataTableRow},
        props: {
            header: {
                type: Array,
                default: null
            },
            headerDesign: {
                type: String,
                default: 'info'
            },
            sizes: {
                type: Array,
                default: () => []
            },
            data: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>