<template>
  <div class="social-btns">
    <a
      class="btn linkedin"
      href="https://www.linkedin.com/in/patriknil90/"
      target="_blank"
    ><i class="fab fa-linkedin-in" /></a>
    <a
      class="btn github"
      href="https://github.com/patriknil90"
      target="_blank"
    ><i class="fab fa-github" /></a>
    <a
      class="btn email"
      href="mailto:patriknil90@gmail.com"
    ><i class="far fa-envelope" /></a>
  </div>
</template>

<style lang="scss">
.social-btns .btn,
.social-btns .btn:before,
.social-btns .btn .fab,
.social-btns .btn .far {
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.social-btns .btn:before {
  top: 90%;
  left: -110%;
}
.social-btns .btn .fab,
.social-btns .btn .far {
  -webkit-transform: scale(0.8);
          transform: scale(0.8);
}
.social-btns .btn.linkedin:before {
  background-color: #0077B5;
}
.social-btns .btn.linkedin .fab {
  color: #0077B5;
}
.social-btns .btn.github:before {
  background-color: #24292E;
}
.social-btns .btn.github .fab {
  color: #24292E;
}
.social-btns .btn.email:before {
  background-color: #dc4a38;
}
.social-btns .btn.email .far {
  color: #dc4a38;
}
.social-btns .btn:focus:before,
.social-btns .btn:hover:before {
  top: -10%;
  left: -10%;
}
.social-btns .btn:focus .fab,
.social-btns .btn:focus .far,
.social-btns .btn:hover .fab,
.social-btns .btn:hover .far {
  color: #fff;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.social-btns {
  display: block;
  height: 90px;
  margin: 0 auto;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.social-btns .btn {
  display: inline-block;
  margin: 0 15px 15px;
  background-color: #fff;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1);
  opacity: 0.99;
  @media (min-width: 680px) {
    display: inline-block;
    margin: 0 10px;
    width: 90px;
    height: 90px;
    line-height: 90px;
  }
}
.social-btns .btn:before {
  content: '';
  width: 120%;
  height: 120%;
  position: absolute;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.social-btns .btn .fab,
.social-btns .btn .far {
  font-size: 38px;
  vertical-align: middle;
}

</style>

