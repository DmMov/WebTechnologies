export const parseToFormData = data => {
  const keys = Object.keys(data);
  let formData = new FormData();

  keys.map(key => {
    formData.append(key, data[key]);
    return key;
  });

  return formData;
}