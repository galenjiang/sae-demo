import './containers/app'
import './style.css'
import { test } from './components/test1'

import { map } from 'ramda'

console.log(
  map((text: string) => {
    return text.toUpperCase()
  })('index'),
)

console.log('index')
test()
