<template>
    <footer class="-mt-5 sm:-mt-6 flex justify-center text-gray-500 text-xs sm:text-sm">
        <span class="inline">
            Copyright &copy; {{curYear}}.
            <a class="text-blue-400 font-medium hover:underline" href="https://nxy.app" target="_blank">Ava's DAO</a>.
        </span>

        <span class="hidden sm:inline ml-1">
            All rights reserved.
        </span>
    </footer>
</template>

<script>
/* Import modules. */
import moment from 'moment'

/* Import components. */
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        curYear() {
            return moment().format('YYYY')
        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
