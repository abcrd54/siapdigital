function OptimizedImage({
  alt,
  className = "",
  decoding = "async",
  fetchPriority,
  height,
  loading = "lazy",
  sizes,
  src,
  srcSet,
  width,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      className={className}
      {...rest}
    />
  );
}

export default OptimizedImage;
