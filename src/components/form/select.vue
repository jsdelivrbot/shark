<template>
    <el-select v-model="input" :disabled="configData.disabled" :readonly="configData.readonly" :multiple="configData.multiple" :default="defaultValue" :placeholder="configData.placeholder" @change="checkEvent">
        <el-option v-for="option in configData.options" :key="option.value" :label="option.label" :value="option.value" :disabled="option.disabled">{{option.label}}</el-option>
    </el-select>
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
                this.input = this.default
            }
        }
    },
    mounted() {
        this.$emit('register', this.$parent);
    }
}

</script>
