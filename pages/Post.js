import Layout from 'components/Layout'
import Section from 'components/Section'
import Image from 'next/image'
import ListOfCategories from 'components/ListOfCategories'
import styles from 'styles/Informe-imp.module.css'

import ilustration from 'public/virtualizacion.jpg'
import blogpersonal from 'public/blogpersonal.png'
import js from 'public/js.png'
import html from 'public/html.png'
import css from 'public/css.png'
import bootstrap from 'public/bootstrap.png'
import react from 'public/react.png'
import nodejs from 'public/nodejs.png'
import express from 'public/express.png'
import mysql from 'public/mysql.png'
import git from 'public/git.png'
import github from 'public/github.png'
import vscode from 'public/vscode.png'
import mysqlserver from 'public/mysqlserver.png'
import mysqlstudents from 'public/mysqlstudents.png'
import mysqlresources from 'public/mysqlresources.png'
import mysqlItemStudents from 'public/mysqlItemStudents.png'
import mysqlItemResources from 'public/mysqlItemResources.png'



export default function InformeImpl ({ categorias }) {
   // const {name, procesador, memoria, almacenamiento} = categorias
  
  return (
    <Layout title='Post'>

      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}>
          <Image src={ilustration} width={200} height={200} alt='virtualizacion' />
        </div>
      </div>
      <div className="container-md"> 
            <div>
                <h2 className='text-center my-2'>Virtualización: Consolidación de Servidores</h2>
                <h3 className='text-center mt-2 mb-5'>Trabajo Practico Final: Caso de Estudio</h3>
                <p mt-5>Elaborar una solución de un Blog Personal que deberá contemplar los siguientes requerimientos:</p>
                <ul>
                    <li>Listar las categorías de los temas</li>
                    <li>Detallar los datos personales del Autor e incorporar la foto del mismo</li>
                    <li>El primer y único articulo deberá ser la presentación del documento correspondiente al resultado final de este trabajo practico final, adjuntando el documento (PDF) del mismo</li>
                </ul>
                <p mt-5>Para la definición del stack tecnológico contará con el acceso a la plataforma Proxmox (https://bejuca.hopto.org:18006), en la cual deberá contemplar los siguientes puntos:</p>
                <ul>
                    <li>De acuerdo al gráfico adjunto podemos observar que la solución consta de varios servicios, entre los cuales podemos citar un servicio de interfaz a través del FrontEnd y un servicio de base de datos donde se incorporarán todos los datos necesarios para la confección de la solución.</li>
                    <li>Se deberá utilizar contenedores.  Deberán ser configurados al menos dos.  Uno con todo lo concerniente a la interfaz y otro con la base de datos.  No se podrá usar un solo contenedor para elaborar el trabajo práctico final.</li>
                    <li>Se deberá elegir las herramientas para trabajar el lo propuesto y se deberá detallar cada una de ellas en el informe final</li>
                    <li>Se deberá realizar un detalle de los recursos utilizados por cada Contenedor (con sus respectivas categorías) e incluirlo en el informe final</li>
                </ul>
            </div> 

        <div className={styles.profilePicture}>
        <center><Image src={blogpersonal} width={400} height={300} alt='blog' /> </center> 
        </div>
      </div>             
      
      <div className='container-md'>
        <h2 className='text-center my-2'></h2>
      </div> 
      <div className='container-md'>
        <h1 className='text-center my-2'>Tecnologías Utilizadas: Stack Tecnológico MERN</h1>
        <h2 className='text-center mt-2 mb-5'> FrontEnd</h2>
      </div>

      <div className='row'>
        <div className='col-8'>
          <h5>JavaScript</h5>
            <p>JavaScript (o "JS") es un lenguaje de programación que se usa con mayor frecuencia para scripts dinámicos de lado del cliente en páginas web, pero también se usa a menudo en el lado del servidor (en-US) 
              — usando un entorno de ejecución como Node.js.</p>
        </div>
        <div className='col-4'>
          <center><Image src={js} width={100} height={100} alt='js-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>HTML5</h5>
            <p>HTML es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, 
              o insertando imágenes y videos en la página.</p>
        </div>
        <div className='col-4'>
          <center><Image src={html} width={100} height={100} alt='html-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>CSS</h5>
            <p>CSS es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y 
              distribuir nuestro contenido en múltiples columnas.</p>
        </div>
        <div className='col-4'>
          <center><Image src={css} width={100} height={100} alt='CSS-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>Bootstrap</h5>
            <p>El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.
Esta es una herramienta que proporciona interactividad en la página, por lo que ofrece una serie de componentes que facilitan la comunicación con el usuario, como menús de navegación, controles de página, barras de progreso y más.
Además de todas las características que ofrece el framework, su principal objetivo es permitir la construcción de sitios web responsive para dispositivos móviles.
</p>
        </div>
        <div className='col-4'>
          <center><Image src={bootstrap} width={150} height={150} alt='bootstrap-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>React</h5>
            <p>Es una librería open source de JavaScript para desarrollar interfaces de usuario. Fue lanzada en el año 2013 y desarrollada por Facebook, quienes también la mantienen actualmente 
              junto a una comunidad de desarrolladores independientes y compañías.</p>
        </div>
        <div className='col-4'>
          <center><Image src={react} width={300} height={100} alt='react-icon' /></center>
        </div>
      </div>
      <h2 className='text-center mt-2 mb-5'>BackEnd</h2>
      <div className='row'>
        <div className='col-8'>
          <h5>NodeJS</h5>
            <p>Node.js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables. 
              Se ejecuta en el motor de ejecución de JavaScript V8, y utiliza una arquitectura de E/S basada en eventos y sin bloqueos, lo que la hace eficiente y adecuada para 
              aplicaciones en tiempo real.</p>
        </div>
        <div className='col-4'>
          <center><Image src={nodejs} width={150} height={100} alt='nodejs-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>ExpressJS</h5>
            <p>Básicamente es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el 
              enrutamiento, opciones para gestionar sesiones y cookies, etc.</p>
        </div>
        <div className='col-4'>
          <center><Image src={express} width={250} height={150} alt='express-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>MySQL</h5>
            <p>MySQL es un sistema open source de administración de bases de datos que es desarrollado y soportado por Oracle. Una base de datos es una colección 
              estructurada de datos que está organizada para ser usada y extraída de forma sencilla.</p>
        </div>
        <div className='col-4'>
          <center><Image src={mysql} width={150} height={100} alt='mysql-icon' /></center>
        </div>
      </div>

      <h2 className='text-center mt-2 mb-5'>Desarrollo y versionado</h2>
      <div className='row'>
        <div className='col-8'>
          <h5>Git</h5>
            <p>Es un sistema distribuido de control de versiones, gratuito y de código abierto basado en repositorios para almacenar las diferentes versiones del código fuente.</p>
        </div>
        <div className='col-4'>
          <center><Image src={git} width={200} height={100} alt='git-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>GitHub</h5>
            <p>Es un servicio de alojamiento en la nube de código fuente basado en el sistema de control de versiones que Git ofrece para manejar repositorios.</p>
        </div>
        <div className='col-4'>
          <center><Image src={github} width={100} height={100} alt='github-icon' /></center>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <h5>Visual Studio Code</h5>
            <p>Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. </p>
        </div>
        <div className='col-4'>
          <center><Image src={vscode} width={150} height={100} alt='vscode-icon' /></center>
        </div>
      </div>

      <div className="container-md"> 
            <div>
                <h2 className='text-center my-2'>Implementación</h2>
                <p mt-5>A continuación, se explicará la serie de pasos realizados para implementar un entorno MERN con MySQL en un contenedor LXC dentro del entorno virtual Proxmox.</p>
                <h3 className='text-center mt-2 mb-5'>Crear Contenedores</h3>
                <p mt-5>Una vez autenticados en la interfaz web de Proxmox, debemos presionar el botón “Create CT”, una ventana se abrirá solicitandonos toda la información necesaria para 
                crear el contenedor, a continuación citamos los campos más importantes y el valor asignado:</p>
                <ListOfCategories categorias={categorias} />
                <p mt-5>Para que el contenedor de la interfaz (38742005i) sea accesible desde el exterior, se configuró la siguiente dirección:</p>
                <ul>
                    <li>Dirección IP: 192.168.88.144</li>
                    <li>Puerto: 3000</li>
                    <li>IP Pública: bejuca.hopto.org:11030</li>
                </ul>
            </div> 
      </div>
      <h3 className='text-center mt-2 mb-5'>Instalación del entorno Backend</h3>
      <p mt-5>Los comandos utilizados para la instalación de nodejs en la versión 14.x fueron:</p>
                <ul>
                  <li><code>apt update</code></li>
                  <li><code>apt install curl</code></li>
                  <li><code>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</code></li>
                  <li><code>nano nodesource_setup.sh</code></li>
                  <li><code>bash nodesource_setup.sh</code></li>
                  <li><code>apt-get install -y nodejs</code></li>
                </ul>
      <p mt-5>Los comandos utilizados para la instalación de MySQL:</p>
                <ul>
                  <li><code>apt install mysql-server</code></li>
                  <li><code>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ‘42139’;</code></li>
                    <center><Image src={mysqlserver} width={1000} height={100} alt='mysqluser' /></center>
                  <li><code>CREATE DATABASE virtualization;</code></li>
                  <li><code>USE virtualization;</code></li>
                  <li><code>CREATE TABLE students (name VARCHAR(30), lastname VARCHAR(30), studentId VARCHAR(30),  subject VARCHAR(30));</code></li>
                    <center><Image src={mysqlstudents} width={500} height={200} alt='mysqlstudents' /></center>
                  <li><code>CREATE TABLE resources (name VARCHAR(30), serviceType VARCHAR(30), cpu VARCHAR(30),  memory VARCHAR(30), diskRoot VARCHAR(30), network VARCHAR(30));</code></li>
                    <center><Image src={mysqlresources} width={500} height={200} alt='mysqlsresources' /></center>
                  <li><code>INSERT INTO students (name, lastname, studentId, subject) VALUES (‘Julieta Agustina’, ‘Aro’, ‘42139’, ’Virtualización’);</code></li>
                    <center><Image src={mysqlItemStudents} width={500} height={200} alt='item-student' /></center>
                  <li><code>CREATE TABLE resources (name VARCHAR(30), serviceType VARCHAR(30), cpu VARCHAR(30),  memory VARCHAR(30), diskRoot VARCHAR(30), network VARCHAR(30));</code></li>
                    <center><Image src={mysqlItemResources} width={500} height={200} alt='item-resources' /></center>
                </ul>
                <p mt-5>Los comandos utilizados para la instalación de GIT:</p>
                <ul>
                  <li><code>apt install git</code></li>
                </ul>

                <h3 className='text-center mt-2 mb-5'>Instalación del entorno Frontend</h3>
      <p mt-5>Los comandos utilizados para la instalación de nodejs en la versión 14.x fueron:</p>
                <ul>
                  <li><code>apt update</code></li>
                  <li><code>apt install curl</code></li>
                  <li><code>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</code></li>
                  <li><code>nano nodesource_setup.sh</code></li>
                  <li><code>bash nodesource_setup.sh</code></li>
                  <li><code>apt-get install -y nodejs</code></li>
                </ul>
                <p mt-5>Los comandos utilizados para la instalación de GIT:</p>
                <ul>
                  <li><code>apt install git</code></li>
                </ul>

                <h3 className='text-center mt-2 mb-5'>Ejecución de nuestro Stack Tecnológico MERN</h3>
                <p mt-5>Desde nuestro contenedor de la Base de Datos, realizamos las siguientes instrucciones:</p>
                <ol>
                  <li>Clonamos el proyecto donde tenemos alojada nuestra API con el comando "git clone"</li>
                  <li>Una vez clonado el proyecto, accedemos al mismo y ejecutamos "npm install" para instalar todas las dependencias necesarias</li>
                  <li>Para levantar la API, ejecutamos "npm start"</li>
                </ol>
                <p mt-5>Desde nuestro contenedor dedicado a la interfaz, realizamos las siguientes instrucciones:</p>
                <ol>
                  <li>Clonamos el proyecto donde tenemos alojada nuestra API con el comando "git clone"</li>
                  <li>Una vez clonado el proyecto, accedemos al mismo y ejecutamos "npm install" para instalar todas las dependencias necesarias</li>
                  <li>Para levantar la interfaz, ejecutamos "npm start" y acccedemos a la ip pública del mismo, y debemos comprobar que el blog se encuentra en servicio .</li>
                </ol>

    </Layout>
  )
}

export async function getStaticProps () {
  const categorias = await fetch('http://192.168.88.156:4000/resources').then(res => { return res.json() })
  
  return {
    props: {
      categorias
    }
  }
}