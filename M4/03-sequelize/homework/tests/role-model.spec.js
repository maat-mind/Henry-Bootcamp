const { db, Role } = require('../db')

describe('Role Model', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  describe('Parte UNO', () => {
    it('should not create the Role if name is not send', async () => {
      expect.assertions(1)
      try {
        await Role.create({
          description: 'Big amount of HP needed to withstands the attacks',
        })
      } catch (error) {
        expect(error.message).toBeDefined()
      }
    })

    it('should create the Role if all required properties are ok', async () => {
      const role = await Role.create({
        name: 'Tank',
        description: 'Big amount of HP needed to withstands the attacks',
      })
      expect(role.toJSON()).toHaveProperty('name', 'Tank')
      expect(role.toJSON()).toHaveProperty(
        'description',
        'Big amount of HP needed to withstands the attacks'
      )
    })
  })

  afterAll(async () => {
    await db.sync({ force: true })
    db.close()
  })
})
