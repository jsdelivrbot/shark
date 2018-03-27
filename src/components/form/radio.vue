<template>
    <el-radio-group v-model="input" :disabled="configData.disabled" :readonly="configData.readonly" :default="configData.defaultValue" @input="inputEvent">
        <el-radio v-for="option in configData.options" :key="option.value" :label="option.value" :disabled="option.disabled">{{option.label}}</el-radio>
    </el-radio-group>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            inputEvent() {
                this.$emit('text', {
                    key: this.config.name,
                    value: this.input
                })
            }
        },
        props: ['config', 'default'],
        computed: {
            //配置读取方法
            configData: function() {
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
