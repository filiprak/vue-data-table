import VDataTable from './components/v_data_table';

const VDataTablePlugin = {
    install(Vue, options) {
        options = options || {};
        Vue.component(options.name || VDataTable.name, VDataTable);
    }
};

if (typeof window !== "undefined") {
    window.VDataTable = VDataTablePlugin;
}

export default VDataTablePlugin;
