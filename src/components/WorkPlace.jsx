export default function WorkPlace({ items, currentDiv }) {
  return (
    <>
      {items.map((item) => {
        if (item.current === currentDiv) {
          return (
            <div key={item.id}>
              <p>
                <span>Position: </span>
                {item.title}
              </p>
              <p>
                <span>Description: </span>
                {item.description}
              </p>
              <p>
                <span>Company: </span>
                {item.name}
              </p>
              <p>
                <span>Date of employment: </span>
                {item.date}
              </p>
              <p>
                <span>Link: </span>
                <a href={item.link}>{item.link}</a>
              </p>
            </div>
          );
        }
      })}
    </>
  );
}
