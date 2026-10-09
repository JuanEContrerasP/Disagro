import { NextResponse, type NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.disagromr.com'
const LEGACY_HOSTS = new Set(['disagro-landing.vercel.app'])

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase()

  if (host && LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.hostname = CANONICAL_HOST
    url.port = ''

    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
