const baseURL = 'https://gop-api.herokuapp.com/api/v1';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzk3MzIwNDAsIm5hbWUiOiJIYWJpYiBJcmZhbiBNYWhhYXNpbiIsInVzZXJfaWQiOiJhNWY3YWUyYS1hYWY5LTExZWQtODM1MC02MDU5OWMwNzRkNmIifQ.LPsbJkFF4gDEP8CBIOt88ffx3xqO5c3qimZiJl3AO9s'

const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'access-token': accessToken
}

export const http = {
    headers: header,
    baseURL: baseURL,
    user : baseURL + '/user',
    login: baseURL + '/login',
}