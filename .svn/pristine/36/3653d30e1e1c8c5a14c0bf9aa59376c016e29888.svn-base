<template>
    <el-form :model="data" ref="data" :inline="formConfig.inline" :data-event="outerEvent" label-position="right" :label-width="formConfig.labelWidth || '80px'" :fill="fillData">
        <!--生成对应的表单元素-->
        <el-col v-for="item in formConfig.formEle" :span="item.span || 24" :offset="item.offset || 0" :key="item.name">
            <el-form-item v-if="item.type" :label="item.label" :prop="item.name" v-on:load="registerItem" :rules="item.rules" :class="item.inline ? 'formInline':'formBlock'">
                <ele-text v-if="item.type == 'text'||item.type == 'password'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-text>
                <ele-textarea v-if="item.type == 'textarea'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-textarea>
                <ele-input-number v-if="item.type == 'inputNumber'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-input-number>
                <ele-radio v-if="item.type == 'radio'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-radio>
                <ele-checkbox v-if="item.type == 'checkbox'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-checkbox>
                <ele-select v-if="item.type == 'select'" :config="item" :filterable="item.filterable" v-on:text="refreshSelect" v-on:register="regComp" :default="data[item.name]"></ele-select>
                <ele-switch v-if="item.type == 'switch'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-switch>
                <ele-date v-if="item.type == 'date'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-date>
                <ele-date-range v-if="item.type == 'dateRange'" :config="item" v-on:text="refreshInputDateRange" v-on:register="regComp" :default="[data[item.name+'_start_time'],data[item.name+'_end_time']]"></ele-date-range>
                <ele-time v-if="item.type == 'time'" :config="item" v-on:text="refreshInput" v-on:register="regComp" :default="data[item.name]"></ele-time>
                <ele-time-range v-if="item.type == 'timeRange'" :config="item" v-on:text="refreshInputTimeRange" v-on:register="regComp" :default="[data[item.name+'_start_time'],data[item.name+'_end_time']]"></ele-time-range>
                <ele-transfer v-if="item.type == 'transfer'" :config="item" :filterable="item.filterable" v-on:text="refreshSelect" v-on:register="regComp" :default="data[item.name]"></ele-transfer>
                <ele-time-picker v-if="item.type=='timePicker'" :config="item" v-on:text="refreshInputTimeRange" v-on:register="regComp" :default="[data[item.name+'_start_time'],data[item.name+'_end_time']]"></ele-time-picker>
            </el-form-item>
        </el-col>
        <!--表单按钮-->
        <el-col :span="formConfig.btnSpan" :offset="formConfig.btnOffset" v-if="formConfig.btns">
            <el-form-item class="form-btn">
                <el-button v-for="btn in formConfig.btns" :key="btn.name" :type="btn.type" :disabled="btn.disabled" @click="onSubmit('data', btn.name, btn.valid)">{{btn.title}}</el-button>
            </el-form-item>
        </el-col>
    </el-form>
</template>

<script>
    import eleText from '@/components/form/text'
    import eleTextarea from '@/components/form/textarea'
    import eleInputNumber from '@/components/form/inputNumber'
    import eleRadio from '@/components/form/radio'
    import eleCheckbox from '@/components/form/checkbox'
    import eleSelect from '@/components/form/select'
    import eleSwitch from '@/components/form/switch'
    import eleDate from '@/components/form/date'
    import eleDateRange from '@/components/form/dateRange'
    import eleTime from '@/components/form/time'
    import eleTimeRange from '@/components/form/timeRange'
    import eleTransfer from '@/components/form/transfer'
    import eleTimePicker from '@/components/form/timePicker'
    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            onSubmit(formName, btn_name, btn_valid) {
                if (btn_valid) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$emit('receive', [this.data, btn_name]);
                        } else {
                            return false;
                        }
                    });
                } else {
                    this.$emit('receive', [this.data, btn_name]);
                }
            },
            refreshInput() {
                this.data[arguments[0]['key']] = arguments[0]['value'];
            },
            refreshSelect() {
                this.data[arguments[0]['key']] = arguments[0]['value'];
                this.$emit('change', [arguments[0]]);
            },
            regComp(item) {
                this.$refs.data._data.fields.push(item);
            },
            registerItem() {},
            refreshInputTimeRange() {
                this.data[arguments[0]['key'] + '_start_time'] = arguments[0]['value'][0];
                this.data[arguments[0]['key'] + '_end_time'] = arguments[0]['value'][1];
            },
            refreshInputDateRange() {
                this.data[arguments[0]['key'] + '_start_time'] = arguments[0]['value'][0];
                this.data[arguments[0]['key'] + '_end_time'] = arguments[0]['value'][1] - 0 + 3600 * 24 - 1;
            }
        },
        components: {
            eleText,
            eleTextarea,
            eleInputNumber,
            eleRadio,
            eleCheckbox,
            eleSelect,
            eleSwitch,
            eleDate,
            eleDateRange,
            eleTime,
            eleTimeRange,
            eleTransfer,
            eleTimePicker
        },
        props: ['config', 'rule', 'eventname', 'defaultdata'],
        computed: {
            formConfig() {
                return this.config
            },
            outerEvent() {
                if (this.eventname) {
                    this.$refs['data'].validate((valid) => {
                        if (valid) {
                            this.$emit('receive', [this.data, this.eventname]);
                        } else {
                            return false;
                        }
                    });
                }
                return this.eventname;
            },
            fillData() {
                for (let key in this.defaultdata) {
                    this.data[key] = this.defaultdata[key];
                }
                return this.defaultdata
            }
        }
    }
</script>

<style>
    .el-form {
        overflow: hidden;
    }
    form:not(.el-form--inline) .el-form-item__content {
        margin-left: 80px;
    }
    .formInline {
        display: flex;
        flex-wrap: nowrap;
    }
    label:before {
        content: '' !important;
    }
    .el-form-item {
        width: 100%;
    }
    .el-form-item__content {
        width: calc(100% - 80px);
    }
    .form-btn .el-form-item__content {
        width: 100%;
    }
    .el-select {
        width: 100%;
    }
    .el-form--inline .form-btn {
        padding-left: 10px;
    }
    .form-btn {
        padding-left: 80px;
    }
    .el-date-editor--datetimerange.el-input,
    .el-date-editor--datetime.el-input {
        width: 100%;
    }
</style>