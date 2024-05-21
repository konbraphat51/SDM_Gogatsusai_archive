<template>
    <!-- <div id="COMPONENT_NAME">
        any HTML you want

        <button id="example" @click="select('example')">{{ t("Example.button") }}</button>

        <SUB_COMPONENT :sub_component_props_name:"example_parameter" @event_name="function_name()"/>

        <SOMETHING v-for="example in example_list" :key="example.id" :example_props_name="example">
    </div> -->
</template>

<script>
export default Vue.defineComponent({
    name: 'COMOPNENT_NAME',
    components: {
        //"SUB_COMPONENT": Vue.defineAsyncComponent(() => loadModule("src/components/SUB_COMPONENT.vue", options)),
    },
    setup() {
        //javascript to run at the very first

        //set up i18n
        const { t } = VueI18n.useI18n()
        return { t }
    },
    mounted() {
        //javascript to run when component is mounted
    },
    updated() {
        //javascript to run when content of this component is updated
    },
    data() {
        //variables
        return {
            //example_variable: "example"
        }
    },
    props: {
        //parameters from parent component

        // example_parameter: {
        //     type: String,
        //     required: true
        // }
    },
    methods: {
        // select(example) {
        //     this.$emit("onSelected", example)
        // },
        // example_method() {
        //   
        // }
    },
    watch: {
        // example_variable: {
        //     handler: function (newVal, oldVal) {
        //         //script called when example_variable is changed
        //     },
        //     deep: true
        // }
    },
    computed: {
        // Can you as a variable.
        // if the variable inside updated, computed updated automatically.
        // example_computed() {
        //      
        //     return this.example_variable + " computed"
        // }
    }
})
</script>

<i18n>
    {
        "en": {
            "Example": {
                "button": "example"
            }
        },
        "ja": {
            "Example": {
                "button": "例"
            }
        }
    }
</i18n>

<style>
/*.COMPONENT_NAME {
    font-size: 1.5em;
    font-weight: bold;     
}*/
</style>