interface IConfig {
  params?: object
}

interface IRequest extends IConfig {
  url: string
  data?: Document | Blob | FormData | URLSearchParams | null
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
}

class BaseConfig {
  constructor() {}

  request(config: IRequest): Promise<any> {
    const { method, url, data } = config

    return new Promise((resolve, reject) => {
      const XML = new XMLHttpRequest()
      try {
        XML.open(method, url, true)
        XML.send(data)

        XML.onreadystatechange = () => {
          if (XML.readyState === 4 && XML.status === 200) {
            // XML.responseText
            resolve(XML.response)
          }
        }
      } catch (err) {
        reject(err)
      }
    })
  }
}

class Axios extends BaseConfig {
  constructor() {
    super()
  }

  get(url: IRequest['url'], config?: IConfig): Promise<any> {
    return super.request({
      url,
      method: 'GET',
      ...config,
    })
  }
  patch(url: IRequest['url'], config?: IConfig): Promise<any> {
    return super.request({
      url,
      method: 'POST',
      ...config,
    })
  }
  delete(url: IRequest['url'], config?: IConfig): Promise<any> {
    return super.request({
      url,
      method: 'DELETE',
      ...config,
    })
  }
  post(url: IRequest['url'], data: IRequest['data'], config?: IConfig): Promise<any> {
    return super.request({
      url,
      data,
      method: 'POST',
      ...config,
    })
  }
  put(url: IRequest['url'], data: IRequest['data'], config?: IConfig): Promise<any> {
    return super.request({
      url,
      data,
      method: 'PUT',
      ...config,
    })
  }
}

const axios = new Axios()

export default axios
