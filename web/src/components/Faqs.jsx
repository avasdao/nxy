import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
    [
        {
            question: 'Is Nxy a fork of Nexa?',
            answer:
                `NO. Nxy is an Layer 1+ (add-on), 100% committed to contributing and growing with the Nexa community now and long into the future. ANY and ALL features being built for Nxy are inherently integrated directly into Nexa's Layer 1 after being deployed.`,
        },
        {
            question: 'Is it legal to create my own Economy?',
            answer:
                `YES! Although historically, and usually through threats of VIOLENCE, the Elites have used government to make it very difficult for the People to control their own WEALTH. Nxy now offers you a simple & convenient UI/UX to the superior financial tools that have existed for decades.`,
        },
        {
            question: 'But isn’t file-sharing illegal?',
            answer:
                `NO. Especially NOT when shared by its original content owner. In the Oasis, Creators have the ability to digitally sign & secure ALL of their content, providing the MOST transparent & secure Content Management System (CMS) in the world.`,
        },
    ],
    [
        {
            question: 'How is Nxy different from Nexa?',
            answer:
                `The primary goal of the Nxy community is to explore a wider range of ideas and opportunities that extend beyond the Nexa Roadmap, beyond blockchains, and into the broader social financial (#SoFi) world of global economics.`,
        },
        {
            question: 'How can I become an "official" Nxy partner?',
            answer:
                `Contact us with some details about your project and the type of contributions you plan to make during a formal partnership relationship. If/when approved, you'll receive a full Partnership Welcome Guide on contributing directly to the Nxy open source repositories on GitHub.`,
        },
        {
            question: 'How did you get this on the App Store?',
            answer:
                `Nxy comes in many flavors, from several community-based (FOSS) clients to a few fully-licensed & branded editions. We make adjustments for each platform's codebase to comply with the variety of distribution & service guidelines required by our various partners.`,
        },
    ],
    [
        {
            question: 'How much does it cost to get started?',
            answer:
                `Customizing a brand NEW Space will cost a 1st-time user around 1,000 $NXY in service & transaction fees, which is less than 1/100 of a $0.01.`,
        },
        {
            question: 'Do I have to worry about any illegal content on my device?',
            answer:
                `(Optional) on-chain filters are well-maintained, and when enabled, provide real-time protection against engaging with prohibited content. In addition, both desktop and mobile users remain 100% in control of the content they opt -in or -out of viewing & storing (i.e. seeding) while exploring the Oasis.`,
        },
        {
            question: 'Where is Nxy based?',
            answer:
                `Nxy is a permissionless and decentralized network of Creators, built using a collection of 100% free and open-source software (FOSS) protocols and specifications; and is NOT "controlled" by ANY sole party. However, the "official" Nxy client is built and maintained by Ava's DAO, based in Atlanta Georgia USA.`,
        },
    ],
]

export function Faqs() {
    return (
        <section
            id="faqs"
            aria-labelledby="faqs-title"
            className="border-t border-gray-200 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faqs-title"
                        className="text-3xl font-medium tracking-tight text-gray-900"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        If you have anything else you want to ask,{' '}
                        <Link
                            href="mailto:support@avasdao.org"
                            className="text-gray-900 underline"
                        >
                            reach out to us
                        </Link>
                        .
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="space-y-10">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
