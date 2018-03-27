<template>
    <el-date-picker v-model="input" align="right" type="datetime" :placeholder="configData.placeholder" :picker-options="pickerOptions1" :disabled="configData.disabled" :readonly="configData.readonly" :default="defaultValue" :data='defaultValue' @change="inputEvent">
    </el-date-picker>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                }
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