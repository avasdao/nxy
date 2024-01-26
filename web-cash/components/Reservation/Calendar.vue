<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main>
        <div class="flex items-center text-gray-900">

            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Previous month</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
            </button>

            <div class="flex-auto text-sm font-semibold">January</div>

            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Next month</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
        </div>

        <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <!--
    Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
    Is current month, include: "bg-white"
    Is not current month, include: "bg-gray-50"
    Is selected or is today, include: "font-semibold"
    Is selected, include: "text-white"
    Is not selected, is not today, and is current month, include: "text-gray-900"
    Is not selected, is not today, and is not current month, include: "text-gray-400"
    Is today and is not selected, include: "text-indigo-600"

    Top left day, include: "rounded-tl-lg"
    Top right day, include: "rounded-tr-lg"
    Bottom left day, include: "rounded-bl-lg"
    Bottom right day, include: "rounded-br-lg"
    -->
            <button type="button" class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <!--
        Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
        Is selected and is today, include: "bg-indigo-600"
        Is selected and is not today, include: "bg-gray-900"
    -->
                <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>

            <button type="button" class="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
            </button>

            <button type="button" class="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">22</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>

            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>

            <button type="button" class="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>

            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>

            <button type="button" class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>
        </div>
    </main>
</template>
