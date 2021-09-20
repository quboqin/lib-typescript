enum ERROR_CODE {
  NO_ERROR,
  UNKNOW_ERROR,
}

declare class Body {
  code: ERROR_CODE
  data?: unknown
  message?: string
}

export { Body, ERROR_CODE }
