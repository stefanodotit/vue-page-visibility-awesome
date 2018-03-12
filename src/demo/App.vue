<template>
    <VuePageVisibility @documentInactive="documentInactive" @documentActive="documentActive" ></VuePageVisibility>
</template>

<script>
    import VuePageVisibility from '../vue-page-visibility.vue'
    export default {
        name: 'App',
        data(){
            return{
                originalTitle: '',
                asleep: '💤'
            }
        },
        components: {
            VuePageVisibility
        },
        mounted(){
            this.originalTitle = document.title
        },
        methods: {
            documentInactive(){
                console.log("documentInactive")
                document.title = this.asleep
            },
            documentActive(){
                console.log("documentActive")
                document.title = this.originalTitle
            }
        }
    }
</script>
