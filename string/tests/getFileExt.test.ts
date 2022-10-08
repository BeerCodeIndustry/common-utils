import { getFileExt } from '../getFileExt'

describe('getFileExt', () => {
  test('Should return js', () => {
    expect(getFileExt('javascript.js')).toEqual('js')
  })

  test('Should return jsx', () => {
    expect(getFileExt('react.jsx')).toEqual('jsx')
  })

  test('Should return txt', () => {
    expect(getFileExt('text')).toEqual('txt')
  })

  test('Should return ts', () => {
    expect(getFileExt('typescript.ts')).toEqual('ts')
  })

  test('Should return tsx', () => {
    expect(getFileExt('typescript-react.tsx')).toEqual('tsx')
  })

  test('Should return json', () => {
    expect(getFileExt('json.json')).toEqual('json')
  })
})
