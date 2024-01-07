#!/usr/bin/env node

const informationalStatuses = {
  "100": {
    "title": "Continue",
    "description": "Everything is ok so far",
  },
  "102": {
    "title": "Processing",
    "description": "Request is being processed, no response available yet",
  },
}

const successStatuses = {
  "200": {
    "title": "OK",
    "description": "Request successful",
  },
  "201": {
    "title": "Created",
    "description": "Request fulfilled, new resource has been created",
  },
}

const redirectStatuses = {
  "301": {
    "title": "Moved Permanently",
    "description": "Resource permanently moved to a new URL",
  },
  "302": {
    "title": "Moved Temporarily",
    "description": "Resource temporarily moved to a new URL",
  }
}

const clientErrorStatuses = {
  "400": {
    "title": "Bad Request",
    "description": "Server cannot understand and process the request",
  },
  "401": {
    "title": "Unauthorized",
    "description": "Authentication required, user not yet authenticated",
  },
  "403": {
    "title": "Forbidden",
    "description": "Insufficient access permissions to the resource",
  },
  "404": {
    "title": "Not Found",
    "description": "Requested resource not found",
  },
  "410": {
    "title": "Gone",
    "description": "Request no longer available due to intentional removal",
  },
}

const serverErrorStatuses = {
  "500": {
    "title": "Internal Server Error",
    "description": "Generic unhandled server error",
  },
  "502": {
    "title": "Bad Gateway",
    "description": "Gateway server got an invalid response",
  },
  "503": {
    "title": "Service Unavailable",
    "description": "Server temporarily unable to handle request",
  },
  "504": {
    "title": "Gateway Timeout",
    "description": "Gateway server didn't get a response in time",
  },
}

console.log("1xx - Informational")
console.table(informationalStatuses)
console.log("\n")

console.log("2xx - Success")
console.table(successStatuses)
console.log("\n")

console.log("3xx - Redirection")
console.table(redirectStatuses)
console.log("\n")

console.log("4xx - Client Error")
console.table(clientErrorStatuses)
console.log("\n")

console.log("5xx - Server Error")
console.table(serverErrorStatuses)
console.log("\n")

