const createUnit = require('../spec/Units/createUnit.spec')
const deleteUnit = require('../spec/Units/deleteUnit.spec')
const getUnitId = require('../spec/Units/getUnitId.spec')
const getUnitList = require('../spec/Units/getUnitList.spec')
const putUnit = require('../spec/Units/putUnit.spec')

async function unit_suite() {
    await createUnit()
    await deleteUnit()
    await getUnitId()
    await getUnitList()
    await putUnit()
}