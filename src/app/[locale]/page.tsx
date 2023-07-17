import Presentation from './components/Presentation'
import Portfolio from './components/Portfolio'
import Recommendations from './components/Recommendations'
import Stack from './components/Stack'
import DoYouNeedADeveloper from './components/DoYouNeedADeveloper'

import styles from './page.module.css'

export default async function Home() {
  return (
    <main className={styles.Home}>
      <Presentation />
      <Portfolio />
      <Recommendations />
      <Stack />
      <DoYouNeedADeveloper />
    </main>
  )
}
