<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e5e5e5;
}

body {
  background: #14213d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgba(164, 122, 64, 0.82);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fca311;
}

button {
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #14213d;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1.2rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  box-shadow: #fca311 0 0 0 3px, transparent 0 0 0 0;
}

input {
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  border-width: 0;
}

input:focus {
  box-shadow: #fca311 0 0 0 3px, transparent 0 0 0 0;
  outline: none;
}

</style>
