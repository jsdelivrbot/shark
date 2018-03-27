<template>
    <el-date-picker v-model="input" align="right" type="date" :placeholder="configData.placeholder" :picker-options="pickerOptions1" :disabled="configData.disabled" :readonly="configData.readonly" :data='defaultValue' @change="inputEvent" style="width: 100%;">
    </el-date-picker>
</template>


<script>
    export default {
        data() {
            return {
                input: 0,
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date(convertToDate(new Date())));
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', new Date(convertToDate(date)));
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', new Date(convertToDate(date)));
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
            },
            //      convertToDate(time) {
            ////        let time = new Date(val * 1000);
            //        return time.getFullYear() + '-' + this.fillZero(time.getMonth() + 1) + '-' + this.fillZero(time.getDate());
            //      },
            //      fillZero(val){
            //        return (val-0+100+'').slice(1,3);
            //      }
        },
        props: ['config', 'default'],
        computed: {
            //            配置读取方法
            configData: function() {
                return this.config
            },
            defaultValue() {
                if (this.default !== undefined) {
                    this.input = this.default * 1000
                }
            }
        },
        mounted() {
            this.$emit('register', this.$parent);
        }
    }
    function convertToDate(time) {
        return time.getTime() + (3600 * 8 * 1000) - (time.getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000) - 8 * 3600 * 1000;
    }
    function fillZero(val) {
        return (val - 0 + 100 + '').slice(1, 3);
    }
</script>
