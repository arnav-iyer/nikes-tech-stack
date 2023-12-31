/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jtKDr6WLIuM
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <span className="text-lg font-semibold text-black">Nike.com&apos;s Tech Stack</span>
        </div>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Tech Stack at Nike.com</h1>
          <p className="text-gray-600">
            Nike.com uses a variety of technologies in their development. These include Next.js 10.0.9, Akamai CDN, and
            a custom Next.js server.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Role of Next.js and Akamai CDN</h2>
          <p className="text-gray-600">
            Next.js provides the React framework for building the user interface, while Akamai CDN ensures fast delivery
            of content globally.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Benefits of upgrading to Next.js 14</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Performance: Next.js 14 includes performance improvements and faster refresh times.</li>
            <li>Features: New features like concurrent rendering are introduced in Next.js 14.</li>
            <li>
              Community Support: With a newer version, there's better community support and more frequent updates.
            </li>
            <li>App Router: Next.js 14 introduces an App Router that allows for more efficient routing and navigation
              within applications.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Advantages of Moving Off a Custom Server
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 ">
            <li>Maintenance: Less maintenance is required as you don't have to manage your own server.</li>
            <li>Scaling: It's easier to scale up when traffic increases.</li>
            <li>Security: Security is handled by the platform, reducing the risk of vulnerabilities.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Role of Vercel in Nike.com&apos;s Tech Stack</h2>
          <p className="text-gray-600 ">
            Vercel, the creators of Next.js, provides a cloud platform for dyanmic sites and Serverless Functions that
            fits perfectly with Nike's tech stack. It offers benefits such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 ">
            <li>Performance: Vercel optimizes the delivery of your site for performance by default. Stop focusing on improving performance and start focusing on delivering a better UX.</li>
            <li>Scaling: With Vercel, scaling is handled automatically, no need to manually manage it for when a new shoe drops.</li>
            <li>
              Developer Experience: Vercel provides a seamless developer experience with features like integrated Git
              deployments. With an improved DX start attracting top talent to focus on building the best apps for Nike.
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link href="https://vercel.com/enterprise">
              <Button
                className="text-black hover:bg-blue-500 hover:text-white  dark:hover:bg-blue-400"
                variant="outline"
              >
                Learn More About Vercel Enterprise
              </Button>
            </Link>
            <Link href="https://nextjs.org/blog/next-14">
              <Button
                className="text-black hover:bg-blue-500 hover:text-white  dark:hover:bg-blue-400"
                variant="outline"
              >
                Learn More About Next.js 14
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="w-full h-20 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">© 2023 Nike.com Tech Stack. All rights reserved.</p>
      </footer>
    </div>
  )
}

