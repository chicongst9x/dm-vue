<template>
  <div class="wrapper">
    <the-header></the-header>
    <the-content></the-content>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheContent from './TheContent'
import TheFooter from './TheFooter'

export default {
  name: 'AppMaster',
  components: {
    TheHeader,
    TheContent,
    TheFooter
  },
  data () {
    return {
      msg: 'hello vs'
    }
  }
}
</script>
