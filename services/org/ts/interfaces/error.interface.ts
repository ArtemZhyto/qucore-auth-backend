export default interface AppError {
  status: number
  code: string
  message: string
  details: {
    timestamp: string
    rayID: string
  }
}
