export default function IntroductionBox({ title, introductionText, subTitle }) {
  return (
    <div className="mt-8">
      <h2 className="text-1xl font-medium">{title}</h2>
      {subTitle && (
        <h3 className="text-2xl font-medium text-amber-300">{subTitle}</h3>
      )}
      {introductionText && (
        <section className="bg-gradient-to-r from-sky-700 p-4 rounded-b-lg">
          <ul className="flex flex-col gap-4">
            {introductionText.map((paragraph) => (
              <li key={paragraph}>{paragraph}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
