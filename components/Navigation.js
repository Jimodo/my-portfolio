import Link from "next/link"
import React from "react"


const Navigation = () => {
    return (
        <nav className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <ul className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <li>
                    <Link href="/">
                        <div
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Jimodo Joretta Ogada
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <div
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Projects
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;