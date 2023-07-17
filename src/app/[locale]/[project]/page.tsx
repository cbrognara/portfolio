import { Project } from '@/interfaces/Project'
import DoYouNeedADeveloper from '../components/DoYouNeedADeveloper'
import ProjectDescription from '../components/ProjectDescription'

import companies from '@/constants/companies'
import styles from './page.module.css'

type Props = { 
  params: {
    project: string,
  }
}

export default async function Home(props: Props) {
  const { params: { project } } = props

  let projectData: Project = {} as Project

  companies.find(company => company.projects.find(projectB => {
    if (projectB.id === project) {
      projectData = projectB
    }
  }))

  return (
    <main className={styles.Container}>
      <ProjectDescription project={projectData} />
      <DoYouNeedADeveloper />
    </main>
  )
}
