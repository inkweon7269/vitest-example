import {http, HttpResponse} from "msw";

export const handlers = [
    http.delete('https://jsonplaceholder.typicode.com/todos/:id', async ({request, params}) => {
        const { id } = params;

        console.log("할 일 삭제 확인용 ========== ", id);

        if (id) {
            return new HttpResponse(null, {
                status: 200
            });
        } else {
            return new HttpResponse(null, {
                status: 400,
                statusText: "할인을 필수 값입니다."
            });
        }
    }),
];