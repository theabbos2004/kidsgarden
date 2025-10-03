import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/signIn', '/']

export default async function middleware(req: NextRequest) {
  // const path = req.nextUrl.pathname
  // const isProtectedRoute = protectedRoutes.includes(path)
  // const isPublicRoute = publicRoutes.includes(path)

  // const cookie = (await cookies()).get('session')?.value
  // const session = await decrypt(cookie)

  // if (isProtectedRoute && !session?.accessToken) {
  //   return NextResponse.redirect(new URL('/signIn', req.nextUrl))
  // }

  // if (
  //   isPublicRoute &&
  //   session?.accessToken) {
  //   return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  // } return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}