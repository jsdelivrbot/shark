<template>
    <el-input v-model="input" :placeholder="configData.placeholder" :disabled="configData.disabled" :readonly="configData.readonly" :size="configData.size" :default="defaultValue" :type="configData.type" :maxlength="configData.maxLength" @input="inputEvent">
    </el-input>
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
                    this.input = this.default
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
</script>
