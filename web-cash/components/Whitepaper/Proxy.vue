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
    <main class="mt-16 max-w-2xl">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Introducing a <span class="pr-1 text-rose-500 text-4xl italic">Wise Delegate</span> Contract Template
        </h2>

        <h3 class="text-xl font-medium tracking-wider text-gray-500 italic">
            (featuring Nexa's exclusive `<NuxtLink to="https://spec.nexa.org/script/op-codes/op_exec/" target="_blank" class="font-bold text-blue-500 hover:underline">OP_EXEC</NuxtLink>` command)
        </h3>

        <p class="mt-6">
            The Polymorph contract, used to manage PoW mining for NXY, introduces an all NEW Delegated Script specification.
            It allows ANY wise contract to be <span class="font-medium text-xl italic">mutated at the command of its Creator(s);</span>
            offering equivalent capabilities as Ethereum's <code>`delegate_call`</code> command, which enable the <span class="font-medium text-xl italic">countless dApps that depend on "upgradeable" EVM contracts.</span>
        </p>

        <p class="mt-6 text-xl font-medium text-gray-600 italic">
            Wise Delegate templates offer <span class="font-bold text-2xl">infinite</span> creative possibilities for Script authors, while still conforming to <span class="font-bold text-2xl">"clean" Nexa-style template</span> standards and maximum interoperability.
        </p>

<pre class="lg:hidden mt-8 px-3 py-2 text-amber-900 bg-amber-50 border-2 border-amber-300 rounded-xl shadow">
&lt;09504F4C59504F573031&gt;
&lt;OP_DROP&gt;

[ PUSH template placeholder ]
[ PUSH fair-access code ]
[ PUSH miner address ]
[ PUSH submission candidate ]
[ PUSH # params ]
[ PUSH # returns ]
[ PUSH Script template ]

&lt;OP_1NEGATE&gt;
&lt;OP_PLACE&gt;
&lt;OP_HASH160&gt;
&lt;OP_FROMALTSTACK&gt;
&lt;OP_EQUALVERIFY&gt;
&lt;OP_EXEC&gt;
👆 where the *MAGIC* happens ✨
</pre>
<pre class="hidden lg:flex mt-8 px-3 py-2 text-amber-900 bg-amber-50 border-2 border-amber-300 rounded-xl shadow">
&lt;09504F4C59504F573031&gt; (read. POLYPOW01)
&lt;OP_DROP&gt;

[ PUSH template placeholder ] `0`
[ PUSH fair-access code ]     `73481f32a930fe98a4a0d481f32a930fe98a4153`
[ PUSH miner address ]        `30fe97a0d481f32a96d5bb8a41533b70631bb257`
[ PUSH submission candidate ] `1337`
[ PUSH # params ]             `53`
[ PUSH # returns ]            `0`
[ PUSH Script template ]      `6C6C6D51` 👈 PoW algorithm ⛏️

&lt;OP_1NEGATE&gt;
&lt;OP_PLACE&gt;
&lt;OP_HASH160&gt;
&lt;OP_FROMALTSTACK&gt; (Polymorph template hash)
&lt;OP_EQUALVERIFY&gt;
&lt;OP_EXEC&gt;       👈 this is where all the *MAGIC* happens ✨
</pre>

        <section class="my-5 px-3 py-3 flex flex-col gap-4 bg-amber-50 border-2 border-amber-300 rounded-xl shadow">
            <h2 class="text-2xl font-bold">
                Contract / Script Template
            </h2>

<pre class="sm:hidden text-xl tracking-widest text-center">
<span class="font-bold text-lime-600">09504F4C59504F573031</span>
754FE9A96C88<NuxtLink to="https://spec.nexa.org/script/op-codes/op_exec/" target="_blank" class="font-bold text-blue-500 hover:underline">ED</NuxtLink>
</pre>
<pre class="hidden sm:flex text-xl tracking-widest text-center">
<span class="font-bold text-lime-600">09504F4C59504F573031</span>754FE9A96C88<NuxtLink to="https://spec.nexa.org/script/op-codes/op_exec/" target="_blank" class="font-bold text-blue-500 hover:underline">ED</NuxtLink>
</pre>

            <p class="font-medium text-lime-600 leading-6">
                Unique NAMESPACE is the ONLY configuration required by Script authors
                <small class="block text-sm italic font-normal">
                    (a namespace is required to ID each individual *delegated* Script template)
                </small>
            </p>

            <NuxtLink to="https://spec.nexa.org/script/op-codes/op_exec/" target="_blank" class="font-medium text-blue-500 hover:underline">
                OP_EXEC (0xED) is a Script command exclusive ONLY to Nexa
            </NuxtLink>
        </section>

        <section class="my-5 px-3 py-3 flex flex-col gap-4 bg-amber-50 border-2 border-amber-300 rounded-xl shadow">
            <h2 class="text-2xl font-bold">
                Contract / Script Template Hash
            </h2>

<pre class="sm:hidden text-xl tracking-widest text-center">
90D3B53F09E8430BD4D51
9243071090D6CB60F96
</pre>
<pre class="hidden sm:flex text-xl tracking-widest text-center">
90D3B53F09E8430BD4D519243071090D6CB60F96
</pre>

            <p class="italic">
                This is the Script ID for Polymorph PoW version <span class="font-bold">01</span>
            </p>
        </section>

    </main>
</template>
