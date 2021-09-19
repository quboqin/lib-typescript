enum ERROR_CODE {
  NO_ERROR,
  UNKNOW_ERROR,
}

declare interface BODY {
  code: ERROR_CODE
  data?: unknown
  message?: string
}

export { BODY, ERROR_CODE }
