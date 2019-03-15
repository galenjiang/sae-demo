import './style.css'
import { map } from 'ramda'

console.log(
  map((text: string) => {
    return text.toUpperCase()
  })('app'),
)

import('./test').then(({ test }) => {
  test()
})
