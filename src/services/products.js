import { get, post, put, del } from "../utils/request";

/**
 * 获取列表
 * @param {*} page
 */
export function listApi(current,limit,url) {
  return get('/project/findParentProjects', { current, limit});
}
export function listApi1(current,limit,url) {
  return get('/business/findAll', { current, limit});
}
export function listApi2(current,limit,url) {
  return get('/news/findAllNews', { current, limit});
}

/**
 * 创建数据
 * @param {*} data
 */
export function createApi(data) {
  return post("/project/addParentProject", data);
}
export function createApi1(data) {
  return post("/business/createBusiness", data);
}
export function createApi2(data) {
  return post("/news/publishNews", data);
}





/**
 * 删除记录
 * @param {*} id
 * @param {*} data
 */
export function delOne(id, data) {
  return del(`/project/deleteByPid/${id}`);
}

export function delOne1(id, data) {
  return del(`/business/deleteBusinessById/${id}`);
}
export function delOne2(id, data) {
  return del(`news/deleteNewsById/${id}`);
}

