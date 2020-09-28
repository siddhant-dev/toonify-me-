<template>
  <div id="app">
    <nav>
      <div class="brand" >
          <a a @click="goto('home')">Toonify Me</a>  
      </div>
      <div class="hamburger" @click.prevent = "toggle()">
        <div class="line" :class="{toggle1:!show}"></div>
        <div class="line" :class="{toggle2:!show}"></div>
        <div class="line" :class="{toggle3:!show}"></div>
      </div>
       <ul class="nav-links">
         <li><a  @click="goto('example')">Examples</a></li>
        <li><a  @click="goto('faq')">FAQ</a></li>
        <li><a @click="goto('about')">About</a></li>
      </ul>
      
    </nav>
    
    <div class="components">
       <div ref="home">
        <Toon/>
      </div>
      
      <div ref="example">
        <Example />
      </div>
      <div ref="faq">
        <Faq/>
      </div>
      <div ref="about">
        <About/>
      </div>
      
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Toon from './components/Toon.vue'
import Faq from './components/Faq.vue'
import Example from './components/Examples.vue'
import About from './components/About.vue'
export default {
  name: 'App',
  components: {
    Toon,
    Faq,
    Example,
    About
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    goto(refName) {
        var element = this.$refs[refName];
        
        var top = element.offsetTop;
        
        window.scrollTo(0, top-60);
        if(refName != 'home')
          this.toggle();
    },
    toggle() {
      // const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");
      this.show = !this.show;
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
    height: 8vh;
    background: #121a30;
    display: flex;
    margin:0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
  }
  .brand{
    color: white;
    font-size: 20px;
    margin-left: 2rem;
    cursor: pointer;
    z-index: 5;   
    display: flex;
    align-items: center;  
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    margin-top: 0px;        
    cursor: pointer;
  }
  a{
  text-decoration: none;
  color: white;
}
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
@media screen and (max-width: 768px) {
  .line {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px;
  }
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
  }
  .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
  }
  .components{
    margin-top: 10vh;;
  }
  .nav-links {
    position: fixed;
    background: #121a30;
    opacity: 0.8;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    -webkit-clip-path: circle(100px at 90% -10%);
    transition: all 0.3s ease-out;
    pointer-events: none;
    z-index: 1;
  }
  .nav-links.open {
    clip-path: circle(1000px at 90% -10%);
    -webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
  }
  .nav-links li {
    opacity: 0;
  }
  .nav-links li a {
    font-size: 20px;
  }
  .nav-links li:nth-child(1) {
    transition: all 0.1s ease 0.2s;
  }
  .nav-links li:nth-child(2) {
    transition: all 0.1s ease 0.3s;
  }
  .nav-links li:nth-child(3) {
    transition: all 0.1s ease 0.4s;
  }
  li.fade {
    opacity: 1;
  }
  .toggle1{
    transform: rotate(-45deg) translate(-5px, 6px);
    transition: ease 0.3s;
  }
  .toggle2 {
    opacity: 0;
  }
  .toggle3{
    transform: rotate(45deg) translate(-5px, -6px);
    transition: ease 0.3s;
  }
}
</style>