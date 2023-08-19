const createCategory = require('../spec/Category/createCategory.spec')
const deleteCategory = require('../spec/Category/deleteCategory.spec')
const getCategoryId = require('../spec/Category/getCategoryId.spec')
const getCategoryList = require('../spec/Category/getCategoryList.spec')
const putCategory = require('../spec/Category/putCategory.spec')

async function category_suite() {
    await createCategory()
    await deleteCategory()
    await getCategoryId() 
    await getCategoryList()
    await putCategory()
}