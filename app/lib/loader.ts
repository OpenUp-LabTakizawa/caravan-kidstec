"use client"

// Docs: https://aws.amazon.com/developer/application-security-performance/articles/image-optimization
export function cloudfrontLoader({
  src,
  width,
  quality,
}: { src: string; width: number; quality?: number }): string {
  const url = new URL(`https://dk75m1tgsot44.cloudfront.net${src}`)
  url.searchParams.set("format", "auto")
  url.searchParams.set("width", width.toString())
  url.searchParams.set("quality", (quality || 75).toString())
  return url.href
}
