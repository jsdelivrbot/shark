<template>
    <el-transfer v-model="input" :data="configData.options" :default="defaultValue" @change="checkEvent" filterable>
    </el-transfer>
</template>

<script>
    export default {
        data() {
            return {
                input: []
            }
        },
        methods: {
            checkEvent() {
                this.$emit('text', {
                    key: this.config.name,
                    value: this.input
                });
            }
        },
        props: ['config', 'default'],
        computed: {
            //配置读取方法
            configData: function() {
                return this.config
            },
            defaultValue() {
                if (this.default !== undefined) {
                    console.log('get_default');
                    console.log(this.default);
                    this.input = this.default
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
</script>

