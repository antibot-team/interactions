import fetch from "cross-fetch";
import {
  METHOD,
  APPLICATION_TYPE,
  AUDIO_TYPE,
  IMAGE_TYPE,
  TEXT_TYPE,
} from "./typings";

export interface IRequest {
  publicKey?: boolean;
  method: METHOD;
  headers: {
    "Content-Type": APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE;
    "User-Agent": string;
    Authorization: string;
  };
  body?: Object | any;
}

export interface IRquestOptions {
  publicKey?: boolean;
  options: {
    method: METHOD;
    endpoint: string;
    contentType: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE;
  };
  data?: Object | void;
}

export interface IRequestMethodOptions {
  publicKey?: boolean;
  route: string;
  contentType: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE;
  data?: Object | null;
}

export class RequestManager {
  constructor(
    public publicKey: string,
    public token: string,
    public api: string,
    public debug?: boolean
  ) {
    this.publicKey = publicKey;
    this.token = token;
    this.api = api;
    this.debug = debug;
  }
  public async GET<T>(opts: IRequestMethodOptions): Promise<T | void> {
    (await this.request<T>({
      publicKey: opts.publicKey,
      options: {
        method: METHOD.GET,
        endpoint: opts.route,
        contentType: opts.contentType,
      },
      data: opts.data,
    })) as T;
  }

  public async POST<T>(opts: IRequestMethodOptions): Promise<T | void> {
    (await this.request<T>({
      publicKey: opts.publicKey,
      options: {
        method: METHOD.POST,
        endpoint: opts.route,
        contentType: opts.contentType,
      },
      data: opts.data,
    })) as T;
  }

  public async PUT<T>(opts: IRequestMethodOptions): Promise<T | void> {
    (await this.request<T>({
      publicKey: opts.publicKey,
      options: {
        method: METHOD.PUT,
        endpoint: opts.route,
        contentType: opts.contentType,
      },
      data: opts.data,
    })) as T;
  }

  public async PATCH<T>(opts: IRequestMethodOptions): Promise<T | void> {
    (await this.request<T>({
      publicKey: opts.publicKey,
      options: {
        method: METHOD.PATCH,
        endpoint: opts.route,
        contentType: opts.contentType,
      },
      data: opts.data,
    })) as T;
  }

  public async DELETE<T>(opts: IRequestMethodOptions): Promise<T | void> {
    (await this.request<T>({
      publicKey: opts.publicKey,
      options: {
        method: METHOD.DELETE,
        endpoint: opts.route,
        contentType: opts.contentType,
      },
      data: opts.data,
    })) as T;
  }

  private async request<T>(opts: IRquestOptions): Promise<T | void> {
    let request: IRequest = {
      method: opts.options.method,
      headers: {
        "Content-Type": opts.options.contentType,
        "User-Agent": "@antibot/interactions",
        Authorization: "",
      },
      body: JSON.stringify(opts.data),
    };

    if (opts.publicKey) {
      request.headers.Authorization = `Bearer ${this.publicKey}`;
      request.headers.Authorization = `Bot ${this.token}`;
    } else {
      request.headers.Authorization = `Bot ${this.token}`;
    }
    return new Promise(async (resolve, reject) => {
      return await fetch(this.api + opts.options.endpoint, request).then(
        (x) => {
          x.json()
            .then((res) => {
              if (this.debug) {
                console.log(res);
              }
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
