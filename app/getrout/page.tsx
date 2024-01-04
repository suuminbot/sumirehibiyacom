'use client'

import { useRouter } from 'next/router'

function CurrentURL() {
  const router = useRouter()
  const currentURL = router.asPath

  return (
    <div>
      <p>Current URL: {currentURL}</p>
    </div>
  )
}

export default CurrentURL
