export default function IntroductionBox({ title, introductionText, subTitle }) {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-medium">{title}</h2>
        {subTitle && (
          <h3 className="text-3xl font-bold mb-2 text-rose-500">{subTitle}</h3>
        )}
      </div>
      {introductionText && (
        <div className="bg-violet-400 p-2">
          <ul className="flex flex-col gap-2">
            {introductionText.map((paragraph) => (
              <li key={paragraph}>{paragraph}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
