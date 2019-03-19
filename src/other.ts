import './containers/app'
import './style.css'
import { test as test1 } from './components/test1'

import { test as test2 } from './components/test2'

import { map } from 'ramda'

console.log(
  map((text: string) => {
    return text.toUpperCase()
  })('index'),
)

test1()
test2()
