import Head from 'next/head'
import Image from 'next/image'
import calendar from "../public/Beautiful Calendar.png"
import ecommerce from "../public/E-commerce website.jpg"
import school from "../public/School website.png"
import tracker from "../public/Task tracker.webp"

const projects = () => {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/profile.jpg" />
      </Head>

        <div className="grid lg:px-4 mb-10 mt-50 justify-evenly">
            <div >
                        <Image
                            src={calendar}
                            alt="Calendar"
                            priority={true}
                            className="mb-20"
                            width={450}
                            height={450}
                            placeholder="blur"
                        />
            </div>
            <div >
                        <Image
                            src={ecommerce}
                            alt="ecommerce"
                            priority={true}
                            className="mb-20"
                            width={700}
                            height={500}
                            placeholder="blur"
                        />
            </div>

            <div >
                        <Image
                            src={school}
                            alt="school"
                            priority={true}
                            className="mb-20"
                            width={700}
                            height={500}
                            placeholder="blur"
                        />
            </div>

            <div >
                        <Image
                            src={tracker}
                            alt="tracker"
                            priority={true}
                            className="mb-20"
                            width={700}
                            height={500}
                            placeholder="blur"
                        />
            </div>

        </div>

        <br />

        <div className='text-center font-bold'>
            <p>And more...</p>
        </div>

    </>
  )
}

export default projects