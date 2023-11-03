/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jtKDr6WLIuM
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            alt="Nike Logo"
            className="h-8 w-auto"
            height={50}
            src="https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4/industry/services/advertising/hidden-meaning-of-11-worlds-most-famous-logos/nike.jpg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
          </svg>
          <span className="text-lg font-semibold text-black dark:text-white">Nike.com Tech Stack</span>
        </div>
        <nav className="space-x-4">
          <Link className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400" href="#">
            Home
          </Link>
          <Link className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400" href="#">
            About
          </Link>
          <Link className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Tech Stack at Nike.com</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Nike.com uses a variety of technologies in their development. These include Next.js 10.0.9, Akamai CDN, and
            a custom Next.js server.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Role of Next.js and Akamai CDN</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js provides the React framework for building the user interface, while Akamai CDN ensures fast delivery
            of content globally.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Moving to Next.js 14</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Performance: Next.js 14 includes performance improvements and faster refresh times.</li>
            <li>Features: New features like concurrent rendering are introduced in Next.js 14.</li>
            <li>
              Community Support: With a newer version, there's better community support and more frequent updates.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Advantages of Moving Off a Custom Server
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Maintenance: Less maintenance is required as you don't have to manage your own server.</li>
            <li>Scaling: It's easier to scale up when traffic increases.</li>
            <li>Security: Security is handled by the platform, reducing the risk of vulnerabilities.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Role of Vercel in Nike.com Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Vercel, the creators of Next.js, provide a cloud platform for static sites and Serverless Functions that
            fits perfectly with Nike's tech stack. It offers benefits such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Performance: Vercel optimizes the delivery of your site for performance by default.</li>
            <li>Scaling: With Vercel, scaling is handled automatically, no need to manually manage it.</li>
            <li>
              Developer Experience: Vercel provides a seamless developer experience with features like integrated Git
              deployments.
            </li>
          </ul>
        </section>
      </main>
      <footer className="w-full h-20 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">© 2023 Nike.com Tech Stack. All rights reserved.</p>
      </footer>
    </div>
  )
}

