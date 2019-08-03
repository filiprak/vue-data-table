<script>
    export default {
        name: 'v_data_table_row',
        functional: true,
        props: {
            data: {
                type: Array,
                default: () => []
            },
            sizes: {
                type: Array,
                default: () => []
            },
            design: {
                type: String,
                default: null
            }
        },
        render(h, context) {
            const {
                data,
                children,
                props
            } = context;

            const {
                sizes,
            } = props;

            const mapped_children = children ? children.filter((raw_child) => {
                return raw_child.tag !== undefined;
            }).map((child, index) => {

                const size = sizes[index];

                const fixed = String(size).indexOf('px') > -1;

                return h('div', {class: 'col-md', style: {
                    flexGrow:  !fixed ? (size / 100) : 0,
                    width: fixed ? size : false,
                }}, [child]);
            }) : [];

            return h('div', {
                class: {
                    'card mb-1': true,
                    ['bg-' + props.design]: props.design,
                    'text-white': props.design,
                    'text-bold': props.design,
                }
            }, [
                h('div', {class: 'card-body row'}, mapped_children)
            ]);
        }
    }
</script>

<style scoped>

</style>