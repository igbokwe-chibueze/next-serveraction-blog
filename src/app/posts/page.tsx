import PostsList from '@/components/PostsList'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  )
}

export default page