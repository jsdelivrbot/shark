<template>
    <el-date-picker v-model="input" align="right" type="datetimerange" :placeholder="configData.placeholder" :picker-options="pickerOptions2" :disabled="configData.disabled" :readonly="configData.readonly" :data='defaultValue' @change="inputEvent">
    </el-date-picker>
</template>

<script>
    export default {
        data() {
            return {
                input: [],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                }
            }
        },
        methods: {
            inputEvent() {
                this.$emit('text', {
                    key: this.config.name,
                    value: [Math.floor(this.input[0].getTime() / 1000), Math.floor(this.input[1].getTime() / 1000)]
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
                    this.input = [this.default[0] * 1000, this.default[1] * 1000]
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
</script>