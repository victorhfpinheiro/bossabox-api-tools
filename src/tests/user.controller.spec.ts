import { User } from '../models/user.model'

test('It should be ok', () => {
  const user = new User()
  user.name = 'Victor'

  expect(user.name).toEqual('Victor')
})
