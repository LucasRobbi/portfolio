function ProportionalImage({ src, alt, height, className }) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        paddingTop: `${height}`,
      }}
    >
      <img
        className={className}
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

{
  /*
<ProportionalImage
  src={imgPath}
  alt={titulo}
  height="100%"
/>
*/
}

export default ProportionalImage;
