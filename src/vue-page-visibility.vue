<script>
export default {
    render(h) {
        return 
    },
    name: 'VuePageVisibility',
    mounted() {
        if (typeof document.hidden === 'undefined') return 
        document.addEventListener('visibilitychange', this.handleVisibilityChange, false)
    },
    methods:{
        handleVisibilityChange () {
            this.$emit((document.hidden ? 'documentInactive' : 'documentActive'))
        }
    },
    destroyed(){
        if (typeof document.hidden === 'undefined') return 
        document.removeEventListener('visibilitychange', this.handleVisibilityChange, false)
    }
}
</script>
