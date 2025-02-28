export interface WEB_RESPONSE<T> {
    message: string;
    data?: T;
    error?: string;
  }
  