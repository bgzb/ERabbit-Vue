import httpInstance from "@/utils/http";

export function getDatail(id){
    return httpInstance({
        url: '/goods',
        params:{
            id
        }
    })
}