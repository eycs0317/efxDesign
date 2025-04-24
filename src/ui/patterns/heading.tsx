export default function Heading({level, content, className}) {
  if (!className) {
    switch (level) {
      case 1: className = 'text-6xl'; break;
      case 2: className = 'text-5xl'; break;
      case 3: className = 'text-4xl'; break;
      case 4: className = 'text-3xl'; break;
      case 5: className = 'text-2xl'; break;
      case 6: className = 'text-xl'; break;
    }
  }
  return (
    <>
      {(() => {
        switch (level) {
          case 1:
            return <h1 className={className}>{content}</h1>;
          case 2:
            return <h2 className={className}>{content}</h2>;
          case 3:
            return <h3 className={className}>{content}</h3>;
          case 4:
            return <h4 className={className}>{content}</h4>;
          case 5:
            return <h5 className={className}>{content}</h5>;
          case 6:
            return <h6 className={className}>{content}</h6>;
        }
      })()}
    </>
  );
}
