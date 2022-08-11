<template>
    <main class="bg-white">
        <div class="relative overflow-hidden">
            <Header />

            <main>
                <Hero />

                <!-- Feature section with screenshot -->
                <Spotlight />

                <!-- Feature section with grid -->
                <Benefits />

                <!-- Testimonial section -->
                <Testimonials />

                <!-- Blog section -->
                <BlogPosts />

                <!-- CTA Section -->
                <CTA />
            </main>

            <Footer />
        </div>
    </main>
</template>

<script>
/* Import components. */
import Benefits from '@/components/Benefits'
import BlogPosts from '@/components/BlogPosts'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Spotlight from '@/components/Spotlight'
import Testimonials from '@/components/Testimonials'

export default {
    components: {
        Benefits,
        BlogPosts,
        CTA,
        Footer,
        Header,
        Hero,
        Spotlight,
        Testimonials,
    }
}
</script>
