import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  style?: React.CSSProperties
}

export default function Image({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  priority = false,
  fill = false,
  sizes,
  style 
}: ImageProps) {
  // For static export, we use unoptimized images
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      fill={fill}
      sizes={sizes}
      style={style}
      unoptimized
    />
  )
}