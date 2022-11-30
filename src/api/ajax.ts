// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
// import update from 'immutability-helper'
import qs from 'qs'
import { httpStatus } from './httpStatus'
import { CURRENT_LABGUAGE } from '~/constant/common'

type ResponseHandler<T> = (res: AxiosResponse<T>) => T | PromiseLike<T>
type ErrorHandler<T> = (error: AxiosError) => T
const noToken = ['']
const defaultHeadersBuilder = () => ({
  'Content-Type': 'application/json;charset=utf-8',
  'Content-Language': localStorage.getItem(CURRENT_LABGUAGE),
  'Authorization': localStorage.getItem('Authorization'),
})

class AjaxService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      withCredentials: true,
      timeout: 3 * 60 * 1000,
      baseURL: 'https://api.teltlk.com',
      // baseURL: 'http://testapi.teltlk.com',
    })
    this.setupAxiosInterceptors()
  }

  get = <T extends IResponse>(
    subPath: string,
    data: object = {},
    options: AxiosRequestConfig = {},
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      params: data,
      headers: {
        ...defaultHeadersBuilder('zh-cn'),
        ...options.headers,
      },
      paramsSerializer: params =>
        qs.stringify(params, { arrayFormat: 'repeat', encode: false }),
    }
    if (options.transformResponse)
      config.transformResponse = options.transformResponse

    return this.axiosInstance
      .get(subPath, [config])
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  post = <T extends IResponse>(
    subPath: string,
    data: object = {},
    options: AxiosRequestConfig = {},
  ): Promise<T> => {
    const newOptions = {}
    // update(options, {
    //   headers: {
    //     $set: {
    //       ...defaultHeadersBuilder('zh-cn'),
    //       ...options.headers,
    //     },
    //   },
    // })
    return this.axiosInstance
      .post(subPath, data, newOptions)
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  upload = <T extends IResponse>(subPath: string, data?: object) => {
    return this.axiosInstance
      .post(subPath, data)
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  put = <T extends IResponse>(subPath: string, data?: object | number | string | boolean) => {
    return this.axiosInstance
      .request({
        method: 'put',
        url: subPath,
        data,
        headers: defaultHeadersBuilder('zh-cn'),
      })
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  patch = <T extends IResponse>(subPath: string, data?: object, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .patch(subPath, data, config)
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  delete = <T extends IResponse>(subPath: string, data: object = {}, hasParams = true) => {
    return this.axiosInstance
      .delete(subPath, [{
        data: JSON.stringify(data),
        params: hasParams ? data || {} : {},
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: 'repeat', encode: false }),
        headers: defaultHeadersBuilder('zh-cn'),
      }])
      .then(this.handleSuccess as ResponseHandler<T>, this.handleError as ErrorHandler<T>)
  }

  private handleError = (error: AxiosError) => {
    const status = error?.response?.status
    if (status) {
      const errorMessage = httpStatus[status]
      throw new Error(errorMessage)
    }

    throw error
  }

  private handleSuccess = <T extends IResponse>(response: AxiosResponse<T>) => {
    return response.data
  }

  private setupAxiosInterceptors = () => {
    /**
         * request拦截器
         */
    this.axiosInstance.interceptors.request.use(
      // @TODO后续增加token时启用
      (request) => {
        // const isStaticApi = request.url.startsWith('/static/');

        return request
      },
      (error: any) => {
        console.error(error)
        return error
      },
    )

    /**
         * respone拦截器
         */
    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          // console.log(response)
          if (response.data.Code === 1) {
            return response
          }
          else {
            // token过期
            if (response.data.Code === -1) {
              localStorage.setItem('Authorization', '')
              useUserStore().setUserInfo('')
            }
            // message.error(response?.data.Message)
          }
        }
        else {
          // 常规异常处理
        }

        return response
      },
      (error) => {
        const response = error.response
        // Network Error为 axios 在网络有问题的时候返回的字符串
        if (error && error.m === 'Network Error') {
          const errorMsg = '网络不给力, 请检查网络连接'
          return Promise.reject(new Error(errorMsg))
        }
        // 如果是被cancel掉的 是没有response的，手工生事项会cancel掉请求
        if (axios.isCancel(error)) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('Request canceled')
        }
        // 401 未经验证的用户
        if (response?.status === 401)
          location.href = ''

        // 403 没有权限
        if (response?.status === 403)
          // message.error(response?.data.m)

        throw error
      },
    )
  }
}

export default new AjaxService()
