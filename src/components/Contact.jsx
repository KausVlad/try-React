export default function Contact() {
  return (
    <>
      <h2 className="margin-left save-margin-right">Contact</h2>
      <ul className="contact-inf margin-left save-margin-right">
        <li>
          <h3>Address</h3>
          <p>Kyiv, Ukraine</p>
        </li>
        <li>
          <h3>Phone</h3>
          <p>+380987320688</p>
        </li>

        <li>
          <h3>E-mail</h3>
          <a href="mailto:kausvirtual@gmail.com">kausvirtual@gmail.com</a>
        </li>
        <li>
          <h3>Linkedin</h3>
          <a
            href="https://www.linkedin.com/in/kaus-virtual"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/kaus-virtual
          </a>
        </li>
      </ul>
      <h2 className="margin-left save-margin-right">Languages</h2>
      <ul className="languages margin-left save-margin-right">
        <li>Ukrainian - C2</li>
        <li>English - B1</li>
      </ul>
    </>
  );
}
