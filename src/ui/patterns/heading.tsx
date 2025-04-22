export default function Heading({level, content, size, align}) {
  if (!size) {
    switch (level) {
      case 1: size = 'text-6xl'; break;
      case 2: size = 'text-5xl'; break;
      case 3: size = 'text-4xl'; break;
      case 4: size = 'text-3xl'; break;
      case 5: size = 'text-2xl'; break;
      case 6: size = 'text-xl'; break;
    }
  }
  align = (align) ? ' ' + align : '';
  return (
    <>
      {(() => {
        switch (level) {
          case 1:
            return <h1 className={size + align}>{content}</h1>;
          case 2:
            return <h2 className={size + align}>{content}</h2>;
          case 3:
            return <h3 className={size + align}>{content}</h3>;
          case 4:
            return <h4 className={size + align}>{content}</h4>;
          case 5:
            return <h5 className={size + align}>{content}</h5>;
          case 6:
            return <h6 className={size + align}>{content}</h6>;
        }
      })()}
    </>
  );
}
