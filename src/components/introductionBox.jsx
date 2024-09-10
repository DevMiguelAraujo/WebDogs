export default function IntroductionBox({ title, introductionText }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-medium">{title}</h2>
      <section className="bg-gradient-to-br from-sky-900 p-4 rounded-b-lg">
        <ul className="flex flex-col gap-4">
          {introductionText.map((paragraph) => (
            <li key={paragraph}>{paragraph}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
