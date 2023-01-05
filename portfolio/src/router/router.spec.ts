
import { mount } from '@vue/test-utils'
import App from "@/App.vue"
import router from '@/router/index'
test('routing', async () => {
    router.push('/')
  
    // After this line, router is ready
    await router.isReady()
  
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('Nguyen Duc Duy')
  })