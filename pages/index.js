import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profilePic from '../public/tiendas.png'
import foto from '../public/negocios_rentables_peru.jpg'
import mascotas from '../public/mascotas.jpeg'
import cursos from '../public/cursos-online-negocio.jpg'
import inmuebles from '../public/venta-inmuebles.jpg'
import fitness from '../public/negocio-fitness.jpg'
import acciones from '../public/negocios-bolsa.jpg'
import agua from '../public/negocio-agua-embotellada.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Los negocios más rentable en Perú en 2022</title>
        <meta name="description" content="Los 7 negocios más rentables en Perú en 2022 " />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='container'>
      
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          Negocios Rentables
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Inicio
          </a>

          <a className="navbar-item">
            Productos
          </a>

          <a className="navbar-item">
            Nosotros
          </a>

          <a className="navbar-item">
            Contacto
          </a>

          <a className="navbar-item">
            Blog
          </a>

          
        </div>

       
      </div>
    </nav>

      <div className="columns is-mobile ml-2">

      <div className="column is-full-mobile is-full-tablet is-three-quarters-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
      
      

      <main >

      <div className="content is-medium">

        <Image
        src={foto}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        <h1 className="title is-1 mt-5" >
          Los 7 negocios más rentables en Perú 2022 
        </h1>

        <p>
        Si estas pensando en iniciar tu <span className="tag is-primary is-light is-large">propio negocio</span> o tu emprendimiento, en este articulo te contamos cuales son <strong>los negocios más rentables en Perú en 2022 </strong> en donde invertir.
          
        </p>

        <p>
        La inversión requerida para iniciar cualquiera de estos negocios va a depender de muchos factores como son el tipo de producto o servicio ya que algunos  son negocios digitales y otros negocios que requieren de un local, la ubicación tambien es muy importante.
        </p>

        <blockquote>En el 2019, el Global Entrepreneurship Monitor catalogó a Perú como el tercer mejor país para emprender en Latinoamérica y el octavo en el mundo, esto nos da una gran oportunidad de crear <strong>negocios con futuro en el Perú.</strong></blockquote>

        <p>
        Si quieres convertirte en empresario y buscas algunas <strong>ideas de negocios rentables en Perú para el 2022 </strong>, te traemos una lista de algunas recomendaciones que te pueden resultar interesantes.
        </p>

        <h2>Mejores negocios rentables en Perú para el 2022</h2>

        <p>A continuación te contamos cuales son  los negocios con más perspectivas de crecimiento en Perú  en los proximos años.</p>

        <h3>Negocio de agua de mesa o embotellada.</h3>
        <Image
        src={agua}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        <p>Uno de los <strong>negocios más rentables</strong> que puedes iniciar  en el Perú es el negocio del agua embotellada o agua de mesa.</p>

        <p>Los habitos hacia una alimentación más saludable esta creciendo cada día; mientras que el consumo de gaseosas y bebidas azucaradas disminuye, el consumo de agua de mesa se incrementa cada año.</p>
        <p>Este negocio conciste en vender agua de mesa en diferentes presentaciones de 20 litros, 7 litros y 1 litro, tus clientes pueden ser desde hogares, tiendas, <span className="tag is-primary is-light is-large">negocios y empresas</span>. Para iniciar con este negocio es necesario comprar los equipos de tratamiento, un local donde instalaras la plantas de agua y todos los permisos necesarios.</p>

        <p>Si te interesa este negocio,encontraras toda la información y asesoria en el siguiente link <a href="https://essence.pe/">Aquí</a></p>

        


        <h3>Negocio de nutrición y fitness</h3>
        <Image
        src={fitness}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        <p>Este nicho va de la mano con el estilo fitness, considerada como una de las <strong>tendencias de negocios en Perú para el 2022</strong>. Cada día son más las personas que se preocupan de su estilo de vida y quiren seguir una dieta saludable.</p>
        <p>Hoy en día muchas personas no tienen tiempo para preparar una comida saluable,una idea es el delivery de comida saludable a domicilio y oficina, podrías ofrecer planes de nutrición para que las personas cumplan sus objetivos nutricionales y tambien una asesoría personalizada.</p>
        
        <p>En esta <strong>idea de negocio para inicar en Perú este 2022</strong>, puedes considerar también, vender y distribuir productos que se utilizan en el mundo fitness, como: suplementos alimenticios, ropa y calzado para hacer deportes, accesorios como pesas, mancuernas, colchoneta, bancas, entre otros.</p>
        <p>Es fundamental brindar una atención personalizada a tus clientes, esto ayudará a que se sientan más motivados y sigan comprando tu producto. La clave para que este <span className="tag is-primary is-light is-large">negocio sea exitoso</span> y se mantenga, es la buena atención y la comunicación con los clientes.</p>

        <h2>Tienda online o Ecommerce</h2>
        <Image
        src={profilePic}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

        <p>Cada día es más común el uso del e-commerce o venta de productos online, y la pandemia ha hecho que sea uno de los negocios virtuales más rentables para los peruanos. Actualmente, casi cualquier producto puede ofrecerse en venta a través del internet.</p>
        
        


        <p>Si contamos con suficiente capital, se puede optar por la modalidad de Dropshipping. Se trata de un sistema de comercio electrónico, que consiste en ser intermediario entre el cliente y la empresa mayorista que ofrece los productos, lo cual minimiza los gastos de inversión, generando mayores ganancias de forma segura. Por lo tanto, estos son de <strong>los mejores negocios con futuro en Perú en el 2022</strong> .</p>
        <p>Puedes vender casi cualquier cosa por interner, desde celulares y accesorios, computadoras, ropa, alimentos para mascotas, etc.</p>
        <p>La clave de este negocio es un buscar un producto que muchas personas quieran y esten dispuestas a comprar por internert, podrías iniciar creando tu pagina de facebook o instagram, y ofrecer tus productos por estas redes sociales.</p>

        <h3>Venta de productos para mascotas</h3>
        <Image
        src={mascotas}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        <p>Actualmente, la mayoría de las personas cuentan con una mascota en sus hogares, sobre todo en América Latina, por lo tanto, ofrecer productos y servicios para mascotas es idea rentable como <strong>negocio para comenzar en Perú este 2022</strong>.</p>
        
        
        <p>Las mascotas se han convertido en miembros de la familia, por lo que muchos dueños bucscan engreir a sus mascotas.  En este nicho pueden ofrecer una gran variedad de productos y servicios tales como:</p>

        <ul>
          <li>Juguetes y accesorios</li>
          <li>Artículos para la higiene y cuidado de las mascotas</li>
          <li>Alimentos para mascotas naturales</li>
          <li>Medicamentos especiales para tratar pulgas y enfermedades</li>
          <li>Servicio de peluquería y baño para mascotas</li>
          <li>Entrenamiento de mascotas</li>


        </ul>

        <h3>Educación en linea</h3>
        <Image
        src={cursos}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

        <p>Todos contamos con un conocimiento especifico en alguna materia, por lo tanto, no es mala idea compartirlos con la finalidad de hacer algo de dinero. Esta es una excelente oportunidad para profesores, licenciados, ingenieros y cualquier especialista en un área determinada.</p>
        
       
        <p>Puedes crear tus cursos online y venderlos desde una paltaforma, <strong>los precios a los que puedes ofercer tus cursos van desde los 10 a 500 dolares</strong>, dependiendo del interes de las personas en el tema, por ejemplo algunos cursos que actualmente son muy demandados son cursos de programación web,  idiomas, marketing digital, como invertir en bolsa, diseño digital, etc.  Una plataforma ene la que podrias vender tus cursos son Udemy o Crehana.</p>

        <h3>Compra y venta de propiedades</h3>
        <Image
        src={inmuebles}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

        <p>Esta idea requiere de capital para invertir y donde las ganancias pueden llegar a ser bastante elevadas. La compra, venta y alquiler de inmuebles es <strong>un negocio rentable en Perú</strong>, considerado como un país con gran crecimiento económico.</p>
      
        <p>Lo primero a tomar en cuenta es la zona donde está el inmueble, el monto a invertir y la proyección de las ganancias.</p>

        <h3>Compra de acciones</h3>
        <Image
        src={acciones}
        alt="Negocios rentables en peru"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

        <p>Cada vez más peruanos entran al mundo de la inversión en activos financieros, por ejmeplo compra y venta de acciones en las diferentes plataformas digitales. Esto puede generar una buena cantidad de ingresos si estas capacitado para invertir tu dinero correctamente . Lo bueno es que existen plataformas especializadas que se utilizan tanto por profesionales como por principiantes.</p>
        <p><span className="tag is-danger is-light is-large">Conclusión:</span></p>
        <p>Estas son solo algunas de las ideas de <strong>negocios para iniciar en Perú este 2022</strong> que pueden llegar a ser muy rentables. Nunca olviden que la clave del éxito es mantenerse en continua innovación y aprendizaje. El 2022 llega con muchas ganas de seguir adelante, no pierdan la oportunidad de emprender en alguno de estos negocios en Perú.</p>

        </div>

        

     
      </main>

     
      </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Negocios rentables en Perú -  2022</strong>, todos los derechos reservados 
          </p>
        </div>
      </footer>

    </div>
    </div>
    
  )
}
