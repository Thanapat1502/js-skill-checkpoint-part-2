// เริ่มเขียนโค้ดตรงนี้
const getUser = () => {
  return fetch`https://jsonplaceholder.typicode.com/users`;
};

const handleResponse = (response) => {
  return response.json();
};
const onSuccess = (data) => {
  const result = data;
  return result;
};

async function convertData() {
  const getData = await getUser();
  const convertToJson = await handleResponse(getData);

  const newData = convertToJson;
  const nameOver17 = newData
    .map((eachUser) => {
      return eachUser.name;
    })
    .filter((eachUser) => {
      return eachUser.length > 17;
    });
    console.log(nameOver17);
  return nameOver17;
}

const longNameUser = convertData();
console.log(longNameUser);

