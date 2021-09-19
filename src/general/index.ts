enum ERROR_CODE {
  UNKNOW_ERROR = 'UNKNOW_ERROR',
}

declare interface BODY {
  code: ERROR_CODE
  data: unknown
  message: string
}

export { BODY, ERROR_CODE }
