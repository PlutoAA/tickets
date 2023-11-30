import { withHydrate } from 'effector-next'
import { useEffect, useState } from 'react'

const enhance = withHydrate()

function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <Component {...pageProps} />
      </>
    )
  )
}

export default enhance(App)