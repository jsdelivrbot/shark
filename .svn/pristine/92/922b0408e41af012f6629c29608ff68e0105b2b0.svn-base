<template>
    <div>
        <div id="editorElem4" style="text-align: left" :needContent="needContent" :editorlisten="editorlisten" :fill="filldata"></div>
    </div>
</template>
<script>
    import E from 'wangeditor'
    export default {
        name: 'editor',
        data() {
            return {
                editorContent: '',
                editor: null,
            }
        },
        methods: {//getEditorContent
            notice1EditorContent() {
                this.$emit('editorcontent', this.editorContent);
            },
            initEditorCreate() {
                let editor = new E('#editorElem4');
                this.editor = editor;
                this.editor.customConfig.onchange = (html) => {
                    this.editorContent = html;
                }
                // 配置服务器端地址
                editor.customConfig.uploadImgServer = '/upload';
                // 将 timeout 时间改为 30s
                editor.customConfig.uploadImgTimeout = 30000;
                editor.create();
            }
        },
        mounted() {
            this.initEditorCreate();
        },//getcontext
        props: ['notice1content', 'defaulteditordata'], 
        computed: {
            needContent() {
                if (this.getOrder) {
                    return this.getOrder;
                } else {
                    return '';
                }
            },
            editorlisten() {
                if (this.notice1content) {
                    this.notice1EditorContent();
                } else {
                    return false;
                }
            },
            filldata() {
                if (this.defaulteditordata) {
                    if (!this.editor) {
                        this.initEditorCreate();
                    }
                    this.editor.txt.html(this.defaulteditordata);
                } else {
                    return '';
                }
                return this.defaulteditordata;
            }
        }
    }
</script>
