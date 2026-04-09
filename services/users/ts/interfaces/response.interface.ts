export default interface AppResponse<T = any> {
  code?: string
  message?: string
  details?: {
    data?: T
    timestamp: string
  }
}
