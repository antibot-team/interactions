import fetch from "cross-fetch";
import {
  METHOD,
  APPLICATION_TYPE,
  AUDIO_TYPE,
  IMAGE_TYPE,
  TEXT_TYPE,
} from "./typings";

export interface IRequest {
  method: METHOD;
  headers: {
    "Content-Type": APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE;
    "User-Agent": string;
    Authorization: string;
  };
  body?: Object | any;
}

export interface IRquestOptions {
  options: {
    method: METHOD;
    endpoint: string;
    contentType: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE;
  };
  data?: Object | void;
}

export class RequestManager {
  constructor(
    public token: string, 
    public api: string
  ) {
    this.token = token;
    this.api = api;
  }
  public async GET<T>(
    route: string,
    headers: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
    data?: Object | null
  ): Promise<T | void> {
    await this.request<T>({
        options: {
            method: METHOD.GET,
            endpoint: route,
            contentType: headers
        },
        data: data
    }) as T;
  }

  public async POST<T>(
    route: string,
    headers: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
    data?: Object | null
  ): Promise<T | void> {
    await this.request<T>({
        options: {
            method: METHOD.POST,
            endpoint: route,
            contentType: headers
        },
        data: data
    }) as T;
  }

  public async PUT<T>(
    route: string,
    headers: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
    data?: Object | null,
  ): Promise<T | void> {
    await this.request<T>({
      options: {
        method: METHOD.PUT,
        endpoint: route,
        contentType: headers
      },
      data: data
    }) as T;
  }

  public async PATCH<T>(
    route: string,
    headers: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
    data?: Object | null
  ): Promise<T | void> {
    await this.request<T>({
      options: {
        method: METHOD.PATCH,
        endpoint: route,
        contentType: headers
      },
      data: data
    }) as T;
  }

  public async DELETE<T>(
    route: string,
    headers: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
    data?: Object | null
  ): Promise<T | void> {
    await this.request<T>({
      options: {
        method: METHOD.DELETE,
        endpoint: route,
        contentType: headers
      },
      data: data
    }) as T;
  } 

  private async request<T>(opts: IRquestOptions): Promise<T | void> {
    const request: IRequest = {
      method: opts.options.method,
      headers: {
        "Content-Type": opts.options.contentType,
        "User-Agent": "Discordbot waifuslashLib",
        Authorization:  `Bot ${this.token}`,
      },
      body: JSON.stringify(opts.data)
    };

    return new Promise(async (resolve, reject) => {
      console.log(request)
      return await fetch(this.api + opts.options.endpoint, request).then(
        (x) => {
          x.json()
            .then((res) => {
              console.log(res)
              return resolve(res) as T;
            })
            .catch(() => {
              resolve(null);
            });
        }
      );
    });
  }
}

