import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
    {
        title: 'It really works.',
        body: 'I downloaded Nxy today and mined 10,000,000 $NXY in half an hour.',
        author: 'CrazyGPUMiner',
        rating: 5,
    },
    {
        title: 'You need this app.',
        body: 'I didn’t understand Crypto at all before Nxy. I still don’t, but at least I’m rich now.',
        author: 'CluelessButRich',
        rating: 5,
    },
    {
        title: 'This shouldn’t be legal.',
        body: 'Nxy makes it so easy to create your own economy that I can’t believe it’s actually legal.',
        author: 'LivingDaDream',
        rating: 5,
    },
    // {
    //     title: 'Screw the advisors.',
    //     body: 'I barely made any money investing in mutual funds. With Nxy, I’m doubling my net-worth every single month.',
    //     author: 'Jordan1962',
    //     rating: 5,
    // },
    {
        title: 'I love it!',
        body: 'I started contributing just a little and now I get steady revenue every 5 minutes.',
        author: 'MrBurns',
        rating: 5,
    },
    {
        title: 'Too good to be true',
        body: 'I was up and running so fast with Nxy that it felt like a scam. But I just expanded to my 2nd economy. This app is crazy!',
        author: 'LazyRich99',
        rating: 5,
    },
    {
        title: 'Wish I could give 6 stars',
        body: 'This is literally the most important app you will ever download in your life.',
        author: 'SarahLuvzCash',
        rating: 5,
    },
    {
        title: 'Bought an island!',
        body: 'Yeah, you read that right. Want your own island too? Get Nxy.',
        author: 'Mcluvin69',
        rating: 5,
    },
    {
        title: 'No more debt!',
        body: 'After 8 weeks of trading my new token, I was debt-free. Why did I even go to school at all when Nxy exists?',
        author: 'MsFelicia',
        rating: 5,
    },
    {
        title: 'Just turned 18',
        body: 'I love that with Nxy’s transaction speed I get cex confirmation right away.',
        author: 'BornRich',
        rating: 5,
    },
    {
        title: 'Started an investment firm',
        body: 'I now charge clients a 3% management fee just to handle their investments into Nxy. Easy money!',
        author: 'CountingPaper',
        rating: 5,
    },
    // {
    //     title: 'It’s like a superpower.',
    //     body: 'It’s like playing Blackjack but knowing exactly what card is coming next!',
    //     author: 'MarthaKnits',
    //     rating: 5,
    // },
    {
        title: 'Quit my job!',
        body: 'I downloaded Nxy three days ago and quit my job today after I realized how easy I can grow my own brand.',
        author: 'JungleBob',
        rating: 5,
    },
    {
        title: 'Don’t download this app',
        body: 'Unless you’re ready to have the best life ever!',
        author: 'KewlManJeff',
        rating: 5,
    },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-title"
            className="pt-20 pb-16 sm:pt-32 sm:pb-24"
        >
            <Container>
                <h2
                    id="reviews-title"
                    className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
                >
                    Creators are changing their way of life with Nxy
                </h2>

                <p className="mt-2 text-lg text-gray-600 sm:text-center">
                    Learn how others discovered the MOST effective ways to
                    <br />MONETIZE their talents for the GREATEST impact across the entire Oasis.
                </p>

                <ReviewGrid />
            </Container>
        </section>
    )
}
