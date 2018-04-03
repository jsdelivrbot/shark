<template>
    <div id="container">
        <h1 class="h1-title">系统配置</h1>
        <div class="cms-content">
            <el-collapse v-model="sysCollapse">
                <el-collapse-item title="系统表推送" name="0">
                    <el-row>
                        <el-col :span="12">
                            <el-form ref="form" :inline="true" label-width="80px">
                                <el-col :span="10">
                                    <el-form-item label="Excel表:">
                                        <el-select v-model="tblName" filterable placeholder="输入可搜索" v-on:change="getSingleTbl">
                                            <el-option v-for="item in tblOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12" :offset="2">
                                    <el-form-item :span="12">
                                        <el-button type="primary" @click="confirmComitTbl">提交表</el-button>
                                        <el-button type="warning" @click="downloadTblZip">下载全部表</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-form>
                        </el-col>
                        <el-col :span="12">
                            <el-form :model="form" action="/Backend/upload_excel/" enctype="multipart/form-data" method="POST">
                                <el-upload class="upload-demo" ref="uploadCsv" action="/Backend/upload_excel/" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-progress="uploadProgress" :on-success="uploadSuccess" :on-error="uploadError" :auto-upload="false"
                                    :before-upload="fileTypeCheck">
                                    <el-button slot="trigger" size="" type="primary">选取文件</el-button>
                                    <el-button size="" type="danger" @click="clearCsv">清空文件</el-button>
                                    <el-button style="margin-left: 15px;" size="" type="warning" @click="submitUploadCsv">
                                        上传文件到服务器
                                    </el-button>
                                </el-upload>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="上传apk" name="1">
                    <el-row>
                        <el-col :span="12">
                            <el-form :model="form" action="/Backend/upload_apk/" enctype="multipart/form-data" method="POST">
                                <el-upload class="upload-demo" ref="uploadApk" action="/Backend/upload_apk/" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-progress="uploadProgress" :on-success="uploadSuccess" :on-error="uploadError" :auto-upload="false"
                                    :before-upload="apkTypeCheck">
                                    <el-button slot="trigger" size="" type="primary">选取文件</el-button>
                                    <el-button size="" type="danger" @click="clearApk">清空文件</el-button>
                                    <el-button style="margin-left: 15px;" size="" type="warning" @click="submitUploadApk">
                                        上传文件到服务器
                                    </el-button>
                                </el-upload>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sys_config',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                sysCollapse: '',
                form: {
                    file: '',
                },
                tblName: '',
                tblOptions: [],
                formLabelWidth: '120px',
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            confirmComitTbl() {
                this.$confirm('确认提交表？（功能暂不生效）').then(() => {
                    console.log(arguments);
                });
            },
            downloadTblZip() {
                // window.open('/api/download_csvzip/');
                this.$confirm('确认下载全部表？（功能暂不生效）').then(() => {
                    console.log(arguments);
                });
            },
            submitUploadCsv() {
                this.$confirm('确认提交文件？').then(() => {
                    this.$refs.uploadCsv.submit();
                }).catch(_ => {});
            },
            fileTypeCheck(file) {
                if (!file) {
                    this.$message.error('请先选择文件');
                    // this.$refs.uploadCsv.clearFiles();
                    return false
                }
                if (!file.name.match(/\.xls(x?)$/)) {
                    this.$message.error('上传文件类型必须为excel文件');
                    // this.$refs.uploadCsv.clearFiles();
                    return false;
                }
            },
            submitUploadApk() {
                this.$confirm('确认提交文件？').then(() => {
                    this.$refs.uploadApk.submit();
                }).catch(_ => {});
            },
            apkTypeCheck(file) {
                if (!file) {
                    this.$message.error('请先选择文件');
                    // this.$refs.uploadPic.clearFiles();
                    return false;
                }
                if (!file.name.match(/\.(apk)$/)) {
                    this.$message.error('上传文件类型必须为apk文件');
                    // this.$refs.uploadPic.clearFiles();
                    return false;
                }
            },
            uploadSuccess(response) {
                let _self = this;
                if (response.code == 0) {
                    _self.$message.success(response.msg);
                } else {
                    this.$message.error('上传失败:' + JSON.stringify(response));
                    // this.$refs.uploadPic.clearFiles();
                }
            },
            uploadError(response) {
                this.$message.error('上传失败:' + JSON.stringify(response));
                // _self.$refs.uploadCsv.clearFiles();
                // _self.$refs.uploadPic.clearFiles();
            },
            getSingleTbl(val) {
                return false;
            },
            clearCsv() {
                // this.$refs.uploadCsv.clearFiles();
                return false;
            },
            clearApk() {
                // this.$refs.uploadCsv.clearFiles();
                return false;
            },
            handleRemove(file, fileList) {},
            handlePreview(file) {},
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
        }
    }
</script>
