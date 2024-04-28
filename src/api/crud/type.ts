export interface ICrudItem {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
}

export type ICrudList = ICrudItem[];

/** 获取列表参数 */
export interface ICrudApiParams {
  page: number;
  size: number;
  [prop: string]: any;
}

export interface ICrudApiResult {
  records: ICrudList;
  total: number;
  leave: number;
}
