<template>
    <el-time-picker v-model="input" align="right" type="timePicker" :placeholder="configData.placeholder" :disabled="configData.disabled" :readonly="configData.readonly" :default="defaultValue" :data="defaultValue" @change="inputEvent">
    </el-time-picker>
</template>
<script>
    export default {
        data() {
            return {
                input: '',
            }
        },
        methods: {
            inputEvent() {
                this.$emit('text', {
                    key: this.config.name,
                    value: Math.floor(this.input.getTime() / 1000)
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
                if (this.default) {
                    this.input = this.default * 1000
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
</script>

