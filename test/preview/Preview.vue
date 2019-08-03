<template>
    <div class="container-fluid p-5">
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a :class="getNavLinkClass(0)" href="#" @click.stop="nav = 0">Version 1</a>
            </li>
            <li class="nav-item">
                <a :class="getNavLinkClass(1)" href="#" @click.stop="nav = 1">Version 2</a>
            </li>
            <li class="nav-item">
                <a :class="getNavLinkClass(2)" href="#" @click.stop="nav = 2">Version 3</a>
            </li>
            <li class="nav-item">
                <a :class="getNavLinkClass(3)" href="#" @click.stop="nav = 3">Version 4</a>
            </li>
        </ul>
        <div>
            <div class="container-fluid">
                <div class="row py-5">
                    <div v-show="nav === 0" class="col">
                        <v-data-table
                            :header="header1"
                            :data="data1"
                            :sizes="[30, 30, 20, 20]"
                        >
                            <template v-slot:header="props">
                                <span>Name</span>
                                <span>Surname</span>
                                <span>Status</span>
                                <span>Actions</span>
                            </template>
                            <template v-slot:row="props">
                                <div>
                                    {{props.data.name}}
                                </div>
                                <div>
                                    {{props.data.surname}}
                                </div>
                                <div>
                                    <div v-if="props.data.active" class="badge badge-success">Active</div>
                                    <div v-else class="badge badge-danger">Off</div>
                                </div>
                                <div class="btn-group">
                                    <button class="btn btn-info btn-sm">Edit</button>
                                    <button class="btn btn-success btn-sm">Save</button>
                                    <button class="btn btn-danger btn-sm">Remove</button>
                                </div>
                            </template>
                        </v-data-table>
                    </div>
                    <div v-show="nav === 1" class="col">
                        <v-data-table></v-data-table>
                    </div>
                    <div v-show="nav === 2" class="col">
                        <v-data-table></v-data-table>
                    </div>
                    <div v-show="nav === 3" class="col">
                        <v-data-table></v-data-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VDataTable from '../../src/components/v_data_table';
    export default {
        name: 'Preview',
        components: {VDataTable},
        data() {
            return {
                nav: 0,

                header1: [
                    {value: 'name'},
                    {value: 'surname'},
                ],
                data1: [
                    {name: 'John', surname: 'Travolta', active: true},
                    {name: 'Adam', surname: 'Savage', active: false},
                ],
            };
        },
        methods: {
            getNavLinkClass(index) {
                return this.nav === index ? 'nav-link active' : 'nav-link';
            }
        }
    }
</script>

<style scoped>

</style>