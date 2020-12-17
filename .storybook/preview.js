import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

addDecorator(withKnobs)
