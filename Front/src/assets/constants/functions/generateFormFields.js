const addToFields = (fields, obj, name) => {
  const objKeys = Object.keys(obj);
  objKeys.map((item, i) => {
    fields[i] = { ...fields[i], [name]: obj[item] }
    return item;
  });
  return fields;
}

export const generateFormFields = (data, errors, setValue, other) => {
  let fields = [];
  fields = addToFields(fields, data, 'value');
  fields = addToFields(fields, errors, 'error');
  const dataKeys = Object.keys(data);
  fields = fields.map((item, i) => {
    const { type, placeholder } = other[i];
    item = { ...item, name: dataKeys[i], setValue, type, placeholder };
    return item;
  });
  return fields;
}