import env from '../env';
import axios, { AxiosRequestConfig } from 'axios';
import { IResponse, ResponseStatus } from '../types/response';

const http = axios.create({
  baseURL: env.API_HOST,
  headers: {
    'Content-type': 'application/json'
  }
});
const getFormData = (data = {}) => {
  const formData = new FormData();
  for (const key in data) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    formData.append(key, data[key]);
  }
  return formData;
};
const errorResponse: IResponse<null> = {
  status: ResponseStatus.Error,
  data: null,
  message: 'Server error'
};
const successResponse: IResponse<null> = {
  status: ResponseStatus.Success,
  data: null
};
export async function deleteRequest<T>(url: string, config: AxiosRequestConfig = {}) {
  try {
    const response = await http.delete<IResponse<T>>(url, config);
    return response.data;
  } catch (e) {
    return errorResponse;
  }
}
export async function postRequest<T>(url: string, data = {}, config: AxiosRequestConfig = {}) {
  const formData = getFormData(data);
  try {
    const response = await http.post<IResponse<T>>(url, formData, config);
    return response.data;
  } catch (e) {
    return errorResponse;
  }
}
export async function getRequest<T>(url: string, data = {}, config: AxiosRequestConfig = {}) {
  const queryString = new URLSearchParams(data);
  try {
    const response = await http.get<IResponse<T>>(url + '?' + queryString, config);
    return response.data;
  } catch (e) {
    return errorResponse;
  }
}
export async function downloadRequest(url: string, fileName: string) {
  try {
    const response = await http.get(url, {
      responseType: 'blob'
    });
    const href = URL.createObjectURL(response.data);
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    return successResponse;
  } catch (e) {
    return errorResponse;
  }
}
