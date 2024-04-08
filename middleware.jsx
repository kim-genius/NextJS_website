import { NextResponse } from "next/server";
import {getToken} from'next-auth/jwt';

export async function  middleware(request){


if(request.nextUrl.pathname.startsWith('/post')){
    const session = await getToken({req:request,raw: true})
    console.log('session있냐',session)
    if(session == null){
        return NextResponse.redirect('http://localhost:3000')
    }
    else{
    return NextResponse.next()}
}
}