import { LikeC4 } from 'likec4'
import { test } from 'vitest'
const likec4 = await LikeC4.fromWorkspace('.')
const model = await likec4.computedModel()

console.log(model.elements().toArray())


test('Validar errores', ({ expect }) => {
  expect(likec4.hasErrors()).toBeFalsy()
})

test.for(
  model.elementsWhere({ kind: 'service' }).map(el => [el.id, el] as const).toArray(),
)('service "%s" tiene tecnologia', ([, el], { expect }) => {
  expect(el.technology).toBeTruthy()
}) 

