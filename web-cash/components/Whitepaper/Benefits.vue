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
    <main class="">
        <div class="mt-20 max-w-2xl">
            <h2 class="my-6 text-3xl font-light leading-9">
                What are Token Mining's MOST attractive Benefits for Creators:
            </h2>

            <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                <li class="flex gap-x-3 items-start">
                    <svg class="w-10 h-auto flex-none text-lime-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>

                    <span>
                        <strong class="text-2xl font-semibold text-gray-700">Greater accessibility.</strong>
                        Grow your community beyond traditional markets and boundaries.
                        Tear down the walls constructed by permission-seeking gatekeepers.
                    </span>
                </li>

                <li class="flex gap-x-3 items-start">
                    <svg class="w-10 h-auto flex-none text-lime-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>

                    <span>
                        <strong class="text-2xl font-semibold text-gray-700">Greater transparency.</strong>
                        Allows our team to share and earn the trust of our community.
                    </span>
                </li>

                <li class="flex gap-x-3 items-start">
                    <svg class="w-10 h-auto flex-none text-lime-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>

                    <span>
                        <strong class="text-2xl font-semibold text-gray-700">Greater sustainability.</strong>
                        Maintenance is built directly into the protocol, allowing for perfect alignment of incentives to succeed with the community.
                    </span>
                </li>
            </ul>

            <p class="my-8 text-2xl font-light italic leading-9">
                Learn how Token Mining (w/ Polymorph) has helped projects grown their own communities.
                Listen to founders describe the direct benefits introduced from this better way to distribute crypto assets.
            </p>

            <h2 class="my-10 text-2xl font-bold tracking-tight text-gray-900">
                Greater Accessibility
            </h2>

            <figure class="my-10 border-l border-indigo-600 pl-9">
                <blockquote class="font-semibold text-gray-900">
                    <p>
                        <span class="font-medium">“</span>
                        It's beautiful to see a crypto community that's built for the other 99%.
                        Nxy makes me feel like I finally belong to a place that understands what I care about.
                        <span class="font-medium">”</span>
                    </p>
                </blockquote>

                <figcaption class="mt-6 flex gap-x-4">
                    <img
                        class="h-6 w-6 flex-none rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div class="text-sm leading-6">
                        <strong class="font-semibold text-gray-900">Maria Hill</strong>
                        – Marketing Manager
                    </div>
                </figcaption>
            </figure>

            <p class="my-8 text-2xl font-light italic leading-9">
                Token mining allowed this community to reach individuals that would never have been accessible without the permissionless accessiblity offered by Polymorph mining contracts.
            </p>
        </div>

        <figure class="my-16">
            <img
                class="aspect-video rounded-xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=1832&auto=format&fit=crop"
                alt=""
            />

            <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                        clip-rule="evenodd"
                    />
                </svg>

                This is just a fictional community that greatly benefited from token mining.
            </figcaption>
        </figure>
    </main>
</template>
