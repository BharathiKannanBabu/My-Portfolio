import styles from './ProjectStyles.module.css'
import githubAppPic from '../../assets/github-app-pic.png'
import ProjectCard from '../../common/ProjectCard'
import MiniEcommerceAppPic from '../../assets/mini-ecommerce-siteipic.png'
import InstaCloneAppPic from '../../assets/Instagram-clone-pic.png'

function Project() {
  return (
    <section id='project' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
              src={githubAppPic} 
              link={'https://github.com/BharathiKannanBabu/mern-github-app'} 
              h3={'Github App'}
            />
            <ProjectCard 
              src={MiniEcommerceAppPic} 
              link={'https://github.com/BharathiKannanBabu/Mini-Ecommerce-Website'} 
              h3={'Mini Ecommerce App'}
            />
        </div>
    </section>
  )
}

export default Project
