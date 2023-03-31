import axios from 'axios';

const api = async (method, path, data) => {

  const res = await axios({
    method,
    url: path,
    data
  });

  return res
}

const sendMessage = async (body) => await api('post', '/message', body)


export {
  sendMessage
}







