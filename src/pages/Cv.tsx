export default function Cv() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", padding: "20px" }}>
      <h1>My CV</h1>
      <iframe
        src="../../public/Biswarup-cv.pdf"
        width="100%"
        height="800px"
        title="CV Viewer"
        style={{ border: "none" }}
      ></iframe>
      <p>
        If the PDF doesn't load, you can download it{" "}
        <a
          href="../../public/Biswarup-cv.pdf"
          download
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
