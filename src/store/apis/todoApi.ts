import {apiSlice} from "@/store/apis/apiSlice";
import {Todo} from "@/types/todo";

const todoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => ({
                url: "/todos",
                method: "get",
            }),
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (todo: { title: string }) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: builder.mutation({
            query: (id: number) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
    })
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation,
} = todoApi;
export { todoApi };