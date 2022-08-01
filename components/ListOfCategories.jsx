import styles from 'styles/ListOfCategories.module.css'
import Section from './Section'

export default function ListOfCategories ({ categorias }) {
  return (
    <Section className={styles.section}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th scope="col">Nombre</th>
            <th scope="col">Servicio</th>
            <th scope="col">Especificación</th>
          </tr>
        </thead>
        { <tbody>
          {categorias.map(({ name, serviceType, cpu, memory, diskRoot, network }) => (
            <tr className={styles.tr} key={'1'}>
              <td className={styles.td}>{name}</td>
              <td className={styles.td}>{serviceType}</td>
              <td className={styles.td}>
                <ul className={styles.listUl}>
                  <li>Procesador: {cpu}</li>
                  <li>Memoria: {memory}</li>
                  <li>Almacenamiento: {diskRoot}</li>
                  <li>Red: {network}</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>}
      </table>
    </Section>
  )
}