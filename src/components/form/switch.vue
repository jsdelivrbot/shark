<template>
    <el-switch v-model="input" :default="defaultValue" @change="checkEvent" :disabled="configData.disabled">
    </el-switch>
</template>

<script>
    export default {
        data() {
            return {
                input: false
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
            configData() {
                return this.config
            },
            defaultValue() {
                if (this.default) {
                    this.input = this.default
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
</script>