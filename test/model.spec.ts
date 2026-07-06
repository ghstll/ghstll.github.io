import {LikeC4} from 'likec4'
import {expect, test} from 'vitest'

const likec4 = await LikeC4.fromWorkspace('../architecture.c4')


test('el modelo no tiene errores',({expect}) =>{
  expect(likec4.getErrors()).toEqual([])
  

})

test('cada servicio debe tener su tecnologia definida',async ({expect}) =>{
  const model = await likec4.computedModel()
  expect.hasAssertions()

  for(const element of model.elements()){
    if(element.kind !== 'service') continue

    expect.soft(element.technology,`el elemento ${element.id} no tiene tecnologia`).toBeTruthy()

  }
})