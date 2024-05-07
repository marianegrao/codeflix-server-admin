import { Category } from "../category.entity"

describe("Category Unit Tests", () => {
  test("should create a category with constructor", () => {
    let category = new Category({
      name: "Movie",
    })
    expect(category.category_id).toBeUndefined()
    expect(category.name).toBe("Movie")
    expect(category.description).toBeNull()
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date()
    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    })

    expect(category.category_id).toBeUndefined()
    expect(category.name).toBe("Movie")
    expect(category.description).toBe("some description")
    expect(category.is_active).toBeFalsy()
    expect(category.created_at).toBe(created_at)
  })

  test("should create a category with create", () => {
    const category = Category.create({
      name: "Movie",
    })
    expect(category.name).toBe("Movie")
    expect(category.description).toBeNull()
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBeInstanceOf(Date)
  })

  test("should deactivate a category", () => {
    const category = new Category({
      name: "Movie",
    })
    category.deactivate()
    expect(category.is_active).toBeFalsy()
  })

  test("should activate a category", () => {
    const category = new Category({
      name: "Movie",
      is_active: false,
    })
    category.activate()
    expect(category.is_active).toBeTruthy()
  })

  test("should change name of a category", () => {
    const category = new Category({
      name: "Movie",
    })
    category.changeName("Movie 2")
    expect(category.name).toBe("Movie 2")
  })

  test("change description of a category", () => {
    const category = new Category({
      name: "Movie",
      description: "some description",
    })
    category.changeDescription("some description 2")
    expect(category.description).toBe("some description 2")
  })
})
