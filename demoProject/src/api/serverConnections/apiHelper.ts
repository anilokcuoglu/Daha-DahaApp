import axios, {AxiosInstance} from 'axios';

export interface ApiHelperOptions {
  baseURL: string;
  timeout?: number;
}

export default class ApiHelper {
  api: AxiosInstance;
  lang!: string | null;

  constructor(options: ApiHelperOptions) {
    const {baseURL, timeout = 10000} = options;
    this.api = axios.create({
      baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    });

    this.api.interceptors.request.use(prevConfig => {
      const {...config} = prevConfig;

      if (this.lang) {
        config.headers['Accept-Language'] = this.lang;
      }
      return config;
    });
  }

  GET = <T>(path: string, config?: {}) => {
    return this.api.get<T>(path, config);
  };
}
