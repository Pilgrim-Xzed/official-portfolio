<template>
  <div>
     <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand"><a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start"></div>
          <div class="navbar-end"><a class="navbar-item" href="mentorship.html">Mentorship</a>
            <div class="navbar-item"><a class="button is-primary is-outlined is-rounded" href="contact.html">Say Hello</a></div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero is-white has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{{this.$store.state.title}}</h1>
              <h2 class="subtitle is-size-4-desktop">{{this.$store.state.meta}}.</h2><img class="avatar" src="img/mf-avatar.svg">
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container"><img class="is-bottom" src="img/hero.png"></div>
      </div>
    </section>
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">{{this.$store.state.intro}}.</h1>
            <h2 class="subtitle is-size-5-desktop">{{this.$store.state.aboutme}}</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section skills has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns is-centered">
              <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/designer.png"></figure>
               
              
              </div>
              <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/python.png"></figure>
               
                
              </div>
              <div class="column"> 
                <figure class="image"><img class="is-skill-icon" src="img/icons/vur.svg"></figure>
             
              </div>

                  <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/basic.png"></figure>
               
              
              </div>
              <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/flutter.png"></figure>
               
                
              </div>
              <div class="column"> 
                <figure class="image"><img class="is-skill-icon" src="img/icons/gcp.png"></figure>
              
              </div>

              
            </div>

            
          </div>

          <div class="container is-narrow">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Other Technologies include</h1>
           
          </div>
        </div>
        <div class="benefits-grid">
          <div class="columns is-multiline is-centered">
            <div class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span class="icon has-text-primary"><svg class="svg-inline--fa fa-tools fa-w-16 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="tools" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"></path></svg><!-- <i class="fal fa-tools fa-3x"></i> --></span>
            
              <h1>GraphQL</h1>
            </div>
            <div class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span class="icon has-text-primary"><svg class="svg-inline--fa fa-book-spells fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="book-spells" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 144c0 6.06 3.44 11.59 8.84 14.31l37.88 18.94 18.97 37.91c2.72 5.42 8.25 8.84 14.31 8.84s11.59-3.42 14.31-8.84l18.94-37.91 37.91-18.94c5.41-2.7 8.84-8.25 8.84-14.31s-3.44-11.61-8.84-14.31l-37.91-18.94-18.94-37.91C155.59 67.42 150.06 64 144 64s-11.59 3.42-14.31 8.84l-18.97 37.91-37.88 18.94C67.44 132.41 64 137.94 64 144zm65.81-7.02a16.15 16.15 0 0 0 7.16-7.16l7.03-14.05 7 14.05c1.56 3.09 4.06 5.61 7.16 7.16l14.03 7.02-14.03 7.02a16.15 16.15 0 0 0-7.16 7.16l-7 14.05-7.03-14.05a16.101 16.101 0 0 0-7.16-7.16L115.78 144l14.03-7.02zM192 256c0 6.06 3.44 11.59 8.84 14.31l48.56 24.28 24.28 48.56c2.72 5.42 8.25 8.84 14.31 8.84s11.59-3.42 14.31-8.84l24.28-48.56 48.56-24.28c5.41-2.72 8.84-8.25 8.84-14.31s-3.44-11.59-8.84-14.31l-48.56-24.28-24.28-48.56c-5.44-10.84-23.19-10.84-28.62 0l-24.28 48.56-48.56 24.28c-5.4 2.72-8.84 8.25-8.84 14.31zm76.5-12.36a16.15 16.15 0 0 0 7.16-7.16l12.34-24.7 12.34 24.7c1.56 3.09 4.06 5.61 7.16 7.16L332.22 256l-24.72 12.36a16.15 16.15 0 0 0-7.16 7.16L288 300.22l-12.34-24.7a16.101 16.101 0 0 0-7.16-7.16L243.78 256l24.72-12.36zM448 392V24c0-13.3-10.7-24-24-24H80C35.8 0 0 35.8 0 80v368c0 35.35 28.65 64 64 64h372c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-3.3c-4-20.2-3.2-49.7.4-65.8 8.7-3.6 14.9-12.2 14.9-22.2zm-43.7 88H64c-17.67 0-32-14.33-32-32s14.33-32 32-32h340.3c-2.9 18.8-3.1 43.6 0 64zm11.7-96H64c-11.72 0-22.55 3.38-32 8.88V80c0-26.5 21.5-48 48-48h336v352z"></path></svg><!-- <i class="fal fa-book-spells fa-3x"></i> --></span>
            
              <h1>Firebase</h1>
          
            </div>
            <div class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span class="icon has-text-primary"><svg class="svg-inline--fa fa-chart-network fa-w-20 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-network" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M513.6 202.8l-19.2-25.6-48 36 19.2 25.6 48-36zM576 192c13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 153.6 640 141.3 640 128c0-13.3-4-25.6-10.9-35.8-2.3-3.4-4.9-6.6-7.8-9.5-2.9-2.9-6.1-5.5-9.5-7.8C601.6 68 589.3 64 576 64s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C516 102.4 512 114.7 512 128c0 35.3 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM99.8 250.9C89.6 244 77.3 240 64 240s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C4 278.4 0 290.7 0 304c0 35.3 28.7 64 64 64s64-28.7 64-64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3zM64 336c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm88-16h48v-32h-48v32zm469.3 82.7c-2.9-2.9-6.1-5.5-9.5-7.8C601.6 388 589.3 384 576 384s-25.6 4-35.8 10.9c-3.3 2.2-6.3 4.7-9.1 7.5l-91.8-55.1c5.6-13.3 8.7-28 8.7-43.3 0-61.9-50.1-112-112-112-11.3 0-21.9 2.2-32.2 5.2l-39.3-84.1C278.8 101.4 288 83.9 288 64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3C249.6 4 237.3 0 224 0s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C164 38.4 160 50.7 160 64c0 35.3 28.7 64 64 64 4 0 7.9-.5 11.7-1.2l39 83.6c-30.5 20-50.7 54.4-50.7 93.6 0 61.9 50.1 112 112 112 35 0 65.8-16.4 86.4-41.5l92.4 55.4c-1.7 5.8-2.7 11.8-2.7 18.1 0 35.3 28.7 64 64 64 13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 473.6 640 461.3 640 448c0-13.3-4-25.6-10.9-35.8-2.3-3.4-5-6.6-7.8-9.5zM224 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm112 288c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm240 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"></path></svg><!-- <i class="fal fa-chart-network fa-3x"></i> --></span>
             
              <h1>MongoDB</h1>
            </div>
            <div class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span class="icon has-text-primary"><svg class="svg-inline--fa fa-door-open fa-w-20 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="door-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M288 288c13.25 0 24-14.33 24-32s-10.75-32-24-32-24 14.33-24 32 10.75 32 24 32zm344 192H512V96c0-17.67-14.33-32-32-32h-96V33.18C384 14.42 369.2 0 352.06 0c-2.57 0-5.19.32-7.83 1.01l-192 49.74C137.99 54.44 128 67.7 128 82.92V480H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM352 33.18V480H160l.26-398.27 191.8-49.69-.06 1.14zM480 480h-96V96h96v384z"></path></svg><!-- <i class="fal fa-door-open fa-3x"></i> --></span>
            
             <h1>MySQL</h1>
            </div>
            <div class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span class="icon has-text-primary"><svg class="svg-inline--fa fa-rocket fa-w-16 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505.09 19.34A16.08 16.08 0 0 0 492.73 7c-32.61-7-58.13-7-83.56-7C305.44 0 243 55.1 196.27 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h92.6l-10.59 21.42a31.75 31.75 0 0 0 6.15 36.63L166 399.77a32 32 0 0 0 22.61 9.43 31.58 31.58 0 0 0 14-3.29L224 395.33V488a24.08 24.08 0 0 0 24 24 23.66 23.66 0 0 0 10.63-2.53l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V315.71C456.61 268.93 512 206.25 512 103c.08-25.53.08-51-6.91-83.66zM128 256H37l43.59-87.2a16.09 16.09 0 0 1 14.28-8.8h85.18c-13.94 28.07-31.72 64-47.56 96zm223.86 161.18a16 16 0 0 1-8.86 14.28L256 475v-95.52c32-15.83 67.82-33.59 95.86-47.54zM366.5 288.9c-39.5 19.78-135.87 67.45-177.91 88.24l-53.82-53.55C155.64 281.36 203.3 185 223 145.41 273.21 67 330.68 32 409.17 32c21.54 0 42 0 66.63 4.29 4.34 24.87 4.26 45.21 4.18 66.7C480 181.07 445 238.46 366.5 288.9zM368 80a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64zm0 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path></svg><!-- <i class="fal fa-rocket fa-3x"></i> --></span>
            
                   <h1>postgreSQL</h1>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      
    </section>
    <section class="section projects is-medium is-white has-text-centered">
      <div class="container is-narrow">
        <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
        <h2 class="subtitle is-size-5-desktop">Here are a few recent design projects. Want to see more? <a href="cdn-cgi/l/email-protection.html#432e2237370333262d272622352c316d202c2e">Email me</a>.</h2>
        <div class="project-grid">  
          <div class="columns is-multiline is-mobile">
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/awg2020.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Uniting First Nations culture and community through winter sports competition.</h1><a class="button is-primary is-outlined is-rounded" href="http://awg2020.org/" target="_blank"><span>Visit Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/chronicled.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Blockchain pioneers bringing transparency, trust, and security to supply.</h1><a class="button is-primary is-outlined is-rounded" href="https://www.chronicled.org/" target="_blank"><span>Visit Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/glcsolutions.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Business savvy tech experts helping forward thinking companies get things done.</h1><a class="button is-primary is-outlined is-rounded" href="http://glcsolutions.ca"><span>Visit Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/coupal.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Vancouver's tower crane rental service and support leader since 1974.</h1><a class="button is-primary is-outlined is-rounded" href="http://coupalcranes.com/" target="_blank"><span>Visit Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/wedlerengineering.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Results-oriented, responsive and flexible full service civil engineering firm.</h1><a class="button is-primary is-outlined is-rounded" href="http://wedler.com" target="_blank"><span>View Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src="img/projects/southwestforestproducts.png">
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">Custom lumber product supplier serving the Canadian construction industry.</h1><a class="button is-primary is-outlined is-rounded" href="http://www.southwestforest.com/" target="_blank"><span>Visit Website</span><span class="icon"><i class="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  
    <section class="section is-medium is-primary has-text-centered is-long-ish">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Startup Projects</h1>
            <h2 class="subtitle is-size-5-desktop">I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section startups has-text-centered">
      <div class="container is-narrow">
        <div class="startup-grid">
          <div class="columns is-centered level">
            <div class="column level-item">
              <div class="box"><img class="logo" src="img/logos/basin.svg">
                <p>Simple form backend for designers and developers. Easy to setup. No coding required.</p><a class="link has-text-primary" href="https://usebasin.com">www.usebasin.com</a>
              </div>
            </div>
            <div class="column level-item">
              <div class="box"><img class="logo" src="img/logos/ylbuilders.svg">
                <p>Beautifully simple websites for independent distributors of Young Living Essential Oils.</p><a class="link has-text-primary" href="https://ylbuilders.com">www.ylbuilders.com</a>
              </div>
            </div>
            <div class="column level-item">
              <div class="box"><img class="logo" src="img/logos/houston.svg">
                <p>Simple feedback and engagement tools for teams that want to build and ship winning products.</p><a class="link has-text-primary button" style="border: none; padding: 0; height: 27px;" disabled="">Relaunching Q4 2019        </a>
              </div>
            </div>
          </div>
        </div>
        <div class="callout">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced">Interested in collaborating or investing?</h1>
              <h2 class="subtitle is-size-5-desktop">I’m always open to discussing product design work or partnership opportunities.</h2><a class="button is-primary is-outlined is-rounded is-medium" href="startup-inquiry.html">Start a conversation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="section call-to-action is-primary has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="columns level">
            <div class="column level-item">
              <h1 class="title">Start a project</h1>
            </div>
            <div class="column level-item">
              <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div class="column level-item"><a class="button is-primary is-outlined is-rounded is-medium" href="project-planner.html">Let's do this</a></div>
          </div>
        </div>
      </div>
    </section>
    <footer class="section is-primary is-small has-text-centered">
      <div class="container is-narrow"><a class="logo" href="index.html"><img src="img/mf-logo-white.svg" alt="Matt Farley | Designer, Front-end Developer &amp; Mentor" height="48"></a>
        <div class="columns is-centered"> 
          <div class="column is-one-third">
            <h1 class="title is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</h1>
          </div>
        </div>
        <div class="social-icons">
          <p class="field"><a class="button is-medium" href="https://twitter.com/farleymatters" target="_blank"><span class="icon is-small"><i class="fab fa-twitter fa-fw"></i></span></a><a class="button is-medium" href="https://dribbble.com/mattfarley" target="_blank"><span class="icon is-small"><i class="fab fa-dribbble fa-fw"></i></span></a><a class="button is-medium" href="https://www.linkedin.com/in/matthew-farley-32526014/" target="_blank"><span class="icon is-small"><i class="fab fa-linkedin-in fa-fw"></i></span></a><a class="button is-medium" href="https://angel.co/mattfarley" target="_blank"><span class="icon is-small"><i class="fab fa-angellist fa-fw"></i></span></a><a class="button is-medium" href="https://www.producthunt.com/@farleymatters" target="_blank"><span class="icon is-small"><i class="fab fa-product-hunt fa-fw"></i></span></a><a class="button is-medium" href="cdn-cgi/l/email-protection.html#8ae7ebfefecafaefe4eeefebfce5f8a4e9e5e7" target="_blank"><span class="icon is-small"><i class="far fa-envelope fa-fw"></i></span></a></p>
        </div>
        <div class="copyright">Handcrafted by me<span class="icon has-white-text" style="vertical-align:middle;"><i class="far fa-copyright"></i></span>twentynineteen</div>
        <div class="made-by-bulma"><a href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"></a></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {

    }
  }

}
</script>
