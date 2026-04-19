function OptimizedPicture({
  alt,
  avifSrcSet,
  className = "",
  decoding = "async",
  fetchPriority,
  height,
  loading = "lazy",
  sizes,
  src,
  srcSet,
  type = "image/webp",
  width,
}) {
  return (
    <picture>
      {avifSrcSet ? <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" /> : null}
      <source srcSet={srcSet} sizes={sizes} type={type} />
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  );
}

export default OptimizedPicture;
