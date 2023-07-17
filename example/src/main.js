import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import CUI from 'c-ui';
// import 'c-ui/style/index.css'

// import CButton from 'c-ui/es/c-button';
// import CInput from 'c-ui/es/c-input';
// import 'c-ui/style/c-input.css'
// import 'c-ui/style/c-button.css'

import { CButton, CInput } from 'c-ui'

// import CInput from 'c-ui/es/c-input';
// import Hello from '@/components/HelloWorld.vue'

createApp(App).use(CInput).use(CButton).use(router).mount('#app')
