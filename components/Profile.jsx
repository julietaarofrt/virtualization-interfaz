import Section from 'components/Section'
import styles from 'styles/Profile.module.css'
import ProfilePicture from 'components/ProfilePicture'
import DataDownload from './DataDownload'

export default function Profile ({ datosPersonales }) {
  // const { name, lastname, studentId, subject } = datosPersonales[0]
  return (
    <>
      <Section className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicture}>
            <ProfilePicture />
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileContent}>
              <h1 className={styles.title}>
                UNIVERSIDAD TECNOLOGICA NACIONAL
                <p className={styles.greet}>
                FACULTAD REGIONAL TUCUMAN
              </p>
              </h1>
              <h2 className={styles.title}>Virtualización: Consolidación de Servidores</h2>
              <p className={styles.personalData}>
                <span>
                  Nombre y Apellido: 
                </span>
                {/* {} {name} {lastname} */}
              </p>
              <p className={styles.personalData}>
                <span >
                  Materia: 
                </span>
                {/* {} {subject} */}
              </p>
              <p className={styles.personalData}>
                <span>
                  Legajo:  
                </span>
                {/* {} {studentId} */}
              </p>
            </div>
            <DataDownload />
          </div>
        </div>
      </Section>
    </>
  )
}
