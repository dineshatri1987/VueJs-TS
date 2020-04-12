import Header from '../../core/Header/Header.vue'
import Footer from '../../core/Footer/Footer.vue'
import HelloWorld from '../../shared/HelloWorld/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Header,
    Footer,
    HelloWorld
  }
})
export default class Home extends Vue {
}
