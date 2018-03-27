<template>
    <el-input-number v-model="input" :placeholder="configData.placeholder" :disabled="configData.disabled" :readonly="configData.readonly" :min="configData.min || 0" :max="configData.max || Infinity" :step="configData.step || 1" :size="configData.size" :rows="configData.rows"
        :autosize="configData.autoSize" :default="defaultValue" :data="defaultValue" @input="inputEvent">
    </el-input-number>
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
