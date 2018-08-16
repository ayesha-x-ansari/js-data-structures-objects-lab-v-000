const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;

}

function deleteFromDriverByKey (driver, name) {
  const newObj = { ...driver };
  return delete newObj.name
}

function destructivelyDeleteFromDriverByKey (obj, name)  {

  return delete obj.name

}
